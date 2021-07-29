import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

//Import Images
import img1 from "../../assets/images/client/amazon.svg";
import img2 from "../../assets/images/client/google.svg";
import img3 from "../../assets/images/client/lenovo.svg";
import img4 from "../../assets/images/client/paypal.svg";
import img5 from "../../assets/images/client/shopify.svg";
import img6 from "../../assets/images/client/spotify.svg";

class Client extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center" id="partners">
            <Col
              id="partner1"
              lg="2"
              md="2"
              xs="6"
              className="text-center pt-5"
            >
              <img src={img1} className="avatar avatar-ex-sm" alt="" />
            </Col>

            <Col
              id="partner2"
              lg="2"
              md="2"
              xs="6"
              className="text-center pt-5"
            >
              <img src={img2} className="avatar avatar-ex-sm" alt="" />
            </Col>

            <Col
              id="partner3"
              lg="2"
              md="2"
              xs="6"
              className="text-center pt-5  mt-4 mt-sm-0"
            >
              <img src={img3} className="avatar avatar-ex-sm" alt="" />
            </Col>

            <Col
              id="partner4"
              lg="2"
              md="2"
              xs="6"
              className="text-center pt-5  mt-4 mt-sm-0"
            >
              <img src={img4} className="avatar avatar-ex-sm" alt="" />
            </Col>

            <Col
              id="partner5"
              lg="2"
              md="2"
              xs="6"
              className="text-center pt-5  mt-4 mt-sm-0"
            >
              <img src={img5} className="avatar avatar-ex-sm" alt="" />
            </Col>

            <Col
              id="partner6"
              lg="2"
              md="2"
              xs="6"
              className="text-center pt-5  mt-4 mt-sm-0"
            >
              <img src={img6} className="avatar avatar-ex-sm" alt="" />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Client;
