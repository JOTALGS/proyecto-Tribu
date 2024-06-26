from django.shortcuts import render
from .models import Post, Like
from account.models import Profile
from .forms import PostForm
from .serializers import PostSerializer
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.http import JsonResponse
from django.contrib.auth.models import User


@api_view(['POST'])
def create_post(request):
    print(request.user)
    data = request.data
    message = 'success'

    print('data', request.data)
    form = PostForm({
        'created_by': request.user,
        'body': request.data['content'],
        'link': request.data['link']
    })

    if form.is_valid():
        post = form.save()
        post.save()
    else:
        message = form.errors.as_json()

    print(message)

    return JsonResponse({'message': message}, safe=False)



@api_view(['GET'])
def get_posts(request):
    user = User.objects.get(pk=request.user.pk)
    profile = Profile.objects.get(user=user)

    # Get the list of friends
    friends = profile.friends.all()

    # Get the user objects associated with each friend's profile
    friends_users = [friends.user for friends in friends]

    # Get posts by the user and their friends
    posts = Post.objects.filter(created_by__in=[user] + friends_users).order_by('-created_at')

    serialized_posts = PostSerializer(posts, many=True).data
    return JsonResponse({'posts': serialized_posts}, safe=False)
