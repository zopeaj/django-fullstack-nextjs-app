from students.models import Student


class StudentRepository:
    def __init__(self, student):
        self.student = student

    def save(self, data):
        student = self.student.create(data)
        return student


