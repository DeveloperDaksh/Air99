import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'reactstrap';

//import images
import video1 from '../../assets/images/video/01.jpg';
import video2 from '../../assets/images/video/02.jpg';
import video3 from '../../assets/images/video/03.jpg';
import video4 from '../../assets/images/video/04.jpg';
import video5 from '../../assets/images/video/05.jpg';
import video6 from '../../assets/images/video/06.jpg';
import video7 from '../../assets/images/video/07.jpg';

export default class Group extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <Card className="rounded border-0 overflow-hidden">
                                <Row className="g-0">
                                    <Col md={6}>
                                        <div className="position-relative">
                                            <Link to="#"><img src={video1} className="img-fluid" alt="" /></Link>

                                            <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                                <div className="mb-3">
                                                    <Link to="#" className="btn btn-pills btn-icon btn-danger"><i className="uil uil-phone icons"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <Row className="g-0">
                                            <Col md={6} xs={4}>
                                                <div className="position-relative">
                                                    <Link to="#"><img src={video2} className="img-fluid" alt="" /></Link>

                                                    <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                                        <div className="mb-3">
                                                            <Link to="#" className="btn btn-pills btn-sm btn-icon btn-primary"><i className="uil uil-comment icons"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={6} xs={4}>
                                                <div className="position-relative">
                                                    <Link to="#"><img src={video3} className="img-fluid" alt="" /></Link>

                                                    <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                                        <div className="mb-3">
                                                            <Link to="#" className="btn btn-pills btn-sm btn-icon btn-primary"><i className="uil uil-comment icons"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={6} xs={4}>
                                                <div className="position-relative">
                                                    <Link to="#"><img src={video4} className="img-fluid" alt="" /></Link>

                                                    <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                                        <div className="mb-3">
                                                            <Link to="#" className="btn btn-pills btn-sm btn-icon btn-primary"><i className="uil uil-comment icons"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={6} xs={4}>
                                                <div className="position-relative">
                                                    <Link to="#"><img src={video5} className="img-fluid" alt="" /></Link>

                                                    <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                                        <div className="mb-3">
                                                            <Link to="#" className="btn btn-pills btn-sm btn-icon btn-primary"><i className="uil uil-comment icons"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={6} xs={4}>
                                                <div className="position-relative">
                                                    <Link to="#"><img src={video6} className="img-fluid" alt="" /></Link>

                                                    <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                                        <div className="mb-3">
                                                            <Link to="#" className="btn btn-pills btn-sm btn-icon btn-primary"><i className="uil uil-comment icons"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={6} xs={4}>
                                                <div className="position-relative">
                                                    <Link to="#"><img src={video7} className="img-fluid" alt="" /></Link>

                                                    <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                                        <div className="mb-3">
                                                            <Link to="#" className="btn btn-pills btn-sm btn-icon btn-primary"><i className="uil uil-comment icons"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col lg={6} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">Get the group together</h4>
                                <p className="text-muted">Keep the fun times rolling with your weekly game nights over group calling. Available for 50 friends at a time and works on Android phones, iPhones, iPads and tablets. You can also join a group call with just a link.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                </ul>
                                <Link to="#" className="mt-3 h6 text-primary">Let's Chat Now <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
