import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import classnames from "classnames";

//Import Icons
import FeatherIcon from "feather-icons-react";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      successMsg: false,
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 d-table w-100">
          <Container>
            <Row className="align-items-center">
              <Col
                lg="4"
                md={{ size: 5, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 pt-2 mt-sm-0 pt-sm-0"
              >
                <div className="bg-white shadow rounded position-relative overflow-hidden">
                  <div className="text-center">
                    <Nav className="flex-sm-row mb-0" pills justified>
                      <NavItem>
                        <NavLink
                          className={classnames(
                            { active: this.state.activeTab === "1" },
                            "py-2",
                            "rounded-0"
                          )}
                          onClick={() => {
                            this.toggleTab("1");
                          }}
                        >
                          <div className="text-center py-2">
                            <h6 className="title font-weight-normal mb-0">
                              User
                            </h6>
                          </div>
                        </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink
                          className={classnames(
                            { active: this.state.activeTab === "2" },
                            "py-2",
                            "rounded-0"
                          )}
                          onClick={() => {
                            this.toggleTab("2");
                          }}
                        >
                          <div className="text-center py-2">
                            <h6 className="title font-weight-normal mb-0">
                              Driver
                            </h6>
                          </div>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1" className="card border-0">
                      <Alert
                        color="primary"
                        isOpen={this.state.successMsg}
                        toggle={() => {
                          this.setState({ successMsg: !this.state.successMsg });
                        }}
                      >
                        Data sended successfully.
                      </Alert>
                      <Form onSubmit={this.handleSubmit} className="card-body">
                        <Row>
                          <Col md="12">
                            <div className="mb-3">
                              <Label className="form-label">
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
                              <Input
                                type="text"
                                className="form-control ps-5"
                                placeholder="First Name"
                                name="s"
                                required
                              />
                            </div>
                          </Col>
                          <Col md="12">
                            <div className="mb-3">
                              <Label className="form-label">
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
                              <Input
                                type="email"
                                className="form-control ps-5"
                                placeholder="Email"
                                name="email"
                                required
                              />
                            </div>
                          </Col>
                          <Col md="12">
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
                              <Input
                                type="password"
                                className="form-control ps-5"
                                placeholder="Password"
                                required
                              />
                            </div>
                          </Col>
                          <Col md="12">
                            <div className="mb-3">
                              <div className="form-check">
                                <Input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="user-check1"
                                />
                                <Label
                                  className="form-check-label"
                                  for="user-check1"
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
                              <Button color="primary" className="w-100">
                                Register
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </TabPane>

                    <TabPane tabId="2" className="card border-0">
                      <Alert
                        color="info"
                        isOpen={this.state.successMsg}
                        toggle={() => {
                          this.setState({ successMsg: !this.state.successMsg });
                        }}
                      >
                        Data sended successfully.
                      </Alert>
                      <Form onSubmit={this.handleSubmit} className="card-body">
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <Label className="form-label">
                                First name{" "}
                                <span className="text-danger">*</span>
                              </Label>
                              <div className="position-relative">
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
                          <Col md="12">
                            <div className="mb-3">
                              <Label className="form-label">
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
                              <Input
                                type="email"
                                className="form-control ps-5"
                                placeholder="Email"
                                name="email"
                                required
                              />
                            </div>
                          </Col>
                          <Col md="12">
                            <div className="mb-3">
                              <Label className="form-label">
                                Password <span className="text-danger">*</span>
                              </Label>
                              <div className="position-relative">
                                form-icon          <i>
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
                            </div>
                          </Col>
                          <Col md="12">
                            <FormGroup>
                              <div className="custom-control custom-checkbox">
                                <Input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="user-check"
                                />
                                <Label
                                  className="custom-control-label"
                                  for="user-check"
                                >
                                  I Accept{" "}
                                  <Link to="#" className="text-primary">
                                    Terms And Condition
                                  </Link>
                                </Label>
                              </div>
                            </FormGroup>
                          </Col>
                          <Col md="12">
                            <Button color="success" className="w-100">
                              Signup
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </TabPane>
                  </TabContent>
                </div>
              </Col>

              <Col
                lg={{ size: 7, offset: 1 }}
                md={{ size: 7, order: 2 }}
                xs={{ order: 1 }}
              >
                <div className="title-heading mt-4">
                  <h1 className="display-4 fw-normal mb-3">
                    Unbeatable Price & Expert Services
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="" className="btn btn-primary mt-2 me-2">
                      <i className="uil uil-apple"></i> App Store
                    </Link>
                    <Link to="" className="btn btn-outline-primary mt-2 ms-1">
                      <i className="uil uil-google-play"></i> Play Store
                    </Link>
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
