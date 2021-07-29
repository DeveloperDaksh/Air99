import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// Import images
import homeImage from "../../assets/images/app/home.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 d-table w-100" id="home">
          <Container>
            <Row className="mt-5 align-items-center">
              <Col lg={6} md={7}>
                <div className="title-heading">
                  <h1 className="heading mb-3">
                    Manage all of you stuff using{" "}
                    <span className="text-primary">Landrick.</span> app
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary mt-2 me-2">
                      <i className="uil uil-apple"></i> App Store
                    </Link>
                    <Link to="#" className="btn btn-outline-primary mt-2 ms-1">
                      <i className="uil uil-google-play"></i> Play Store
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="text-md-end text-center ms-lg-4">
                  <img src={homeImage} className="img-fluid" alt="" />
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
