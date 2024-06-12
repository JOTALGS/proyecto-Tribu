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
    friends = models.ManyToManyField('self')

    def __str__(self):
        return self.user.username


class PastWork(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='past_works')
    image = models.ImageField(upload_to='static/past_work_images/')
    title = models.CharField(max_length=255)
    info = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.title


class Skills(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='skills')
    image = models.ImageField(upload_to='static/skills_images/')
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    date = models.DateField(null=True, blank=True)  # Optional date field

    def __str__(self):
        return self.title


class FriendshipRequest(models.Model):
    SENT = 'sent'
    ACCEPTED = 'accepted'
    REJECTED = 'rejected'

    STATUS_CHOICES = (
        (SENT, 'Sent'),
        (ACCEPTED, 'Accepted'),
        (REJECTED, 'Rejected'),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_for = models.ForeignKey(User, related_name='received_friendshiprequests', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, related_name='created_friendshiprequests', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=SENT)