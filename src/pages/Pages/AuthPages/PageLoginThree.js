import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  Button,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

class PageLoginThree extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="index" className="btn btn-icon btn-soft-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>

        <section className="bg-home bg-circle-gradiant d-flex align-items-center">
          <div className="bg-overlay bg-overlay-white"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={5} md={8}>
                <Card className="login-page bg-white shadow rounded border-0">
                  <CardBody>
                    <h4 className="card-title text-center">Login</h4>
                    <AvForm className="login-form mt-4">
                      <Row>
                        <Col lg={12}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <AvField
                              type="email"
                              className="form-control ps-5"
                              errorMessage="Invalid Email"
                              validate={{
                                required: { value: true },
                                email: { value: true },
                              }}
                              placeholder="Email"
                              name="email"
                            />
                          </div>
                        </Col>

                        <Col lg={12}>
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
                            </div>
                            <AvField
                              type="password"
                              className="form-control ps-5"
                              name="password"
                              errorMessage="Enter password"
                              validate={{ required: { value: true } }}
                              placeholder="Password"
                            />
                          </div>
                        </Col>

                        <Col lg={12}>
                          <div className="d-flex justify-content-between">
                            <div className="mb-3">
                              <div className="form-check">
                                <Input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="customCheck1"
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="customCheck1"
                                >
                                  Remember me
                                </Label>
                              </div>
                            </div>
                            <p className="forgot-pass mb-0">
                              <Link
                                to="auth-re-password-three"
                                className="text-dark fw-bold"
                              >
                                Forgot password ?
                              </Link>
                            </p>
                          </div>
                        </Col>
                        <Col lg={12} className="mb-0">
                          <div className="d-grid">
                            <Button color="primary">
                              Sign in
                          </Button>
                          </div>
                        </Col>
                        <Col lg={12} className="mt-4 text-center">
                          <h6>Or Login With</h6>
                          <Row>
                            <div className="col-6 mt-3">
                              <div className="d-grid">
                                <Link to="#" className="btn btn-light"><i className="mdi mdi-facebook text-primary"></i> Facebook</Link>
                              </div>
                            </div>

                            <div className="col-6 mt-3">
                              <div className="d-grid">
                                <Link to="#" className="btn btn-light"><i className="mdi mdi-google text-danger"></i> Google</Link>
                              </div>
                            </div>
                          </Row>
                        </Col>
                        <Col xs={12} className="text-center">
                          <p className="mb-0 mt-3">
                            <small className="text-dark me-2">
                              Don't have an account ?
                            </small>{" "}
                            <Link
                              to="auth-signup-three"
                              className="text-dark fw-bold"
                            >
                              Sign Up
                            </Link>
                          </p>
                        </Col>
                      </Row>
                    </AvForm>
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

export default PageLoginThree;
