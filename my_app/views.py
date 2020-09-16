from django.http import HttpResponse
from django.shortcuts import render
from my_app.models import RegistroAcesso
# Create your views here.
from .forms import Form, ModelFormTopico


def index(request):
    return render(request, 'filmes.html')


def home(request):
    return render(request, 'home.html')

def filmes_v2(request):
    return render(request, 'filmes_v2.html')

def details(request):
    return render(request, 'details.html')

def help(request):
    return render(request, 'help.html')

def films14(request):
    return render(request, 'filmes14.xml')

def films58(request):
    return render(request, 'filmes58.json')

def table(request):
    listar_paginas = RegistroAcesso.objects.order_by('data')
    dict_lista = {"lista_acessos": listar_paginas}
    return render(request, 'aula_table.html', dict_lista)

def form(request):
    form = Form()

    if request.method == 'POST':
        form = Form(request.POST)
        if form.is_valid():
            print("Os campos estão corretos")
            print("Nome: "+ form.cleaned_data['nome'])
            print("Email: "+ form.cleaned_data['email'])
            print("Texto: "+ form.cleaned_data['texto'])
        else:
            print('erro')
    return render(request, 'forms.html', {'form': form})

def model_form_topico(request):
    topico = ModelFormTopico()
    if request.method == 'POST':
        topico = ModelFormTopico(request.POST)
        if topico.is_valid():
            print("Os campos estão corretos")
            print("Nome: "+ topico.cleaned_data['nome'])
            topico.save(commit=True)
        else:
            print('erro')
    return render(request, 'modelformtopico.html', {'topico': topico})