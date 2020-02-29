import React, { useContext, useState } from "react";
import Navbar from "./components/navbar";
import auth from "../algorithms/auth";
import { UserContext } from "../user.context";
import Loader from "../media/loader/loader.svg";

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
      <Navbar isLogedIn={user.authenticated} />
      {!auth.isAuthenticated() ? (
        <img src={Loader} width="100px" height="100px" alt="Page Loading" />
      ) : (
        "Helllo Dear!"
      )}
      <h3>Welcome </h3>
      <h3>{user.firstname}</h3>
      <h4>{user.username}</h4>
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
      {console.log(props.user)}
    </React.Fragment>
  );
};

export default Profile;
