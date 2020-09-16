from django.contrib import admin

# Register your models here.
from my_app.models import Topico, RegistroAcesso, WebPage

admin.site.register(Topico)
admin.site.register(RegistroAcesso)
admin.site.register(WebPage)