import React, { Component } from "react";
import {
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Card,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

export default class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
    };
    this.toggleTab = this.toggleTab.bind(this);
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="mt-lg-4 align-items-center">
            <Col lg={5} md={12} className="text-center text-lg-start">
              <div className="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
                <h4 className="title mb-4">Our Comfortable Rates</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
                <Nav className="nav-pills rounded-pill justify-content-center d-inline-block border py-1 px-2 mt-4 bg-white">
                  <NavItem className="d-inline-block">
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "1" },
                        "px-3 rounded-pill monthly"
                      )}
                      onClick={() => {
                        this.toggleTab("1");
                      }}
                    >
                      Monthly
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-inline-block">
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "2" },
                        "px-3 rounded-pill monthly"
                      )}
                      onClick={() => {
                        this.toggleTab("2");
                      }}
                    >
                      Yearly
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>

            <Col lg={7} md={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
              <TabContent activeTab={this.state.activeTab}>
                <TabPane className="fade show" tabId="1">
                  <Row className="align-items-center">
                    <Col md={6} xs={12} className="px-md-0">
                      <Card className="pricing-rates starter-plan shadow rounded border-0">
                        <CardBody className="py-5">
                          <h5 className="title fw-bold text-primary mb-4">
                            Basic
                          </h5>
                          <div className="d-flex mb-4">
                            <span className="h5 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">39</span>
                            <span className="h5 align-self-end mb-1">/mo</span>
                          </div>

                          <ul className="list-unstyled mb-0 ps-0">
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Full Access
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Source Files
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Free Appointments
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link
                            to="#"
                            className="btn btn-primary mt-4"
                          >
                            Get Started
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <div className="col-md-6 col-12 mt-4 pt-2 pt-sm-0 mt-sm-0 px-md-0">
                      <div className="card pricing-rates bg-light shadow rounded border-0">
                        <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                          <span className="text-center d-block shadow small h6">
                            Best
                          </span>
                        </div>
                        <div className="card-body py-5">
                          <h5 className="title fw-bold text-primary mb-4">
                            Premium
                          </h5>
                          <div className="d-flex mb-4">
                            <span className="h5 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">59</span>
                            <span className="h5 align-self-end mb-1">/mo</span>
                          </div>

                          <ul className="list-unstyled mb-0 ps-0">
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Full Access
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Source Files
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Free Appointments
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link
                            to="#"
                            className="btn btn-primary mt-4"
                          >
                            Try it now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Row>
                </TabPane>

                <TabPane className="fade show" tabId="2">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12 px-md-0">
                      <div className="card pricing-rates starter-plan shadow rounded border-0">
                        <div className="card-body py-5">
                          <h5 className="title fw-bold text-primary mb-4">
                            Basic
                          </h5>
                          <div className="d-flex mb-4">
                            <span className="h5 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">29</span>
                            <span className="h5 align-self-end mb-1">/mo</span>
                          </div>

                          <ul className="list-unstyled mb-0 ps-0">
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Full Access
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Source Files
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Free Appointments
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link
                            to="#"
                            className="btn btn-primary mt-4"
                          >
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mt-4 pt-2 pt-sm-0 mt-sm-0 px-md-0">
                      <div className="card pricing-rates bg-light shadow rounded border-0">
                        <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                          <span className="text-center d-block shadow small h6">
                            Popular
                          </span>
                        </div>
                        <div className="card-body py-5">
                          <h5 className="title fw-bold text-primary mb-4">
                            Premium
                          </h5>
                          <div className="d-flex mb-4">
                            <span className="h5 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">49</span>
                            <span className="h5 align-self-end mb-1">/mo</span>
                          </div>

                          <ul className="list-unstyled mb-0 ps-0">
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Full Access
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Source Files
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Free Appointments
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link
                            to="#"
                            className="btn btn-primary mt-4"
                          >
                            Try it now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
