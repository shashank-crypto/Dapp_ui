import React from "react";
import { Button } from "./Navbar";
import { Link } from "react-router-dom";
import './components.css'

const Input = ({ placeholder, password }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontSize: "1.5em" }}> {placeholder}: </span>
      <input
        type={password ? "password" : "text"} 
        style={{
          height: "40px",
          width: "250px",
          border: "2px solid black",
          borderRadius: "10px",
          padding: "10px",
        }}
      />
    </div>
  );
};

export const LoginPage = ({user}) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh"}}>
      <div
        style={{
          width: "50vw",
        //   height: "100vh",
          textAlign: "center",
          borderRight: "2px solid black",
        //   backgroundColor:"red",
        }}
        className ="about"
      >
          <div style={{width:"70%", margin: "auto", fontSize:"24px", display:"flex", flexDirection: "column", textAlign:"justify", marginTop:"20vh"}} >
          <Link to="/" style={{fontSize:"32px",fontWeight: "900", margin:"0 0 20px 0", textAlign:"center",textDecoration:"none"}}> NGOD-app</Link>
        Our team presents an amazing transparent system for you. It removes the factor of trust on the people but the contract. No third party controls the contract. You have the power to see where your money is being spent and you can even have your money back in case of any fraud.
        </div>

      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignSelf: "center",
          margin: "auto",
          height: "50vh",
        //   background: "red",
        }}
      >
        {user &&  <Input placeholder="Name"/> }
        <Input placeholder="Userame" />
        <Input placeholder="Password" password="true"/>
        <Button text={!user ? "Login" : "Signup"} />
        {!user ? <div>
        <span>Don't have an account?</span> <br/>
        <Link to="/signup">Signup</Link>
        </div> : <div>
        <span>Already have an account?</span> <br/>
        <Link to="/login">Login</Link>
        </div>}
      </div>
    </div>
  );
};
