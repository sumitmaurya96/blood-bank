import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../algorithms/auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          console.log("Authenticated!");
          return <Component {...props} />;
        } else {
          console.log("Not Authenticated!");
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
