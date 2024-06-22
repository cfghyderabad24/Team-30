from django.urls import path
from . import views
urlpatterns = [
    path('ngo/', views.users_list),
]