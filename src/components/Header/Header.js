import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  // use Nav bar
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/home">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/4494/4494773.png"
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{" "}
            ACADEMIA{" "}
          </Navbar.Brand>{" "}
          <Nav className="text-light custom-nav">
            <ul className="d-flex navbar">
              <li className="li-style">
                <Link to="/home"> HOME </Link>{" "}
              </li>{" "}
              <li className="li-style">
                <Link to="/about"> ABOUT </Link>{" "}
              </li>{" "}
              <li className="li-style">
                <Link to="/allcourses"> COURSES </Link>{" "}
              </li>{" "}
              <li className="li-style">
                <Link to="/team"> TEAM </Link>{" "}
              </li>{" "}
              <li className="li-style">
                <Link to="/contact"> CONTACT </Link>{" "}
              </li>{" "}
            </ul>{" "}
            <Link to="/login">
              <Button
                variant="outline-secondary border-none text-white"
                className="bg-blue-500 text-white-500 log-btn"
              >
                LOGIN{" "}
              </Button>
            </Link>{" "}
          </Nav>{" "}
        </Container>{" "}
      </Navbar>{" "}
    </div>
  );
};

export default Header;
