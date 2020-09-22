from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def screen(request):
    return render(request, 'screen.html')

def screen2(request):
    return render(request, 'screen2.html')

def screen3(request):
    return render(request, 'screen3.html')