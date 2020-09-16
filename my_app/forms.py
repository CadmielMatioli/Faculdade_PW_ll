from django import forms

from my_app.models import Topico


class Form(forms.Form):
        nome = forms.CharField()
        email = forms.EmailField()
        texto = forms.CharField(widget=forms.Textarea)

class ModelFormTopico(forms.ModelForm):
        class Meta:
                model = Topico
                fields = "__all__"