from django.urls import include, path
from . import views

app_name = 'saopaulo'

urlpatterns = [
    path('', views.index, name='index'),
]