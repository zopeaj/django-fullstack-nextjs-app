import React, { useState, Fragment } from "react";
import { Grid, Typography, Container, Box, Container, CircularProgress, Drawer, TextField,Select, Radio, SwipeableDrawer, Toolbar, AppBar } from "@mui/material";
import { addNewStudent, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "../services/api";
import { successNotification, errorNotification } from "./Notification";


function StudentDrawer({ showDrawer, setShowDrawer, fetchStudents }) {
  const onClose = setShowDrawer(false);
  const [submitting, setSubmitting] = useState(false);

  const onFinish = student => {
    setSubmitting(true);
    console.log(JSON.stringify(student, null, 2));

    addNewStudent(student).then(() => {
      console.log("Student ADDED")
      onClose();
      successNotification("Student Sucessfully added", `${student.name} was added to the system`)
      fetchStudents();
    }).catch((err) => {
      console.log(err);
      err.response.json().then((res) => {
        errorNotification("There as an issue", `${res.message} [${res.status}] [${res.error}]`, "bottomLeft")
      });
    }).finally(() => {
      setSubmitting(false);
    })
  };

  const onFinishFailed = errorInfo => {
    alert(JSON.stringify(error, null, 2));
  };

  return (
     <Drawer open={showDrawer} onClose={onClose}>
       <AppBar class="drawer-app-bar">
         <Toolbar class="drawer-tool-bar">
           <div class="drawer-header">Create new Student</div>
         </Toolbar>
       </AppBar>
       <div>
         <form onSubmit={onFinish}>
             <Grid container>
               <Grid item xs>
                 <TextField id="name" type="text" label="Name" value={name} onChange={onChange} placeholder="Please enter student name" helperText="name" error="Student name is required" />
               </Grid>
               <Grid item xs>
                 <TextField type="email" label="Email" value={email} onChange={onChange} placeholder="Please enter student email" helperText="email" error="Email is required"/>
               </Grid>
               <Grid item xs>
                 <FormControl>
                     <FormLabel id="radio-buttons-gender">Gender</FormLabel>
                     <RadioGroup aria-labelledby="radio-buttons-label">
                       <FormControlLabel value="female" control={<Radio />} label="Female" />
                       <FormControlLabel value="male" control={<Radio />} label="Male" />
                       <FormControlLabel value="other" control={<Radio />} label="Other" />
                     </RadioGroup>
                  </FormControl>
               </Grid>
               <Grid item>
                 <Button type="submit" variant="contained">
                     Submit
                 </Button>
               </Grid>
               <Grid item>
                 {submitting && <CircularProgress style={{ fontSize: 24 }} />}
               </Grid>
             </Grid>
         </form>
       </div>
       <div style={{ textAlign: 'right' }}>
         <Button onClick={onClose} style={{ marginRight: 8 }}>
             Cancel
         </Button>
       </div>
     </Drawer>
  )
}

export default StudentDrawer;
