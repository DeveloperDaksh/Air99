import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Label,
  Row,
} from "reactstrap";

// import backGround_images
import build from "../../assets/images/real/build.png";

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-170 bg-light d-table w-100"
          style={{ background: `url(${build}) bottom no-repeat` }}
        >
          <Container>
            <Row className="align-items-center mt-5">
              <Col lg={7} md={6}>
                <div className="title-heading">
                  <span className="badge rounded-pill bg-soft-success">
                    Landing Four
                  </span>
                  <h4 className="heading my-3">
                    Experience, <br />
                    Expertise, Consulting
                  </h4>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>

                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-primary m-1">
                      Explore Now
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={5} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <Card className="shadow rounded border-0 ms-lg-4">
                  <CardBody>
                    <h5 className="card-title text-center">
                      Get 30 days FREE Trial
                    </h5>

                    <Form className="login-form mt-4">
                      <Row>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">
                              First name <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                              <input
                                type="text"
                                className="form-control ps-5"
                                placeholder="First Name"
                                name="s"
                                required=""
                              />
                            </div>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                              <input
                                type="email"
                                className="form-control ps-5"
                                placeholder="Email"
                                name="email"
                                required=""
                              />
                            </div>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Password <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="lock"
                                  className="fea icon-sm icons"
                                />
                              </i>
                              <input
                                type="password"
                                className="form-control ps-5"
                                placeholder="Password"
                                required=""
                              />
                            </div>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-check">
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
                            </Label>
                          </div>
                        </Col>
                        <Col md={12}>
                        <div className="d-grid">
                          <button className="btn btn-block btn-primary">
                            Register
                          </button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
