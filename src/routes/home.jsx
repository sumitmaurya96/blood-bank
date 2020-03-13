import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import axios from "axios";
import RequestPopup from "./components/requestPopup";
import blood from "./../media/blood-transfusion.svg";
import threeGenerations from "./../media/three-generations.png";
import bloodDisease from "./../media/blood-disease.png";
import bloodPressure from "./../media/blood-pressure.svg";

const Home = props => {
  (() => {
    axios.get(`http://localhost:5000/hospital`).then(res => {});
  })();

  return (
    <React.Fragment>
      <Navbar {...props} />

      <div
        className="row p-4"
        style={{
          backgroundColor: "#660000",
          marginLeft: "0px",
          marginRight: "0px"
        }}
      >
        <div className="col-md-1">
          <img
            src={blood}
            alt="Blood Bank"
            className="img"
            width="65"
            height="65"
          />
        </div>
        <div className="col-md-4 mt-1">
          <p className="text-white h1 text-light">BLOOD BANK</p>
          <p className="text-muted offset-md-1" style={{ fontSize: "20px" }}>
            Every blood donar is a life saver
          </p>
        </div>
        <div className="mt-3 offset-md-5">
          <RequestPopup />
        </div>
      </div>

      <div
        className="p-4"
        style={{
          backgroundColor: "#ffb3b3",
          marginLeft: "0px",
          marginRight: "0px"
        }}
      >
        <div className="row m-2">
          <p className="text-danger h4 ">Who can give blood?</p>
        </div>
        <div className="col">
          <div className="row my-2">
            <img
              className="mx-4"
              src={threeGenerations}
              alt="family"
              style={{ width: "100px", height: "100px" }}
            />
            <p className="h4 mt-5">Must be within the age group of 18-60.</p>
          </div>
          <div className="row my-2">
            <img
              className="mx-4"
              src={bloodPressure}
              alt="family"
              style={{ width: "100px", height: "100px" }}
            />
            <p className="h4 mt-5">
              Have a blood pressure in range of 160/90 to 110/40.
            </p>
          </div>

          <div className="row my-2">
            <img
              className="mx-4"
              src={bloodDisease}
              alt="family"
              style={{ width: "100px", height: "100px" }}
            />
            <p className="h4 mt-5">
              No disease that can be transmitted by blood transfusion.
            </p>
          </div>
        </div>
      </div>
      <div
        className="row p-4"
        style={{ backgroundColor: "#ffb3b3", margin: "0px" }}
      >
        <button
          onClick={() => {
            props.history.push("/information");
          }}
          className="float-right btn-danger btn-lg mx-auto"
          style={{
            borderRadius: "4px"
          }}
        >
          Know more
        </button>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
