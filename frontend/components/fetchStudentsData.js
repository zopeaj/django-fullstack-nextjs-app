import { Fragment } from "react";
import { TheAvatar } from "./TheAvatar";
import { RadioGroup, Radio, Grid, Typography, Confirm } from "@mui/material";
import { removeStudent } from "./services/service";

const columns = fetchStudents => [
    {
        title: '',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (text, student) =>
            <TheAvatar name={student.name}/>
    },
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (text, student) =>
        <Fragment>
            <RadioGroup>

                <Confirm
                    placement='topRight'
                    title={Are you sure to delete ${student.name}}
                    onConfirm={() => removeStudent(student.id, fetchStudents)}
                    okText='Yes'
                    cancelText='No'>
                    <Radio value="small">Delete</Radio>
                </Confirm>

                <Radio onClick={() => alert("TODO: Implement edit student")} value="small">Edit</Radio>
            </RadioGroup>
        </Fragment>
    }
]

