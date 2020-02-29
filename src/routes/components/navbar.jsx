import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import login from "../../media/login.svg";
import blood from "../../media/blood.svg";

const Navbar = props => {
  let aboutActive, homeActive, profileActive, loginActive;
  const getActiveClass = tag => {
    console.log("fashfihewaiugfbewgbfsgbui");
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#ff8080" }}
      >
        <a className="navbar-brand" href="http://localhost:3000/home">
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${homeActive}`}>
              <a
                className="nav-link"
                onClick={() => getActiveClass("home")}
                href="http://localhost:3000/home"
              >
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className={`nav-item ${loginActive}`}>
              <a
                className="nav-link"
                onClick={() => getActiveClass("login")}
                href="http://localhost:3000/login"
              >
                CHECK AVAILAIBILITY
              </a>
            </li>
            <li className={`nav-item ${aboutActive}`}>
              <a
                className="nav-link"
                onClick={() => getActiveClass("about")}
                href="http://localhost:3000/about"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                onClick={() => getActiveClass("contactUs")}
                href="http://localhost:3000/contact-us"
              >
                CONTACT US
              </a>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            {props.isLogedIn === true && (
              <input
                className="nav-link"
                type="image"
                src={login}
                alt="LOGIN"
                width="60"
                height="60"
                onClick={() => getActiveClass("profile")}
                href="http://localhost:3000/login"
              ></input>
            )}
            {!props.isLogedIn === true && (
              <a
                className="nav-link text-light"
                onClick={() => getActiveClass("login")}
                href="http://localhost:3000/profile"
              >
                LOGIN
              </a>
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
