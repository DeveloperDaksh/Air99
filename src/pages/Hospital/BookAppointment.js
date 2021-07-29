import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
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

export default class BookAppointment extends Component {
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
        <Container fluid className="px-0">
          <div className="py-5 bg-footer">
            <Container>
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="section-title">
                    <div className="d-flex">
                      <i className="uil uil-stethoscope-alt display-4 text-white title-dark"></i>
                      <div className="flex-1 ms-md-4 ms-3">
                        <h4 className="fw-bold text-light title-dark mb-1">
                          Get a free medical
                        </h4>
                        <p className="text-white-50 mb-0">
                          Build modern looking websites fast and easy using
                          Landflow.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={5} className="mt-4 mt-sm-0">
                  <div className="text-md-end ms-5 ms-sm-0">
                    <Link
                      to="#"
                      className="btn btn-primary me-2 me-lg-2 me-md-0 my-2"
                      onClick={this.togglemodal}
                    >
                      <i className="uil uil-file-alt"></i> Book An Appointment
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <Modal
          isOpen={this.state.modal}
          tabIndex="-1"
          size="lg"
          centered
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
                              to="auth-re-password"
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
