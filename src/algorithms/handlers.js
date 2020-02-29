import axios from "axios";

export default class EventHandler {
  static validateUserData = async data => {
    let userData = {
      firstname: "firstname",
      lastname: "lastname",
      username: "username",
      status: false
    };
    await axios
      .post(`http://localhost:5000/users/login`, {
        username: data.username,
        password: data.password
      })
      .then(
        res => {
          console.log(data.username);

          if (res.data.username === data.username) {
            userData.firstname = res.data.firstname;
            userData.lastname = res.data.lastname;
            userData.username = res.data.username;
            userData.status = true;
          }
        },
        err => {
          console.log(err);
        }
      );
    console.log(userData);
    return userData;
  };

  static saveUserData = async data => {
    let userData = {
      firstname: "res.data.firstname",
      lastname: "res.data.lastname",
      username: "data.username",
      status: false
    };
    await axios.post(`http://localhost:5000/users/signup`, data).then(
      res => {
        userData.firstname = res.data.firstname;
        userData.lastname = res.data.lastname;
        userData.username = res.data.username;
        userData.status = true;
      },
      err => {
        console.log(err);
      }
    );
    return userData;
  };
}
