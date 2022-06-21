import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import React from "react";
import { useEffect, useState } from "react";
import { getTasks } from "../Service/api";
import { Link, Links } from "react-router-dom";
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getTasks();
    console.log(response.data);
    setTasks(response.data);
  };
  return (
    <div>
      <Table style={{ width: "70%", margin: "30px auto" }}>
        <TableHead>
          <TableRow style={{ backgroundColor: "#1abc9c" }}>
            <TableCell>Task Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>ID</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((tasks) => (
            <TableRow>
              <TableCell>{tasks.name}</TableCell>
              <TableCell>{tasks.date}</TableCell>
              <TableCell>{tasks.email}</TableCell>
              <TableCell>{tasks.phone}</TableCell>
              <TableCell>{tasks.id}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  style={{ margin: "4px" }}
                  component={Link}
                >
                  Edit
                </Button>
                <Button variant="outlined">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tasks;
