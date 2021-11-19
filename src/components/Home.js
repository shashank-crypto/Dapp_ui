import React from "react";
import "./components.css";
import img from "../images/dwnArrow.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
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
      </section>
    </div>
  );
};
