import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";

export default class ExpertsTeam extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-4">Our Experts</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
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
            <Col lg={3} md={6} className="mt-4 pt-2">
              <Card className="team bg-light text-center rounded shadow border-0">
                <CardBody>
                  <div className="position-relative">
                    <img
                      src={img1}
                      className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="facebook"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="instagram"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="twitter"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="content pt-3">
                    <h5 className="mb-0">
                      <Link to="#" className="name text-dark">
                        Ronny Jofra
                      </Link>
                    </h5>
                    <small className="designation text-muted">
                      Commercial Broker
                    </small>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mt-4 pt-2">
              <Card className="team bg-light text-center rounded shadow border-0">
                <CardBody>
                  <div className="position-relative">
                    <img
                      src={img4}
                      className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="facebook"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="instagram"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="twitter"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="content pt-3">
                    <h5 className="mb-0">
                      <Link to="#" className="name text-dark">
                        Micheal Carlo
                      </Link>
                    </h5>
                    <small className="designation text-muted">
                      Commercial Broker
                    </small>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mt-4 pt-2">
              <Card className="team bg-light text-center rounded shadow border-0">
                <CardBody>
                  <div className="position-relative">
                    <img
                      src={img3}
                      className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="facebook"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="instagram"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="twitter"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="content pt-3">
                    <h5 className="mb-0">
                      <Link to="#" className="name text-dark">
                        Aliana Rosy
                      </Link>
                    </h5>
                    <small className="designation text-muted">
                      Commercial Broker
                    </small>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mt-4 pt-2">
              <Card className="team bg-light text-center rounded shadow border-0">
                <CardBody>
                  <div className="position-relative">
                    <img
                      src={img2}
                      className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="facebook"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="instagram"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="twitter"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-2">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="content pt-3">
                    <h5 className="mb-0">
                      <Link to="#" className="name text-dark">
                        Sofia Razaq
                      </Link>
                    </h5>
                    <small className="designation text-muted">
                      Commercial Broker
                    </small>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
