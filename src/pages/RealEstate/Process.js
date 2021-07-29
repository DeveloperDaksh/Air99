import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class Process extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title mb-4 pb-2 text-center">
                <span className="badge rounded-pill bg-soft-primary">
                  Process
                </span>
                <h4 className="title mt-3 mb-4">How it work</h4>
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
            <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
              <Card className="card border-0 text-center features feature-clean rounded">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-map-marker-plus d-block rounded h3 mb-0"></i>
                </div>

                <CardBody className="p-0 mt-4">
                  <Link to="#" className="title h5 text-dark">
                    Map Search
                  </Link>
                  <p className="text-muted mt-3 mb-0">
                    Composed in a pseudo-Latin language which more or less
                    pseudo-Latin language corresponds.
                  </p>
                  <div className="mt-2">
                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i><FeatherIcon icon="arrow-right" className="fea icon-sm" /></i>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
              <Card className="border-0 text-center features feature-clean rounded">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-home d-block rounded h3 mb-0"></i>
                </div>

                <CardBody className="p-0 mt-4">
                  <Link to="#" className="title h5 text-dark">
                    Property Lookup
                  </Link>
                  <p className="text-muted mt-3 mb-0">
                    Composed in a pseudo-Latin language which more or less
                    pseudo-Latin language corresponds.
                  </p>
                  <div className="mt-2">
                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i><FeatherIcon icon="arrow-right" className="fea icon-sm" /></i>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
              <Card className="border-0 text-center features feature-clean rounded">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-house-user d-block rounded h3 mb-0"></i>
                </div>

                <CardBody className="p-0 mt-4">
                  <Link to="#" className="title h5 text-dark">
                    Buy / Sell Property
                  </Link>
                  <p className="text-muted mt-3 mb-0">
                    Composed in a pseudo-Latin language which more or less
                    pseudo-Latin language corresponds.
                  </p>
                  <div className="mt-2">
                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i><FeatherIcon icon="arrow-right" className="fea icon-sm" /></i>
                    </Link>
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
