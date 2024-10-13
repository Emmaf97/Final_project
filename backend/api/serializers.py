from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Post, Contact, Profile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        # Password should only be written when creating/updating
        extra_kwargs = {"password": {"write_only": True , "required": False}}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        if password:
            instance.set_password(password)
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance
    
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id","title","content","created_at","author"]
        extra_kwargs = {"author": {"read_only": True}}
        
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["fname","lname","email","content"]
        


class ProfileSerializer(serializers.ModelSerializer):
    # Directly expose user fields in the ProfileSerializer
    username = serializers.CharField(source='user.username', required=False)
    email = serializers.EmailField(source='user.email', required=False)
    profile_image = serializers.ImageField(required=False)

    class Meta:
        model = Profile
        fields = ['username', 'email', 'profile_image']

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', {})
    
        # Update user fields
        user = instance.user
        if 'username' in user_data:
            user.username = user_data['username']
        if 'email' in user_data:
            user.email = user_data['email']
        user.save()

        # Update profile fields
        instance.profile_image = validated_data.get('profile_image', instance.profile_image)
        instance.save()
    
        return instance
        