import { Button, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    function callback2(data) {
      if (data.username) {
        setUserEmail(data.username);
      }
    }
    function callback1(res) {
      // console.log("callback1")
      res.json().then(callback2);
    }
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1);
  }, []);

  if (userEmail) {
    return (
      <div>
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
                navigate("/");
                // window.location = "/";
              }}
              variant="h5"
            >
              Coursera
            </Typography>
          </div>
          <div>
            {userEmail}
          </div>
          <div>
            <Button
              size="medium"
              variant="contained"
              style={{ marginRight: 10 }}
              onClick={() => {
                localStorage.setItem('token', null);
                // navigate("/signup");
                window.location = "/signup";
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  }
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
            navigate("/");
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
            navigate("/signup");
            // window.location = "/signup";
          }}
        >
          Sign Up
        </Button>
        <Button
          size="medium"
          variant="contained"
          onClick={() => {
            navigate("/login");
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
