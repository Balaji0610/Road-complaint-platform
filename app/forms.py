from django import forms


class UserDetailsForm(forms.Form):
    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)
    email = forms.EmailField()

class UserComplaintForm(forms.Form):
    road = forms.ChoiceField(choices=[('pothole', 'Pothole'), ('cracks', 'Cracks'), ('edge_cracks', 'Edge Cracks'), ('others', 'Others')])
    subject = forms.CharField(max_length=100)
    details = forms.CharField(widget=forms.Textarea, required=False)
    location = forms.CharField(max_length=100)
    state = forms.CharField(max_length=100)
    city = forms.CharField(max_length=100)
    postal_code = forms.CharField(max_length=10)
    email = forms.EmailField(required=False)
    images = forms.ImageField(required=False, widget=forms.ClearableFileInput(attrs={'multiple': True}),required=False)