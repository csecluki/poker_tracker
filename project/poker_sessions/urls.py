from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('start', views.start, name='start'),
    path('end', views.end, name='end'),
]
