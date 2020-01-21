from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    email = models.EmailField()
    photo = models.ImageField(upload_to='members_profile', blank=True, null=True)

    def __str__(self):
        return self.name