from django.shortcuts import render , redirect
from .models import Members
from .forms import Membersform
from django.contrib import messages
# Create your views here.

def join(request):
    return render(request,'join.html')