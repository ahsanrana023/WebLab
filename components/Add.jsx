import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const Add = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  let navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUserDetails = async () => {
    await addUser(user);
    navigate("/packages");
  };
  return (
    <div>
      <div className="container">
        <div className="row" style={{ padding: "20px", height: "500px" }}>
          <div
            className="col"
            style={{
              backgroundColor: "#2c3e50",
              color: "#fff",
            }}
          >
            <h2 style={{ textAlign: "center", paddingTop: "50px" }}>
              Add New Task
            </h2>
            <p
              style={{
                textAlign: "center",
                paddingTop: "50px",
                paddingRight: "50px",
                paddingLeft: "50px",
              }}
            >
              Lets make it easy to manage your daily work routines, meetings and
              schedules to enhance the productivity.
            </p>
          </div>
          <div className="col" style={{ border: "1px solid yellow" }}>
            <FormGroup>
              <FormControl style={{ margin: "10px" }}>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="name"
                  value={name}
                  id="my-input"
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }}>
                <InputLabel htmlFor="my-input">username</InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="username"
                  value={username}
                  id="my-input"
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }}>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="email"
                  value={email}
                  id="my-input"
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }}>
                <InputLabel htmlFor="my-input">phone</InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="phone"
                  value={phone}
                  id="my-input"
                />
              </FormControl>
              <Button
                style={{ backgroundColor: "#1abc9c", marginBottom: "80px" }}
                variant="contained"
                onClick={() => addUserDetails()}
              >
                Add
              </Button>
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
