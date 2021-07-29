import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

export default class PageThankYou extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-home bg-light d-flex align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="text-center">
                  <div
                    className="icon d-flex align-items-center justify-content-center bg-soft-primary rounded-circle mx-auto"
                    style={{ height: "90px", width: "90px" }}
                  >
                    <i className="uil uil-thumbs-up align-middle h1 mb-0"></i>
                  </div>
                  <h1 className="my-4 fw-bold">Thank You</h1>
                  <p className="text-muted para-desc mx-auto">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <Link to="index" className="btn btn-soft-primary mt-3">
                    Go To Home
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
