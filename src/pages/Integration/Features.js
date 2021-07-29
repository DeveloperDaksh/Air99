import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class Partners extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row>
                <Col md={6}>
                  <div className="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div className="icons text-primary text-center mx-auto">
                      <i className="uil uil-shield d-block rounded h3 mb-0"></i>
                    </div>
                    <div className="flex-1 ms-4">
                      <Link to="#" className="title text-dark h5">
                        Security
                      </Link>
                      <p className="text-muted mt-2 mb-0">
                        Composed in a pseudo-Latin language which more or less
                        pseudo-Latin language corresponds.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div className="icons text-primary text-center mx-auto">
                      <i className="uil uil-atom d-block rounded h3 mb-0"></i>
                    </div>
                    <div className="flex-1 ms-4">
                      <Link to="#" className="title text-dark h5">
                        Reliability
                      </Link>
                      <p className="text-muted mt-2 mb-0">
                        Composed in a pseudo-Latin language which more or less
                        pseudo-Latin language corresponds.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="mt-4 pt-2">
                  <div className="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div className="icons text-primary text-center mx-auto">
                      <i className="uil uil-medal d-block rounded h3 mb-0"></i>
                    </div>
                    <div className="flex-1 ms-4">
                      <Link to="#" className="title text-dark h5">
                        Compliance
                      </Link>
                      <p className="text-muted mt-2 mb-0">
                        Composed in a pseudo-Latin language which more or less
                        pseudo-Latin language corresponds.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="mt-4 pt-2">
                  <div className="d-flex features feature-clean core-feature rounded shadow p-4">
                    <div className="icons text-primary text-center mx-auto">
                      <i className="uil uil-padlock d-block rounded h3 mb-0"></i>
                    </div>
                    <div className="flex-1 ms-4">
                      <Link to="#" className="title text-dark h5">
                        Privacy
                      </Link>
                      <p className="text-muted mt-2 mb-0">
                        Composed in a pseudo-Latin language which more or less
                        pseudo-Latin language corresponds.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xs={12} className="mt-4 pt-2 text-center">
                  <Link to="#" className="text-primary h6">
                  Explore features{" "}
                    <i>
                      <FeatherIcon icon="arrow-right" className="fea icon-sm" />{" "}
                    </i>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
