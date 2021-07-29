import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

//import images
import onlineImg1 from '../../assets/images/course/online/ab01.jpg';
import onlineImg2 from '../../assets/images/course/online/ab02.jpg';
import onlineImg3 from '../../assets/images/course/online/ab03.jpg';

export default class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5} md={6}>
                            <Row className="align-items-center">
                                <Col lg={6} xs={6} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                                    <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                                        <CardBody className="p-0">
                                            <img src={onlineImg1} className="img-fluid" alt="" />
                                            <div className="overlay-work bg-dark"></div>
                                            <div className="content">
                                                <Link to="#" className="title text-white d-block fw-bold">Web Development</Link>
                                                <small className="text-light">IT & Software</small>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col lg={6} xs={6}>
                                    <Row>
                                        <Col lg={12} md={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                                            <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                                                <CardBody className="p-0">
                                                    <img src={onlineImg2} className="img-fluid" alt="" />
                                                    <div className="overlay-work bg-dark"></div>
                                                    <div className="content">
                                                        <Link to="#" className="title text-white d-block fw-bold">Michanical Engineer</Link>
                                                        <small className="text-light">Engineering</small>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>

                                        <Col lg={12} md={12} className="mt-4 pt-2">
                                            <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                                                <CardBody className="p-0">
                                                    <img src={onlineImg3} className="img-fluid" alt="" />
                                                    <div className="overlay-work bg-dark"></div>
                                                    <div className="content">
                                                        <Link to="#" className="title text-white d-block fw-bold">Chartered Accountant</Link>
                                                        <small className="text-light">C.A.</small>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={7} md={6} className="mt-4 mt-lg-0 pt- pt-lg-0">
                            <div className="ms-lg-4">
                                <div className="section-title">
                                    <span className="badge bg-soft-primary rounded-pill fw-bold">About us</span>
                                    <h4 className="title mb-4 mt-3">We design and develop <br /> world-class web applications.</h4>
                                    <p className="text-muted para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                                </div>

                                <div className="mt-4 pt-2">
                                    <a href="https://1.envato.market/landrickreactjs" rel='noopener noreferrer' target="_blank" className="btn btn-primary m-1">Read More <i className="uil uil-angle-right-b align-middle"></i></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}
