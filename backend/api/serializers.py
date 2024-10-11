from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Post, Contact

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","username","email","password"]
        # accepts password from a new user but doesn't return password of that user.
        extra_kwargs = {"password": {"write_only": True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id","title","content","created_at","author"]
        extra_kwargs = {"author": {"read_only": True}}
        
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["fname","lname","email","content"]
        