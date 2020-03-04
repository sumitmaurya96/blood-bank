import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import axios from "axios";
import Age from "./../media/information/age.svg";
import Tatto from "./../media/information/arm.svg";
import BloodPressure from "./../media/information/blood-pressure-meter.svg";
import Healthy from "./../media/information/health.svg";
import Hemoglobine from "./../media/information/hemoglobin.svg";
import Virus from "./../media/information/virus.svg";
import Transfusion from "./../media/information/transfusion.svg";
import Hepatitis from "./../media/information/hepatitis.svg";
import STD from "./../media/information/std.svg";
import Piercing from "./../media/information/ear.svg";
import Infection from "./../media/information/infection.svg";
import Pregnant from "./../media/information/pregnant.svg";
import Rash from "./../media/information/rash.svg";

const Information = props => {
  return (
    <React.Fragment>
      <Navbar {...props} />
      <div style={{ backgroundColor: "#ffb3b3" }}>
        <h1 style={{ textAlign: "center", color: "white", paddingTop: "10px" }}>
          Blood Donation Eligibility Requirements
        </h1>

        <ul style={{ margin: "15px" }}>
          <li style={{ margin: "10px" }}>
            <img src={Age} style={{ height: "60px", width: "60px" }}></img>
            <label style={{ marginLeft: "50px" }}>Age between 18 to 60.</label>
          </li>

          <li style={{ margin: "10px" }}>
            <img src={Tatto} style={{ height: "60px", width: "60px" }}></img>
            <label style={{ marginLeft: "50px" }}>
              Wait 12 months after a tattoo.
            </label>
          </li>

          <li style={{ margin: "10px" }}>
            <img
              src={BloodPressure}
              style={{ height: "60px", width: "60px" }}
            ></img>
            <label style={{ marginLeft: "50px" }}>
              Have a blood pressure in range of 160/90 to 110/40.
            </label>
          </li>

          <li style={{ margin: "10px" }}>
            <img src={Healthy} style={{ height: "60px", width: "60px" }}></img>
            <label style={{ marginLeft: "50px" }}>
              Must be in a healthy state.
            </label>
          </li>

          <li style={{ margin: "10px" }}>
            <img
              src={Hepatitis}
              style={{ height: "60px", width: "60px" }}
            ></img>
            <label style={{ marginLeft: "50px" }}>
              People with hepatitis are not eligible.
            </label>
          </li>

          <li style={{ margin: "10px" }}>
            <img src={Virus} style={{ height: "60px", width: "60px" }}></img>
            <label style={{ marginLeft: "50px" }}>
              Must not have any viral diseases.
            </label>
          </li>

          <li style={{ margin: "10px" }}>
            <img
              src={Transfusion}
              style={{ height: "60px", width: "60px" }}
            ></img>
            <label style={{ marginLeft: "50px" }}>
              Wait for 12 months after receiving a blood transfusion from
              another person.
            </label>
          </li>

          <li style={{ margin: "10px" }}>
            <img
              src={Hemoglobine}
              style={{ height: "60px", width: "60px" }}
            ></img>
            <label style={{ marginLeft: "50px" }}>
              The hemoglobin level can be no greater than 20 g/dL
            </label>
          </li>

          <li style={{ margin: "10px" }}>
            <img src={STD} style={{ height: "60px", width: "60px" }}></img>
            <label style={{ marginLeft: "50px" }}>Should not have STDs.</label>
          </li>

          <li style={{ margin: "10px" }}>
            <img src={Piercing} style={{ height: "60px", width: "60px" }}></img>
            <label style={{ marginLeft: "50px" }}>
              Wait 12 months if a piercing was performed using a reusable gun.
            </label>
          </li>

          <li style={{ margin: "10px" }}>
            <img src={Pregnant} style={{ height: "60px", width: "60px" }}></img>
            <label style={{ marginLeft: "50px" }}>
              Persons who are pregnant are not eligible to donate.
            </label>
          </li>

          <li style={{ margin: "10px" }}>
            <img src={Rash} style={{ height: "60px", width: "60px" }}></img>
            <label style={{ marginLeft: "50px" }}>
              Acceptable as long as the skin over the vein to be used to collect
              blood is unaffected.
            </label>
          </li>

          <li style={{ margin: "10px" }}>
            <img
              src={Infection}
              style={{ height: "60px", width: "60px" }}
            ></img>
            <label style={{ marginLeft: "50px" }}>
              Should not have any infectious diseases.
            </label>
          </li>
        </ul>
        <div style={{ margin: "45px" }}>
          <a
            className="btn-lg btn-danger"
            target="_blank"
            href="https://www.who.int/news-room/campaigns/world-blood-donor-day/2018/who-can-give-blood"
            style={{ textDecoration: "none" }}
          >
            Get Complete Details
          </a>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Information;
