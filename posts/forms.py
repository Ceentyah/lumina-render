from django.contrib.auth.models import User
from django import forms
from .models import Post
from django import forms

class UserRegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['text', 'image', 'video', 'audio']
