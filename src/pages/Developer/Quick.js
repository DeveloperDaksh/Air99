import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  TabContent,
  Nav,
  NavItem,
  TabPane,
  NavLink,
} from "reactstrap";
import classnames from "classnames";

export default class Quick extends Component {
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
          <Row className="row justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h6 className="text-primary">Quickstart</h6>
                <h4 className="title mb-4">Awesome isn't it? Let's dive in!</h4>
                <p className="para-desc mx-auto text-muted mb-0">
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
            <Col lg={8} mg={10} className="mt-4 pt-2">
              <div className="bg-dark bg-white-dark p-4 rounded shadow">
                <Row>
                  <Col lg={12}>
                    <Nav className="nav-pills nav-tabs nav-justified flex-column flex-sm-row rounded bg-soft-light">
                      <NavItem className="hover-border">
                        <NavLink
                          // className="nav-link nav-link-alt rounded active"
                          className={classnames(
                            { active: this.state.activeTab === "1" },
                            "rounded nav-link-alt"
                          )}
                          onClick={() => {
                            this.toggleTab("1");
                          }}
                        >
                          <div className="text-center">
                            <h5 className="title font-weight-normal mb-0">
                              npm
                            </h5>
                          </div>
                        </NavLink>
                      </NavItem>

                      <NavItem className="hover-border">
                        <NavLink
                          // className="nav-link nav-link-alt rounded active"
                          className={classnames(
                            { active: this.state.activeTab === "2" },
                            "rounded nav-link-alt"
                          )}
                          onClick={() => {
                            this.toggleTab("2");
                          }}
                        >
                          <div className="text-center">
                            <h5 className="title font-weight-normal mb-0">
                              nuget
                            </h5>
                          </div>
                        </NavLink>
                      </NavItem>

                      <NavItem className="hover-border">
                        <NavLink
                          // className="nav-link nav-link-alt rounded active"
                          className={classnames(
                            { active: this.state.activeTab === "3" },
                            "rounded nav-link-alt"
                          )}
                          onClick={() => {
                            this.toggleTab("3");
                          }}
                        >
                          <div className="text-center">
                            <h5 className="title font-weight-normal mb-0">
                              spm
                            </h5>
                          </div>
                        </NavLink>
                      </NavItem>

                      <NavItem className="hover-border">
                        <NavLink
                          className={classnames(
                            { active: this.state.activeTab === "4" },
                            "rounded nav-link-alt"
                          )}
                          onClick={() => {
                            this.toggleTab("4");
                          }}
                        >
                          <div className="text-center">
                            <h5 className="title font-weight-normal mb-0">
                              github
                            </h5>
                          </div>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane
                      tabId="1"
                        className="fade show"
                      >
                        <p className="text-muted fw-bold mb-0">
                          <span className="text-success">$</span> npm install{" "}
                          <span className="text-success">-g</span> claps.js
                        </p>
                      </TabPane>

                      <TabPane className="fade show" tabId="2">
                        <p className="text-muted fw-bold mb-0">
                          coming soon ...
                        </p>
                      </TabPane>

                      <TabPane className="fade show" tabId="3">
                        <p className="text-muted fw-bold mb-0">
                          coming soon ...
                        </p>
                      </TabPane>

                      <TabPane className="fade show" tabId="4">
                        <p className="text-muted fw-bold mb-0">
                          coming soon ...
                        </p>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </div>

              <ul className="list-unstyled text-muted mb-0 mt-3">
                <li className="list-inline-item me-lg-5 me-4">
                  <span className="text-success h5 me-2">
                    <i className="uil uil-check-circle align-middle"></i>
                  </span>
                  Organize your data
                </li>
                <li className="list-inline-item me-lg-5 me-4">
                  <span className="text-success h5 me-2">
                    <i className="uil uil-check-circle align-middle"></i>
                  </span>
                  Work with any team
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
