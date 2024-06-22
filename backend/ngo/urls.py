from django.urls import path
from . import views
urlpatterns = [
    path('ngo/<str:username>&<str:password>', views.users_list),
    path('ngo/',views.list),
]