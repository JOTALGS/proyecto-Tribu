from django.db import models
from django.contrib.auth.models import User
import uuid


# Create your models here.
class Profile(models.Model):
    USER_CATEGORIES = [
        ('musician', 'Musician'),
        ('productor', 'Productor'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    category = models.CharField(max_length=10, choices=USER_CATEGORIES, default='musician')

    def __str__(self):
        return self.user.username


class PastWork(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='past_works')
    image = models.ImageField(upload_to='past_work_images/')
    title = models.CharField(max_length=255)
    info = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.title


class Skills(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='skills')
    image = models.ImageField(upload_to='skills_images/')
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    date = models.DateField(null=True, blank=True)  # Optional date field

    def __str__(self):
        return self.title