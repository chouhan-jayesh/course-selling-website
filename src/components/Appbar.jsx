import { Button, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

function Appbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography
          type="link"
          onClick={() => {
            window.location = "/";
          }}
          variant="h5"
        >
          Coursera
        </Typography>
      </div>
      <div>
        <Button
          size="medium"
          variant="contained"
          style={{ marginRight: 10 }}
          onClick={() => {
            window.location = "/signup";
          }}
        >
          Sign Up
        </Button>
        <Button
          size="medium"
          variant="contained"
          onClick={() => {
            window.location = "/login";
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Appbar;
