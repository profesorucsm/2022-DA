from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

class Album(models.Model):
    nombre = models.CharField(max_lenght=50)
    def __str__(self):
        return self.nombre

class Musico(models.Model):
    nombre = models.CharField(max_length=50)
    album = models.ForeignKey(Album,on_delete=models.CASCADE)

