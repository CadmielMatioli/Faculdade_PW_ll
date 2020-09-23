from django.urls import include, path
from .  import views

app_name = 'aula1'

urlpatterns = [
    path('calculadora/', views.index, name='index'),
    path('screen/', views.screen, name='screen'),
    path('', views.screen, name='screen'),
    path('screen2/', views.screen2, name='screen2'),
    path('screen3/', views.screen3, name='screen3'),

]