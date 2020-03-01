import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/protected.route";
//Components
import Home from "./routes/home";
import Login from "./routes/login";
import SignUp from "./routes/signup";
import About from "./routes/about";
import ContactUs from "./routes/contactUs";
import Profile from "./routes/profile";
import Request from "./routes/request";
//Algorithms
import { UserContext } from "./user.context";
import auth from "./algorithms/auth";

const App = () => {
  const [user, setUser] = React.useState({
    firstname: "firstname",
    lastname: "lastname",
    username: "username",
    authenticated: false
  });

  (async () => {
    setUser(await auth.getUser());
  })();
  //console.log(user);

  const handleSubmit = async (args, data, props) => {
    if (args === "login") {
      await auth.login(data, () => {});
      if (auth.isAuthenticated()) {
        props.history.push("/profile");
      }
    }
    if (args === "signup") {
      await auth.signup(data, () => {
        if (auth.isAuthenticated()) {
          props.history.push("/profile");
        }
      });
    }
    if (args === "logout") {
      setUser({
        firstname: "firstname",
        lastname: "lastname",
        username: "username",
        authenticated: false
      });
      auth.setUser(user);
      console.log(auth.isAuthenticated());
    }
    setUser(auth.getUser());
    console.log(user);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <UserContext.Provider value={{ user, setUser }}>
            <Route
              exact
              path="/home"
              component={props => <Home {...props} />}
            />
            <Route
              exact
              path="/request"
              component={props => <Request {...props} />}
            />
            <Route
              exact
              path="/contact-us"
              component={props => <ContactUs {...props} />}
            />

            <Route
              exact
              path="/signup"
              component={props => <SignUp {...props} onSubmit={handleSubmit} />}
            />
            <Route
              exact
              path="/login"
              component={props => <Login {...props} onSubmit={handleSubmit} />}
            />
            <ProtectedRoute
              exact
              path="/profile"
              component={props => (
                <Profile {...props} onSubmit={handleSubmit} user={user} />
              )}
            />
            <Route path="/about" component={props => <About {...props} />} />
          </UserContext.Provider>
          <Route path="*" render={() => "404 NOT FOUND!"} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
