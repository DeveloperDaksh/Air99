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
} from "reactstrap";
import classnames from "classnames";

//Import Components
import TabContents from "./TabContent";

//Import Images
import img1 from "../../assets/images/customer/1.png";
import img2 from "../../assets/images/customer/2.png";
import img3 from "../../assets/images/customer/3.png";

class Support extends Component {
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
          <Row className="justify-content-center">
            <Col xs="12" className="text-center">
              <div className="section-title mb-4 pb-2">
                <h4
                  className="title mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Need to CRM Support
                </h4>
                <p
                  className="text-muted para-desc mb-0 mx-auto"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8" md="12" className="mt-4 pt-2 text-center">
              <Nav
                className="flex-column flex-sm-row rounded"
                pills
                justified
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <NavItem>
                  <NavLink
                    className={classnames(
                      { active: this.state.activeTab === "1" },
                      "rounded"
                    )}
                    onClick={() => {
                      this.toggleTab("1");
                    }}
                  >
                    <div className="text-center pt-1 pb-1">
                      <h6 className="title font-weight-normal mb-0">
                        Community
                      </h6>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames(
                      { active: this.state.activeTab === "2" },
                      "rounded"
                    )}
                    onClick={() => {
                      this.toggleTab("2");
                    }}
                  >
                    <div className="text-center pt-1 pb-1">
                      <h6 className="title font-weight-normal mb-0">
                        Self Service
                      </h6>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames(
                      { active: this.state.activeTab === "3" },
                      "rounded"
                    )}
                    onClick={() => {
                      this.toggleTab("3");
                    }}
                  >
                    <div className="text-center pt-1 pb-1">
                      <h6 className="title font-weight-normal mb-0">
                        Teamwork
                      </h6>
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>

          <Row>
            <Col xs="12" className="mt-4 pt-2">
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  {/* tabcontent */}
                  <TabContents
                    img={img1}
                    title="User Community"
                    desc="CRM systems start by collecting a customer's website, email, telephone, social media data, and more, across multiple sources and channels. It may also automatically pull in other information, such as recent news about the company's activity, and it can store personal details, such as a client's personal preferences on communications."
                    readMoreLink="#"
                    blogLink="#"
                  />
                </TabPane>

                <TabPane tabId="2">
                  <Row className="align-items-center">
                    <Col
                      md={{ size: 6, order: 1 }}
                      xs={{ order: 2 }}
                      className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                    >
                      <div className="section-title me-md-4">
                        <h4
                          className="title mb-4"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                        >
                          Self-service Portal
                        </h4>
                        <p
                          className="text-muted"
                          data-aos="fade-up"
                          data-aos-duration="1400"
                        >
                          CRM systems start by collecting a customer's website,
                          email, telephone, social media data, and more, across
                          multiple sources and channels. It may also
                          automatically pull in other information, such as
                          recent news about the company's activity, and it can
                          store personal details, such as a client's personal
                          preferences on communications.
                        </p>
                        <div
                          className="mt-4"
                          data-aos="fade-up"
                          data-aos-duration="1800"
                        >
                          <Link
                            to="#"
                            className="text-primary p-1 px-2 shadow rounded me-3"
                          >
                            Read More <i className="mdi mdi-chevron-right"></i>
                          </Link>
                          <Link
                            to="#"
                            className="text-warning p-1 px-2 shadow rounded"
                          >
                            Blogs
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                      <img
                        src={img2}
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        className="img-fluid mx-auto d-block shadow rounded"
                        alt=""
                      />
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="3">
                  {/* tabcontent */}
                  <TabContents
                    img={img3}
                    title="Proper Teamwork"
                    desc="CRM systems start by collecting a customer's website, email, telephone, social media data, and more, across multiple sources and channels. It may also automatically pull in other information, such as recent news about the company's activity, and it can store personal details, such as a client's personal preferences on communications."
                    readMoreLink="#"
                    blogLink="#"
                  />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Support;
