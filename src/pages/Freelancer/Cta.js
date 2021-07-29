import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';

import cta from '../../assets/images/freelancer/cta.png';
import envelope from '../../assets/images/illustrator/envelope.svg';

//Import Icons
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';

export default class Cta extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section overflow-hidden">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6} md={{ size: 6, order: 2 }} className="order-1">
                                <img src={cta} className="img-fluid" alt="" />
                            </Col>

                            <Col lg={6} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ms-lg-5">
                                    <h4 className="title mb-4">Turn new leads and past clients into more paid work</h4>
                                    <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                                    <ul className="list-unstyled text-muted">
                                        <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                        <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                    </ul>
                                    <Link to="#" className="mt-3 h6 text-primary">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={5} md={5} xs={12}>
                                <img src={envelope} className="img-fluid mx-auto d-block" alt="" />
                            </Col>

                            <Col lg={7} md={7} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title">
                                    <div className="alert alert-light alert-pills" role="alert">
                                        <span className="badge bg-primary rounded-pill me-1">Apps</span>
                                        <span className="content">Download now <i className="uil uil-angle-right-b align-middle"></i></span>
                                    </div>
                                    <h4 className="title mb-4">Available for your <br /> Smartphones</h4>
                                    <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="my-4">
                                        <Link to="#" className="btn btn-lg btn-dark mt-2 me-2"><i className="uil uil-apple"></i> App Store</Link>
                                        <Link to="#" className="btn btn-lg btn-dark mt-2"><i className="uil uil-google-play"></i> Play Store</Link>
                                    </div>

                                    <div className="d-inline-block">
                                        <div className="pt-4 d-flex align-items-center border-top">
                                            <FeatherIcon
                                                icon="smartphone"
                                                className="fea icon-md me-2 text-primary"
                                            />
                                            <div className="content">
                                                <h6 className="mb-0">Install app now on your cellphones</h6>
                                                <Link to="#" className="text-primary h6">Learn More <i className="uil uil-angle-right-b"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}
