import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div
        style={{
          paddingTop: 50,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Welcome to Coursera.</Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          variant="outlined"
          style={{
            width: 400,
            padding: 10,
          }}
        >
          <TextField
            onChange={(e) => {
              console.log(e);
              setEmail(e.target.value);
            }}
            fullWidth={true}
            // id="username"
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            // id="password"
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <br />
          <Button
            size="medium"
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: email,
                  password: password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              }).then((res) => {
                console.log(res);
                res.json().then((data) => {
                    // storing token in localstorgae
                    localStorage.setItem("token", data.token);
                  console.log(data);
                });
              });
            }}
          >
            Sign Up
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
