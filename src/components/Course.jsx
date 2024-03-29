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
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: "50vh"
      }}>
        <Typography variant="h5">Oops! Course not found 😞</Typography>
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: "10em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "between",
      }}
    >
      <CourseCard course={course} />
      <UpdateCard courses={courses} course={course} setCourses={setCourses} />
    </div>
  );
};

function UpdateCard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const course = props.course;
  return (
    <div>
      <Card
        variant="outlined"
        style={{
          width: 400,
          padding: 10,
        }}
      >
        <Typography variant="h4" style={{ paddingBottom: "10px" }}>
          {" "}
          Update Course details{" "}
        </Typography>
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
            fetch("http://localhost:3000/admin/courses/" + props.courseId, {
              method: "PUT",
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
                let updatedCourses = [];
                for (let i = 0; i < props.courses.length; i++) {
                  if (props.courses[i].id == course.id) {
                    updatedCourses.push({
                      id: course.id,
                      title: title,
                      description: description,
                      imageLink: image,
                    });
                  } else {
                    updatedCourses.push(props.courses[i]);
                  }
                }
                props.setCourses(updatedCourses);
              });
            });
          }}
        >
          Update Course
        </Button>
      </Card>
    </div>
  );
}

function CourseCard(props) {
  const course = props.course;
  return (
    <div>
      <Card
        style={{
          // border: "2px solid black",
          height: 268,
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
  );
}

export default Course;
