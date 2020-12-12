from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(
        'auth.User', related_name='profil', on_delete=models.CASCADE)

    photo = models.ImageField(null=True, upload_to='photos/')
    contact = models.IntegerField()
    address = models.TextField()
