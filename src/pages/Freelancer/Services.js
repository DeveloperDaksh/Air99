import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'

export default class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={{ size: 5, order: 2 }} xs={{ size: 12, order: 1 }}>
                            <div className="section-title text-center text-lg-start mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <span className="badge rounded-pill bg-soft-primary">Services</span>
                                <h4 className="title mt-3 mb-4">Make more, Manage less</h4>
                                <p className="text-muted para-desc mx-auto ms-lg-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <div className="mt-4 d-lg-block d-none">
                                    <Link to="#" className="btn btn-primary">See more</Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={{ size: 7, order: 1 }} xs={{ size: 12, order: 2 }}>
                            <Row className="me-lg-5">
                                <Col md={6} xs={12}>
                                    <Row>
                                        <Col xs={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                                            <Card className="border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                                                <div className="icons text-primary text-center mx-auto">
                                                    <i className="uil uil-rocket d-block rounded-pill h3 mb-0"></i>
                                                </div>
                                                <CardBody className="p-0 mt-4">
                                                    <Link to="#" className="title h5 text-dark">Targeted <br /> High-quality Leads</Link>
                                                    <p className="text-muted mt-2 mb-0">It is a long established fact that a reader at its layout.</p>
                                                    <i className="uil uil-rocket text-primary full-img"></i>
                                                </CardBody>
                                            </Card>
                                        </Col>

                                        <Col xs={12} className="mt-4 pt-2">
                                            <Card className="border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                                                <div className="icons text-primary text-center mx-auto">
                                                    <i className="uil uil-airplay d-block rounded-pill h3 mb-0"></i>
                                                </div>
                                                <CardBody className="p-0 mt-4">
                                                    <Link to="#" className="title h5 text-dark">Send, Schedule, and Snooze Emails</Link>
                                                    <p className="text-muted mt-2 mb-0">It is a long established fact that a reader at its layout.</p>
                                                    <i className="uil uil-airplay text-primary full-img"></i>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col xs={12} md={6}>
                                    <Row className="pt-lg-4 mt-lg-4">
                                        <Col xs={12} className="mt-4 pt-2">
                                            <Card className="border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                                                <div className="icons text-primary text-center mx-auto">
                                                    <i className="uil uil-envelope d-block rounded-pill h3 mb-0"></i>
                                                </div>
                                                <CardBody className="p-0 mt-4">
                                                    <Link to="#" className="title h5 text-dark">Library of the Best Email Templates</Link>
                                                    <p className="text-muted mt-2 mb-0">It is a long established fact that a reader at its layout.</p>
                                                    <i className="uil uil-envelope text-primary full-img"></i>
                                                </CardBody>
                                            </Card>
                                        </Col>

                                        <Col xs={12} className="mt-4 pt-2">
                                            <Card className="border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
                                                <div className="icons text-primary text-center mx-auto">
                                                    <i className="uil uil-bell d-block rounded-pill h3 mb-0"></i>
                                                </div>
                                                <CardBody className="p-0 mt-4">
                                                    <Link to="#" className="title h5 text-dark">Automated Follow-up Reminders</Link>
                                                    <p className="text-muted mt-2 mb-0">It is a long established fact that a reader at its layout.</p>
                                                    <i className="uil uil-bell text-primary full-img"></i>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <div className="mt-4 d-lg-none d-block text-center">
                                <Link to="#" className="btn btn-primary">See more</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
