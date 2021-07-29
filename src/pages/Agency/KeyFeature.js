// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class KeyFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Template Key Features"
              desc="that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row>
              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <FeatherIcon
                      icon="monitor"
                      className="fea icon-ex-md text-primary"
                    />
                  </div>
                  <Media body>
                    <h4 className="title mb-0">Fully Responsive</h4>
                  </Media>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart fea icon-ex-md text-primary"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <Media body>
                    <h4 className="title mb-0">Browser Compatibility</h4>
                  </Media>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye fea icon-ex-md text-primary"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <Media body>
                    <h4 className="title mb-0">Retina Ready</h4>
                  </Media>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-bold fea icon-ex-md text-primary"
                    >
                      <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                      <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                    </svg>
                  </div>
                  <Media body>
                    <h4 className="title mb-0">Based On Bootstrap 5</h4>
                  </Media>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-feather fea icon-ex-md text-primary"
                    >
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                      <line x1="16" y1="8" x2="2" y2="22"></line>
                      <line x1="17.5" y1="15" x2="9" y2="15"></line>
                    </svg>
                  </div>
                  <Media body>
                    <h4 className="title mb-0">Feather Icons</h4>
                  </Media>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-code fea icon-ex-md text-primary"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <Media body>
                    <h4 className="title mb-0">Built With SASS</h4>
                  </Media>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user-check fea icon-ex-md text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <polyline points="17 11 19 13 23 9"></polyline>
                    </svg>
                  </div>
                  <Media body>
                    <h4 className="title mb-0">W3c Valid Code</h4>
                  </Media>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-git-merge fea icon-ex-md text-primary"
                    >
                      <circle cx="18" cy="18" r="3"></circle>
                      <circle cx="6" cy="6" r="3"></circle>
                      <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                    </svg>
                  </div>
                  <Media body>
                    <h4 className="title mb-0">Flaticon Icons</h4>
                  </Media>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-settings fea icon-ex-md text-primary"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                  <Media body>
                    <h4 className="title mb-0">Easy to customize</h4>
                  </Media>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs="12" className="text-center mt-4 pt-2">
                <Link to="#" className="btn btn-primary">
                  See More <i className="mdi mdi-arrow-right"></i>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default KeyFeature;
