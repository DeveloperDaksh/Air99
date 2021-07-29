import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import NumberCounter from "number-counter";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="ms-lg-5" id="counter">
          <Col md="6" xs="12">
            <Row>
              <Col xs="12" className=" mt-4 mt-lg-0 pt-2 pt-lg-0">
                <Card className="counter-box border-0 bg-light shadow text-center rounded">
                  <CardBody className="py-5">
                    <h2 className="mb-0">
                      <span className="counter-value">
                        <NumberCounter
                          end={this.props.countervalue[0]}
                          delay={4}
                          postFix="%"
                        />
                      </span>
                    </h2>
                    <h5 className="counter-head mb-0">Happy Client</h5>
                  </CardBody>
                </Card>
              </Col>

              <Col xs="12" className="mt-4 pt-2">
                <Card className="counter-box border-0 bg-primary shadow text-center rounded">
                  <CardBody className="py-5">
                    <h2 className="text-light title-dark mb-0">
                      <span className="counter-value">
                        <NumberCounter
                          end={this.props.countervalue[1]}
                          delay={4}
                          postFix="+"
                        />
                      </span>
                    </h2>
                    <h5 className="counter-head mb-0 title-dark text-light">
                      Awards
                    </h5>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col md="6" xs="12">
            <Row className="pt-lg-5 mt-lg-4">
              <Col xs="12" className="mt-4 pt-2">
                <Card className="counter-box border-0 bg-success shadow text-center rounded">
                  <CardBody className="py-5">
                    <h2 className="text-light title-dark mb-0">
                      <span className="counter-value">
                        <NumberCounter
                          end={this.props.countervalue[2]}
                          delay={4}
                          postFix="K"
                        />
                      </span>
                    </h2>
                    <h5 className="counter-head mb-0 title-dark text-light">
                      Job Placement
                    </h5>
                  </CardBody>
                </Card>
              </Col>

              <Col xs="12" className="mt-4 pt-2">
                <Card className="card counter-box border-0 bg-light shadow text-center rounded">
                  <CardBody className="py-5">
                    <h2 className="mb-0">
                      <span className="counter-value">
                        <NumberCounter
                          end={this.props.countervalue[3]}
                          delay={4}
                          postFix="%"
                        />
                      </span>
                    </h2>
                    <h5 className="counter-head">Project Complete</h5>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Counter;
