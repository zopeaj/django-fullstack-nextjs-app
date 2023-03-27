import { deleteStudent, getAllStudents } from "./api/deleteStudent";
import { successNotification, errorNotification } from "../components/Notification";

export const removeStudent = (studentId, callback) => {
  deleteStudent(studentId).then(() => {
    successNotification("Student deleted", `Student with ${studentId} was deleted`);
    callback();
  }).catch((err) => {
    err.response.json().then((res) => {
      console.log(res);
      errorNotification("There was an issue:", `${res.message} [${res.status}] [${res.error}]`)
    });
  })
}


const fetchStudents = (setStudentsCallback, setFetchingCallback) => {
  getAllStudents
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setStudentsCallback(data);
    }).catch(err => {
      console.log(err.response)
      err.response.json().then(res => {
        console.log(res);
        errorNotification("There was an issue", `${res.message} [${res.status}] [${res.error}]`)
      });
    }).finally(() => setFetchingCallback(false));
}
