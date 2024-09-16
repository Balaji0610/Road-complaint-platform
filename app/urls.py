from django.urls import path
from .routes import *
from .views import *
from .auth import signin,logout

urlpatterns = [
    # routes
    path('', form, name='/'),
    path('login', login , name='login'),
    path('header',header),
    path('faq',faq),
    path('summary',summary, name='summary'),
    path('home', home , name='home'),
    path('navbar', navbar , name='navbar'),
    path('page2', page2 , name='page2'),
    path('profile', profile , name='profile'),
    path('report/<int:id>/', check_report , name='report'),
    path('',logout , name='/'),
    path('message',message,name='message'),




#   Api
    path('signin',signin, name='signin'),
    # path('',user_complaint, name='user_complaint'),
    path('submit_data',submit_data, name='submit_data'),
    path('send_pothole_form',received_pothole_form, name='send_pothole_form'),
    path('total_complaint',total_complaint),
    path('complaint_list',complaint_list),
    path('status_check',status_check),


   
    

]


   