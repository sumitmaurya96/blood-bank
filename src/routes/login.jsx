import React, { useContext, useState } from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import auth from "../algorithms/auth";
import { UserContext } from "../user.context";

const styleCSS = {
  margin: "0px auto",
  width: "30%"
};

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
      <Navbar isLogedIn={user.authenticated} />
      <form style={styleCSS}>
        <h3>Sign In</h3>

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
          className="btn btn-primary btn-block"
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
          Forgot <a href="http://localhost:3000/login">password?</a>
        </p>
        <p className="forgot-password text-right">
          Don't have an account?{" "}
          <a href="http://localhost:3000/signup">Sing Up</a>
        </p>
      </form>
    </React.Fragment>
  );
};

export default Login;
