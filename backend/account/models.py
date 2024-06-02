from django.db import models
from django.contrib.auth.models import User


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
