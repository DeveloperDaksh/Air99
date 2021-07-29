import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";


class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="mt-100 mt-60">
          <div className="rounded py-5 bg-light shadow">
            <Container className="my-lg-5">
              <Row className="justify-content-center">
                <Col xs={12} className="text-center">
                  <div className="section-title mb-4 pb-2">
                    <h4 className="title mb-4">Book Pricing</h4>
                    <p className="text-muted para-desc mx-auto mb-0">
                      Start working with{" "}
                      <span className="text-primary fw-bold">
                        Landrick
                      </span>{" "}
                      that can provide everything you need to generate
                      awareness, drive traffic, connect.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col lg={9}>
                  <Row>
                    <Col md={4} xs={12} className="mt-4 pt-2">
                      <Card className="pricing-rates business-rate text-center shadow bg-white border-0 rounded">
                        <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                          <span className="text-center d-block shadow small h6">
                            Best
                          </span>
                        </div>
                        <CardBody>
                          <h5 className="title mb-4">eBook</h5>
                          <h2 className="fw-bold">$ 4.99</h2>

                          <p className="text-muted">
                            Explore everything from machine learning and global
                            payments to scaling your team.
                          </p>
                          <div className="d-grid">
                            <Button
                              className="btn btn-primary"
                            >
                              Buy Now
                          </Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col md={4} xs={12} className="mt-4 pt-2">
                      <div className="card pricing-rates business-rate starter-plan text-center shadow border-0 rounded">
                        <CardBody>
                          <h5 className="title text-primary mb-4">Print</h5>
                          <h2 className="fw-bold">$ 14.99</h2>

                          <p className="text-muted">
                            Explore everything from machine learning and global
                            payments to scaling your team.
                          </p>
                          <div className="d-grid">
                            <Button
                              className="btn btn-primary"
                            >
                              Buy Now
                          </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Col>

                    <Col md={4} xs={12} className="mt-4 pt-2">
                      <div className="card pricing-rates business-rate text-center shadow bg-white border-0 rounded">
                        <CardBody>
                          <h5 className="title mb-4">PDF</h5>
                          <h2 className="fw-bold">$ 9.99</h2>

                          <p className="text-muted">
                            Explore everything from machine learning and global
                            payments to scaling your team.
                          </p>
                          <div className="d-grid">
                            <Button
                              className="btn btn-primary"
                            >
                              Buy Now
                          </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
