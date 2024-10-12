from django.urls import path
from . import views

urlpatterns = [
    path("posts/", views.PostListCreate.as_view(), name="post-list"),
    path("posts/delete/<int:pk>/", views.PostDelete.as_view(), name="delete-post"),
    path("contact/", views.CreateContactView.as_view(),name="create-contact"),
    path("profile/", views.ProfileView.as_view(),name="profile"),
    path('profile/update/', views.ProfileUpdateView.as_view(), name='profile-update')

]