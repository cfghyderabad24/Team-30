from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    path('farmers/', views.users_list),
    path('videoupload/',views.videoupload)
]
