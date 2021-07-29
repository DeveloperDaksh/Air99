import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

export default class Partners extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="section-title text-center text-lg-start">
                <h6 className="text-primary">Partners</h6>
                <h4 className="title mb-4 mb-lg-0">
                  Manage your client <br /> smartly with instappoint
                </h4>
              </div>
            </Col>

            <Col lg={6}>
              <div className="section-title text-center text-lg-start">
                <p className="text-muted mb-0 mx-auto para-desc">
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
      </React.Fragment>
    );
  }
}
