from django.urls import path
from . import views

urlpatterns = [
    path('farmers/', views.users_list),
    path('farmers/<int:id>/', views.users_detail),
    path('videoupload/', views.videoupload),
]
