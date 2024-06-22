from django.urls import path
from . import views

urlpatterns = [
    path('login/<str:username>&<str:password>/', views.users_list),
    path('ngo/', views.list),
]
