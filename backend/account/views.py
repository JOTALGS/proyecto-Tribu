from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .forms import SignupForm, ProfileForm
from .serializers import UserSerializer, PastWorkSerializer, SkillsSerializer, ProfileSerializer
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.models import User
from .models import Profile, FriendshipRequest
from rest_framework.decorators import parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from django.core.files.uploadedfile import InMemoryUploadedFile
from .models import Profile

# Create your views here.

@api_view(['GET'])
def me(request):
    """
        devuelve informacion del usuario activo
    """
    print(request.user.id)
    profile = Profile.objects.get(user=request.user.id)
    print(request.user)

    past_work = PastWorkSerializer(profile.past_works.all(), many=True).data
    skills = SkillsSerializer(profile.skills.all(), many=True).data
    user = UserSerializer(profile.user).data

    return JsonResponse({
        'user_id': request.user.id,
        'username': user['username'],
        'bio': profile.bio,
        'choice': profile.category,
        'birth': profile.birth_date,
        'skills': skills,
    })


@api_view(['GET'])
def users(request, id):
    """
        devuelve informacion del usuario activo
    """
    print(request.user.id)
    profile = Profile.objects.get(user=id)
    print(request.user)

    past_work = PastWorkSerializer(profile.past_works.all(), many=True).data
    skills = SkillsSerializer(profile.skills.all(), many=True).data
    user = UserSerializer(profile.user).data

    return JsonResponse({
        'user_id': id,
        'username': user['username'],
        'bio': profile.bio,
        'choice': profile.category,
        'birth': profile.birth_date,
        'past_work': past_work,
        'skills': skills,
    })


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def signup(request):
    """
        Recibe credenciales para crear usuario
        Crea usuario y devuelve estado.
    """
    data = request.data
    message = 'success'

    form = SignupForm({
        'email': data.get('email'),
        'username': data.get('username'),
        'password1': data.get('password1'),
        'password2': data.get('password2'),
    })

    if form.is_valid():
        user = form.save()
        user.is_active = True
        user.save()
    else:
        message = form.errors.as_json()
    
    print(message)

    return JsonResponse({'message': message}, safe=False)


@api_view(['POST'])
def editpassword(request):
    user = request.user
    
    form = PasswordChangeForm(data=request.POST, user=user)

    if form.is_valid():
        form.save()

        return JsonResponse({'message': 'success'})
    else:
        return JsonResponse({'message': form.errors.as_json()}, safe=False)


@api_view(['GET'])
def suggest_users(request):
    users = User.objects.all()
    user_data = []

    for user in users:
        profile = Profile.objects.get(user=user)
        user_data.append({
            'user_id': user.id,
            'username': user.username,
            'role': profile.category,
            'email': user.email  # Incluye el correo electrónico
        })

    return JsonResponse({
        'usersData': user_data
    })


@api_view(['GET'])
def friends(request, pk):
    profile = Profile.objects.get(pk=pk)
    requests = []

    friends = profile.friends.all()

    return JsonResponse({
        'user': request.user.username,
        'friends': ProfileSerializer(friends, many=True).data,
        'requests': requests
    }, safe=False)


@api_view(['POST', 'GET'])
def send_friendship_request(request, pk):
    if request.method == 'POST':
        user = User.objects.get(pk=pk)

        check1 = FriendshipRequest.objects.filter(created_for=request.user, created_by=user).exists()
        check2 = FriendshipRequest.objects.filter(created_for=user, created_by=request.user).exists()

        if not check1 and not check2:
            friendrequest = FriendshipRequest.objects.create(created_for=user, created_by=request.user)
            return JsonResponse({'message': 'friendship request created'})
        else:
            return JsonResponse({'message': 'request already sent'})

    elif request.method == 'GET':
        friendship_requests = FriendshipRequest.objects.filter(created_for=request.user)
        requests_data = [{'id': fr.id, 'sender_id': fr.created_by.id, 'sender_name': fr.created_by.username, 'created_at': fr.created_at} for fr in friendship_requests]
        return JsonResponse(requests_data, safe=False)


@api_view(['POST'])
def handle_request(request, pk, status):
    user = User.objects.get(pk=pk)
    profile = Profile.objects.get(user=user)
    request_user = User.objects.get(pk=request.user.id)
    request_profile = Profile.objects.get(user=request_user)

    friendship_request = FriendshipRequest.objects.filter(created_for=request_profile.user).get(created_by=profile.user)

    print(friendship_request)
    friendship_request.status = status
    friendship_request.save()

    profile.friends.add(request_profile)
    profile.save()

    request_user = request_profile
    request_user.save()

    return JsonResponse({'message': 'friendship request updated'})

    ##vista settings 

@api_view(['POST'])
def edit_profile(request):
    """
    edit profile
    """
    try:
        print('user', request.user)
        user = request.user
        profile = Profile.objects.get(user=user)

        data = request.data
        print(data)
        profile.bio = data.get('bio', profile.bio)
        profile.city = data.get('city', profile.city)
        profile.category = data.get('role', profile.category)
        
        if 'profilePic' in data and isinstance(data['profilePic'], InMemoryUploadedFile):
            profile.profile_picture = data['profilePic']

        print(data.get('links'))
        profile.links = data.get('links')

        user.username = data.get('username', user.username)

        profile.save()
        user.save()
    except Exception as e:
        return JsonResponse({'message': 'error updated prodile'})


    return JsonResponse({'message': 'Profile updated successfully'})


