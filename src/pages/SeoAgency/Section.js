import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//import bg-image
import bgImage from "../../assets/images/seo/bg.png";

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 bg-light d-table w-100"
          style={{ background: `url(${bgImage}) center center` }}
        >
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="title-heading">
                  <span className="badge rounded-pill bg-soft-primary">
                    <b>Best SEO Service</b>
                  </span>
                  <h4 className="heading mt-2 mb-4">
                    An expert search engine optimization
                  </h4>
                  <p className="para-desc mx-auto text-muted mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>

                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-pills btn-primary m-1">
                      Get Started
                    </Link>
                    <Link to="#" className="btn btn-pills btn-soft-primary m-1">
                      Learn More
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
