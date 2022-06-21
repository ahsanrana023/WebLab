import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const Login = () => {
  return (
    <div>
      <div class="container" style={{ width: "50%", paddingTop: "5%" }}>
        <h1 style={{ textAlign: "center", color: "#1abc9c" }}>Login</h1>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          style={{ width: "50%", margin: "25px 25%" }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ width: "50%", margin: "10px 25%" }}
        />
        <p style={{ margin: "0 25%" }}>
          Dont have an Account?
          <span style={{ color: "#1abc9c" }}>Register</span>
        </p>
        <br />
        <Button
          variant="contained"
          style={{
            width: "50%",
            margin: "5px 25%",
            backgroundColor: "#1abc9c",
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
