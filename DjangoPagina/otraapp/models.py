from django.db import models

# Create your models here.

from django.db import models

class Miembros(models.Model):
  primerNombre = models.CharField(max_length=255)
  apellido = models.CharField(max_length=255)