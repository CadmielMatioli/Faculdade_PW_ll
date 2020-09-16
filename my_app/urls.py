from django.contrib import admin
from django.urls import include, path
from . import views

app_name = 'my_app'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('index/', views.index, name='index'),
    path('filmes_v2/', views.filmes_v2, name='films_v2'),
    path('films14/', views.films14, name='films14'),
    path('films58/', views.films58, name='films58'),
    path('home/', views.home, name='home'),
    path('details/', views.details, name='details'),
    path('help/', views.help, name='help'),
    path('aula-table/', views.table, name='table'),
    path('form/', views.form, name='form'),
    path('topico/create/', views.model_form_topico, name='topico-create'),
]