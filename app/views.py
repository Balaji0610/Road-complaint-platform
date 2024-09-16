from django.http.response import JsonResponse
from django.core.files.storage import FileSystemStorage
import uuid,json
from app.models import *
from django.shortcuts import render, redirect
from dataclasses import dataclass
from typing import Optional
from django.core.serializers import serialize
from datetime import datetime
from django.db import connection

@dataclass
class StoreFormData:
    id: Optional[str]
    road: Optional[str]
    subject: Optional[str]
    details: Optional[str]
    location: Optional[str]
    state: Optional[str]
    city: Optional[str]
    pCode: Optional[str]
    email: Optional[str]
    image: Optional[str]
    ml_res: Optional[str]
    staus: Optional[str]
    datetime: Optional[str]

def custom_sql(query):
    cursor = connection.cursor()
    cursor.execute(query)
    row = cursor.fetchall()
    connection.commit()
    connection.close()
    return row


def ml_model(image_path):


    return "True"

def received_pothole_form(request):
    if request.method == 'POST':
        
        storage = FileSystemStorage()
        image_req =request.FILES.get('image')
        img_name = str(uuid.uuid4()).split("-")[-1]+ '.png'
        img_path = 'static/img/user_image/'+img_name      
        storage.save("app/"+img_path, image_req)
        ml_result = ml_model("app/"+img_path)

        store = StoreFormData(
            id= "1",
            road=request.POST.get('road'),
            subject=request.POST.get('subject'),
            details=request.POST.get('details'),
            location=request.POST.get('location'),
            state=request.POST.get('state'),
            city=request.POST.get('city'),
            pCode=request.POST.get('pCode'),
            email=request.POST.get('email'),
            image=img_path,
            ml_res=ml_result,
            staus= "Pending",
            datetime = datetime.now()
        )
        print(store,"+++++++++++++++++++")
        return render(request, 'summary.html', {'store': store})

    
def submit_data(request):
    if request.method == 'POST':
        Form.objects.create(type_of_road=request.POST.get('road'), subject=request.POST['subject'],details=request.POST['details'],location=request.POST['location'],state=request.POST['state'],city=request.POST['city'],postel_code=request.POST['pCode'], images=request.POST['image'],email=request.POST['email'],ml_result= request.POST['ml_res'])

        return JsonResponse({"respon":"success"})



def total_complaint(request):
    total_count = Form.objects.count()
    pending = custom_sql("SELECT COUNT(*) FROM app_form WHERE staus='Pending'")[0][0]
    checked = custom_sql("SELECT COUNT(*) FROM app_form WHERE staus='Checked'")[0][0]

    return JsonResponse({"total": total_count,"pending":pending,"checked":checked })


def complaint_list(request):
    query = custom_sql("SELECT * FROM app_form")
    return JsonResponse({"res": query})

def check_report(request, id):
    query = custom_sql(f"SELECT * FROM app_form WHERE id={id}")[0]
    print(query)

    store = StoreFormData(
        id= query[0],
        road=query[1],
        subject=query[2],
        details=query[3],
        location=query[4],
        state=query[5],
        city=query[6],
        pCode=query[7],
        email=query[9],
        image=query[8],
        ml_res=query[12],
        staus=query[11],
        datetime=query[10]
        )
    print(store,"+++++++++++++++")
    return render(request, 'admin/report.html', {'data':store})

def status_check(request):
    print(request.POST["rid"])
    update=custom_sql(f"""UPDATE app_form SET staus='Checked' WHERE id='{request.POST["rid"]}'""")
    return JsonResponse({"res":"success"})

