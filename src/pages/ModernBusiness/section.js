import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Images
import modern01 from "../../assets/images/modern01.jpg";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      Contactvisible: false,
    };
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-170 d-table w-100"
          style={{ background: `url(${modern01})center center` }}
          id="home"
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="align-items-center mt-md-5">
              <Col
                lg={5}
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 pt-2 mt-sm-0 pt-sm-0"
              >
                <Card className="login_page shadow rounded border-0 me-lg-3">
                  <CardBody>
                    <h5 className="card-title">Register Now</h5>
                    <Alert
                      color="primary"
                      isOpen={this.state.Contactvisible}
                      toggle={() => {
                        this.setState({
                          Contactvisible: !this.state.Contactvisible,
                        });
                      }}
                    >
                      Registration Done Successfully.
                    </Alert>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                      <Row>
                        <Col md={12}>
                          <FormGroup className="mb-3">
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
                            </div>
                            <Input
                              type="text"
                              className="form-control ps-5"
                              placeholder="First Name"
                              name="s"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <FormGroup className="mb-3">
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
                            </div>
                            <Input
                              type="email"
                              className="form-control ps-5"
                              placeholder="Email"
                              name="email"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <FormGroup className="mb-3">
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
                            <Input
                              type="password"
                              className="form-control ps-5"
                              placeholder="Password"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <div className="form-check mb-3">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck1"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="customCheck1"
                            >
                              I Accept{" "}
                              <Link to="#" className="text-primary">
                                Terms And Condition
                                </Link>
                            </Label>
                          </div>
                        </Col>
                        <Col md={12}>
                          <Button color="success" className="w-100">
                            Register
                          </Button>
                        </Col>
                        <Col lg={12} className="mt-4 text-center">
                          <h6>Or Signup With</h6>
                          <div className="row">
                            <div className="col-lg-6 mt-3">
                              <Link
                                to="#"
                                className="btn btn-block btn-light w-100"
                              >
                                <i className="mdi mdi-facebook text-primary"></i>{" "}
                                Facebook
                              </Link>
                            </div>

                            <div className="col-lg-6 mt-3">
                              <Link
                                to="#"
                                className="btn btn-block btn-light w-100"
                              >
                                <i className="mdi mdi-google text-danger"></i>{" "}
                                Google
                              </Link>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>

              <Col
                lg={{ size: 7 }}
                md={{ size: 6, order: 2 }}
                xs={{ order: 1 }}
              >
                <div className="title-heading mt-4 ms-lg-4">
                  <h1 className="heading title-dark text-white mb-3">
                    Powerful Solution For Your Startup Business{" "}
                  </h1>
                  <p className="para-desc para-dark text-light">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="watch-video mt-4 pt-2">
                    <Link to="#" className="btn btn-primary m-1">Get Started <i className="uil uil-angle-right-b"></i></Link>
                    <Link to="#" onClick={this.openModal} className="btn btn-icon btn-pills btn-primary m-1 lightbox">
                      <FeatherIcon
                        icon="video"
                        className="icons"
                      />
                    </Link><small className="fw-bold text-uppercase text-light title-dark align-middle ms-1">Watch Now</small>
                    <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="L61p2uyiMSo"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
