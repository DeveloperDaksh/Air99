import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

import medical from "../../assets/images/medical/cta.jpg";

export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.togglemodal.bind(this);
  }
  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row>
              <Col lg={3} md={6} xs={12}>
                <Card className=" features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-primary">
                    <i className="uil uil-newspaper"></i>
                  </span>
                  <CardBody className="p-0 content">
                    <h5>Appointment</h5>
                    <p className="para text-muted mb-0">
                      It is a long established fact that a reader layout.
                    </p>

                    <Link
                      to="#"
                      className="btn btn-pills btn-soft-success mt-4"
                      onClick={this.togglemodal}
                    >
                      Request
                    </Link>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={3} md={6} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="card features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-primary">
                    <i className="uil uil-clock"></i>
                  </span>
                  <div className="card-body p-0 content">
                    <h5>Opening Hour</h5>

                    <h6 className="mb-0">Monday - Friday</h6>
                    <p className="para text-muted">7AM to 11 PM</p>

                    <h6 className="mb-0">Address:</h6>
                    <p className="para text-muted mb-0">
                      C/54 Northwest Freeway
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <Card className="features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-primary">
                    <i className="uil uil-user-md"></i>
                  </span>
                  <CardBody className="p-0 content">
                    <h5>Find Doctors</h5>
                    <p className="para text-muted mb-0">
                      It is a long established fact that a reader layout.
                    </p>

                    <Link
                      to="#"
                      className="btn btn-pills btn-soft-success mt-4"
                    >
                      Doctors
                    </Link>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={3} md={6} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <Card className="features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-primary">
                    <i className="uil uil-map-marker"></i>
                  </span>
                  <CardBody className="p-0 content">
                    <h5>Find Locations</h5>
                    <p className="para text-muted mb-0">
                      It is a long established fact that a reader layout.
                    </p>

                    <Link
                      to="#"
                      className="btn btn-pills btn-soft-success mt-4"
                    >
                      Locations
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Modal
          isOpen={this.state.modal}
          tabIndex="-1"
          size="lg"
          centered
          //   contentClassName="rounded shadow-lg border-0 overflow-hidden"
          toggle={this.togglemodal}
        >
          <ModalBody className="p-0">
            <Container fluid className="px-0">
              <Row className="align-items-center g-0">
                <Col lg={6} md={5} className="d-none d-md-block">
                  <img src={medical} className="img-fluid" alt="" />
                </Col>

                <Col lg={6} md={7}>
                  <Form className="login-form p-4">
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
                            <Input
                              type="email"
                              className="form-control ps-5"
                              placeholder="Email"
                              name="email"
                              required=""
                            />
                          </div>
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
                            <Input
                              type="password"
                              className="form-control ps-5"
                              placeholder="Password"
                              required=""
                            />
                          </div>
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
                                for="customCheck1"
                              >
                                Remember me
                              </Label>
                            </div>
                          </div>
                          <p className="forgot-pass mb-0">
                            <Link
                              to="auth-re-password.html"
                              className="text-dark fw-bold"
                            >
                              Forgot password ?
                            </Link>
                          </p>
                        </div>
                      </Col>

                      <Col lg={12} className="mb-0">
                        <div className="d-grid">
                          <button className="btn btn-primary btn-block">
                            Sign in
                        </button>
                        </div>
                      </Col>

                      <Col lg={12} className="text-center">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Don't have an account ?
                          </small>{" "}
                          <Link
                            to="auth-signup"
                            className="text-dark fw-bold"
                          >
                            Sign Up
                          </Link>
                        </p>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
