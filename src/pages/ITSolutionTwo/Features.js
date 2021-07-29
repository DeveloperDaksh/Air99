import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

export default class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="py-4 bg-light">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={3} md={6} xs={12}>
                                <div className="d-flex features pt-4 pb-4">
                                    <div className="icon text-center rounded-circle text-primary me-3 h5 mb-0">
                                        <i className="uil uil-analytics text-primary"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title">Data Analytics</h4>
                                        <p className="text-muted para mb-0">Composed in a pseudo-Latin language which.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} xs={12}>
                                <div className="d-flex features pt-4 pb-4">
                                    <div className="icon text-center rounded-circle text-primary me-3 h5 mb-0">
                                        <i className="uil uil-airplay text-primary"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title">Web Development</h4>
                                        <p className="text-muted para mb-0">Composed in a pseudo-Latin language which.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} xs={12}>
                                <div className="d-flex features pt-4 pb-4">
                                    <div className="icon text-center rounded-circle text-primary me-3 h5 mb-0">
                                        <i className="uil uil-clapper-board text-primary"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title">QA & Testing</h4>
                                        <p className="text-muted para mb-0">Composed in a pseudo-Latin language which.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} xs={12}>
                                <div className="d-flex features pt-4 pb-4">
                                    <div className="icon text-center rounded-circle text-primary me-3 h5 mb-0">
                                        <i className="uil uil-users-alt text-primary"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title">Dedicated Team</h4>
                                        <p className="text-muted para mb-0">Composed in a pseudo-Latin language which.</p>
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
