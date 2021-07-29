// React basic and bootstrap
import React, { Component } from "react";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import ScrollspyNav from "./ScrollspyNav";

// Import  Images
import rocket from "../../assets/images/home/rocket.svg";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

//Import Images
import bootstrap2 from "../../assets/images/hero/bootstrap2.png";
import scss2 from "../../assets/images/hero/scss2.png";
import html2 from "../../assets/images/hero/html2.png";
import css2 from "../../assets/images/hero/css2.png";
import w3c2 from "../../assets/images/hero/w3c2.png";
import ui2 from "../../assets/images/hero/ui2.png";
import logo_dark from "../../assets/images/logo-dark.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-170 home-wrapper border-bottom d-table w-100"
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={7}>
                <div className="title-heading">
                  <img src={logo_dark} height="36" alt="" />
                  <span className="bg-danger rounded-pill font-weight-bold text-white shadow h6 mb-0 ms-2" style={{ padding: '17px 13px' }}>v3.1</span>
                  <h4 className="heading title fw-bold mt-4 mb-3">
                    Built For &nbsp;
                    <Typist>
                      <span className="element text-primary">
                        Saas & Software
                      </span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">Application</span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">IT Solutions</span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">
                        Corporate Business
                      </span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">Travel</span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">
                        Task Management
                      </span>
                      <Typist.Backspace count={17} delay={400} />
                      <span className="element text-primary">Email Inbox</span>
                      <Typist.Backspace count={18} delay={400} />
                      <span className="element text-primary">Enterprise</span>
                      <Typist.Backspace count={5} delay={400} />
                      <span className="element text-primary">Payments</span>
                      <Typist.Backspace count={11} delay={400} />
                      <span className="element text-primary">
                        Cryptocurrency
                      </span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">Software</span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">Coworking</span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">Services</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">
                        Minimal Portfolio
                      </span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Forums</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">
                        Job or Careers
                      </span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Classic Application</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Classic Saas</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Car Ride</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Customer Support</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Onepage</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Cloud Hosting</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Event, Business</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Marketing</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Agency</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Studio</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Hotel</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Modern Business</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Construction</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Real Estate</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Health Care</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Integration</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Developer</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">SEO Agency</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Shop Landing</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">E-Book Landing</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Insurance Landing</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Help Center E-mail Template</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Digital Agency</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Online Learning</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Social Marketing</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Educational Course</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Personal Portfolio</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Single Product</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Blogs and Portfolios</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">RTL Supported Theme</span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">Dark Supported Theme</span>

                    </Typist>
                  </h4>
                  <p className="para-desc text-muted">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>

                  <div className="mt-4 pt-2">
                    <ScrollspyNav
                      scrollTargetIds={["demos"]}
                      activeNavclassName="active"
                      scrollDuration="800"
                      headerBackground="true"
                    >
                      <a
                        href="#demos"
                        className="btn btn-primary rounded mouse-down me-2 mb-2"
                      >
                        View Demos
                      </a>
                      <a
                        href="https://1.envato.market/landrickreactjs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary rounded ms-1 mb-2"
                      >
                        Download Now
                      </a>
                    </ScrollspyNav>
                  </div>
                </div>
              </Col>

              <Col lg={5} md={5} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <img src={rocket} className="img-fluid mover" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="attach-icons-hero text-center py-5 py-sm-0">
            <Link to="#">
              <img
                src={bootstrap2}
                id="bootstrap2"
                className="img-fluid avatar avatar-small  my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow"
                alt=""
              />
            </Link>
            <UncontrolledTooltip target="bootstrap2" placement="top">
              Bootstrap
            </UncontrolledTooltip>
            <Link to="#">
              <img
                src={scss2}
                id="scss2"
                className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow"
                alt=""
              />
            </Link>
            <UncontrolledTooltip target="scss2" placement="top">
              Scss
            </UncontrolledTooltip>
            <Link to="#">
              <img
                src={html2}
                id="html2"
                className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow"
                alt=""
              />
            </Link>
            <UncontrolledTooltip target="html2" placement="top">
              HTML
            </UncontrolledTooltip>
            <Link to="#">
              <img
                src={css2}
                id="css2"
                className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow"
                alt=""
              />
            </Link>
            <UncontrolledTooltip target="css2" placement="top">
              Css
            </UncontrolledTooltip>
            <Link to="#">
              <img
                src={w3c2}
                id="w3c2"
                className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow"
                alt=""
              />
            </Link>
            <UncontrolledTooltip target="w3c2" placement="top">
              W3c Valid
            </UncontrolledTooltip>
            <Link to="#">
              <img
                src={ui2}
                id="ui2"
                className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow"
                alt=""
              />
            </Link>
            <UncontrolledTooltip target="ui2" placement="top">
              Ui Kit
            </UncontrolledTooltip>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
