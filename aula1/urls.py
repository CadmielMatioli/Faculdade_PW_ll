from django.urls import include, path
from .  import views

urlpatterns = [
    path('calculadora/', views.index, name='index'),
]