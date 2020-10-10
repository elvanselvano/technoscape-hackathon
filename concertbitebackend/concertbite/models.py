from django.db import models

# Create your models here.
class User(models.Model):
    GENDERS = (
        ('M', 'Male'),
        ('F', 'Female')
    )
    email = models.CharField(primary_key=True, max_length=100)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    dateOfBirth = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDERS)
    