import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import portfolio from "../../assets/images/work/bg-portfolio.jpg";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 d-table w-100"
          style={{ background: `url(${portfolio}) center center` }}
        >
          <div className="bg-overlay bg-overlay-white"></div>
          <Container>
            <Row className="justify-content-center">
              <Col xs="12">
                <div className="title-heading text-center mt-5 pt-4">
                  <h1 className="display-1 fw-bold mb-3">
                    Minimal Portfolio
                  </h1>
                  <p className="para-desc mx-auto h6">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
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
