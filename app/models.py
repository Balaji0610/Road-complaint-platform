from django.db import models
from django import forms

# Create your models here.
class Form(models.Model):
    id = models.AutoField(primary_key=True)
    type_of_road = models.CharField(max_length=150, default="NA")
    subject= models.CharField(max_length=150, default="NA")
    details = models.CharField(max_length=150, default="NA")
    location = models.CharField(max_length=150, default="NA")
    state = models.CharField(max_length=150, default="NA")
    city= models.CharField(max_length=150, default="NA")
    postel_code= models.IntegerField(default=0)
    images= models.ImageField(upload_to="user", null=True, blank=True)
    email= models.EmailField(max_length=254, default="NA")
    date_time = models.DateTimeField(auto_now=True)
    staus = models.CharField(max_length=150, default="Pending")
    ml_result = models.CharField(max_length=150, default="NA")
    

   
