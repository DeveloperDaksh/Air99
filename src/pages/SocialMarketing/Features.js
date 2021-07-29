import React, { Component } from 'react';
import { Container, Row, Col, CardBody, Card } from 'reactstrap';
import { Link } from "react-router-dom";

import FeatherIcon from 'feather-icons-react';
import * as Unicons from '@iconscout/react-unicons';

//Import Images
import social3 from "../../assets/images/social/social.svg";

class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6} xs={12} className="col--6">
                            <Row className="me-lg-4" id="counter">
                                <Col md={6} xs={12}>
                                    <Row>
                                        <Col xs={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                                            <Card className="explore-feature border-0 rounded text-center bg-white shadow">
                                                <CardBody>
                                                    <div className="icon rounded-circle shadow-lg d-inline-block">
                                                        <i><FeatherIcon icon="edit" className="fea" /></i>
                                                    </div>
                                                    <h5 className="mt-3 title">Perfect Design</h5>
                                                    <p className="text-muted mb-0">Dummy text is text that is used in the publishing</p>
                                                </CardBody>
                                            </Card>
                                        </Col>

                                        <Col xs={12} className="mt-4 pt-2">
                                            <Card className="explore-feature border-0 rounded text-center bg-white shadow">
                                                <CardBody>
                                                    <div className="icon rounded-circle shadow-lg d-inline-block">
                                                        <i><FeatherIcon icon="aperture" className="fea" /></i>
                                                    </div>
                                                    <h5 className="mt-3 title">Manage Social Media</h5>
                                                    <p className="text-muted mb-0">Dummy text is text that is used in the publishing</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md={6} xs={12}>
                                    <Row className="pt-lg-4 mt-lg-4">
                                        <Col xs={12} className="mt-4 pt-2">
                                            <Card className="explore-feature border-0 rounded text-center bg-white shadow">
                                                <CardBody>
                                                    <div className="icon rounded-circle shadow-lg d-inline-block">
                                                        <i><FeatherIcon icon="smartphone" className="fea" /></i>
                                                    </div>
                                                    <h5 className="mt-3 title">No Interface</h5>
                                                    <p className="text-muted mb-0">Dummy text is text that is used in the publishing</p>
                                                </CardBody>
                                            </Card>
                                        </Col>

                                        <Col xs={12} className="mt-4 pt-2">
                                            <Card className="explore-feature border-0 rounded text-center bg-white shadow">
                                                <CardBody>
                                                    <div className="icon rounded-circle shadow-lg d-inline-block">
                                                        <i><FeatherIcon icon="message-circle" className="fea" /></i>
                                                    </div>
                                                    <h5 className="mt-3 title">Free Installation</h5>
                                                    <p className="text-muted mb-0">Dummy text is text that is used in the publishing</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} xs={12} className="col--6 mt-4 pt-2 mt-lg-0 pt-lg-0">
                            <div className="section-title ms-lg-4">
                                <p className="text-primary h2 mb-3"><i className="uil uil-apps"></i></p>
                                <h4 className="title mb-3">Our Great Features</h4>
                                <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                                <div className="mt-4">
                                    <Link to="#" className="btn btn-primary">See More <i className="uil uil-angle-right-b"></i></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={5} md={{ size: 6, order: 2 }} xs={{ size: 12, order: 1 }}>
                            <div className="social-feature-right">
                                <img src={social3} className="img-fluid" alt="Landrick" />
                            </div>
                        </Col>

                        <Col lg={7} md={{ size: 6, order: 1 }} xs={{ size: 12, order: 1 }} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="section-title me-lg-4">
                                <p className="text-primary h2 mb-3"><i><Unicons.UilCube size="35" /></i></p>
                                <h4 className="title mb-3">We Integrated your <br /> Favorite <span className="text-primary">Social Media</span></h4>
                                <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                                <div className="d-inline-block">
                                    <div className="pt-3 d-flex align-items-center border-top">
                                        <i><FeatherIcon icon="cpu" className="fea icon-md me-2 text-primary" /></i>
                                        <div className="content">
                                            <h6 className="mb-0">Became a smarter</h6>
                                            <Link to="#" className="text-primary">Find more solutions <i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Features;