import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import facebook from "../../assets/images/client/facebook.svg";
import instagram from "../../assets/images/client/instagram.svg";
import tinder from "../../assets/images/client/tinder.svg";
import whatsapp from "../../assets/images/client/whatsapp.svg";
import google from "../../assets/images/client/google.svg";
import dribble from "../../assets/images/client/dribbble.svg";

class Companies extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col lg={2} md={2} xs={6} className="text-center">
              <img
                src={facebook}
                className="avatar avatar-ex-sm"
                alt="Landrick"
              />
            </Col>

            <Col lg={2} md={2} xs={6} className="text-center">
              <img
                src={instagram}
                className="avatar avatar-ex-sm"
                alt="Landrick"
              />
            </Col>

            <Col lg={2} md={2} xs={6} className="text-center pt-5 pt-sm-0">
              <img
                src={tinder}
                className="avatar avatar-ex-sm"
                alt="Landrick"
              />
            </Col>

            <Col lg={2} md={2} xs={6} className="text-center pt-5 pt-sm-0">
              <img
                src={whatsapp}
                className="avatar avatar-ex-sm"
                alt="Landrick"
              />
            </Col>

            <Col lg={2} md={2} xs={6} className="text-center pt-5 pt-sm-0">
              <img
                src={google}
                className="avatar avatar-ex-sm"
                alt="Landrick"
              />
            </Col>

            <Col lg={2} md={2} xs={6} className="text-center pt-5 pt-sm-0">
              <img
                src={dribble}
                className="avatar avatar-ex-sm"
                alt="Landrick"
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Companies;
