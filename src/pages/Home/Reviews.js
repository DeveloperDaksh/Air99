import React, { Component } from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import envato from "../../assets/images/home/envato.png";

class Reviews extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section" id="review">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <div className="section-title mb-4 text-center">
                                    <h4 className="title text-uppercase fw-bold">Happy Clients</h4>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                                <div className="clients bg-light p-4 rounded shadow">
                                    <h5>Code Quality</h5>
                                    <p className="text-muted h6">" The <span className="text-primary">cleanest template</span> i've ever used, keep it clean. "</p>
                                    <Media className=" align-items-center mt-3">
                                        <img src={envato} className="avatar avatar-sm" alt="" />
                                        <Media body className="ms-2">
                                            <ul className="list-unstyled h6 text-warning mb-0">
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                            <small className="text-primary">- cayaner</small>
                                        </Media>
                                    </Media>
                                </div>
                            </Col>

                            <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                                <div className="clients bg-light p-4 rounded shadow">
                                    <h5>Code Quality</h5>
                                    <p className="text-muted h6">" A really good template, <span className="text-primary">highly recommended!</span> "</p>
                                    <Media className=" align-items-center mt-3">
                                        <img src={envato} className="avatar avatar-sm" alt="" />
                                        <Media body className="ms-2">
                                            <ul className="list-unstyled h6 text-warning mb-0">
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                            <small className="text-primary">- ivelinpenchev</small>
                                        </Media>
                                    </Media>
                                </div>
                            </Col>

                            <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                                <div className="clients bg-light p-4 rounded shadow">
                                    <h5>Design Quality</h5>
                                    <p className="text-muted h6">" It's just <span className="text-primary">perfect!</span> Thank you! "</p>
                                    <Media className=" align-items-center mt-3">
                                        <img src={envato} className="avatar avatar-sm" alt="" />
                                        <Media body className="ms-2">
                                            <ul className="list-unstyled h6 text-warning mb-0">
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                            <small className="text-primary">- GIK-Team</small>
                                        </Media>
                                    </Media>
                                </div>
                            </Col>

                            <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                                <div className="clients bg-light p-4 rounded shadow">
                                    <h5>Customer Support</h5>
                                    <p className="text-muted h6">" Whery nice product. <br /> <span className="text-primary">Suport is very good.</span> <br /> I'm lucky to work with it. <br /> Thank you so much! "</p>
                                    <Media className=" align-items-center mt-3">
                                        <img src={envato} className="avatar avatar-sm" alt="" />
                                        <Media body className="ms-2">
                                            <ul className="list-unstyled h6 text-warning mb-0">
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                            <small className="text-primary">- kostys2</small>
                                        </Media>
                                    </Media>
                                </div>
                            </Col>

                            <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                                <div className="clients bg-light p-4 rounded shadow">
                                    <h5>Design Quality</h5>
                                    <p className="text-muted h6">" nice "</p>
                                    <Media className=" align-items-center mt-3">
                                        <img src={envato} className="avatar avatar-sm" alt="" />
                                        <Media body className="ms-2">
                                            <ul className="list-unstyled h6 text-warning mb-0">
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                            <small className="text-primary">- thaibmt</small>
                                        </Media>
                                    </Media>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <div className="section-title text-center">
                                    <h4 className="title mb-4 text-uppercase fw-bold">Get Started With Landrick<span className="text-primary">.</span></h4>
                                    <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-4 pt-2">
                                        <Link to="https://1.envato.market/landrickreactjs" target="_blank" className="btn btn-primary">Download Now <span className="badge badge-pill badge-danger ms-2">v3.1</span></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Reviews;