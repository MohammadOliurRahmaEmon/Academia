import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./CourseCard.css";
// Use Font Awesome ICON
const element = <FontAwesomeIcon icon={faStar} />;
const CourseCard = (props) => {
  //  Data structure
  const {
    ratings,
    course_name,
    author_name,
    author_img,
    lecture,
    lectures_time,
    all_course_cost,
    per_month_course_cost,
    course_icon,
  } = props.course;
  return (
    // Show Data in this div by card
    <div className="card-full-container">
      <div className="card">
        <img className="card-image" src={course_icon} alt="" />
      </div>{" "}
      <div className="card-text  text-center">
        <h5 className="font-bold"> {course_name} </h5>{" "}
        <p>
          <span className="text-yellow-600">
            {" "}
            {element} {element} {element} {element} {element}{" "}
            <span className="text-gray-700">
              {" "}
              ({ratings}
              .0){" "}
            </span>{" "}
          </span>{" "}
        </p>{" "}
        <br />
        <h6 className="author-name text-gray-600">
          <img className="author-img" src={author_img} alt="" />
          <small className="font-bold"> {author_name} </small>{" "}
        </h6>
        <p className="mt-2 text-blue-500 font-bold">
          {" "}
          {lecture}
          lectures({lectures_time}
          Hours){" "}
        </p>{" "}
        <p className="text-blue-500 font-bold">
          <small>
            {" "}
            {all_course_cost}
            All course / {per_month_course_cost}
            Per month{" "}
          </small>{" "}
        </p>{" "}
        <br />
        <Button variant="outline-secondary"> ENROLL NOW </Button>{" "}
      </div>{" "}
    </div>
  );
};

export default CourseCard;
