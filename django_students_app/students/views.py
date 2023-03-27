from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from students.models import Student
from students.repository.studentRepository import StudentRepository
from students.service.studentService import StudentService

# Create your views here.

studentService = StudentService(StudentRepository(Student))

def student_view(request):
    hello = 'Hello world from the view'
    return render(request, 'student/home.html', {'hello': hello})

def student_detail_view(request, student_id, **kwargs):
    pk = kwargs.get('pk')
    obj = studentService.getStudentById(student_id)
    # or
    obj2 = get_object_or_404(Student, pk=pk)
    return render(request, 'student/detail.html', {'obj': obj})

def student_list_view(request):
    qs = studentService.getAll()
    return render(request, 'student/main.html', {'qs': qs})


class StudentIndexView(ListView):
    template_name = 'student/index.html'
    context_object_name = 'student_data_list'

    def get_queryset(self):
        return Student.objects.order_by('-username')

class StudentDetailView(DetailView):
    model = Student
    template_name = 'student/detail.html'

class StudentListView(ListView):
    mode = Student
    template_name = 'student/main.html'



