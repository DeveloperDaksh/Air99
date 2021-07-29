// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="mt-lg-4 align-items-center">
              <Col lg={5} md={12} className="text-center text-lg-start">
                <div className="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
                  <h4 className="title mb-4">Our Comfortable Rates</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                  <a
                    href="https://1.envato.market/landrickreactjs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-4"
                  >
                    Buy Now{" "}
                    <span className="badge rounded-pill bg-danger ms-2">
                      v3.1
                    </span>
                  </a>
                </div>
              </Col>

              <Col lg={7} md={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div className="ms-lg-5">
                  <Row className="align-items-center">
                    <Col md={6} xs={12} className="px-md-0">
                      <Card className="pricing-rates starter-plan shadow rounded border-0">
                        <CardBody className="py-5">
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
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Get Started
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col
                      md={6}
                      xs={12}
                      className="mt-4 pt-2 pt-sm-0 mt-sm-0 px-md-0"
                    >
                      <Card className="pricing-rates bg-light shadow rounded border-0">
                        <CardBody className="py-5">
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
                              Free Appointments
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Try it now
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default Pricing;
