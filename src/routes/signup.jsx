import React from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = props => {
  const userData = {
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  };

  const saveData = (event, type) => {
    if (type === "firstname") {
      userData.firstname = event.target.value;
    }
    if (type === "lastname") {
      userData.lastname = event.target.value;
    }
    if (type === "username") {
      userData.username = event.target.value;
    }
    if (type === "password") {
      userData.password = event.target.value;
    }
  };

  return (
    <React.Fragment>
      <Navbar isLogedIn={props.isLogedIn} />
      <form
        style={{
          margin: "0px auto",
          width: "30%"
        }}
      >
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={event => {
              saveData(event, "firstname");
            }}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={event => {
              saveData(event, "lastname");
            }}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={event => {
              saveData(event, "username");
            }}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={event => {
              saveData(event, "password");
            }}
          />
        </div>

        <button
          className="btn btn-primary btn-block"
          onClick={event => {
            event.preventDefault();
            props.onSubmit("signup", userData, props);
          }}
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="http://localhost:3000/login">sign in?</a>
        </p>
      </form>
    </React.Fragment>
  );
};

export default SignUp;
