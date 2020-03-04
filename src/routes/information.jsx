import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import axios from "axios";
import Age from "./../media/information/age.svg";
import Tatto from "./../media/information/arm.svg";
import BloodPressure from "./../media/information/blood-pressure-meter.svg";

const Information = props => {
  return (
    <React.Fragment>
      <Navbar {...props} />
      <div style={{ backgroundColor: "#ffb3b3" }}>
        <h1 style={{ textAlign: "center", color: "white", paddingTop: "10px" }}>
          Blood Donation Eligibility Requirements
        </h1>

        <ul>
          <li>
            <img src={Age} style={{ height: "60px", width: "60px" }}></img>
          </li>
        </ul>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Information;
