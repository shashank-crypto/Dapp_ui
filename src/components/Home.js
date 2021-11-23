import React from "react";
import "./components.css";
import img from "../images/dwnArrow.svg";
import { Link } from "react-router-dom";
import { NgoBar } from "./NgoBar";

const ngoinfo = {
  name: "NGO Name",
  owner: "Shashank",
  location: "Darbhanga, Bihar",
  funding: 100001,
  reserve: 2893,
  est: 2012,
  contributors: 89,
  events: 12,
  weblink : "shashank.com",
  fblink: "fb.com/shashank_chaudhary"
}

export const Home = ({loggedIn}) => {
  return (
    <div className="home">
      {!loggedIn ? 
      <section
        style={{ margin: "auto", textAlign: "center", height: "92vh" }}
        className="topSection"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10vh",
          }}
        >
          <span style={{ fontSize: "40px", fontWeight: "800" }}>NGOD-app</span>
          <span style={{ fontWeight: "600", fontSize: "26px" }}>
            bringing trust with the power of blockchain
          </span>
        </div>

        <div>
          <div className="topButtons">
            <Link to="/login"><button
              className="homeButton"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "2px solid black",
              }}
            >
              get started
            </button></Link>
            <button className="homeButton">know more</button>
          </div>
          <div
            style={{
              height: "30px",
              width: "30px",
              margin: "10px auto",
              cursor: "pointer",
              // backgroundColor:"greenyellow"
            }}
            //   className="arrow"
          >
            <img src={img} alt="" className="arrow" />
          </div>
        </div>
      </section> : 
      <div style={{display:"flex",flexDirection:"row", justifyContent:"space-around", marginTop:"10px"}}>
        <div>
        <div style={{backgroundColor:"green", width:"15vw"}} className="about">About</div>
        </div>
        <div className="ngobars">
          Ngo slides - sort by location, name
          <NgoBar ngoinfo={ngoinfo}/>
          <NgoBar ngoinfo={ngoinfo}/>
          <NgoBar ngoinfo={ngoinfo}/>
          <NgoBar ngoinfo={ngoinfo}/>
        </div>
        <div>
        <div style={{backgroundColor:"blue", width:"20vw"}} className="notification">
          Maybe notifications
        </div>
        </div>
      </div>}
    </div>
  );
};
