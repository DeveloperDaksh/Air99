import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//import images
import services from '../../assets/images/construction/serveices.png';

export default class ProjectPlanning extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="features-absolute rounded bg-white shadow">
                  <Row>
                    <Col lg={8} md={12} className="my-4">
                      <Row>
                        <Col md={6} xs={12}>
                          <div className="d-flex features p-4">
                            <div className="icon text-center rounded-circle text-primary me-3 mt-2">
                              <i className="uil uil-ruler-combined align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">Project Planning</h4>
                              <p className="text-muted para mb-0">
                                Composed in a pseudo-Latin language which more
                                corresponds.
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} xs={12}>
                          <div className="d-flex features p-4">
                            <div className="icon text-center rounded-circle text-primary me-3 mt-2">
                              <i className="uil uil-constructor align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">Qualified Specialists</h4>
                              <p className="text-muted para mb-0">
                                Composed in a pseudo-Latin language which more
                                corresponds.
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} xs={12}>
                          <div className="d-flex features p-4">
                            <div className="icon text-center rounded-circle text-primary me-3 mt-2">
                              <i className="uil uil-no-entry align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">Constant Maintenance</h4>
                              <p className="text-muted para mb-0">
                                Composed in a pseudo-Latin language which more
                                corresponds.
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} xs={12}>
                          <div className="d-flex features p-4">
                            <div className="icon text-center rounded-circle text-primary me-3 mt-2">
                              <i className="uil uil-cog align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">Warranty Service</h4>
                              <p className="text-muted para mb-0">
                                Composed in a pseudo-Latin language which more
                                corresponds.
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col lg={4} className="d-none d-lg-block position-relative">
                      <img
                        src={services}
                        className="img-fluid mx-auto d-block construction-img"
                        alt=""
                      />
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col xs={12} className="mt-4 pt-2 text-center">
                <p className="text-muted mb-0">
                  Our list of services does not end here.{" "}
                  <Link to="#" className="text-primary h6">
                    Click here
                  </Link>
                  , and We’ll come up with more solution for you!
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
