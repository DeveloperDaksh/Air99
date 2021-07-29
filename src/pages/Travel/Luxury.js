import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

import travel from "../../assets/images/travel/1.jpg";

export default class Luxury extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <div className="section-title">
                <h4 className="title fw-bold mb-4">
                  Everyone Needs Travel. <br /> Want to Break Free for a While
                </h4>
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
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={5} md={6}>
              <Card className="blog rounded border-0 shadow overflow-hidden">
                <div className="position-relative">
                  <img src={travel} className="card-img-top" alt="..." />
                  <div className="overlay rounded-top bg-dark"></div>
                </div>
                <CardBody className="content">
                  <h5>
                    <Link to="#" className="card-title title text-dark">
                      Conversations, Feedback, Recognition
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
                        <Link to="#" className="text-muted comments">
                          <i className="uil uil-comment me-1"></i>08
                        </Link>
                      </li>
                    </ul>
                    <Link to="#" className="text-muted readmore">
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

            <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-4">
                <h4 className="title mb-4">
                  Experience Luxury & <br /> Find Your Base
                </h4>
                <p className="text-muted">
                  You can combine all the Landrick templates into a single one,
                  you can take a component from the Application theme and use it
                  in the Website.
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Create your own skin to match your brand
                  </li>
                </ul>
                <Link to="#" className="mt-3 h6 text-primary">
                  Search Destination <i className="mdi mdi-chevron-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
