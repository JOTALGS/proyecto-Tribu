from django.contrib import admin
from .models import Profile, PastWork, Skills, FriendshipRequest

# Register your models here.
admin.site.register(Profile)
admin.site.register(PastWork)
admin.site.register(Skills)
admin.site.register(FriendshipRequest)