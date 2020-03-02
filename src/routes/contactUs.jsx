import React, { Component } from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./components/footer";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar {...this.props} />
        <div>
          <div className="border-0 p-4" style={{ backgroundColor: "#650101" }}>
            <p className="h2 text-light">We are here to assist you.</p>
            <p className="text-muted ml-4">
              Just drop us a mail and we will respond.
            </p>
          </div>

          <div className="py-4 mx-auto" style={{ backgroundColor: "#FFB3B3" }}>
            <Form className="mx-5 p-3 border-dark border rounded ">
              <Form.Group controlId="userNameContact">
                <Form.Label>
                  <b>Name</b>
                </Form.Label>
                <Form.Control
                  className="border border-dark rounded"
                  style={{ backgroundColor: "#FFB3B3" }}
                  type="text"
                  placeholder="Full name"
                />
              </Form.Group>

              <Form.Group controlId="emailIdContact">
                <Form.Label>
                  <b>Email address</b>
                </Form.Label>
                <Form.Control
                  className="border border-dark rounded"
                  style={{ backgroundColor: "#FFB3B3" }}
                  type="email"
                  placeholder="username@example.com"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="feedbackContact">
                <Form.Label>
                  <b>Feedback</b>
                </Form.Label>
                <Form.Control
                  className="border border-dark rounded"
                  style={{ backgroundColor: "#FFB3B3" }}
                  size="lg"
                  as="textarea"
                  rows="3"
                />
              </Form.Group>

              <button
                className="btn btn-lg mx-auto my-2"
                style={{
                  backgroundColor: "#ff8080",
                  border: "3px solid #f7e6e6"
                }}
              >
                Send
              </button>
            </Form>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
