import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Checkbox } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Register = () => {
  return (
    <div>
      <div class="container" style={{ width: "50%", paddingTop: "5%" }}>
        <h1 style={{ textAlign: "center", color: "#1abc9c" }}>Register</h1>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          style={{ width: "50%", margin: "25px 25%" }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ width: "50%", margin: "25px 25%" }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          style={{ width: "50%", margin: "25px 25%" }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          style={{ width: "50%", margin: "10px 25%" }}
        />
        <FormGroup style={{ margin: "0 25%" }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Accept the terms and conditions"
          />
        </FormGroup>

        <br />
        <Button
          variant="contained"
          style={{
            width: "50%",
            margin: "5px 25%",
            backgroundColor: "#1abc9c",
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
