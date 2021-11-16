import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";
//Logo
import air99 from '../../assets/air99.jpg';
//Import Icons
import FeatherIcon from "feather-icons-react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "Best fare finder", link: "/" },
        { title: "search & book", link: "/page-aboutus" },
        { title: "multi search", link: "/page-services" },
        { title: "currencies", link: "/page-pricing" },
        { title: "ways to pay", link: "/page-cover-login" },
        { title: "online check-in", link: "/page-cover-login" },

      ],
      grid2: [
        { title: "Terms of Services", link: "/page-terms" },
        { title: "Privacy Policy", link: "/page-privacy" },
        { title: "Documentation", link: "/documentation" },
        { title: "Changelog", link: "/changelog" },
        { title: "Components", link: "/components" },
      ],
      grid3: [
        { title: "FAQs", link: "/faq" },
        { title: "Contact us", link: "/contact" },
        { title: "Privacy", link: "/privacy" },
        { title: "T&Cs", link: "/terms" }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <Container>
            <Row>
              <Col
                lg="4"
                xs="12"
                className="mt-2 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <h5 class="uppercase smallerp margin-bottom-10 text-light">Expert Support</h5>
                <p class="tinyp phone-number">
                  <FeatherIcon icon="phone" />&nbsp;
                  <Link className="text-foot">
                    CONTACT US</Link>
                </p>
                <ul className={this.props.isLight ? "list-unstyled social-icon social mb-0 m t-4" : "list-unstyled social-icon foot-social-icon mb-0 mt-4"}>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="facebook"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="instagram"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="twitter"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="linkedin"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                </ul>

                <Link to="#" className="logo-footer">
                  <img
                    src={air99}
                    height="50"
                    width="170"
                    alt="Air99"
                  />
                </Link>
              </Col>
              <Col lg="8" md="8" xs="12">
                <Row>
                  <Col
                    lg="4"
                    md="4"
                    xs="12"
                    className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                    name="footercolumn"
                  >
                    <h5
                      className={
                        this.props.isLight
                          ? "text-dark footer-head mx-2"
                          : "text-light footer-head mx-2"
                      }
                    >
                      Book
                    </h5>
                    <ul className="list-unstyled footer-list mt-2">
                      {this.state.grid1.map((grid, key) => (
                        <li key={key}>
                          <Link
                            to={grid.link}
                            className={
                              this.props.isLight ? "text-muted text-capitalize" : "text-foot text-capitalize"
                            }
                          >
                            <i className="mdi mdi-chevron-right me-1"></i>{" "}
                            {grid.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>

                  <Col
                    lg="4"
                    md="4"
                    xs="12"
                    className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                    name="footercolumn"
                  >
                    <h5
                      className={
                        this.props.isLight
                          ? "text-dark footer-head mx-2"
                          : "text-light footer-head mx-2"
                      }
                    >
                      About
                    </h5>
                    <ul className="list-unstyled footer-list mt-2">
                      {this.state.grid2.map((grid, key) => (
                        <li key={key}>
                          <Link
                            to={grid.link}
                            className={
                              this.props.isLight ? "text-muted text-capitalize" : "text-foot text-capitalize"
                            }
                          >
                            <i className="mdi mdi-chevron-right me-1"></i>
                            {grid.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>

                  <Col
                    lg="4"
                    md="4"
                    xs="12"
                    className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                    name="footercolumn"
                  >
                    <h5
                      className={
                        this.props.isLight
                          ? "text-dark footer-head mx-2"
                          : "text-light footer-head mx-2"
                      }
                    >
                      Help
                    </h5>

                    <ul className="list-unstyled footer-list mt-2">
                      {this.state.grid3.map((grid, key) => (
                        <li key={key}>
                          <Link
                            to={grid.link}
                            className={
                              this.props.isLight ? "text-muted text-capitalize" : "text-foot text-capitalize"
                            }
                          >
                            <i className="mdi mdi-chevron-right me-1"></i>{" "}
                            {grid.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>

          </Container>
          <p className="mt-4 text-center">
            © 2021 Copyright: &nbsp;
            <a class="text-reset fw-bold" href="/">Air99</a>
          </p>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
