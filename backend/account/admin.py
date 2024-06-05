from django.contrib import admin
from .models import Profile, PastWork, Skills

# Register your models here.
admin.site.register(Profile)
admin.site.register(PastWork)
admin.site.register(Skills)