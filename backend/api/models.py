from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    
    
    def __str__(self):
        return self.title
    
class Contact(models.Model):
    fname = models.CharField(max_length=20)
    lname = models.CharField(max_length=20)
    email = models.EmailField()
    content = models.TextField()

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    profile_image = models.ImageField(default='default.png', upload_to='profile_images/',blank=True, null=True)
    def __str__(self):
        return self.user.username
    