from students.models import Student
from django.db.models.signals import m2m_changed
from django.dispatch import receiver

@receiver(m2m_changed, sender=Student.something)
def get_username(sender, instance, action, **kwargs):
    print('action', action)

    email =
    if action == 'post_add' or action == 'post_remove':
        email = instance.get_name()
    instance.email = email
    instance.save()

