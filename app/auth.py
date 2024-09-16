from django.http.response import JsonResponse
from django.contrib.auth.models import User,auth
# from django.contrib.auth.hashers import make_password
from django.shortcuts import render
from .models import *
from django.contrib.auth import authenticate, login




def signin(request):
    if request.method == 'POST':
        username=request.POST.get('userid')
        password=request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request,user)
            return JsonResponse({'res':'sucess'})
        else:
            return JsonResponse({'res':'Invalide user name or password'})
    else:
        return render(request, 'home')
    

def logout(request):
    auth.logout(request)
    return render(request, 'form.html')


