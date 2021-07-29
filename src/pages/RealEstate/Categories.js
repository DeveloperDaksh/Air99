import React, { Component } from "react";
import {
  TabPane,
  NavItem,
  Container,
  NavLink,
  Row,
  Col,
  Form,
  Label,
  Input,
  TabContent,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class Categories extends Component {
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
          <Row className="justify-content-center">
            <Col xs={12} className="text-center mt-sm-0 pt-sm-0">
              <div className="text-center features-absolute">
                <ul
                  className="nav nav-pills shadow border-bottom flex-column flex-sm-row d-md-inline-flex nav-justified mb-0 bg-white rounded-top position-relative overflow-hidden"
                  id="pills-tab"
                  role="tablist"
                >
                  <NavItem className="m-1">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "1" },
                        "py-2 px-5 rounded"
                      )}
                      onClick={() => {
                        this.toggleTab("1");
                      }}
                    >
                      <div className="text-center">
                        <h6 className="mb-0">Buy</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="m-1">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "2" },
                        "py-2 px-5 rounded"
                      )}
                      onClick={() => {
                        this.toggleTab("2");
                      }}
                    >
                      <div className="text-center">
                        <h6 className="mb-0">Sold</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="m-1">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "3" },
                        "py-2 px-5 rounded"
                      )}
                      onClick={() => {
                        this.toggleTab("3");
                      }}
                    >
                      <div className="text-center">
                        <h6 className="mb-0">Rent</h6>
                      </div>
                    </NavLink>
                  </NavItem>
                </ul>

                <TabContent
                  className="tab-content bg-white rounded-bottom shadow"
                  activeTab={this.state.activeTab}
                >
                  <TabPane className="card border-0 fade show " tabId="1">
                    <Form className="card-body text-start">
                      <Row>
                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Search :</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="search"
                                  className="fea icon-sm icons"
                                />
                              </i>
                              <Input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control ps-5"
                                placeholder="Search your home :"
                              />
                            </div>
                          </div>
                        </Col>

                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Select Categories:</Label>
                            <select
                              className="form-control custom-select"
                              id="buy-properties"
                            >
                              <option>Houses</option>
                              <option>Apartment</option>
                              <option>Offices</option>
                              <option>Townhome</option>
                            </select>
                          </div>
                        </Col>

                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Min Price :</Label>
                            <select
                              className="form-control custom-select"
                              id="buy-min-price"
                            >
                              <option>Min Price</option>
                              <option>500</option>
                              <option>1000</option>
                              <option>2000</option>
                              <option>3000</option>
                              <option>4000</option>
                              <option>5000</option>
                              <option>6000</option>
                            </select>
                          </div>
                        </Col>

                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Max Price :</Label>
                            <select
                              className="form-control custom-select"
                              id="buy-max-price"
                            >
                              <option>Max Price</option>
                              <option>500</option>
                              <option>1000</option>
                              <option>2000</option>
                              <option>3000</option>
                              <option>4000</option>
                              <option>5000</option>
                              <option>6000</option>
                            </select>
                          </div>
                        </Col>

                        <div className="col-12">
                          <Link to="#" className="btn btn-primary">
                            Search now
                          </Link>
                        </div>
                      </Row>
                    </Form>
                  </TabPane>

                  <TabPane tabId="2" className="card border-0 fade show">
                    <form className="card-body text-start">
                      <div className="row">
                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Search :</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="search"
                                  className="fea icon-sm icons"
                                />
                              </i>
                              <input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control ps-5"
                                placeholder="Search your home :"
                              />
                            </div>
                          </div>
                        </Col>

                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Select Categories:</Label>
                            <select
                              className="form-control custom-select"
                              id="buy-properties"
                            >
                              <option>Houses</option>
                              <option>Apartment</option>
                              <option>Offices</option>
                              <option>Townhome</option>
                            </select>
                          </div>
                        </Col>

                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Min Price :</Label>
                            <select
                              className="form-control custom-select"
                              id="buy-min-price"
                            >
                              <option>Min Price</option>
                              <option>500</option>
                              <option>1000</option>
                              <option>2000</option>
                              <option>3000</option>
                              <option>4000</option>
                              <option>5000</option>
                              <option>6000</option>
                            </select>
                          </div>
                        </Col>

                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Max Price :</Label>
                            <select
                              className="form-control custom-select"
                              id="buy-max-price"
                            >
                              <option>Max Price</option>
                              <option>500</option>
                              <option>1000</option>
                              <option>2000</option>
                              <option>3000</option>
                              <option>4000</option>
                              <option>5000</option>
                              <option>6000</option>
                            </select>
                          </div>
                        </Col>

                        <div className="col-12">
                          <Link to="#" className="btn btn-primary">
                            Search now
                          </Link>
                        </div>
                      </div>
                    </form>
                  </TabPane>

                  <TabPane className="card border-0 fade show" tabId="3">
                    <form className="card-body text-start">
                      <div className="row">
                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Search :</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="search"
                                  className="fea icon-sm icons"
                                />
                              </i>
                              <input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control ps-5"
                                placeholder="Search your home :"
                              />
                            </div>
                          </div>
                        </Col>

                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Select Categories:</Label>
                            <select
                              className="form-control custom-select"
                              id="buy-properties"
                            >
                              <option>Houses</option>
                              <option>Apartment</option>
                              <option>Offices</option>
                              <option>Townhome</option>
                            </select>
                          </div>
                        </Col>

                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Min Price :</Label>
                            <select
                              className="form-control custom-select"
                              id="buy-min-price"
                            >
                              <option>Min Price</option>
                              <option>500</option>
                              <option>1000</option>
                              <option>2000</option>
                              <option>3000</option>
                              <option>4000</option>
                              <option>5000</option>
                              <option>6000</option>
                            </select>
                          </div>
                        </Col>

                        <Col lg={3} md={6} xs={12}>
                          <div className="mb-3">
                            <Label className="form-label">Max Price :</Label>
                            <select
                              className="form-control custom-select"
                              id="buy-max-price"
                            >
                              <option>Max Price</option>
                              <option>500</option>
                              <option>1000</option>
                              <option>2000</option>
                              <option>3000</option>
                              <option>4000</option>
                              <option>5000</option>
                              <option>6000</option>
                            </select>
                          </div>
                        </Col>

                        <div className="col-12">
                          <Link to="#" className="btn btn-primary">
                            Search now
                          </Link>
                        </div>
                      </div>
                    </form>
                  </TabPane>
                </TabContent>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
