import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//import images
import enterprise from "../../assets/images/enterprise.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 bg-primary d-table w-100"
          style={{ background: `url(${enterprise}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col xs={12}>
                <div className="title-heading text-center mt-4">
                  <h1 className="display-4 title-dark fw-bold text-white mb-3">
                    Starting in Strong Way
                  </h1>
                  <p className="para-desc mx-auto text-white-50">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-primary">
                      <i className="uil uil-envelope"></i> Get Started
                    </Link>
                  </div>
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
