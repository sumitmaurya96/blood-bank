import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../../media/profile.svg";
import login from "../../media/log-in.svg";
import blood from "../../media/blood-transfusion.svg";
import { useState } from "react";

const Navbar = props => {
  let active = props.location.pathname.replace("/", "").replace("#", "");

  const [navbar, setNavbar] = useState({
    toggler: "collapse",
    authenticated: false
  });

  const navbarToggler = () => {
    const toggler = navbar.toggler === "collapse" ? "" : "collapse";
    setNavbar({ toggler });
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#ff8080" }}
      >
        <a
          className="navbar-brand"
          href="#"
          onClick={() => {
            props.history.push("/home");
          }}
        >
          <img
            src={blood}
            alt="Blood Bank"
            className="img"
            width="35"
            height="35"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            navbarToggler();
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse ${navbar.toggler}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${active === "home" ? "active" : ""}`}>
              <a
                className="nav-link"
                onClick={() => {
                  props.history.push("/home");
                }}
                href="#"
              >
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className={`nav-item ${active === "request" ? "active" : ""}`}>
              <a
                className="nav-link"
                onClick={() => {
                  //navbar.active = "request";
                  props.history.push("/request");
                }}
                href="#"
              >
                REQUESTS
              </a>
            </li>
            <li className={`nav-item ${active === "about" ? "active" : ""}`}>
              <a
                className="nav-link"
                onClick={() => {
                  //navbar.active = "about";
                  props.history.push("/about");
                }}
                href="#"
              >
                ABOUT
              </a>
            </li>
            <li className={`nav-item ${active === "contact" ? "active" : ""}`}>
              <a
                className="nav-link"
                onClick={() => {
                  //navbar.active = "contact";
                  props.history.push("/contact");
                }}
                href="#"
              >
                CONTACT
              </a>
            </li>
          </ul>
          <form className="form-inline my-1 my-lg-0 ml-n3 nav-item active">
            {navbar.authenticated && (
              <input
                className="nav-link"
                type="image"
                role="button"
                src={profile}
                alt="PROFILE"
                width="60"
                height="60"
                href="#"
                onClick={() => {
                  //navbar.active = "profile";
                  props.history.push("/profile");
                }}
              ></input>
            )}
            {!navbar.authenticated && (
              <a
                className="nav-link"
                onClick={() => {
                  active = "login";
                  props.history.push("/login");
                }}
                href="#"
              >
                <span className="btn btn-outline-success">
                  <img
                    src={login}
                    className="mr-1"
                    width="15px"
                    height="15px"
                  />
                  LOGIN
                </span>
              </a>
            )}
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
