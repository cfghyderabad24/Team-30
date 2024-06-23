from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.users_list),
    path('ngo/', views.list),
]
