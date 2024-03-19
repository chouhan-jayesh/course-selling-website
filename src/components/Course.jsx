import { Card, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Course = () => {
  // courseId because thats used in the path and the usePArams is the same as using the parameters from the link

  let { courseId } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourses(data.courses);
      });
    });
  }, []);

  let course = null;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == courseId) {
      course = courses[i];
    }
  }

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <CourseCard course={course} />
    </div>
  );
};




function CourseCard(props) {
    const course = props.course;
    return  <div
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
        {course.title} <br />
      </Typography>
      <Typography textAlign={"center"}>
        {course.description} <br />
      </Typography>
      <img src={course.imageLink} style={{ width: 300 }} />
    </Card>
  </div>
}

export default Course;
