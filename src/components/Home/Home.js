import React, { useEffect, useState } from "react";
import Contact from "../../Contact/Contact";
import About from "../About/About";
import CourseCard from "../CourseCard/CourseCard";
import HeadBanner from "../HeadBanner/HeadBanner";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  // use useState
  useEffect(() => {
    // use useEffect for data load
    fetch("./homeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  return (
    <div>
      <HeadBanner> </HeadBanner>{" "}
      <div className="all-course-style">
        <h5 className="text-2xl text-gray-500"> OUR COURSES </h5>{" "}
        <hr className="w-16 mx-auto  text-2xl hr-style" />
        <h1 className="text-4xl"> EXPLORE OUR POPULAR ONLINE COURSE </h1>{" "}
      </div>{" "}
      <div className="card-container card-home-design">
        {" "}
        {/* Here is the another data load from homeData.json. Its under in public Folder. */}{" "}
        {courses.map((course) => (
          <CourseCard course={course}>key={course?.id} </CourseCard>
        ))}{" "}
      </div>{" "}
      <br />
      <About> </About> <br />
      <Contact> </Contact>{" "}
    </div>
  );
};

export default Home;
