from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def login(request):
    return render(request, "login.html") 

def header(request):
    return render(request, 'header.html')

def form(request):
    return render(request, 'form.html')

def faq(request):
    return render(request, 'faq.html')

def summary(request):
    return render(request, 'summary.html')

@login_required(login_url='/login')
def home(request):
    return render(request, 'admin/home.html')

def navbar(request):
    return render(request, 'admin/navbar.html')

def page2(request):
    return render(request, 'admin/page2.html')

def profile(request):
    return render(request, 'admin/profile.html')

def message(request):
    return render(request, 'message.html')
