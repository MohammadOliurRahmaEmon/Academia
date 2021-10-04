import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import "./AllCourses.css";
const AllCourses = () => {
  // use useState
  const [courses, setCourses] = useState([]);
  // Use useEffect to load Data
  useEffect(() => {
    fetch("https://mocki.io/v1/3d7189aa-6967-4269-be21-df91a11af5e0")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  console.log(courses);
  return (
    <div>
      <div className="all-course-style">
        <h5 className="text-2xl text-gray-500"> OUR COURSES </h5>{" "}
        <hr className="w-16 mx-auto  text-2xl hr-style" />
        <h1 className="text-4xl"> EXPLORE OUR POPULAR ONLINE COURSE </h1>{" "}
      </div>
      {/* Here is do map to show CourseCard Component data from API link. Which I create fake data and Generated API link By Mock.io website */}
      <div className="card-container">
        {courses.map((course) => (
          <CourseCard key={course?.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
