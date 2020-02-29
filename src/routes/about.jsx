import React, { Component } from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Sumit from "../media/team/sumit.jpeg";
import Aniket from "../media/team/aniket.jpeg";
import Nishant from "../media/team/nishant.jpeg";
import Amarnath from "../media/team/amarnath.jpeg";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar isLogedIn={this.props.authenticated} />
        <h1 style={{ padding: "10px", margin: "10px", textAlign: "center" }}>
          <b>The Team.</b>
        </h1>

        <Container style={{ marginBottom: "20px" }}>
          <Row>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={Sumit} />
                <Card.Body>
                  <Card.Title
                    className="text-muted"
                    style={{ textAlign: "center" }}
                  >
                    Sumit Kumar
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://www.linkedin.com/in/aniket-k-224901112"
                    />
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://www.facebook.com/profile.php?id=100017847277255"
                    />
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://github.com/aniket-28sep"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={Aniket} />
                <Card.Body>
                  <Card.Title
                    className="text-muted"
                    style={{ textAlign: "center" }}
                  >
                    Aniket Kumar
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://www.linkedin.com/in/aniket-k-224901112"
                    />
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://www.facebook.com/profile.php?id=100017847277255"
                    />
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://github.com/aniket-28sep"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={Amarnath} />
                <Card.Body>
                  <Card.Title
                    className="text-muted"
                    style={{ textAlign: "center" }}
                  >
                    Amarnath Bhakt
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://www.linkedin.com/in/sourav-prasad-414562151/"
                    />
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://www.facebook.com/saurav.prasad.5"
                    />
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://github.com/sourav731"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={Nishant} />
                <Card.Body>
                  <Card.Title
                    className="text-muted"
                    style={{ textAlign: "center" }}
                  >
                    Nishant Raj
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://www.linkedin.com/in/nishant-raj-1776b0165/"
                    />
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://www.facebook.com/nishant.singhraj.1"
                    />
                    <SocialIcon
                      style={{ margin: "3px" }}
                      url="https://github.com/nish-976"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
