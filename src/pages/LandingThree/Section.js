import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// import images
import bg from "../../assets/images/bg.png";

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 bg-primary d-table w-100"
          style={{ background: `url(${bg}) center center` }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="title-heading">
                  <h1 className="heading text-white title-dark mb-4">
                    Powerfull analytics <br /> tools for your business
                  </h1>
                  <p className="para-desc mx-auto text-white-50">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-light">
                      <i className="uil uil-envelope align-middle"></i> Get Started
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
