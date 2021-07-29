import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import AccordianCommon from "../../components/Shared/AccordianCommon";

export default class Questions extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col md={6}>
              <div className="section-title text-md-start text-center">
                <h4 className="title mb-4">You have any questions ?</h4>
                <p className="text-muted mb-0 para-desc">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>

                <ul className="list-unstyled text-muted mt-4 mb-0">
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Create your own skin to match your brand
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="faq-content">
                <div className="accordion" id="accordionExampleone">
                  <AccordianCommon
                    question1="How our Landrick work ?"
                    answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question2="What is the main process open account ?"
                    answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question3="How to make unlimited data entry ?"
                    answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question4="Is Landrick safer to use with my account ?"
                    answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    question5="How can i contact your technical team ?"
                    answer5="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                  />
                </div>
              </div>
            </Col>
          </Row>

          <div className="row mt-5 pt-md-4 justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                <p className="text-muted para-desc mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
                <Link
                  to="page-contact-two.html"
                  className="btn btn-primary mt-4"
                >
                  <i className="mdi mdi-phone"></i> Contact us
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
