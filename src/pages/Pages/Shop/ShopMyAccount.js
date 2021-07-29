import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

//Import Images
import client from "../../../assets/images/client/05.jpg";

class ShopMyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Shop", link: "#" },
        { id: 3, name: "My Account" },
      ],
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

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb
          title="My Profile / Account"
          pathItems={this.state.pathItems}
        />
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section">
          <Container>
            <Row>
              <Col md={4} className="mt-4 pt-2">
                <div className="d-flex align-items-center">
                  <img
                    src={client}
                    className="avatar avatar-md-md rounded-circle"
                    alt=""
                  />
                  <div className="ms-3">
                    <h6 className="text-muted mb-0">Hello,</h6>
                    <h5 className="mb-0">Cally Joseph</h5>
                  </div>
                </div>

                <ul
                  className="nav nav-pills nav-justified flex-column bg-white rounded mt-4 shadow p-3 mb-0"
                  id="pills-tab"
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "1" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggleTab("1");
                      }}
                    >
                      <div className="text-start py-1 px-3">
                        <h6 className="mb-0">
                          <i className="uil uil-dashboard h5 align-middle me-2 mb-0"></i>{" "}
                          Dashboard
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "2" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggleTab("2");
                      }}
                      to="#"
                    >
                      <div className="text-start py-1 px-3">
                        <h6 className="mb-0">
                          <i className="uil uil-list-ul h5 align-middle me-2 mb-0"></i>{" "}
                          Orders
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "3" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggleTab("3");
                      }}
                      to="#"
                    >
                      <div className="text-start py-1 px-3">
                        <h6 className="mb-0">
                          <i className="uil uil-arrow-circle-down h5 align-middle me-2 mb-0"></i>{" "}
                          Downloads
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "4" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggleTab("4");
                      }}
                      to="#"
                    >
                      <div className="text-start py-1 px-3">
                        <h6 className="mb-0">
                          <i className="uil uil-map-marker h5 align-middle me-2 mb-0"></i>{" "}
                          Addresses
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "5" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggleTab("5");
                      }}
                      to="#"
                    >
                      <div className="text-start py-1 px-3">
                        <h6 className="mb-0">
                          <i className="uil uil-user h5 align-middle me-2 mb-0"></i>{" "}
                          Account Details
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <Link className="nav-link rounded" to="/auth-login">
                      <div className="text-start py-1 px-3">
                        <h6 className="mb-0">
                          <i className="uil uil-sign-out-alt h5 align-middle me-2 mb-0"></i>{" "}
                          Logout
                        </h6>
                      </div>
                    </Link>
                  </NavItem>
                </ul>
              </Col>

              <Col md={8} xs={12} className="mt-4 pt-2">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane
                    className="fade bg-white show shadow rounded p-4"
                    tabId="1"
                  >
                    <h6 className="text-muted">
                      Hello <span className="text-dark">cally_joseph</span> (not{" "}
                      <span className="text-dark">cally_joseph</span>?{" "}
                      <Link to="#" className="text-danger">
                        Log out
                      </Link>
                      )
                    </h6>

                    <h6 className="text-muted mb-0">
                      From your account dashboard you can view your{" "}
                      <Link to="#" className="text-danger">
                        recent orders
                      </Link>
                      , manage your{" "}
                      <Link to="#" className="text-danger">
                        shipping and billing addresses
                      </Link>
                      , and{" "}
                      <Link to="#" className="text-danger">
                        edit your password and account details
                      </Link>
                      .
                    </h6>
                  </TabPane>

                  <TabPane
                    className="show fade bg-white shadow rounded p-4"
                    tabId="2"
                  >
                    <div className="table-responsive bg-white shadow rounded">
                      <Table className="mb-0 table-center table-nowrap">
                        <thead>
                          <tr>
                            <th scope="col" className="border-bottom">Order no.</th>
                            <th scope="col" className="border-bottom">Date</th>
                            <th scope="col" className="border-bottom">Status</th>
                            <th scope="col" className="border-bottom">Total</th>
                            <th scope="col" className="border-bottom">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">7107</th>
                            <td>1st November 2020</td>
                            <td className="text-success">Delivered</td>
                            <td>
                              $ 320{" "}
                              <span className="text-muted">for 2items</span>
                            </td>
                            <td>
                              <Link to="#" className="text-primary">
                                View <i className="uil uil-arrow-right"></i>
                              </Link>
                            </td>
                          </tr>

                          <tr>
                            <th scope="row">8007</th>
                            <td>4th November 2020</td>
                            <td className="text-muted">Processing</td>
                            <td>
                              $ 800{" "}
                              <span className="text-muted">for 1item</span>
                            </td>
                            <td>
                              <Link to="#" className="text-primary">
                                View <i className="uil uil-arrow-right"></i>
                              </Link>
                            </td>
                          </tr>

                          <tr>
                            <th scope="row">8008</th>
                            <td>4th November 2020</td>
                            <td className="text-danger">Canceled</td>
                            <td>
                              $ 800{" "}
                              <span className="text-muted">for 1item</span>
                            </td>
                            <td>
                              <Link to="#" className="text-primary">
                                View <i className="uil uil-arrow-right"></i>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </TabPane>

                  <TabPane
                    className="show fade bg-white shadow rounded p-4"
                    tabId="3"
                  >
                    <div className="table-responsive bg-white shadow rounded">
                      <Table className="table mb-0 table-center table-nowrap">
                        <thead>
                          <tr>
                            <th scope="col" className="border-bottom">Product Name</th>
                            <th scope="col" className="border-bottom">Description</th>
                            <th scope="col" className="border-bottom">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Quick heal</th>
                            <td className="text-muted">
                              It is said that song composers of the past <br />{" "}
                              used dummy texts as lyrics when writing <br />{" "}
                              melodies in order to have a 'ready-made' <br />{" "}
                              text to sing with the melody.
                            </td>
                            <td className="text-success">Downloaded</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </TabPane>

                  <TabPane
                    className="show fade bg-white shadow rounded p-4"
                    tabId="4"
                  >
                    <h6 className="text-muted mb-0">
                      The following addresses will be used on the checkout page
                      by default.
                    </h6>

                    <Row>
                      <Col lg={6} className="mt-4 pt-2">
                        <div className="d-flex align-items-center mb-4 justify-content-between">
                          <h5 className="mb-0">Billing Address:</h5>
                          <Link to="#" className="text-primary h5 mb-0">
                            <i className="uil uil-edit align-middle"></i>
                          </Link>
                        </div>
                        <div className="pt-4 border-top">
                          <p className="h6">Cally Joseph</p>
                          <p className="h6 text-muted">
                            C/54 Northwest Freeway,{" "}
                          </p>
                          <p className="h6 text-muted">Suite 558,</p>
                          <p className="h6 text-muted">Houston, USA 485</p>
                          <p className="h6 text-muted mb-0">+123 897 5468</p>
                        </div>
                      </Col>

                      <Col lg={6} className="mt-4 pt-2">
                        <div className="d-flex align-items-center mb-4 justify-content-between">
                          <h5 className="mb-0">Shipping Address:</h5>
                          <Link to="#" className="text-primary h5 mb-0">
                            <i className="uil uil-edit align-middle"></i>
                          </Link>
                        </div>
                        <div className="pt-4 border-top">
                          <p className="h6">Cally Joseph</p>
                          <p className="h6 text-muted">
                            C/54 Northwest Freeway,{" "}
                          </p>
                          <p className="h6 text-muted">Suite 558,</p>
                          <p className="h6 text-muted">Houston, USA 485</p>
                          <p className="h6 text-muted mb-0">+123 897 5468</p>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>

                  <TabPane
                    className="show fade bg-white shadow rounded p-4"
                    tabId="5"
                  >
                    <Form>
                      <Row>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label className="form-label">First Name</Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="user"
                                className="fea icon-sm icons"
                              />
                              <input
                                name="name"
                                id="first-name"
                                type="text"
                                className="form-control ps-5"
                                defaultValue="Cally"
                              />
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label className="form-label">Last Name</Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="user-check"
                                className="fea icon-sm icons"
                              />
                              <input
                                name="name"
                                id="last-name"
                                type="text"
                                className="form-control ps-5"
                                defaultValue="Joseph"
                              />
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label className="form-label">Your Email</Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="mail"
                                className="fea icon-sm icons"
                              />
                              <input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control ps-5"
                                defaultValue="callyjoseph@gmail.com"
                              />
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label className="form-label">Display Name</Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="user-check"
                                className="fea icon-sm icons"
                              />
                              <input
                                name="name"
                                id="display-name"
                                type="text"
                                className="form-control ps-5"
                                defaultValue="cally_joseph"
                              />
                            </div>
                          </div>
                        </Col>

                        <div className="col-lg-12 mt-2 mb-0">
                          <button className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </Row>
                    </Form>

                    <h5 className="mt-4">Change password :</h5>
                    <form>
                      <div className="row mt-3">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <Label className="form-label">Old password :</Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="lock"
                                className="fea icon-sm icons"
                              />
                              <input
                                type="password"
                                className="form-control ps-5"
                                placeholder="Old password"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="mb-3">
                            <Label className="form-label">New password :</Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="lock"
                                className="fea icon-sm icons"
                              />
                              <input
                                type="password"
                                className="form-control ps-5"
                                placeholder="New password"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="mb-3">
                            <Label className="form-label">Re-type New password :</Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="lock"
                                className="fea icon-sm icons"
                              />
                              <input
                                type="password"
                                className="form-control ps-5"
                                placeholder="Re-type New password"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 mt-2 mb-0">
                          <button className="btn btn-primary">
                            Save Password
                          </button>
                        </div>
                      </div>
                    </form>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default ShopMyAccount;
