import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    function callback2(data) {
      setCourses(data.courses);
    }

    function callback1(res) {
      console.log("cb1");
      res.json().then(callback2);
    }
    fetch("http://localhost:3000/admin/courses/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1);
  }, []);

  return (
    <div>
      <Typography
        variant="h3"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        Courses <br />
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          //   justifyContent: "center",
        }}
      >
        {courses.map((course) => {
          return <Course course={course} />;
        })}
      </div>
    </div>
  );
};

function Course(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "1em auto",
      }}
    >
      <Card
        style={{
          // border: "2px solid black",
          margin: 10,
          width: 300,
          minHeight: 200,
          padding: "20px",
        }}
      >
        <Typography variant="h4" textAlign={"center"}>
          {props.course.title} <br />
        </Typography>
        <Typography textAlign={"center"}>
          {props.course.description} <br />
        </Typography>
        <img src={props.course.imageLink} style={{ width: 300 }} />
      </Card>
    </div>
  );
}

export default Courses;
