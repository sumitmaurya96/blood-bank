import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import axios from "axios";
import auth from "../algorithms/auth";
import blood from "./../media/blood.svg";
import threeGenerations from "./../media/three-generations.jpg";
import bloodDisease from "./../media/blood-disease.jpg";
import bloodPressure from "./../media/blood-pressure.svg";

const Home = props => {
  const [hospital, setHospital] = useState([]);

  (() => {
    axios.get(`http://localhost:5000/hospital`).then(res => {
      setHospital([...res.data]);
    });
  })();

  return (
    <React.Fragment>
      <Navbar isLogedIn={auth.isAuthenticated()} />
      <div className="row" width="100%" style={{ backgroundColor: "#660000"}}>
        <div className="col-md-1" style={{ float: "left" , marginTop: "30px" , marginLeft:"10px"}}>
          <img
            src={blood}
            alt="Blood Bank"
            className="img"
            width="65"
            height="65"
          />
        </div>
        <div className="col-md-3 " style={{ float: "left"}}>
          <h1 className="text-white" style={{marginTop: "34px"}}>BLOOD BANK</h1>
          <p className="text-white" style={{ marginLeft: "50px" }}>
            Every blood donar is a life saver
          </p>
        </div>
        <div style={{marginLeft: "700px"}}>
          <div className="row">
            <button className="btn-lg m-2" style={{color: "#ff8080", border:"2px #ff8080"}}>DONATE NOW</button>
          </div>
          <div className="row">
            <button className="btn-lg m-2" style={{ color: "#ff8080", border:"2px #ff8080"}} >REQUEST NOW</button>
          </div>
        </div>
      </div>
      <div style={{padding: "10px", backgroundColor: "#ffb3b3"}}>
        <h4 className="text-danger">Who can give blood?</h4>
        <div className="row" style={{ width: "90%", margin: "5px auto" }}>
          <div style={{ margin: "5px" }}>
            <div className="bg-light" style={{ float: "left", margin: "20px" }}>
              <img
                src={threeGenerations}
                alt="family"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div style={{ float: "left", margin: "20px" }}>
              <h4 style={{ marginTop: "20px" }}>
                Must be within the age group of 18-60.
              </h4>
            </div>
          </div>
          <div style={{ float: "clear" }}></div>
        </div>
        <div className="row" style={{ width: "90%", margin: "5px auto" }}>
          <div style={{ margin: "5px" }}>
            <div style={{ float: "left", margin: "20px" }}>
              <img
                src={bloodPressure}
                alt="family"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div style={{ float: "left", margin: "20px" }}>
              <h4 style={{ marginTop: "20px" }}>
                Have a blood pressure in range of 160/90 to 110/40.
              </h4>
            </div>
          </div>
          <div style={{ float: "clear" }}></div>
        </div>
        <div className="row" style={{ width: "90%", margin: "5px auto" }}>
          <div style={{ margin: "5px" }}>
            <div style={{ float: "left", margin: "20px" }}>
              <img
                src={bloodDisease}
                alt="family"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div style={{ float: "left", margin: "20px" }}>
              <h4 style={{ marginTop: "20px" }}>
                No disease that can be tranmitted by blood transfusion.
              </h4>
            </div>
          </div>
          <div style={{ float: "clear" }}></div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
