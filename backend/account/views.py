from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .forms import SignupForm, ProfileForm
from .serializers import UserSerializer, PastWorkSerializer, SkillsSerializer
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.models import User
from .models import Profile


# Create your views here.

@api_view(['GET'])
def me(request, id):
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