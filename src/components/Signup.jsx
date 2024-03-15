import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

function Signup() {
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
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Card
          variant="outlined"
          style={{
            width: 400,
            padding: 10,
          }}
        >
          <TextField
            fullWidth={true}
            id="username"
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            id="password"
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <br />
          <Button size="medium" variant="contained"
          onClick={() => {
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            fetch("http://localhost:3000/admin/signup", {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                })
            })
          }}>
            Sign Up
          </Button>
        </Card> 
      </div>
    </div>
  );
}

export default Signup;



// <div
//           style={{
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "#bfbfbf",
//           }}
//         ></div>