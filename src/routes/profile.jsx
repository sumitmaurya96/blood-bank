import React, { useContext, useState } from "react";
import Navbar from "./components/navbar";
import auth from "../algorithms/auth";
import { UserContext } from "../user.context";
import ProfilePhoto from "../media/loader/user.svg";
import Loader from "../media/loader/loader.svg";
import Test from "../media/team/sumit.jpeg";

import Footer from "./components/footer";

const Profile = props => {
  const [user, setUser] = useState([
    useContext(UserContext).user,
    useContext(UserContext).setUser
  ]);

  (async () => {
    if (auth.isAuthenticated()) {
      setUser(await auth.getUser());
    }
    console.log(user);
  })();

  return (
    <React.Fragment>
      <Navbar {...props} />
      <div
        style={{
          textAlign: "center",
          padding: "50px 30px 30px 0px",
          backgroundColor: "#F6B2B2",
          minHeight: "90vh"
        }}
      >
        {auth.isAuthenticated() ? (
          <img
            src={Loader}
            width="100px"
            height="100px"
            alt="Page Loading"
            style={{ marginTop: "30vh" }}
          />
        ) : (
          <div
            style={{
              border: "1px solid #F6B2B2",
              margin: "5px 15% 15px 15%",
              padding: "50px 30px 50px 30px",
              borderRadius: "4px",
              backgroundColor: "#F6B9B9",
              boxShadow: "5px 5px 5px #F27E7F"
            }}
          >
            <React.Fragment>
              <img
                src={Test}
                width="150px"
                height="150px"
                alt="Page Loading"
                style={{ border: "1px solid lightgray", borderRadius: "100px" }}
              />
              <div style={{ paddingTop: "30px" }}>
                <h2
                  style={{ color: "#F27E7F" }}
                >{`Welcome ${user.username}`}</h2>
                <br />

                <h3>{`Name : ${user.firstname}`}</h3>
                <h3>{`Username : ${user.username}`}</h3>
                <h3>{`Mail : ${user.userMail}`}</h3>
                <h3>{`Date of birth : ${user.dob}`}</h3>
                <h3>{`Sex : ${user.sex}`}</h3>
                <h3>{`Blood group : ${user.bloodGroup}`}</h3>
              </div>

              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  props.onSubmit("logout", null);
                  auth.logout(() => {
                    props.history.push("/login");
                  });
                }}
                style={{ padding: "10px", margin: "10px" }}
              >
                Check Blood history
              </button>
              <br />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  props.onSubmit("logout", null);
                  auth.logout(() => {
                    props.history.push("/login");
                  });
                }}
              >
                Logout
              </button>
            </React.Fragment>
          </div>
        )}
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Profile;
