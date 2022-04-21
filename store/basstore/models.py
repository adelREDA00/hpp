from django.db import models

# Create your models here.

class Members(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    Dbirthday = models.CharField(max_length=50,default='null')
    number = models.CharField(max_length=50,default='null')
    Pbirthday = models.CharField(max_length=50,default='null')
    adresse = models.CharField(max_length=50,default='null')
    poids = models.CharField(max_length=50,default='null')
    Ssante = models.CharField(max_length=200,default='null')
    job = models.CharField(max_length=50)
    cancerType = models.CharField(max_length=50,default='null')
    DateDiag = models.CharField(max_length=50,default='null')
    medcinNote = models.CharField(max_length=9000,default='null')
    MdeFam = models.CharField(max_length=50,default='null')
    NumMdeFam = models.CharField(max_length=50,default='null')
    Sfin = models.CharField(max_length=50,default='null')
    etatCivil = models.CharField(max_length=50,default='null')
    def __str__(self):
        return self.fname + " " + self.lname