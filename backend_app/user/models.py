from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(
        'auth.User', related_name='profil', on_delete=models.CASCADE)
    medicalStructure = models.ForeignKey(
        'MedicalStructure', default=None, on_delete=models.CASCADE)
    photo = models.ImageField(null=True, upload_to='photos/')
    contact = models.IntegerField()
    address = models.TextField()


class MedicalStructure(models.Model):
    structureName = models.CharField(max_length=30)
    address = models.CharField(max_length=50)
    description = models.TextField()
