from django.shortcuts import path, re_path
from students.views import student_view, student_detail_view

urlpatterns = [
    re_path(r'', student_view, name="index"),
    re_path(r'students/', student_list_view, name="list"),
    re_path(r'^student/<pk:int>/', student_detail_view, name="detail"),
]

