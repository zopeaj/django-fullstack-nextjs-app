const checkStatus = (response) => {
  if(response.ok) {
    return response;
  }
  let error = new Error(response.statusText);
  error.response = response;
  return response;
}

export const getAllStudents = () => {
  fetch("api/v1/students").then(checkStatus);
}

export const addNewStudent = student => {
  fetch("api/v1/students", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(student)
  }).then(checkStatus)
}

export const updateStudent = (studentId, student) => {
  fetch(`api/v1/students/${studentId}`, {
    method: "PUT",
    body: JSON.stringify(student)
  }).then(checkStatus);
}

export const deleteStudent = (studentId) => {
  fetch(`api/v1/students/${studentId}`, {
    method: "DELETE",
  }).method(checkStatus);
}
