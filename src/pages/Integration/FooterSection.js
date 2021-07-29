import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

export default class FooterSection extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="px-0">
          <div className="py-5 bg-footer">
            <Container>
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="section-title">
                    <div className="d-flex">
                      <i className="uil uil-mobile-android display-4 text-white title-dark"></i>
                      <div className="flex-1 ms-md-4 ms-3">
                        <h4 className="fw-bold text-light title-dark mb-1">
                          Download our app now !
                        </h4>
                        <p className="text-white-50 mb-0">
                          Build modern looking websites fast and easy using
                          Landflow.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={5} className="mt-4 mt-sm-0">
                  <div className="text-md-end ms-5 ms-sm-0">
                    <Link
                      to="#"
                      className="btn btn-primary me-2 me-lg-2 me-md-0 my-2"
                    >
                      <i className="uil uil-apple"></i> App Store
                    </Link>
                    <Link to="#" className="btn btn-soft-primary my-2">
                      <i className="uil uil-google-play"></i> Play Store
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
