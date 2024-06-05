from rest_framework import serializers
from django.contrib.auth.models import User
from .models import PastWork, Skills



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class PastWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = PastWork
        fields = '__all__'


class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'