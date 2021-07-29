import React, { Component } from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import online from "../../assets/images/course/online/ab02.jpg";

export default class NavbarButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      modal: false,
    };
    this.toggleDropdown.bind(this);
    this.togglemodal.bind(this);
  }
  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };
  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  render() {
    return (
      <React.Fragment>
        <ul className="buy-button list-inline mb-0">
          <li className="list-inline-item mb-0">
            <Dropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle
                color="none"
                type="button"
                className="btn btn-link text-decoration-none p-0 pe-2"
              >
                <i className="uil uil-search text-muted"></i>
              </DropdownToggle>
              <DropdownMenu
                right
                className="dd-menu bg-white shadow rounded border-0 mt-3 py-0"
                style={{ width: "300px" }}
              >
                <Form>
                  <input
                    type="text"
                    id="text"
                    name="name"
                    className="form-control border bg-white"
                    placeholder="Search..."
                  />
                </Form>
              </DropdownMenu>
            </Dropdown>
          </li>
          <li className="list-inline-item mb-0 pe-1 me-1">
            <Link to="#" className="btn btn-icon btn-soft-primary">
              <i className="uil uil-github icons"></i>
            </Link>
          </li>
          <li className="list-inline-item mb-0 pe-1 me-1">
            <Link to="#" className="btn btn-icon btn-soft-primary">
              <i className="mdi mdi-stack-overflow mdi-18px icons"></i>
            </Link>
          </li>
          <li className="list-inline-item mb-0">
            <Link
              to="#"
              className="btn btn-icon btn-soft-primary"
              onClick={this.togglemodal}
            >
              <i className="uil uil-user icons"></i>
            </Link>
          </li>
        </ul>
        <Modal
          isOpen={this.state.modal}
          tabIndex="-1"
          size="lg"
          centered
          contentClassName="rounded shadow-lg border-0 overflow-hidden"
          toggle={this.togglemodal}
        >
          <ModalBody className="p-0">
            <Container fluid className="px-0">
              <Row className="align-items-center g-0">
                <Col lg={6} md={5}>
                  <img src={online} className="img-fluid" alt="" />
                </Col>

                <Col lg={6} md={7}>
                  <Form className="login-form p-4">
                    <Row>
                      <Col lg={12}>
                        <FormGroup>
                          <Label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </Label>
                          <div className="position-relative">
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
                        </FormGroup>
                      </Col>

                      <Col lg={12}>
                        <FormGroup>
                          <Label className="form-label">
                            Password <span className="text-danger">*</span>
                          </Label>
                          <div className="position-relative">
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
                        </FormGroup>
                      </Col>

                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between">
                          <FormGroup>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                Remember me
                              </label>
                            </div>
                          </FormGroup>
                          <p className="forgot-pass mb-0">
                            <Link
                              to="auth-re-password.html"
                              className="text-dark fw-bold"
                            >
                              Forgot password ?
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-12 mb-0">
                        <button className="btn btn-primary btn-block">
                          Sign in
                        </button>
                      </div>

                      <div className="col-12 text-center">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Don't have an account ?
                          </small>{" "}
                          <Link
                            to="auth-signup.html"
                            className="text-dark fw-bold"
                          >
                            Sign Up
                          </Link>
                        </p>
                      </div>
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
