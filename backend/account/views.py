from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .forms import SignupForm, ProfileForm
from .serializers import UserSerializer, PastWorkSerializer, SkillsSerializer
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.models import User
from .models import Profile, FriendshipRequest


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
        'past_work': past_work,
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

    if user == request.user:
        requests = FriendshipRequest.objects.filter(created_for=request.user, status=FriendshipRequest.SENT)
        requests = FriendshipRequestSerializer(requests, many=True)
        requests = requests.data

    friends = profile.friends.all()

    return JsonResponse({
        'user': UserSerializer(user).data,
        'friends': UserSerializer(friends, many=True).data,
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
        requests_data = [{'id': fr.id, 'created_by': fr.created_by.id, 'created_at': fr.created_at} for fr in friendship_requests]
        return JsonResponse({'friendship_requests': requests_data})


@api_view(['POST'])
def handle_request(request, pk, status):
    profile = Profile.objects.get(pk=pk)
    print('request.user.id', request.user.id)
    request_profile = Profile.objects.get(pk=request.user.id)
    friendship_request = FriendshipRequest.objects.filter(created_for=request_profile).get(created_by=profile)
    friendship_request.status = status
    friendship_request.save()

    profile.friends.add(request_profile)
    profile.save()

    request_user = request_profile
    request_user.save()

    return JsonResponse({'message': 'friendship request updated'})