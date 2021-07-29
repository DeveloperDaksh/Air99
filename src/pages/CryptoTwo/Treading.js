import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'

export default class Treading extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <div className="section-title text-center mb-4 pb-2">
                                    <h4 className="title mb-4">Treading. Anytime. Anywhare.</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} className="mt-4 pt-2">
                                <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                                    <div className="align-items-center">
                                        <span className="h2 mb-0 icon2 text-primary float-md-end">
                                            <i className="uil uil-mobile-android"></i>
                                        </span>
                                        <h5 className="mb-0 mt-md-2">Mobile</h5>
                                    </div>
                                    <CardBody className="p-0 content mt-3">
                                        <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                                    </CardBody>
                                </Card>

                                <div className="mt-3">
                                    <Link to="#" className="btn btn-outline-primary m-1"><i className="uil uil-google-play"></i> Google Play</Link>
                                    <Link to="#" className="btn btn-outline-primary m-1"><i className="uil uil-android"></i> Android APK</Link>
                                    <Link to="#" className="btn btn-outline-primary m-1"><i className="uil uil-apple"></i> App Store</Link>
                                    <Link to="#" className="btn btn-icon btn-outline-primary m-1"><i className="uil uil-qrcode-scan icons"></i></Link>
                                </div>
                            </Col>

                            <Col lg={4} className="mt-4 pt-2">
                                <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                                    <div className="align-items-center">
                                        <span className="h2 mb-0 icon2 text-primary float-md-end">
                                            <i className="uil uil-airplay"></i>
                                        </span>
                                        <h5 className="mb-0 mt-md-2">Desktop</h5>
                                    </div>
                                    <CardBody className="p-0 content mt-3">
                                        <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                                    </CardBody>
                                </Card>

                                <div className="mt-3">
                                    <Link to="#" className="btn btn-outline-primary m-1"><i className="uil uil-apple"></i> Mac OS</Link>
                                    <Link to="#" className="btn btn-outline-primary m-1"><i className="uil uil-apps"></i> Windows</Link>
                                    <Link to="#" className="btn btn-outline-primary m-1"><i className="uil uil-linux"></i> Linux</Link>
                                </div>
                            </Col>

                            <Col lg={4} className="mt-4 pt-2">
                                <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                                    <div className="align-items-center">
                                        <span className="h2 mb-0 icon2 text-primary float-md-end">
                                            <i className="uil uil-mobile-android"></i>
                                        </span>
                                        <h5 className="mb-0 mt-md-2">API</h5>
                                    </div>
                                    <CardBody className="p-0 content mt-3">
                                        <p className="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                                    </CardBody>
                                </Card>

                                <div className="mt-4 text-center">
                                    <Link to="#" className="text-primary h6">Official Landrick API Documentation</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Container fluid className="px-0 footer-border-bottom">
                    <div className="py-5 bg-footer">
                        <Container>
                            <Row className="align-items-center">
                                <Col md={8}>
                                    <div className="section-title">
                                        <div className="d-flex">
                                            <i className="uil uil-envelope-star display-4 text-white title-dark"></i>
                                            <div className="flex-1 ms-md-4 ms-3">
                                                <h4 className="fw-bold text-light title-dark mb-1">Subscribe to our newsletters</h4>
                                                <p className="text-white-50 mb-0">Sign up and receive the latest tips via email.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={4} className="mt-4 mt-sm-0">
                                    <div className="text-md-end ms-5 ms-sm-0">
                                        <Link to="#" className="btn btn-primary">Subscribe Now</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}
