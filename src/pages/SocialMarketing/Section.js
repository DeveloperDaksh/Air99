import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import FeatherIcon from "feather-icons-react";

//Import Components
import hero from "../../assets/images/social/hero.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-home d-flex align-items-center bg-light"
          style={{ height: "auto" }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={9} className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
                <div className="title-heading margin-top-100">
                  <h1 className="heading mb-4">
                    One Solution for your{" "}
                    <span className="text-primary">Social Media Marketing</span>
                  </h1>
                  <p className="para-desc mx-auto text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <ul className="mt-4 list-unstyled mb-0 align-items-center">
                    <li className="list-inline-item me-1">
                      <Link
                        to="page-contact-one"
                        className="btn btn-primary me-2"
                      >
                        <i className="uil uil-envelope"></i> Request a Demo
                      </Link>
                    </li>
                    <li className="list-inline-item text-muted me-2 h6">Or</li>
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        className="text-primary fw-bold ms-1"
                      >
                        {" "}
                        Try it for Free{" "}
                        <i>
                          <FeatherIcon
                            icon="chevron-right"
                            className="fea icon-sm"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="home-dashboard">
                  <img src={hero} alt="" className="img-fluid mover" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
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

export default Section;
