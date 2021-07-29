import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//import bg image
import bg_image from "../../assets/images/construction/bg.jpg";

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 d-table w-100"
          style={{ background: `url(${bg_image}) center center` }}
        >
          <div className="bg-overlay" style={{ opacity: "0.65" }}></div>
          <Container>
            <Row className="mt-5 mt-md-4">
              <Col xs={12}>
                <div className="title-heading">
                  <h4 className="display-4 mb-4 fw-bold text-white title-dark">
                    Start building <br /> your dream home
                  </h4>
                  <p className="para-desc text-white-50">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-primary">
                      Get Started
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
