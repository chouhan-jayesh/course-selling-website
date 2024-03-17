import { Button, Typography } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Appbar() {
    const navigate = useNavigate()
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
            navigate("/")
            // window.location = "/";
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
            navigate("/signup")
            // window.location = "/signup";
          }}
        >
          Sign Up
        </Button>
        <Button
          size="medium"
          variant="contained"
          onClick={() => {
            navigate("/login")
            // window.location = "/login";
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Appbar;
