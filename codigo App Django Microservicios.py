## codigo App Django Microservicios

##### "temas/models.py"

class Album(models.Model):
	album_name = models.CharField(max_length=100)
	artist = models.CharField(max_length=100)

class Track(models.Model):
	album = models.ForeignKey(Album, related_name='tracks', on_delete=models.CASCADE)
	order = models.IntegerField()
	title = models.CharField(max_length=100)
	duration = models.IntegerField()

	class Meta:
		unique_together = ['album', 'order']
		ordering = ['order']

	def __str__(self):
		return '%d: %s' % (self.order, self.title)	
	


##### "temas/admin.py"

from django.contrib import admin
from .models import *

admin.site.register(Album)
admin.site.register(Track)



##### "temas/serializer.py"

from rest_framework import serializers
from .models import *

class AlbumSerializer(serializers.ModelSerializer):
	tracks = serializers.StringRelatedField(many=True)

	class Meta:
		model = Album
		fields = ['album_name','artist','tracks']



##### "temas/views.py"

from django.shortcuts import render
from django.core import serializers
from .models import *
from .serializer import AlbumSerializer
from rest_framework import viewsets

class AlbumesView(viewsets.ModelViewSet):
	queryset = Album.objects.all()
	serializer_class = AlbumSerializers



##### "temas/urls.py"

from django.urls import path, include
from .import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('spotify', views.AlbumesView)

urlpatterns = [
	path('',include(router.urls))
]



##### "spotify/urls.py"

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('apitracks', include('temas.urls'))
]









