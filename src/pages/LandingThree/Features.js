import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="features-absolute">
                <Row>
                  <Col md={6}>
                    <div className="d-flex features feature-clean p-4 bg-white shadow rounded">
                      <div className="icons text-primary d-block text-center rounded">
                        <i className="uil uil-comment-verify d-block rounded h3 mb-0"></i>
                      </div>
                      <div className="flex-1 content ms-4">
                        <h5 className="mb-1">
                          <Link to="#" className="text-dark">
                            Instant Chat
                          </Link>
                        </h5>
                        <p className="text-muted mb-0">
                          The most well-known dummy text is the, which is said
                          to have originated in the 16th century.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="d-flex features feature-clean p-4 bg-white shadow rounded">
                      <div className="icons text-primary d-block text-center rounded">
                        <i className="uil uil-image d-block rounded h3 mb-0"></i>
                      </div>
                      <div className="flex-1 content ms-4">
                        <h5 className="mb-1">
                          <Link to="#" className="text-dark">
                            Media Messages
                          </Link>
                        </h5>
                        <p className="text-muted mb-0">
                          The most well-known dummy text is the, which is said
                          to have originated in the 16th century.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className="mt-4 pt-2">
                    <div className="d-flex features feature-clean p-4 bg-white shadow rounded">
                      <div className="icons text-primary d-block text-center rounded">
                        <i className="uil uil-video d-block rounded h3 mb-0"></i>
                      </div>
                      <div className="flex-1 content ms-4">
                        <h5 className="mb-1">
                          <Link to="#" className="text-dark">
                            Video Messages
                          </Link>
                        </h5>
                        <p className="text-muted mb-0">
                          The most well-known dummy text is the, which is said
                          to have originated in the 16th century.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className="mt-4 pt-2">
                    <div className="d-flex features feature-clean p-4 bg-white shadow rounded">
                      <div className="icons text-primary d-block text-center rounded">
                        <i className="uil uil-database-alt d-block rounded h3 mb-0"></i>
                      </div>
                      <div className="flex-1 content ms-4">
                        <h5 className="mb-1">
                          <Link to="#" className="text-dark">
                            Dedicated Server
                          </Link>
                        </h5>
                        <p className="text-muted mb-0">
                          The most well-known dummy text is the, which is said
                          to have originated in the 16th century.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <div className="col-12 mt-4 pt-2 text-center">
                    <Link to="#" className="text-primary h6">
                      Explore features{" "}
                      <i data-feather="arrow-right" className="fea icon-sm"></i>
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                    </Link>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
