import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";
import { useState } from "react";

function Addcourse() {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ image, setImage] = useState("");
  return (
    <div
      style={{
        // width: "100vw",
        // height: "6vh",
        display: "flex",
        justifyContent: "center",
        // marginTop: "30%"
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
          style={{
            marginBottom: 10,
          }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth={true}
          label="Title"
          variant="outlined"
        />
        <TextField
          style={{
            marginBottom: 10,
          }}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          fullWidth={true}
          label="Description"
          variant="outlined"
        />
        <TextField
          style={{
            marginBottom: 10,
          }}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          fullWidth={true}
          label="Image-link"
          variant="outlined"
        />
        <Button
          size="medium"
          variant="contained"
          onClick={() => {
            fetch("http://localhost:3000/admin/courses", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
                imageLink: image,
                published: true,
              }),
              headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }).then((res) => {
              console.log(res);
              res.json().then((data) => {
                // storing token in localstorgae
                alert("Course added!")
              });
            });
          }}
        >
          Add Course
        </Button>
      </Card>
    </div>
  );
}



export default Addcourse;
