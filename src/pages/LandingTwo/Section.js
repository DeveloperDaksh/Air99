import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Row } from "reactstrap";

import Creativity from "../../assets/images/illustrator/Creativity-bro.svg";

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 d-table w-100">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="title-heading mt-4">
                  <h1 className="display-4 fw-bold mb-3">
                    Powerfull landing <br /> for your website
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>

                  <div className="subcribe-form mt-4 pt-2">
                    <Form>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="border bg-white rounded-pill"
                        required
                        placeholder="Email Address"
                      />
                      <button
                        type="submit"
                        className="btn btn-pills btn-primary"
                      >
                        Get Started
                        </button>
                    </Form>
                  </div>
                  <div className="form-check mt-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheck1"
                    >
                      I Accept{" "}
                      <Link to="#" className="text-primary">
                        Terms And Condition
                                </Link>
                    </label>
                  </div>
                </div>
              </Col>

              <Col md={6}>
                <img src={Creativity} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
