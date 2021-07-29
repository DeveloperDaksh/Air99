import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

// import images
import email from "../../assets/images/email/home.png";

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-home d-flex align-items-center"
          style={{ height: "auto" }}
          id="home"
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
                <div className="title-heading margin-top-100">
                  <h1 className="heading fw-bold mb-3">
                    We Build A Design <br /> For Email Inbox
                  </h1>
                  <p className="para-desc mx-auto text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <a href="#about" className="btn btn-primary">
                      Start Free Trial <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </div>
                </div>

                <Row className="justify-content-center">
                  <Col lg={10}>
                    <div className="home-dashboard">
                      <img
                        src={email}
                        alt=""
                        className="img-fluid rounded-md shadow-lg"
                        style={{ zIndex: "-1" }}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
