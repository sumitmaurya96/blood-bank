import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import axios from "axios";
import auth from "../algorithms/auth";

const Request = props => {
  const [request, setRequest] = useState([2]);

  (() => {
    axios.get(`http://localhost:5000/hospital`).then(res => {
      setRequest([...res.data]);
    });
  })();

  return (
    <React.Fragment>
      <Navbar isLogedIn={auth.isAuthenticated()} />
      <div style={{ height: "400px" }}>
        {request.length !== 0 && (
          <div style={{ width: "100%" }}>
            <div style={{ margin: "300px auto", width: "15%" }}>
              <p>Request Length Not Null</p>
            </div>
          </div>
        )}
        {request.length === 0 && (
          <div style={{ width: "100%" }}>
            <div style={{ margin: "300px auto", width: "15%" }}>
              <p>You have no Request</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Request;
