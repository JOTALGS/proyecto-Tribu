from django.db import models
import uuid
from datetime import datetime
from django.contrib.auth.models import User

class Like(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_by = models.ForeignKey(User, related_name='likes', on_delete=models.CASCADE)

    def __str__(self):
        return self.username

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    created_by = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='static/post_images')
    body = models.TextField()
    link = models.TextField(blank=True)
    likes = models.ManyToManyField(Like, blank=True)
    likes_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return f'{self.created_by}'

