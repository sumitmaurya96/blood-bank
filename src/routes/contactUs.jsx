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
        <Navbar isLogedIn={this.props.authenticated} />
        <div>
          <Jumbotron>
            <h1>Contact Us.</h1>
            <h2 style={{ color: "lightcoral" }}>We are here to assist you.</h2>
            <h3>Just drop us a mail and we will respond.</h3>
          </Jumbotron>
          <br />

          <Form
            style={{
              margin: "5px 150px 5px 150px",
              padding: "15px",
              border: "1px solid #999999",
              borderRadius: "4px"
            }}
          >
            <Form.Group controlId="userNameContact">
              <Form.Label>
                <b>Name</b>
              </Form.Label>
              <Form.Control type="text" placeholder="Full name" />
            </Form.Group>

            <Form.Group controlId="emailIdContact">
              <Form.Label>
                <b>Email address</b>
              </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="feedbackContact">
              <Form.Label>
                <b>Feedback</b>
              </Form.Label>
              <Form.Control size="lg" as="textarea" rows="3" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
