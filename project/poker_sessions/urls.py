from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('ended/', views.ended, name='ended'),
    path('active/', views.active, name='active'),
    path('start/', views.start, name='start'),
    path('end/', views.end, name='end'),
]
