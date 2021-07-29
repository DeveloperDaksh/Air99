// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

//import images
import app1 from "../../assets/images/app/1.png";
import app2 from "../../assets/images/app/2.png";
import app3 from "../../assets/images/app/3.png";
import app4 from "../../assets/images/app/4.png";

class ShowCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      features1: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      features2: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      features3: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      activeTab: "1",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-0 bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="How Can We Help You ?"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="align-items-center">
              <Col lg="5" md="6" className="mt-4 pt-2">
                <img src={app1} className="img-fluid mx-auto d-block" alt="" />
              </Col>

              <Col lg={7} md={6} className="mt-4 pt-2">
                <div className="section-title ms-lg-5">
                  <SectionTitleLeft
                    desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                    features={this.state.features}
                  >
                    <h4 className="title mb-4">
                      Best <span className="text-primary">Landrick</span> App
                      Partner For Your Life
                    </h4>
                  </SectionTitleLeft>
                  <Link to="#" className="mt-3 h6 text-primary">
                    Find Out More <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs="12" className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">
                    <span className="text-primary">Landrick</span> App Showcase
                  </h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
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
              <Col lg={8} md={12} className="mt-4 pt-2 text-center">
                <Nav
                  pills
                  justified
                  id="pills-tab"
                  className="flex-column flex-sm-row rounded"
                >
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "1" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      <div className="text-center py-2">
                        <h6 className="mb-0">
                          High Performance
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
                        this.toggle("2");
                      }}
                    >
                      <div className="text-center py-2">
                        <h6 className="mb-0">
                          Creative Design
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
                        this.toggle("3");
                      }}
                    >
                      <div className="text-center py-2">
                        <h6 className="mb-0">
                          24 / 7 Support
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
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={app2}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <SectionTitleLeft
                            desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                            features={this.state.features1}
                            className=""
                          >
                            <h4 className="title mb-4">
                              <i className="uil uil-angle-double-right text-primary"></i>{" "}
                              High Performing Landing App
                            </h4>
                          </SectionTitleLeft>
                          <Link to="#" className="mt-3 h6 text-primary">
                            Find Out More{" "}
                            <i className="uil uil-angle-right-b"></i>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={app3}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <SectionTitleLeft
                            desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                            features={this.state.features2}
                            className=""
                          >
                            <h4 className="title mb-4">
                              <i className="uil uil-angle-double-right text-primary"></i>{" "}
                              Creative Design and Clean Code
                            </h4>
                          </SectionTitleLeft>
                          <Link to="#" className="mt-3 h6 text-primary">
                            Find Out More{" "}
                            <i className="uil uil-angle-right-b"></i>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={app4}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <SectionTitleLeft
                            desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                            features={this.state.features3}
                            className=""
                          >
                            <h4 className="title mb-4">
                              <i className="uil uil-angle-double-right text-primary"></i>
                              24 / 7 App Supports and Responsive
                            </h4>
                          </SectionTitleLeft>
                          <Link to="#" className="mt-3 h6 text-primary">
                            Find Out More{" "}
                            <i className="uil uil-angle-right-b"></i>
                          </Link>
                        </div>
                      </Col>
                    </Row>
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

export default ShowCase;
