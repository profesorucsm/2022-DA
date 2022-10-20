#from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from .models import Miembros


def home(request):
#    return HttpResponse("<h1>Estamos en OtraAPP</h1>")

# usando templates
    template = loader.get_template('index.html')
    mismiembros = Miembros.objects.all().values()
    context = {
        'mismiembros':mismiembros,
    }
    return HttpResponse(template.render(context,request))



def add(request):
  template = loader.get_template('add.html')
  return HttpResponse(template.render({}, request))

def addrecord(request):
  x = request.POST['first']
  y = request.POST['last']
  member = Miembros(primerNombre=x, apellido=y)
  member.save()
  return HttpResponseRedirect(reverse('home'))

def delete(request, id):
  member = Miembros.objects.get(id=id)
  member.delete()
  return HttpResponseRedirect(reverse('home'))

def update(request, id):
  mymember = Miembros.objects.get(id=id)
  template = loader.get_template('update.html')
  context = {
    'mymember': mymember,
  }
  return HttpResponse(template.render(context, request))

def updaterecord(request, id):
  first = request.POST['first']
  last = request.POST['last']
  member = Miembros.objects.get(id=id)
  member.primerNombre = first
  member.apellido = last
  member.save()
  return HttpResponseRedirect(reverse('home'))