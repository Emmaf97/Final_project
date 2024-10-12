from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Post, Contact, Profile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        # Password should only be written when creating/updating
        extra_kwargs = {"password": {"write_only": True}}
        
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
    user = UserSerializer()  # Use UserSerializer for nested user data

    class Meta:
        model = Profile
        fields = ['user', 'profile_image']  # Include profile-specific fields

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', None)
    # Update profile image if it exists
        instance.profile_image = validated_data.get('profile_image', instance.profile_image)
        instance.save()

        if user_data:
            # Update user fields using the UserSerializer's update method
            user_serializer = UserSerializer(instance.user, data=user_data)
            if user_serializer.is_valid(raise_exception=True):
                user_serializer.save()

        return instance
        