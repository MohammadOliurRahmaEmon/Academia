import React from "react";
import AboutCard from "../AboutCard/AboutCard";
import "./About.css";

const About = () => {
  return (
    <>
      {" "}
      {/* About Component*/}{" "}
      <div>
        <h1 className="text-4xl font-bold mt-5"> A B O U T </h1>{" "}
      </div>{" "}
      <hr className="w-20 mx-auto mt-2" />
      <div className="about-container">
        <div className="about-img">
          <img
            src="https://image.freepik.com/free-vector/education-background-with-funny-icons_1361-1263.jpg"
            alt=""
            srcset=""
          />
        </div>{" "}
        <div className="about-card-container">
          <AboutCard> </AboutCard>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default About;
