from os import name
from django.db import models

# Create your models here.
class FilterDemo(models.Model):
    name=models.CharField( max_length=50)
    subject = models.CharField (max_length=50)
    dept = models.CharField(max_length=50)
    date = models.DateField()