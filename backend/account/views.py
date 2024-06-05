from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .forms import SignupForm, ProfileForm
from .serializers import UserSerializer
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.models import User
from .models import Profile


# Create your views here.

@api_view(['GET'])
def me(request):
    """
        devuelve informacion del usuario activo
    """
    profile = Profile.objects.get(user=request.user.id)
    return JsonResponse({
        'username': request.user.username,
        'email': request.user.email,
        'bio': profile.bio,
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