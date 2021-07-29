import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import AccordianCommon2 from "./AccordianCommon2";

import travel from "../../assets/images/travel/3.jpg";
import travel2 from '../../assets/images/travel/2.jpg';

export default class Guarantee extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={5} md={6} className="order-1 order-md-2">
              <img
                src={travel}
                className="img-fluid rounded shadow-md"
                alt=""
              />
            </Col>
            <Col
              lg={7}
              md={6}
              className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
            >
              <div className="section-title me-lg-5">
                <h4 className="title mb-4">
                  100% Money back <br /> Guarantee if You Cancel
                </h4>
                <p className="text-muted">
                  You can combine all the Landrick templates into a single one,
                  you can take a component from the Application theme and use it
                  in the Website.
                </p>
              </div>
              <AccordianCommon2
                question1="How our Landrick work ?"
                answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                question2="What is the main process open account ?"
                answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                question3="How to make unlimited data entry ?"
                answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                question4="HWhat happens when I receive an order ?"
                answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
              />
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
                <Row className="align-items-center">
                    <Col lg={5} md={6}>
                        <img src={travel2}  className="img-fluid rounded shadow-md" alt="" />
                    </Col>

                    <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-4">
                            <h4 className="title mb-4">We have More than 500 <br /> Selected Destination</h4>
                            <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                            </ul>
                            <Link to="#" className="mt-3 h6 text-primary">Search Destination <i className="mdi mdi-chevron-right"></i></Link>
                        </div>
                    </div>
                </Row>
            </Container>
      </React.Fragment>
    );
  }
}
