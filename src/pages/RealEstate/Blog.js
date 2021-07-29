import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

import build from '../../assets/images/real/build.png';

import real1 from '../../assets/images/real/p1.jpg';
import real2 from '../../assets/images/real/p2.jpg';
import real3 from '../../assets/images/real/p3.jpg';

export default class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="section bg-white pt-0"
          style={{ background: `url(${build}) bottom no-repeat` }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Latest Blog & News</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{" "}
                    <span className="text-primary fw-bold">Landrick</span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={4} md={6} className="mt-4 pt-2">
                <Card className="blog rounded border-0 shadow">
                  <div className="position-relative">
                    <img
                      src={real1}
                      className="card-img-top rounded-top"
                      alt="..."
                    />
                    <div className="overlay rounded-top bg-dark"></div>
                  </div>
                  <CardBody className="content">
                    <h5>
                      <Link
                        to="#"
                        className="card-title title text-dark"
                      >
                        Design your apps in your own way
                      </Link>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <Link to="#" className="text-muted like">
                            <i className="mdi mdi-heart-outline me-1"></i>33
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="text-muted comments"
                          >
                            <i className="mdi mdi-comment-outline me-1"></i>08
                          </Link>
                        </li>
                      </ul>
                      <Link
                        to="page-blog-detail.html"
                        className="text-muted readmore"
                      >
                        Read More <i className="mdi mdi-chevron-right"></i>
                      </Link>
                    </div>
                  </CardBody>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="mdi mdi-calendar-check"></i> 13th August, 2019
                    </small>
                  </div>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <Card className="blog rounded border-0 shadow">
                  <div className="position-relative">
                    <img
                      src={real2}
                      className="card-img-top rounded-top"
                      alt="..."
                    />
                    <div className="overlay rounded-top bg-dark"></div>
                  </div>
                  <CardBody className="content">
                    <h5>
                      <Link
                        to="#"
                        className="card-title title text-dark"
                      >
                        How apps is changing the IT world
                      </Link>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <Link to="#" className="text-muted like">
                            <i className="mdi mdi-heart-outline me-1"></i>33
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="text-muted comments"
                          >
                            <i className="mdi mdi-comment-outline me-1"></i>08
                          </Link>
                        </li>
                      </ul>
                      <Link
                        to="page-blog-detail.html"
                        className="text-muted readmore"
                      >
                        Read More <i className="mdi mdi-chevron-right"></i>
                      </Link>
                    </div>
                  </CardBody>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="mdi mdi-calendar-check"></i> 13th August, 2019
                    </small>
                  </div>
                </Card>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <Card className="blog rounded border-0 shadow">
                  <div className="position-relative">
                    <img
                      src={real3}
                      className="card-img-top rounded-top"
                      alt="..."
                    />
                    <div className="overlay rounded-top bg-dark"></div>
                  </div>
                  <CardBody className="content">
                    <h5>
                      <Link
                        to="#"
                        className="card-title title text-dark"
                      >
                        Smartest Applications for Business
                      </Link>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <Link to="#" className="text-muted like">
                            <i className="mdi mdi-heart-outline me-1"></i>33
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="text-muted comments"
                          >
                            <i className="mdi mdi-comment-outline me-1"></i>08
                          </Link>
                        </li>
                      </ul>
                      <Link
                        to="page-blog-detail.html"
                        className="text-muted readmore"
                      >
                        Read More <i className="mdi mdi-chevron-right"></i>
                      </Link>
                    </div>
                  </CardBody>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="mdi mdi-calendar-check"></i> 13th August, 2019
                    </small>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
