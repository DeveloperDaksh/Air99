import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Cta extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <div className="rounded bg-primary bg-gradient p-lg-5 p-4">
            <Row className="align-items-end">
              <Col md={8}>
                <div className="section-title text-md-start text-center">
                  <h4 className="title mb-3 text-white title-dark">
                    Start your free 2 week trial today
                  </h4>
                  <p className="text-white-50 mb-0">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                </div>
              </Col>

              <Col md={4} className="mt-4 mt-sm-0">
                <div className="text-md-end text-center">
                  <Link to="#" className="btn btn-light">
                    Get Started
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Cta;
