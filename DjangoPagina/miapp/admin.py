from django.contrib import admin

from miapp.models import Musico

# Register your models here.
from .models import *

admin.site.register(Album)
admin.site.register(Musico)