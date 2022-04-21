from django import forms
from .models import Members

class Membersform(forms.ModelForm):
    class Meta:
        model = Members
        fields = '__all__'