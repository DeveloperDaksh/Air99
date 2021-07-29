import React, { Component } from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import ctaImg from "../../assets/images/insurance/cta.jpg";

class Cta extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="mt-100 mt-60">
          <div
            className="rounded py-5"
            style={{ background: `url(${ctaImg}) center center` }}
          >
            <Container className="py-md-5 py-3">
              <Row>
                <Col
                  lg={{ size: 6, offset: 6 }}
                  md={{ size: 7, offset: 5 }}
                  xs={12}
                >
                  <Card className="border-0">
                    <CardBody className="p-md-5 p-4 bg-white rounded">
                      <div className="section-title">
                        <h4 className="title mb-4">Advantages</h4>
                        <p className="text-muted para-desc mb-0">
                          Start working with{" "}
                          <span className="text-primary fw-bold">
                            Landrick
                          </span>{" "}
                          that can provide everything you need to generate
                          awareness, drive traffic, connect.
                        </p>
                      </div>

                      <Row>
                        <Col md={6} xs={12} className="mt-4">
                          <div className="d-flex align-items-center">
                            <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                              <i className="uil uil-umbrella"></i>
                            </div>
                            <div className="flex-1">
                              <h6 className="title text-dark mb-0">
                                Protection
                              </h6>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} xs={12} className="mt-4">
                          <div className="d-flex align-items-center">
                            <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                              <i className="uil uil-user"></i>
                            </div>
                            <div className="flex-1">
                              <h6 className="title text-dark mb-0">
                                Customers
                              </h6>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} xs={12} className="mt-4">
                          <div className="d-flex align-items-center">
                            <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                              <i className="uil uil-money-bill"></i>
                            </div>
                            <div className="flex-1">
                              <h6 className="title text-dark mb-0">
                                Save on rates
                              </h6>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} xs={12} className="mt-4">
                          <div className="d-flex align-items-center">
                            <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                              <i className="uil uil-bolt-alt"></i>
                            </div>
                            <div className="flex-1">
                              <h6 className="title text-dark mb-0">
                                Fast Process
                              </h6>
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <div className="mt-4">
                        <Link to="#" className="btn btn-primary">
                          Protect your life{" "}
                          <i className="uil uil-angle-right-b align-middle"></i>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Cta;
