import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    // use footer
    <div className="container bg-black p-4 mt-16 max-w-full text-white font-thin">
      <div className="sm:flex mb-4">
        <div className="sm:w-1/4 h-auto">
          <div className="text-orange mb-2"> Important Documents </div>{" "}
          <ul className="list-reset leading-normal ">
            <li className="hover:text-orange text-grey-darker "> Home</li>{" "}
            <li className="hover:text-orange text-grey-darker"> About </li>{" "}
            <li className="hover:text-orange text-grey-darker"> Contact </li>{" "}
            <li className="hover:text-orange text-grey-darker"> Features </li>{" "}
            <li className="hover:text-orange text-grey-darker"> Team </li>{" "}
            <li className="hover:text-orange text-grey-darker"> Courses </li>{" "}
            <li className="hover:text-orange text-grey-darker"> Login </li>{" "}
            <li className="hover:text-orange text-grey-darker"> Skill </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div className="text-blue mb-2"> Privacy Policy </div>{" "}
          <ul className="list-reset leading-normal">
            <li className="hover:text-blue text-grey-darker"> Leagality </li>{" "}
            <li className="hover:text-blue text-grey-darker"> Licence</li>{" "}
            <li className="hover:text-blue text-grey-darker"> Trustable </li>{" "}
          </ul>{" "}
          <div className="text-blue-light mb-2 mt-4"> Social Media </div>{" "}
          <ul className="list-reset leading-normal">
            <li className="hover:text-blue-light text-grey-darker">
              {" "}
              Facebook{" "}
            </li>{" "}
            <li className="hover:text-blue-light text-grey-darker">
              {" "}
              Instagram{" "}
            </li>{" "}
            <li className="hover:text-blue-light text-grey-darker">
              {" "}
              Github{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div className="text-green-dark mb-2"> News </div>{" "}
          <ul className="list-reset leading-normal">
            <li className="hover:text-green-dark text-grey-darker">
              {" "}
              Success{" "}
            </li>{" "}
            <li className="hover:text-green-dark text-grey-darker">
              {" "}
              portfolio{" "}
            </li>{" "}
            <li className="hover:text-green-dark text-grey-darker">
              {" "}
              Job{" "}
            </li>{" "}
          </ul>{" "}
          <ul className="list-reset leading-normal">
            <li className="hover:text-green-light text-grey-darker"> Blogs </li>{" "}
            <li className="hover:text-green-light text-grey-darker">
              {" "}
              Awards{" "}
            </li>{" "}
            <li className="hover:text-green-light text-grey-darker">
              {" "}
              Email{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
          <div className="text-red-light mb-2"> Newsletter </div>{" "}
          <p className="text-grey-darker leading-normal">
            Far far away, behind the word mountains,{" "}
          </p>{" "}
          <div className="mt-4 flex">
            <input
              type="text"
              className="p-2 border border-grey-light round text-grey-dark text-sm h-auto"
              placeholder="Your email address"
            />
            <button className="bg-blue-500 text-white rounded-sm h-auto text-xs p-3">
              Subscribe{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Footer;
