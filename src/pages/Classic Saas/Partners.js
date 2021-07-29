import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Images
import img1 from "../../assets/images/client/amazon.svg";
import img2 from "../../assets/images/client/google.svg";
import img3 from "../../assets/images/client/lenovo.svg";
import img4 from "../../assets/images/client/paypal.svg";
import img5 from "../../assets/images/client/shopify.svg";
import img6 from "../../assets/images/client/spotify.svg";

class Partners extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="pt-5">
          <Container>
            <Row className="justify-content-center">
              <Col lg="2" md="2" xs="6" className="text-center">
                <img src={img1} className="avatar avatar-ex-sm" alt="" />
              </Col>

              <Col lg="2" md="2" xs="6" className="text-center">
                <img src={img2} className="avatar avatar-ex-sm" alt="" />
              </Col>

              <Col lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                <img src={img3} className="avatar avatar-ex-sm" alt="" />
              </Col>

              <Col lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                <img src={img4} className="avatar avatar-ex-sm" alt="" />
              </Col>

              <Col lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                <img src={img5} className="avatar avatar-ex-sm" alt="" />
              </Col>

              <Col lg="2" md="2" xs="6" className="text-center  mt-4 mt-sm-0">
                <img src={img6} className="avatar avatar-ex-sm" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Partners;
