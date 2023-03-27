from django.db import models

# Create your models here.
class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=60, default='')
    username = models.CharField(max_length=60, default='example@gmail.com')
    firstname = models.CharField(max_length=60)
    lastname = models.CharField(max_length=60)
    email = models.EmailField(max_length=50)

    def save(self, *args, **kwargs):
        self.username = self.email
        return super().save(*args, **kwargs)

    def get_student_id(self):
        pass

    def __str__(self):
        return f"id: {self.id}, name: {self.name}"
