import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

export default class WorkProcess extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <div className="section-title mb-4 pb-2">
                <span className="badge rounded-pill bg-soft-primary">
                  Work Process
                </span>
                <h4 className="title mt-3 mb-4">How it works ?</h4>
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
            <Col md={4} xs={12} className="mt-5">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-chart-line h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5>Grow your traffic</h5>
                  <p className="text-muted mb-0">
                    Nisi aenean vulputate eleifend tellus vitae eleifend enim a
                    eleifend Aliquam aenean elementum semper.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mt-5">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-adjust-circle h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5>Get quality leads</h5>
                  <p className="text-muted mb-0">
                    Allegedly, a Latin scholar established the origin of the
                    text established by compiling unusual word.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12}  className="mt-5">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-award h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5>Drive more sell</h5>
                  <p className="text-muted mb-0">
                    It seems that only fragments of the original text remain in
                    the Lorem the original Ipsum texts used today.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} className="mt-5 text-center">
              <Link to="#" className="btn btn-pills btn-primary">
                See More
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
