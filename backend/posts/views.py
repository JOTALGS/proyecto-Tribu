from django.shortcuts import render
from .models import Post, Like
from .forms import PostForm
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.http import JsonResponse


@api_view(['POST'])
def create_post(request):
    print(request.user)
    data = request.data
    message = 'success'

    form = PostForm({
        'created_by': request.user,
        'body': data.get('body'),
    })

    if form.is_valid():
        post = form.save()
        post.save()
    else:
        message = form.errors.as_json()

    print(message)

    return JsonResponse({'message': message}, safe=False)


