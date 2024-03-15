import { Typography } from "@mui/material";

function Homepage() {
  return (
    <div
      style={{
        marginTop: "25vh"
      }}
    >
      <Typography
        style={{
          fontSize: "100px",
          paddingTop: 50,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        Coursera
      </Typography>
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: -40,
          fontSize: 30,
        }}
      >
        Sign up above to enter the pool of education
      </Typography>
    </div>
  );
}

export default Homepage;
