import React, { Component } from "react";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";

import FeatherIcon from "feather-icons-react";
import CountUp from "react-countup";

//Import Images
import social from "../../assets/images/social/1.png";

class SocialAccount extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-md-5">
          <Row className="justify-content-center" id="counter">
            <Col lg={8} md={10}>
              <div className="mb-4 pb-2 text-center">
                <h5 className="mb-0 fw-normal text-muted">
                  Join{" "}
                  <span className="text-success fw-bold">
                    <span className="counter-value">
                      <CountUp end={555} duration={8} />
                    </span>
                    +
                  </span>{" "}
                  user using{" "}
                  <span className="fw-bold text-primary">
                    Landrick.
                  </span>{" "}
                  to drive customer engagement, inspire brand loyalty, and grow
                  their business
                </h5>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={6} md={8} className="pb-md-4">
              <ul className="text-center mb-0 p-0">
                <li className="list-inline-item mx-2 mt-3">
                  <Link
                    id="facebook"
                    to="#"
                    className="btn btn-icon btn-pills btn-lg btn-blue me-1"
                  >
                    <i>
                      <FeatherIcon icon="facebook" className="icons" />
                    </i>
                  </Link>
                </li>
                <UncontrolledTooltip target="facebook" placement="top">
                  Facebook
                </UncontrolledTooltip>
                <li className="list-inline-item mx-2 mt-3">
                  <Link
                    to="#"
                    id="instagram"
                    className="btn btn-icon btn-pills btn-lg btn-danger me-1"
                  >
                    <i>
                      <FeatherIcon icon="instagram" className="icons" />
                    </i>
                  </Link>
                </li>
                <UncontrolledTooltip target="instagram" placement="top">
                  instagram
                </UncontrolledTooltip>
                <li className="list-inline-item mx-2 mt-3">
                  <Link
                    to="#"
                    id="linkedin"
                    className="btn btn-icon btn-pills btn-lg btn-secondary me-1"
                  >
                    <i>
                      <FeatherIcon icon="linkedin" className="icons" />
                    </i>
                  </Link>
                </li>
                <UncontrolledTooltip target="linkedin" placement="top">
                  linkedin
                </UncontrolledTooltip>
                <li className="list-inline-item mx-2 mt-3">
                  <Link
                    to="#"
                    id="twitter"
                    className="btn btn-icon btn-pills btn-lg btn-info me-1"
                  >
                    <i>
                      <FeatherIcon icon="twitter" className="icons" />
                    </i>
                  </Link>
                </li>
                <UncontrolledTooltip target="twitter" placement="top">
                  twitter
                </UncontrolledTooltip>
                <li className="list-inline-item mx-2 mt-3">
                  <Link
                    to="#"
                    id="gitlab"
                    className="btn btn-icon btn-pills btn-lg btn-warning me-1"
                  >
                    <i>
                      <FeatherIcon icon="gitlab" className="icons" />
                    </i>
                  </Link>
                </li>
                <UncontrolledTooltip target="gitlab" placement="top">
                  gitlab
                </UncontrolledTooltip>
                <li className="list-inline-item mx-2 mt-3">
                  <Link
                    to="#"
                    id="youtube"
                    className="btn btn-icon btn-pills btn-lg btn-danger me-1"
                  >
                    <i>
                      <FeatherIcon icon="youtube" className="icons" />
                    </i>
                  </Link>
                </li>
                <UncontrolledTooltip target="youtube" placement="top">
                  youtube
                </UncontrolledTooltip>
                <li className="list-inline-item mx-2 mt-3">
                  <Link
                    to="#"
                    id="whatsapp"
                    className="btn btn-icon btn-pills btn-lg btn-success me-1"
                  >
                    <i className="mdi mdi-whatsapp icons"></i>
                  </Link>
                </li>
                <UncontrolledTooltip target="whatsapp" placement="top">
                  whatsapp
                </UncontrolledTooltip>
                <li className="list-inline-item mx-2 mt-3">
                  <Link
                    to="#"
                    id="telegram"
                    className="btn btn-icon btn-pills btn-lg btn-info me-1"
                  >
                    <i className="mdi mdi-telegram icons"></i>
                  </Link>
                </li>
                <UncontrolledTooltip target="telegram" placement="top">
                  telegram
                </UncontrolledTooltip>
                <li className="list-inline-item mx-2 mt-3">
                  <Link
                    to="#"
                    id="skype"
                    className="btn btn-icon btn-pills btn-lg btn-blue"
                  >
                    <i className="mdi mdi-skype icons"></i>
                  </Link>
                </li>
                <UncontrolledTooltip target="skype" placement="top">
                  skype
                </UncontrolledTooltip>
              </ul>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={5} md={6} xs={12}>
              <div className="social-feature-left">
                <img src={social} className="img-fluid" alt="Landrick" />
              </div>
            </Col>

            <Col lg={7} md={6} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title ms-lg-4">
                <p className="text-primary h2 mb-3">
                  <i className="uil uil-airplay"></i>
                </p>
                <h4 className="title mb-3">
                  Manage Your All <br />{" "}
                  <span className="text-primary">Social Media</span> Account
                </h4>
                <p className="text-muted">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance: human perception is
                  tuned to recognize certain patterns and repetitions in texts.
                  If the distribution of letters visual impact.
                </p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-primary">
                    Get Start Now <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default SocialAccount;
