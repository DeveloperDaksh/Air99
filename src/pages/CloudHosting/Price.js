// React Basic and Bootstrap
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardBody,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings1: [
        {
          id: 1,
          title: "CLOUD HOSTING",
          price: 0,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [
            { title: "2 GB Memory" },
            { title: "10 Free Optimization" },
            { title: "24/7 support" },
            { title: "Content Optimization" },
          ],
        },
        {
          id: 2,
          title: "DEDICATED HOSTING",
          price: 39,
          duration: "mo",
          buttonText: "Get Started",
          btnLink: "",
          isActive: true,
          features: [
            { title: "2 GB Memory" },
            { title: "10 Free Optimization" },
            { title: "24/7 support" },
            { title: "Content Optimization" },
          ],
        },
        {
          id: 3,
          title: "VPS HOSTING",
          price: 59,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [
            { title: "2 GB Memory" },
            { title: "10 Free Optimization" },
            { title: "24/7 support" },
            { title: "Content Optimization" },
          ],
        },
        {
          id: 4,
          title: "SHARED HOSTING",
          price: 79,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [
            { title: "2 GB Memory" },
            { title: "10 Free Optimization" },
            { title: "24/7 support" },
            { title: "Content Optimization" },
          ],
        },
      ],
      pricings2: [
        {
          id: 1,
          title: "CLOUD HOSTING",
          price: 29,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [
            { title: "2 GB Memory" },
            { title: "10 Free Optimization" },
            { title: "24/7 support" },
            { title: "Content Optimization" },
          ],
        },
        {
          id: 2,
          title: "DEDICATED HOSTING",
          price: 239,
          duration: "mo",
          buttonText: "Get Started",
          btnLink: "",
          isActive: true,
          features: [
            { title: "2 GB Memory" },
            { title: "10 Free Optimization" },
            { title: "24/7 support" },
            { title: "Content Optimization" },
          ],
        },
        {
          id: 3,
          title: "VPS HOSTING",
          price: 259,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [
            { title: "2 GB Memory" },
            { title: "10 Free Optimization" },
            { title: "24/7 support" },
            { title: "Content Optimization" },
          ],
        },
        {
          id: 4,
          title: "SHARED HOSTING",
          price: 479,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [
            { title: "2 GB Memory" },
            { title: "10 Free Optimization" },
            { title: "24/7 support" },
            { title: "Content Optimization" },
          ],
        },
      ],
      activeTab: "1",
      activeIndex1: 1,
      activeIndex2: 5,
    };
    this.toggleTab.bind(this);
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
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our Hosting Rates"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="align-items-center">
              <Col xs="12" className="mt-4 pt-2">
                <div className="text-center">
                  <Nav
                    pills
                    justified
                    className="rounded-pill justify-content-center d-inline-block border py-1 px-2"
                  >
                    <NavItem className="d-inline-block">
                      <NavLink
                        className={classnames(
                          { active: this.state.activeTab === "1" },
                          "px-3",
                          "rounded-pill",
                          "monthly"
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
                          "px-3",
                          "rounded-pill",
                          "yearly"
                        )}
                        onClick={() => {
                          this.toggleTab("2");
                        }}
                      >
                        Yearly{" "}
                        <span className="badge rounded-pill bg-success">15% Off </span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      {this.state.pricings1.map((pricing, key) => (
                        <Col
                          lg={3}
                          key={key}
                          md={6}
                          xs={12}
                          className="mt-4 pt-2"
                        >
                          <Card
                            className={
                              pricing.isActive
                                ? "pricing-rates bg-white rounded border-0 shadow"
                                : "pricing-rates bg-light rounded border-0 shadow"
                            }
                          >
                            <CardBody className="py-5">
                              <h6
                                className={
                                  pricing.isActive
                                    ? "title text-uppercase mb-4 text-primary"
                                    : "title text-uppercase mb-4"
                                }
                              >
                                {pricing.title}
                              </h6>
                              <div className="d-flex mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price h1 mb-0">
                                  {pricing.price}
                                </span>
                                <span className="h4 align-self-end mb-1">
                                  /{pricing.duration}
                                </span>
                              </div>

                              <ul className="list-unstyled mb-0 ps-0">
                                {pricing.features.map((feature, key) => (
                                  <li key={key} className="text-muted mb-0">
                                    <span className="text-primary h5 me-2">
                                      <i className="uil uil-check-circle align-middle"></i>
                                    </span>
                                    {feature.title}
                                  </li>
                                ))}
                              </ul>
                              <Link to="#" className="btn btn-primary mt-4">
                                Buy Now
                              </Link>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>

                  <TabPane tabId="2">
                    <Row>
                      {this.state.pricings2.map((pricing, key) => (
                        <Col
                          lg={3}
                          key={key}
                          md={6}
                          xs={12}
                          className="mt-4 pt-2"
                        >
                          <div
                            className={
                              pricing.isActive
                                ? "pricing-rates bg-white py-5 p-4 rounded"
                                : "pricing-rates bg-light py-5 p-4 rounded"
                            }
                          >
                            <h6
                              className={
                                pricing.isActive
                                  ? "title text-uppercase fw-bold mb-4 text-primary"
                                  : "title text-uppercase fw-bold mb-4"
                              }
                            >
                              {pricing.title}
                            </h6>
                            <div className="d-flex mb-4">
                              <span className="h4 mb-0 mt-2">$</span>
                              <span className="price h1 mb-0">
                                {pricing.price}
                              </span>
                              <span className="h4 align-self-end mb-1">
                                /{pricing.duration}
                              </span>
                            </div>

                            <ul className="list-unstyled mb-0 ps-0">
                              {pricing.features.map((feature, key) => (
                                <li key={key} className="text-muted mb-0">
                                  <span className="text-primary h5 me-2">
                                    <i className="uil uil-check-circle align-middle"></i>
                                  </span>
                                  {feature.title}
                                </li>
                              ))}
                            </ul>
                            <Link to="#" className="btn btn-primary mt-4">
                              Buy Now
                              </Link>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Price;
