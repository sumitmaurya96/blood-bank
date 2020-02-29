import React, { Component } from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar isLogedIn={this.props.authenticated} />
        <h1>This page is management GUI page for our Database..</h1>
      </React.Fragment>
    );
  }
}

export default About;
