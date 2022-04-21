from django.urls import path 
from . import views

urlpatterns = [ 
    path('pass', views.passdata ),
    path('js', views.getdata ),
    path('<int:pk>', views.member ),
]