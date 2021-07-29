import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

export default class Pricing extends Component {
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
        <Container>
          <Row className="align-items-end mb-4 pb-2">
            <Col md={8}>
              <div className="section-title text-center text-md-start">
                <h4 className="title mb-4">
                  Choose the best <br /> one for you
                </h4>
                <p className="text-muted mb-0 para-desc">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>

            <Col md={4} className="mt-4 mt-sm-0">
              <div className="text-center text-md-end">
                <ul
                  className="nav nav-pills bg-white rounded-lg justify-content-center d-inline-block shadow py-1 px-2 mb-0"
                  id="pills-tab"
                  role="tablist"
                >
                  <NavItem className="d-inline-block">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "1" },
                        "px-3 rounded-lg monthly "
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
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "2" },
                        "px-3 rounded-lg yearly"
                      )}
                      onClick={() => {
                        this.toggleTab("2");
                      }}
                    >
                      Yearly
                    </NavLink>
                  </NavItem>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane className="fade show" tabId="1">
                  <Row>
                    <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                      <Card className="pricing-rates business-rate shadow bg-light border-0 rounded">
                        <CardBody>
                          <h6 className="title fw-bold text-uppercase text-primary mb-4">
                            Free
                          </h6>
                          <div className="d-flex mb-4">
                            <span className="h6 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">0</span>
                            <span className="h5 align-self-end mb-1"> /mo</span>
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
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Buy Now
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                      <Card className="pricing-rates business-rate shadow bg-white border-0 rounded">
                        <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                          <span className="text-center d-block shadow small h6">
                            Best
                          </span>
                        </div>
                        <CardBody>
                          <h6 className="title fw-bold text-uppercase text-primary mb-4">
                            Starter
                          </h6>
                          <div className="d-flex mb-4">
                            <span className="h6 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">39</span>
                            <span className="h5 align-self-end mb-1"> /mo</span>
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
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Get Started
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                      <Card className="pricing-rates business-rate shadow bg-light border-0 rounded">
                        <CardBody>
                          <h6 className="title fw-bold text-uppercase text-primary mb-4">
                            Professional
                          </h6>
                          <div className="d-flex mb-4">
                            <span className="h6 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">59</span>
                            <span className="h5 align-self-end mb-1"> /mo</span>
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
                              1 Domain Free
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Try It Now
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                      <Card className="pricing-rates business-rate shadow bg-light border-0 rounded">
                        <CardBody>
                          <h6 className="title fw-bold text-uppercase text-primary mb-4">
                            Ultimate
                          </h6>
                          <div className="d-flex mb-4">
                            <span className="h6 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">79</span>
                            <span className="h5 align-self-end mb-1"> /mo</span>
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
                              Enhanced Security
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
                              1 Domain Free
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Free Installment
                            </li>
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Started Now
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane className="fade show" tabId="2">
                  <Row>
                    <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                      <Card className="pricing-rates business-rate shadow bg-light border-0 rounded">
                        <CardBody>
                          <h6 className="title fw-bold text-uppercase text-primary mb-4">
                            Free
                          </h6>
                          <div className="d-flex mb-4">
                            <span className="h6 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">0</span>
                            <span className="h5 align-self-end mb-1"> /mo</span>
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
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Buy Now
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                      <Card className="pricing-rates business-rate shadow bg-white border-0 rounded">
                        <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                          <span className="text-center d-block shadow small h6">
                            Best
                          </span>
                        </div>
                        <CardBody>
                          <h6 className="title fw-bold text-uppercase text-primary mb-4">
                            Starter
                          </h6>
                          <div className="d-flex mb-4">
                            <span className="h6 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">29</span>
                            <span className="h5 align-self-end mb-1"> /mo</span>
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
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Get Started
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                      <Card className="pricing-rates business-rate shadow bg-light border-0 rounded">
                        <CardBody>
                          <h6 className="title fw-bold text-uppercase text-primary mb-4">
                            Professional
                          </h6>
                          <div className="d-flex mb-4">
                            <span className="h6 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">45</span>
                            <span className="h5 align-self-end mb-1"> /mo</span>
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
                              1 Domain Free
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Try It Now
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                      <Card className="pricing-rates business-rate shadow bg-light border-0 rounded">
                        <CardBody>
                          <h6 className="title fw-bold text-uppercase text-primary mb-4">
                            Ultimate
                          </h6>
                          <div className="d-flex mb-4">
                            <span className="h6 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">69</span>
                            <span className="h5 align-self-end mb-1"> /mo</span>
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
                              Enhanced Security
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
                              1 Domain Free
                            </li>
                            <li className="h6 text-muted mb-0">
                              <span className="text-primary h5 me-2">
                                <i className="uil uil-check-circle align-middle"></i>
                              </span>
                              Free Installment
                            </li>
                          </ul>
                          <Link to="#" className="btn btn-primary mt-4">
                            Started Now
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
