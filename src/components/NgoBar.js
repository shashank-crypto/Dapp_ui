import React from "react";
import "./components.css";
import { useState } from "react";
import img from "../images/dwnArrow.svg";
// import { Button } from "./Navbar";
// import { Input } from "./LoginPage";
// import styled from 'styled-components'

export const NgoBar = ({ngoinfo}) => {
  const [show, setshow] = useState(false);

  return (
    <div style={{margin: "10px"}}>
      <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between", fontSize:"22px", border: "2px solid black", padding: "10px"}}>
          <div>
        {ngoinfo.name}<br />
        {ngoinfo.location}
        </div>
        <img src={img} alt="" style={{height:"15px", alignSelf:"center",transform: `${show ? "rotate(-90deg)":"rotate(0deg)"}`}} onClick={() =>setshow(!show)}/>
      </div>
      <div className={`ngoinfo ${show ? "" : "ngoinfobar"}`} style={{fontSize:"18px", marginTop: "10px"}}>
        <input type="text"/> <button> contribute </button>
        <br />
        owner : {ngoinfo.owner}
        <br />
        funding: {ngoinfo.funding} <br />
        reserve : {ngoinfo.reserve} <br />
        contributors : {ngoinfo.contributors} <br />
        location : {ngoinfo.location} <br />
        website link : {ngoinfo.weblink} <br />
        ig/fb handle: {ngoinfo.fblink}
        <br />
        established: {ngoinfo.est} <br />
        ongoing events : {ngoinfo.events} <br />
        event1 <br />
        event2
        <br />
      </div>
    </div>
  );
};
