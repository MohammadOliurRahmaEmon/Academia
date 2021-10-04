import React from "react";
import "./AboutCard.css";
const AboutCard = () => {
  return (
    // This is the About Card where i showed all 3 cards and 1 pictures.Each card have icons and some information
    <div className="about-wrapper">
      <div className="flex about-box-container">
        <div className="about-image">
          <img
            className=""
            src="https://img-premium.flaticon.com/png/128/3145/premium/3145765.png?token=exp=1633335898~hmac=858cb8f8abca2e81229f95614d9771a6"
            alt=""
            srcset=""
          />
        </div>
        <div className="about-details w-4/5 text-start ml-10">
          <h3 className="font-bold  ">Online Courses</h3>
          <p>
            <small>Far far away, behind the word mountains.</small>{" "}
          </p>
        </div>
      </div>
      <div className="flex mt-5 about-box-container">
        <div className="about-image">
          <img
            src="https://img-premium.flaticon.com/png/128/3227/premium/3227027.png?token=exp=1633335952~hmac=f1c72d5b21a363de092692ca11423496"
            alt=""
            srcset=""
          />
        </div>
        <div className="about-details w-3/5 text-start ml-10">
          <h3 className="font-bold ">Earn A Certificates</h3>
          <p>
            {" "}
            <small>
              Far far away, behind the word mountains, far from the countries.
            </small>
          </p>
        </div>
      </div>
      <div className="flex mt-5 about-box-container">
        <div className="about-image">
          <img
            src="https://img-premium.flaticon.com/png/512/1048/premium/1048949.png?token=exp=1633336008~hmac=9d6fab699be50d8cb960a5d46f77222f"
            alt=""
            srcset=""
          />
        </div>
        <div className="about-details w-4/5 text-start ml-10">
          <h3 className="font-bold  ">Learn with Expert</h3>
          <p>
            {" "}
            <small>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia..
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
