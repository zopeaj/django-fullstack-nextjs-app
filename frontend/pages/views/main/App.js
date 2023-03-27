import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Table, Spin, Button, Avatar, Radio, Divider, Grid, Container, Typography } from "@mui/material";
import StudentDrawerForm from "../../../components/StudentDrawer";
import { errorNotification, successNotification } from "../../../components/Notificaton";
import { fetcStudents } from "../../../services/service";


const StudentApp = () => {
  const [students, setStudents] = useState([]);
  const [ collapsed, setCollapsed ] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    console.log("component is mounted");
    fetcStudents();
  }, []);
}

export default StudentApp
