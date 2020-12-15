from django.db import models
from django.contrib.auth.models import User
# from user.models import UserProfile


class Patient(models.Model):

    firstname = models.CharField(max_length=30)
    lastname = models.CharField(max_length=30)
    sex = models.CharField(max_length=1)
    photo = models.ImageField(null=True, upload_to='photosPatients/')
    age = models.IntegerField()
    telephone = models.IntegerField()
    weight = models.IntegerField()
    city = models.CharField(max_length=20)
    admissionDate = models.DateTimeField()
    admissionID = models.IntegerField()
    status = models.CharField(max_length=20)
    suivie = models.ForeignKey('Suivie', on_delete=models.CASCADE)
    exitStatus = models.ForeignKey('ExitStatus', on_delete=models.CASCADE)
    user = models.ForeignKey('auth.User', on_delete=models.DO_NOTHING)


class Suivie(models.Model):

    LEVEL = [
        ('0', 'very-low'),
        ('1', 'low'),
        ('2', 'medium'),
        ('3', 'high'),
        ('4', 'very-high'),
    ]

    date = models.DateField()
    time = models.TimeField()
    dehydration = models.CharField(max_length=10, choices=LEVEL)
    selles = models.CharField(max_length=10, choices=LEVEL)
    vomissements = models.CharField(max_length=10, choices=LEVEL)
    description = models.TextField()


class ExitStatus(models.Model):
    libelle = models.CharField(max_length=10, choices=(
        ('Die', 'Mort'), ('Alive', 'Vivant)')))
    date = models.DateTimeField()
    description = models.TextField()
