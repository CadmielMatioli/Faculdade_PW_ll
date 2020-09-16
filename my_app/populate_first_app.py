import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','first_project.settings')

import django
django.setup()

import random
from first_app.models import Topico,Webpage,RegistroAcesso
from faker import Faker

fakegen = Faker()


def populate(n=5):
	pass


if __name__ == '__main__':
    print("")
    populate(20)
    print('')
