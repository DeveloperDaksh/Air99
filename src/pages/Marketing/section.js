import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// Import images
import marketingShape from "../../assets/images/marketing/marketing-shape.png";
import marketing from "../../assets/images/marketing/marketing.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-marketing d-table w-100"
          style={{ background: `url(${marketingShape})` }}
          id="home"
        >
          <Container>
            <Row className="justify-content-center mt-5">
              <Col lg="7" md="7" className="text-center">
                <img
                  src={marketing}
                  className="img-fluid"
                  style={{ maxHeight: "400px" }}
                  alt=""
                />
                <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h1 className="heading mb-3">
                    Social Media Marketing is the Best Ever
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-primary mt-2 me-2">
                      Get Started
                    </Link>
                    <Link
                      to="page-contact-one"
                      className="btn btn-outline-primary mt-2 ms-1"
                    >
                      <i className="mdi mdi-phone me-1"></i>Contact us
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
