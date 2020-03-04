import React from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";

const SignUp = props => {
  const userData = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
    bloodgroup: "",
    birthdate: "",
    sex: "",
    lastblooddonation: ""
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
    if (type === "bloodgroup") {
      userData.bloodgroup = event.target.value;
    }
    if (type === "birthdate") {
      userData.birthdate = event.target.value;
    }
    if (type === "sex") {
      userData.sex = event.target.value;
    }
    if (type === "lastblooddonation") {
      userData.lastblooddonation = event.target.value;
    }
    if (type === "confirmpassword") {
      userData.confirmpassword = event.target.value;
    }
  };

  return (
    <React.Fragment>
      <Navbar {...props} />
      <form
        className="m-3 mx-auto"
        style={{
          width: "40%"
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

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password again"
            onChange={event => {
              saveData(event, "confirmpassword");
            }}
          />
        </div>

        <div className="form-group">
          <label>Blood Group</label>
          <input
            type="text"
            className="form-control"
            placeholder="Blood Group"
            onChange={event => {
              saveData(event, "bloodgroup");
            }}
          />
        </div>

        <div className="form-group">
          <label>D.O.B.(Date of birth)</label>
          <input
            type="date"
            className="form-control"
            placeholder="D.O.B."
            onChange={event => {
              saveData(event, "birthdate");
            }}
          />
        </div>

        <div className="form-group">
          <label>
            Last Blood Donation
            <span className="h6 text-muted"> (optional)</span>
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Last Blood Donation"
            onChange={event => {
              saveData(event, "lastblooddonation");
            }}
          />
        </div>

        <div className="form-group">
          <label>Sex</label>
          <br />
          <input
            type="radio"
            name="sex"
            onChange={event => {
              saveData(event, "sex");
            }}
            value="male"
          />
          <label style={{ paddingLeft: "3px", paddingRight: "50px" }}>
            Male
          </label>

          <input
            type="radio"
            name="sex"
            onChange={event => {
              saveData(event, "sex");
            }}
            value="female"
          />
          <label style={{ paddingLeft: "3px", paddingRight: "50px" }}>
            Female
          </label>

          <input
            type="radio"
            name="sex"
            onChange={event => {
              saveData(event, "sex");
            }}
            value="others"
          />
          <label style={{ paddingLeft: "3px", paddingRight: "50px" }}>
            Others
          </label>
        </div>

        <button
          style={{ backgroundColor: "#650101", color: "#F0F0F2" }}
          className="btn btn-block"
          onClick={event => {
            event.preventDefault();
            props.onSubmit("signup", userData, props);
          }}
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered{" "}
          <a
            href="#"
            onClick={() => {
              props.history.push("/login");
            }}
          >
            Log in?
          </a>
        </p>
      </form>
      <Footer />
    </React.Fragment>
  );
};

export default SignUp;
