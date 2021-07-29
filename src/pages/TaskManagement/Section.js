import React, { Component } from "react";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";

// import images
import laptop from "../../assets/images/task/laptop.png";

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-home d-flex align-items-center bg-animation-left task-management-home"
          style={{ height: "auto" }}
          id="home"
        >
          <Container className="position-relative" style={{ zIndex: "1" }}>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
                <div className="title-heading margin-top-100">
                  <h1 className="heading text-white title-dark mb-3">
                    A Better Way to Manage your Schedule
                  </h1>
                  <p className="para-desc mx-auto text-white-50">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="text-center subcribe-form mt-4 pt-2">
                    <Form>
                      <FormGroup className="form-group mb-0">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="border rounded-pill"
                          required
                          placeholder="Email Address"
                        />
                        <button
                          type="submit"
                          className="btn btn-pills btn-primary"
                        >
                          Get Started
                        </button>
                      </FormGroup>
                    </Form>
                  </div>
                </div>

                <Row className="justify-content-center">
                  <Col lg={10} className="text-center">
                    <div className="home-dashboard">
                      <img src={laptop} alt="" className="img-fluid" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
