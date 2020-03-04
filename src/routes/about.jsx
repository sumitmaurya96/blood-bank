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
import Sourav from "../media/team/sourav.jpg";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar {...this.props} />
        <div className="pb-5 pt-4" style={{ backgroundColor: "#FFB3B3" }}>
          <p className="pb-3 h1 bold text-center">Developer's Team</p>
          <Container>
            <Row>
              <Col>
                <Card
                  className="m-4 mx-auto"
                  style={{ width: "15rem", backgroundColor: "#ff8080" }}
                >
                  <Card.Img variant="top" src={Sumit} />
                  <Card.Body>
                    <Card.Title className=" text-center">
                      Sumit Kumar
                    </Card.Title>
                    <Card.Text className="text-center">
                      <SocialIcon
                        className="m-1"
                        url="https://www.linkedin.com/in/aniket-k-224901112"
                      />
                      <SocialIcon
                        className="m-1"
                        url="https://www.facebook.com/profile.php?id=100017847277255"
                      />
                      <SocialIcon
                        className="m-1"
                        url="https://github.com/aniket-28sep"
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  className="m-4 mx-auto"
                  style={{ width: "15rem", backgroundColor: "#ff8080" }}
                >
                  <Card.Img variant="top" src={Aniket} />
                  <Card.Body>
                    <Card.Title className=" text-center">
                      Aniket Kumar
                    </Card.Title>
                    <Card.Text className="text-center">
                      <SocialIcon
                        className="m-1"
                        url="https://www.linkedin.com/in/aniket-k-224901112"
                      />
                      <SocialIcon
                        className="m-1"
                        url="https://www.facebook.com/profile.php?id=100017847277255"
                      />
                      <SocialIcon
                        className="m-1"
                        url="https://github.com/aniket-28sep"
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  className="m-4 mx-auto"
                  style={{ width: "15rem", backgroundColor: "#ff8080" }}
                >
                  <Card.Img
                    variant="top"
                    src={Sourav}
                    style={{ height: "240px" }}
                  />
                  <Card.Body>
                    <Card.Title className=" text-center">
                      Sourav Prasad
                    </Card.Title>
                    <Card.Text className="text-center">
                      <SocialIcon
                        className="m-1"
                        url="https://www.linkedin.com/in/sourav-prasad-414562151/"
                      />
                      <SocialIcon
                        className="m-1"
                        url="https://www.facebook.com/saurav.prasad.5"
                      />
                      <SocialIcon
                        className="m-1"
                        url="https://github.com/sourav731"
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  className="m-4 mx-auto"
                  style={{ width: "15rem", backgroundColor: "#ff8080" }}
                >
                  <Card.Img variant="top" src={Nishant} />
                  <Card.Body>
                    <Card.Title className=" text-center">
                      Nishant Raj
                    </Card.Title>
                    <Card.Text className="text-center">
                      <SocialIcon
                        className="m-1"
                        url="https://www.linkedin.com/in/nishant-raj-1776b0165/"
                      />
                      <SocialIcon
                        className="m-1"
                        url="https://www.facebook.com/nishant.singhraj.1"
                      />
                      <SocialIcon
                        className="m-1"
                        url="https://github.com/nish-976"
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
