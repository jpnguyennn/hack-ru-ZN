from django.db import models

# drop down box for sex options (https://stackoverflow.com/questions/31130706/dropdown-in-django-model)
SEX_OPTIONS = [
    ('Male', 'MALE'),
    ('Female', 'FEMALE'),
    ('Non-Binary', 'NON-BINARY'),
    ('Prefer not to answer', 'PREFER NOT TO ANSWER')
]

# Create your models here.
class User(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    age = models.IntegerField()
    sex = models.CharField(max_length=255, choices=SEX_OPTIONS, default='Sex')
    height = models.IntegerField()
    weight = models.IntegerField()

    def __str__(self) -> str:
        return self.lastname


