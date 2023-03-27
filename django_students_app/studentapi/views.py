from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from students.models import Student
from studentapi.serializers import StudentSerializer

# Create your views here.


class StudentListView(APIView):

    def get(self, request, *args, **kwargs):
        """List student data"""
        students = Student.objects.filter(user=request.user.id)
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        """Create student with given data"""
        data = {'name', request.data.get('name')}
        serializer = StudentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentDetailView(APIView):
    def get_object(self, student_id, user_id):
        try:
            student = studentService.getStudentById(id=student_id, user_id=user_id)
            return student
        except Student.DoesNotExist:
            return None

    def get(self, request, student_id, *args, **kwargs):
        student_instance = self.get_object(student_id, request.user.id)
        if not student_instance:
            return Response({"detail": "Object with student id does not exists"}, status=status.HTTP_404_NOT_FOUND)

        serialer = StudentSerializer(student_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, student_id, *args, **kwargs):
        student_instance = self.get_object(student_id, request.user.id)
        if not student_instance:
            return Response({"detail": "Object with student id does not exists"}, status=status.HTTP_404_NOT_FOUND)

        data = {
            'name': request.data.get('name')
        }

        serializer = StudentSerializer(instance=student_instance, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, student_id, *args, **kwargs):
        student_instance = self.get_object(student_id, request.user.id)
        if not student_instance:
            return Response({"detail": "Object with student id does not exists"}, status=status.HTTP_404_NOT_FOUND)

        student_instance.delete()
        return Response({"res": "Student deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)





