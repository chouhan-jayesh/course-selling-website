import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

function Signin() {
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
        <Typography variant="h4">Welcome back to Coursera.</Typography>
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
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <br />
          <Button size="medium" variant="contained">
            Sign In
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
