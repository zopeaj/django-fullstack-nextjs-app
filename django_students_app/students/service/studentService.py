from students.repository.studentRepository import StudentRepository
from students.models import Student

class StudentService:
    def __init__(self, studentRepository):
        self.studentRepository = studentRepository

    def create(self, data):
        student = self.getStudentByEmail(data.get("email"))
        if student is not None:
            return True
        studentResult = self.studentRepository.save(data)
        return studentResult

    def getStudentByEmail(self, username):
        student = self.studentRepository.getStudentByEmail(username)
        return student




