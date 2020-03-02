import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import List from "./components/list";
import axios from "axios";
import auth from "../algorithms/auth";

const Request = props => {
  const handleSubmit = () => {
    console.log("hafbldsa");
  };

  return (
    <React.Fragment>
      <Navbar {...props} />
      <div className="" style={{ backgroundColor: "#FFB3B3" }}>
        <List
          onSubmit={() => {
            handleSubmit();
          }}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Request;
