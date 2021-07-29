import React, { Component } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'

export default class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-4">Exchange <span className="text-primary">Better, Faster & Together</span></h4>
                                <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row id="counter">
                        <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                            <Card className="explore-feature border-0 shadow rounded text-center bg-white">
                                <CardBody>
                                    <div className="icon rounded-circle shadow-lg h2 d-inline-block">
                                        <i className="uil uil-bag text-primary"></i>
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="mb-0"><span className="counter-value" data-target="858">30</span>M +</h4>
                                        <h6 className="mb-0 text-muted">Yearly Turnover</h6>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                            <Card className="explore-feature border-0 shadow rounded text-center bg-white">
                                <CardBody>
                                    <div className="icon rounded-circle shadow-lg h2 d-inline-block">
                                        <i className="uil uil-user text-primary"></i>
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="mb-0"><span className="counter-value" data-target="445">10</span>K +</h4>
                                        <h6 className="mb-0 text-muted">Happy Client</h6>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                            <Card className="explore-feature border-0 shadow rounded text-center bg-white">
                                <CardBody>
                                    <div className="icon rounded-circle shadow-lg h2 d-inline-block">
                                        <i className="uil uil-bitcoin-circle text-primary"></i>
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="mb-0"><span className="counter-value" data-target="1154">11</span>K +</h4>
                                        <h6 className="mb-0 text-muted">Tokens</h6>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={3} md={6} xs={12} className="mt-4 pt-2">
                            <Card className="explore-feature border-0 shadow rounded text-center bg-white">
                                <CardBody>
                                    <div className="icon rounded-circle shadow-lg h2 d-inline-block">
                                        <i className="uil uil-user text-primary"></i>
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="mb-0"><span className="counter-value" data-target="111">30</span> +</h4>
                                        <h6 className="mb-0 text-muted">Employee</h6>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
