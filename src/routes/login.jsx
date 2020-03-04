import React, { useContext, useState } from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import auth from "../algorithms/auth";
import { UserContext } from "../user.context";
import Footer from "./components/footer";

const Login = props => {
  const [user, setUser] = useState([
    useContext(UserContext).user,
    useContext(UserContext).setUser
  ]);

  const userData = {
    username: "",
    password: "",
    rememberMe: true
  };

  (async () => {
    if (auth.isAuthenticated()) {
      setUser(await auth.getUser());
      if (user.authenticated) props.history.push("/profile");
    }
    console.log(user);
  })();

  const saveData = (event, type) => {
    if (type === "username") {
      userData.username = event.target.value;
    }
    if (type === "password") {
      userData.password = event.target.value;
    }
    if (type === "checkbox") {
      userData.rememberMe = event.target.checked;
    }
  };

  return (
    <React.Fragment>
      <Navbar {...props} />

      <form
        className="mx-auto"
        style={{
          marginTop: "85px",
          marginBottom: "120px ",
          width: "30%",
          border: "3px lightcoral solid",
          borderRadius: "5px",
          padding: "20px"
        }}
      >
        <h3>Log In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={event => {
              saveData(event, "username");
            }}
            name="username"
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
            name="password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              onChange={event => {
                saveData(event, "checkbox");
              }}
              name="rememberMe"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#650101", color: "#F0F0F2" }}
          className="btn btn-block"
          onClick={async event => {
            event.preventDefault();
            if (await props.onSubmit("login", userData, props)) {
              setUser({
                firstname: "NULL",
                lastname: "NULL",
                username: userData.username,
                isLogedIn: true
              });
            }
          }}
        >
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot{" "}
          <a
            href="#"
            onClick={() => {
              props.history.push("/forgot-password");
            }}
          >
            Password?
          </a>
        </p>
        <p className="forgot-password text-right">
          Don't have an account?{" "}
          <a
            href="#"
            onClick={() => {
              props.history.push("/signup");
            }}
          >
            Sign Up
          </a>
        </p>
      </form>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
