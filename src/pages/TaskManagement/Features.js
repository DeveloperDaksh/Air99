import React, { Component } from "react";
import { Col, Container } from "reactstrap";

export default class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="row">
            <Col md={4} xs={12}>
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-airplay h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5>Easy To Use</h5>
                  <p className="text-muted mb-0">
                    Nisi aenean vulputate eleifend tellus vitae eleifend enim a
                    Aliquam eleifend aenean elementum semper.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mt-5 mt-sm-0">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-envelope-shield h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5>Secure</h5>
                  <p className="text-muted mb-0">
                    Allegedly, a Latin scholar established the origin of the
                    established text by compiling unusual word.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mt-5 mt-sm-0">
              <div className="features text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-edit-alt h1 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5>Flexible</h5>
                  <p className="text-muted mb-0">
                    It seems that only fragments of the original text remain in
                    only fragments the Lorem Ipsum texts used today.
                  </p>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
