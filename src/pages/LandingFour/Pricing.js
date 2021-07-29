import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

export default class Pricing extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Comfortable Rates</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
              <Card className="pricing-rates business-rate shadow bg-light border-0 rounded">
                <CardBody>
                  <h6 className="title fw-bold text-uppercase text-primary mb-4">
                    Free
                  </h6>
                  <div className="d-flex mb-4">
                    <span className="h4 mb-0 mt-2">$</span>
                    <span className="price h1 mb-0">0</span>
                    <span className="h4 align-self-end mb-1">/mo</span>
                  </div>

                  <ul className="list-unstyled mb-0 ps-0">
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Full Access
                    </li>
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Source Files
                    </li>
                  </ul>
                  <Link to="#" className="btn btn-primary mt-4">
                    Buy Now
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
              <Card className="pricing-rates business-rate shadow bg-white border-0 rounded">
                <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                  <span className="text-center d-block shadow small h6">
                    Best
                  </span>
                </div>
                <CardBody>
                  <h6 className="title fw-bold text-uppercase text-primary mb-4">
                    Starter
                  </h6>
                  <div className="d-flex mb-4">
                    <span className="h4 mb-0 mt-2">$</span>
                    <span className="price h1 mb-0">39</span>
                    <span className="h4 align-self-end mb-1">/mo</span>
                  </div>

                  <ul className="list-unstyled mb-0 ps-0">
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Full Access
                    </li>
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Source Files
                    </li>
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Free Appointments
                    </li>
                  </ul>
                  <Link to="#" className="btn btn-primary mt-4">
                    Get Started
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
              <Card className="pricing-rates business-rate shadow bg-light border-0 rounded">
                <CardBody>
                  <h6 className="title fw-bold text-uppercase text-primary mb-4">
                    Professional
                  </h6>
                  <div className="d-flex mb-4">
                    <span className="h4 mb-0 mt-2">$</span>
                    <span className="price h1 mb-0">59</span>
                    <span className="h4 align-self-end mb-1">/mo</span>
                  </div>

                  <ul className="list-unstyled mb-0 ps-0">
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Full Access
                    </li>
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Source Files
                    </li>
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      1 Domain Free
                    </li>
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Enhanced Security
                    </li>
                  </ul>
                  <Link to="#" className="btn btn-primary mt-4">
                    Try It Now
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
              <Card className="pricing-rates business-rate shadow bg-light border-0 rounded">
                <CardBody>
                  <h6 className="title fw-bold text-uppercase text-primary mb-4">
                    Ultimate
                  </h6>
                  <div className="d-flex mb-4">
                    <span className="h4 mb-0 mt-2">$</span>
                    <span className="price h1 mb-0">79</span>
                    <span className="h4 align-self-end mb-1">/mo</span>
                  </div>

                  <ul className="list-unstyled mb-0 ps-0">
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Full Access
                    </li>
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Enhanced Security
                    </li>
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Source Files
                    </li>
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      1 Domain Free
                    </li>
                    <li className="h6 text-muted mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Free Installment
                    </li>
                  </ul>
                  <Link to="#" className="btn btn-primary mt-4">
                    Started Now
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
