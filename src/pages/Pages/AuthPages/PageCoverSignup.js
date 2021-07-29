// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  Label,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import user02 from "../../../assets/images/user/02.jpg";

class PageCoverSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>
        <section className="cover-user bg-white">
          <Container fluid className="px-0">
            <Row className="g-0 position-relative">
              <Col lg={4} xs={{ order: 2 }} className="cover-my-30 ">
                <div className="cover-user-img d-flex align-items-center">
                  <Row>
                    <Col xs={12}>
                      <Card
                        className="login_page border-0"
                        style={{ zIndex: 1 }}
                      >
                        <CardBody className="p-0">
                          <h4 className="card-title text-center">Signup</h4>
                          <AvForm className="login-form mt-4">
                            <Row>
                              <Col md="6">
                                <div className="mb-3">
                                  <Label className="form-label" for="firstname">
                                    First name{" "}
                                    <span className="text-danger">*</span>
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
                                    type="text"
                                    className="form-control ps-5"
                                    name="firstname"
                                    id="firstname"
                                    placeholder="First Name"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter first name",
                                      },
                                    }}
                                  />
                                </div>
                              </Col>
                              <Col md="6">
                                <div className="mb-3">
                                  <Label className="form-label" for="lastname">
                                    Last name{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <div className="form-icon position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="user-check"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                    type="text"
                                    className="form-control ps-5"
                                    name="lastname"
                                    id="lastname"
                                    placeholder="Last Name"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter first name",
                                      },
                                    }}
                                  />
                                </div>
                              </Col>
                              <Col md="12">
                                <div className="mb-3">
                                  <Label className="form-label" for="email">
                                    Your Email{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <div className="form-icon position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="mail"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                    type="text"
                                    className="form-control ps-5"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter your email",
                                      },
                                      pattern: {
                                        value:
                                          "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                                        errorMessage: "E-Mail is not valid!",
                                      },
                                    }}
                                  />
                                </div>
                              </Col>

                              <Col md="12">
                                <div className="mb-3">
                                  <Label className="form-label" for="password">
                                    Password{" "}
                                    <span className="text-danger">*</span>
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
                                    id="password"
                                    placeholder="Enter password"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter Password",
                                      },
                                      minLength: {
                                        value: 6,
                                        errorMessage:
                                          "Your password must be between 6 and 8 characters",
                                      },
                                      maxLength: {
                                        value: 16,
                                        errorMessage:
                                          "Your password must be between 6 and 8 characters",
                                      },
                                    }}
                                  />
                                </div>
                              </Col>

                              <Col md="12">
                                <div className="mb-3">
                                  <div className="form-check">
                                    <Input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="customCheck1"
                                    />
                                    <Label
                                      className="form-check-label"
                                      for="customCheck1"
                                    >
                                      I Accept{" "}
                                      <Link to="#" className="text-primary">
                                        Terms And Condition
                                      </Link>
                                    </Label>
                                  </div>
                                </div>
                              </Col>
                              <Col md="12">
                                <div className="d-grid">
                                  <Button color="primary">
                                    Register
                                </Button>
                                </div>
                              </Col>
                              <Col lg="12" className="mt-4 text-center">
                                <h6>Or Signup With</h6>
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
                              <div className="mx-auto">
                                <p className="mb-0 mt-3">
                                  <small className="text-dark me-2">
                                    Already have an account ?
                                  </small>{" "}
                                  <Link
                                    to="/auth-cover-login"
                                    className="text-dark fw-bold"
                                  >
                                    Sign In
                                  </Link>
                                </p>
                              </div>
                            </Row>
                          </AvForm>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col
                lg={8}
                className="offset-lg-4 padding-less img order-1"
                style={{ backgroundImage: `url(${user02})` }}
              ></Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageCoverSignup;
