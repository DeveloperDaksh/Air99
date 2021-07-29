import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

//import images
import finance1 from '../../assets/images/finance/1.jpg'
import finance2 from '../../assets/images/finance/2.jpg'

export default class Revolution extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <div className="section-title text-center mb-4 pb-2">
                                <i className="uil uil-chart-pie-alt text-primary h2"></i>
                                <h4 className="title mt-3 mb-4">Join The Next Revolution. <br /> Create your Website Now!</h4>
                                <p className="text-muted mx-auto para-desc">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col lg={6} className="mt-2">
                            <div className="px-md-4 pt-4 text-center">
                                <h4 className="mb-3">Individual Services</h4>
                                <p className="text-muted mb-0">It is said that song composers of the past used dummy texts as lyrics when writing melodies in order.</p>

                                <div className="position-relative mt-5">
                                    <div className="bg-overlay bg-primary bg-gredient rounded-md" style={{ opacity: "0.6" }}></div>
                                    <img src={finance1} className="rounded-md shadow img-fluid" alt="" />
                                </div>

                                <div className="px-md-4 pt-4 text-start">
                                    <div className="d-flex">
                                        <i className="uil uil-bullseye h5 text-primary"></i>
                                        <div className="flex-1 ms-2">
                                            <h5>Engaging Group Discussion​</h5>
                                            <p className="mb-0 text-muted">It is advantageous when the dummy text is relatively realistic so that the layout impression</p>
                                        </div>
                                    </div>

                                    <div className="d-flex mt-4">
                                        <i className="uil uil-create-dashboard h5 text-primary"></i>
                                        <div className="flex-1 ms-2">
                                            <h5>Software Engineering​</h5>
                                            <p className="mb-0 text-muted">It is advantageous when the dummy text is relatively realistic so that the layout impression</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} className="mt-2">
                            <div className="px-md-4 pt-4 text-center">
                                <h4 className="mb-3">Organization Services</h4>
                                <p className="text-muted mb-0">It is said that song composers of the past used dummy texts as lyrics when writing melodies in order.</p>

                                <div className="position-relative mt-5">
                                    <div className="bg-overlay bg-primary bg-gredient rounded-md" style={{ opacity: "0.6" }}></div>
                                    <img src={finance2} className="rounded-md shadow img-fluid" alt="" />
                                </div>

                                <div className="px-md-4 pt-4 text-start">
                                    <div className="d-flex">
                                        <i className="uil uil-bullseye h5 text-primary"></i>
                                        <div className="flex-1 ms-2">
                                            <h5>Engaging Group Discussion​</h5>
                                            <p className="mb-0 text-muted">It is advantageous when the dummy text is relatively realistic so that the layout impression</p>
                                        </div>
                                    </div>

                                    <div className="d-flex mt-4">
                                        <i className="uil uil-create-dashboard h5 text-primary"></i>
                                        <div className="flex-1 ms-2">
                                            <h5>Software Engineering​</h5>
                                            <p className="mb-0 text-muted">It is advantageous when the dummy text is relatively realistic so that the layout impression</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
