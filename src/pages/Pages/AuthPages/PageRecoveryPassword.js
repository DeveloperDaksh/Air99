// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import recoveryimg from "../../../assets/images/user/recovery.svg";

class PageRecoveryPassword extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-soft-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>
        <section className="bg-home d-flex align-items-center">
          <Container>
            <Row className="align-items-center">
              <Col lg="7" md="6">
                <div className="me-lg-5">
                  <img
                    src={recoveryimg}
                    className="img-fluid d-block mx-auto"
                    alt=""
                  />
                </div>
              </Col>
              <Col lg="5" md="6">
                <Card className="shadow rounded border-0">
                  <CardBody>
                    <h4 className="card-title text-center">Recover Account</h4>
                    <AvForm className="login-form mt-4">
                      <Row>
                        <Col lg="12">
                          <p className="text-muted">
                            Please enter your email address. You will receive a
                            link to create a new password via email.
                          </p>
                          <div className="mb-3">
                            <Label className="form-label" for="email">
                              Email address{" "}
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
                              placeholder="Enter Your Email Address"
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
                        <Col lg="12">
                          <div className="d-grid">
                            <Button color="primary">
                              Send
                          </Button>
                          </div>
                        </Col>
                        <div className="mx-auto">
                          <p className="mb-0 mt-3">
                            <small className="text-dark me-2">
                              Remember your password ?
                            </small>{" "}
                            <Link
                              to="auth-login"
                              className="text-dark fw-bold"
                            >
                              Sign in
                            </Link>
                          </p>
                        </div>
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
export default PageRecoveryPassword;
