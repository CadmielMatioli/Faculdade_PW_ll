from django.db import models

# Create your models here.
class Topico(models.Model):
    nome = models.CharField(max_length=264, unique=True)

    def __str__(self):
        return self.nome

class WebPage(models.Model):
    topico = models.ForeignKey(Topico, on_delete=models.CASCADE)
    nome = models.CharField(max_length=264, unique=True)
    url = models.URLField(unique=True)

    def __str__(self):
        return self.nome

class RegistroAcesso(models.Model):
    pagina = models.ForeignKey(WebPage, on_delete=models.CASCADE)
    data = models.DateField()

    def __str__(self):
        return str(self.data)

    @classmethod
    def order_by(cls, param):
        pass