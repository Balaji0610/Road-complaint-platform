# Road-management

# Road-management

pip install virtualenv
virtualenv rms
source rms/bin/activate
rms/bin/pip install -r requirements.txt

python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
