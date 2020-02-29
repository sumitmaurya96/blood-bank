import axios from "axios";
import Cookies from "js-cookie";

class Auth {
  constructor() {
    this.user = {
      firstname: "firstname",
      lastname: "lastname",
      username: "username",
      authenticated: false
    };

    if (
      Cookies.getJSON().user !== undefined &&
      Cookies.getJSON().user !== null
    ) {
      console.log("Hahahahhahahahahhah!");
      this.user = Cookies.getJSON().user;
    }
  }

  login = async (user = null, cb = () => {}) => {
    //console.log(user);
    await axios
      .post(`http://localhost:5000/users/login`, {
        username: user.username,
        password: user.password
      })
      .then(
        res => {
          console.log(res);

          if (user !== null && res.data.username === user.username) {
            this.user.firstname = res.data.firstname;
            this.user.lastname = res.data.lastname;
            this.user.username = res.data.username;
            this.user.authenticated = true;
          } else {
            this.user.authenticated = false;
          }
        },
        err => {
          console.log(err);
        }
      );
    console.log(this.user);
    if (user.username === this.user.username) Cookies.set("user", this.user);
    cb();
  };

  logout = (user = null, cb = () => {}) => {
    Cookies.remove("user");
    this.user.authenticated = false;
    cb();
  };

  signup = async (user = null, cb = () => {}) => {
    await axios.post(`http://localhost:5000/users/signup`, user).then(
      res => {
        console.log(res);

        if (user !== null && res.data.username === user.username) {
          this.user.firstname = res.data.firstname;
          this.user.lastname = res.data.lastname;
          this.user.username = res.data.username;
          this.user.authenticated = true;
        } else {
          this.user.authenticated = false;
        }
      },
      err => {
        console.log(err);
      }
    );
    Cookies.set("user", this.user);
    cb();
  };

  isAuthenticated = () => {
    return this.user.authenticated;
  };

  getUser = async () => {
    return await this.user;
  };

  setUser = user => {
    this.user = user;
  };
}

export default new Auth();
