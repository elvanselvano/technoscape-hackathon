from django.db import models

# Create your models here.
class User(models.Model):
    GENDERS = (
        ('M', 'Male'),
        ('F', 'Female')
    )
    Id = models.UUIDField(primary_key=True)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100, blank=False)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    dateOfBirth = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDERS)