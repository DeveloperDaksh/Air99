import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

//Import Images
import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";

export default class Reviews extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col lg={4} xs={12}>
              <div className="sticky-bar">
                <div className="section-title text-lg-start text-center mb-4 mb-lg-0 pb-2 pb-lg-0">
                  <h6 className="text-primary">Reviews</h6>
                  <h4 className="title mb-4">People love us</h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={8} xs={12}>
              <Row className="align-items-center">
                <Col md={6}>
                  <Row>
                    <Col xs={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <div className="d-flex client-testi">
                        <img
                          src={client1}
                          className="avatar avatar-small me-3 rounded shadow"
                          alt=""
                        />
                        <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                          <ul className="list-unstyled mb-0">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                          </ul>
                          <p className="text-muted mt-2">
                            " It seems that only fragments of the original text
                            remain in the Lorem Ipsum texts used today. "
                          </p>
                          <h6 className="text-primary">
                            - Thomas Israel{" "}
                            <small className="text-muted">C.E.O</small>
                          </h6>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} className="mt-4 pt-2">
                      <div className="d-flex client-testi">
                        <img
                          src={client2}
                          className="avatar avatar-small me-3 rounded shadow"
                          alt=""
                        />
                        <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                          <ul className="list-unstyled mb-0">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star-half text-warning"></i>
                            </li>
                          </ul>
                          <p className="text-muted mt-2">
                            " One disadvantage of Lorum Ipsum is that in Latin
                            certain letters appear more frequently than others.
                            "
                          </p>
                          <h6 className="text-primary">
                            - Barbara McIntosh{" "}
                            <small className="text-muted">M.D</small>
                          </h6>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} className="mt-4 pt-2">
                      <div className="d-flex client-testi">
                        <img
                          src={client3}
                          className="avatar avatar-small me-3 rounded shadow"
                          alt=""
                        />
                        <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                          <ul className="list-unstyled mb-0">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                          </ul>
                          <p className="text-muted mt-2">
                            " The most well-known dummy text is the 'Lorem
                            Ipsum', which is said to have originated in the 16th
                            century. "
                          </p>
                          <h6 className="text-primary">
                            - Carl Oliver{" "}
                            <small className="text-muted">P.A</small>
                          </h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <div className="d-flex client-testi">
                        <img
                          src={client4}
                          className="avatar avatar-small me-3 rounded shadow"
                          alt=""
                        />
                        <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                          <ul className="list-unstyled mb-0">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                          </ul>
                          <p className="text-muted mt-2">
                            " According to most sources, Lorum Ipsum can be
                            traced back to a text composed by Cicero. "
                          </p>
                          <h6 className="text-primary">
                            - Christa Smith{" "}
                            <small className="text-muted">Manager</small>
                          </h6>
                        </div>
                      </div>
                    </div>

                    <Col xs={12} className="mt-4 pt-2">
                      <div className="d-flex client-testi">
                        <img
                          src={client5}
                          className="avatar avatar-small me-3 rounded shadow"
                          alt=""
                        />
                        <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                          <ul className="list-unstyled mb-0">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning"></i>
                            </li>
                          </ul>
                          <p className="text-muted mt-2">
                            " There is now an abundance of readable dummy texts.
                            These are usually used when a text is required. "
                          </p>
                          <h6 className="text-primary">
                            - Dean Tolle{" "}
                            <small className="text-muted">Developer</small>
                          </h6>
                        </div>
                      </div>
                    </Col>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
