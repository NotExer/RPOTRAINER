from django.shortcuts import render
from django.http import HttpResponse

def Home(request):
    return render(request, "main/index.html")