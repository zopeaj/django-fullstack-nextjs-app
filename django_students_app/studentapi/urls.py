from django.conf.urls import url
from django.urls import path
from studentapi.views import StudentListView, StudentDetailView

urlpatterns = [
    path('', StudentListView.as_view()),
    path('/<int:student_id>/', StudentDetailView.as_view())
]

