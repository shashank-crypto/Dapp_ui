import React from "react";
// import styled from 'styled-components'
import "./components.css";
import { Link } from "react-router-dom";

export const Button = ({ text, bgColor, txtColor }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: txtColor }}
      className="button"
    >
      {text}
    </button>
  );
};

export const Navbar = ({ loggedIn }) => {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span
          style={{ fontSize: "2em", marginLeft: "5vw", fontWeight: "700" }}
          className="logo"
        >
          ngod-app
        </span>
      </Link>
      <div style={{ marginRight: "15vw" }}>
        {loggedIn ? (
          <span style={{ fontSize: "1.5em" }}>Hey, User</span>
        ) : (
          <div>
            <Link to="/login">
              <Button text="Login" />
            </Link>
            <Link to="/signup">
              <Button text="Signup" bgColor="white" txtColor="black" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

Button.defaultProps = {
  text: "Sample",
  bgColor: "black",
  txtColor: "white",
};
