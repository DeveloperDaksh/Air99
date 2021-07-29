import React, { Component } from 'react'

//import images
import illustrator1 from '../../assets/images/illustrator/undraw_crypto.svg'
import faq from '../../assets/images/illustrator/faq.svg';

import AccordianCommon2 from "../../pages/Travel/AccordianCommon2";
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Cta extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={5} md={6}>
                                <img src={illustrator1} className="img-fluid" alt="" />
                            </Col>

                            <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ms-lg-5">
                                    <h4 className="title mb-4">The Easiest and Most Powerful Crypto Wallet</h4>
                                    <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                    <ul className="list-unstyled text-muted">
                                        <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                        <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                                        <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                    </ul>
                                    <Link to="#" className="mt-3 h6 text-primary">Find Out More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={7} md={6}>
                                <div className="accordion" id="accordionExample">
                                    <AccordianCommon2
                                        question1="How does it work ?"
                                        answer1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                        question2="Do I need a designer to use Landrick ?"
                                        answer2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                        question3="What do I need to do to start selling ?"
                                        answer3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                        question4="What happens when I receive an order ?"
                                        answer4="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                                    />
                                </div>
                            </Col>

                            <Col lg={5} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <img src={faq} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}
