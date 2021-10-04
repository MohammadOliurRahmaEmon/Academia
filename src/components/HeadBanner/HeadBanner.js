import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HeadBanner.css";
const HeadBanner = () => {
  // Header Banner Use
  return (
    <div className="d-flex font-bold bg-gray-100">
      <div className="banner-text text-start p-5">
        <h5 className="text-black-500"> WELCOME TO ACADEMIA </h5>{" "}
        <h1 className="text-7xl text-start text-blue-500">
          {" "}
          BEST <br /> ONLINE EDUCATION EXPERTISE{" "}
        </h1>{" "}
        <Link to="/allcourses">
          {" "}
          <Button variant="outline-secondary mt-5 ml-1">
            {" "}
            GET STARTED{" "}
          </Button>{" "}
        </Link>{" "}
      </div>{" "}
      <div className=" w-3/5">
        <img
          className=" banner-image"
          src="https://static.vecteezy.com/ti/vecteur-libre/p1/1937548-education-en-ligne-application-apprentissage-dans-le-monde-sur-telephone-mobile-site-web-arriere-plan-social-distance-concept-la-salle-de-classe-formation-cours-bibliotheque-illustrationle-design-plat-vectoriel.jpg"
          alt=""
          srcset=""
        />
      </div>{" "}
    </div>
  );
};

export default HeadBanner;
