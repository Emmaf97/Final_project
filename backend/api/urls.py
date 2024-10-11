from django.urls import path
from . import views

urlpatterns = [
    path("posts/", views.PostListCreate.as_view(), name="post-list"),
    path("posts/delete/<int:pk>/", views.PostDelete.as_view(), name="delete-post"),
    path("contact/", views.CreateContactView.as_view(),name="create-contact")
]