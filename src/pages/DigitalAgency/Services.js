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
} from "reactstrap";
import classnames from "classnames";

//Import Images
import digital1 from "../../assets/images/digital/1.png";
import digital2 from "../../assets/images/digital/2.png";
import digital3 from "../../assets/images/digital/3.png";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      successMsg: false,
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
          <Row className="align-items-center">
            <Col md={5}>
              <Nav
                pills
                justified
                className="flex-column rounded"
                id="pills-tab"
                role="tablist"
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
                    id="pills-cloud-tab"
                  >
                    <div className="p-3 text-start">
                      <h5>
                        Management Tools
                      </h5>
                      <p className="text-muted tab-para mb-0">
                        Dummy text is text that is used in the publishing
                        industry or by web designers to occupy the space which
                        will later be filled with 'real' content.
                      </p>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames(
                      { active: this.state.activeTab === "2" },
                      "rounded",
                      "border-top"
                    )}
                    onClick={() => {
                      this.toggleTab("2");
                    }}
                    id="pills-smart-tab"
                  >
                    <div className="p-3 text-start">
                      <h5>
                        Increase Effectiveness
                      </h5>
                      <p className="text-muted tab-para mb-0">
                        Dummy text is text that is used in the publishing
                        industry or by web designers to occupy the space which
                        will later be filled with 'real' content.
                      </p>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames(
                      { active: this.state.activeTab === "3" },
                      "rounded",
                      "border-top"
                    )}
                    onClick={() => {
                      this.toggleTab("3");
                    }}
                    id="pills-apps-tab"
                  >
                    <div className="p-3 text-start">
                      <h5>Data Analysis</h5>
                      <p className="text-muted tab-para mb-0">
                        Dummy text is text that is used in the publishing
                        industry or by web designers to occupy the space which
                        will later be filled with 'real' content.
                      </p>
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>

            <Col md={7} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="saas-feature-shape-right position-relative">
                <TabContent
                  activeTab={this.state.activeTab}
                  className="ms-lg-4"
                  id="pills-tabContent"
                >
                  <TabPane tabId="1">
                    <img
                      src={digital1}
                      className="img-fluid mx-auto d-block"
                      alt="Landrick"
                    />
                  </TabPane>

                  <TabPane tabId="2">
                    <img
                      src={digital2}
                      className="img-fluid mx-auto d-block"
                      alt="Landrick"
                    />
                  </TabPane>

                  <TabPane tabId="3">
                    <img
                      src={digital3}
                      className="img-fluid mx-auto d-block"
                      alt="Landrick"
                    />
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

export default Services;
