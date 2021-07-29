import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

export default class ModernBlockchain extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <SectionTitle
                        title="More than just numbers and charts"
                        desc="that can provide everything you need to generate awareness, drive traffic, connect"
                    />

                    <Row className="justify-content-center">
                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-file-contract-dollar d-block rounded h3 mb-0"></i>
                                </div>
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Auto Track & Sync</Link>
                                    <p className="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                                    <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link>
                                    <i className="uil uil-file-contract-dollar text-primary full-img"></i>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-analytics d-block rounded h3 mb-0"></i>
                                </div>
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">CPA Financial Tools</Link>
                                    <p className="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                                    <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link>
                                    <i className="uil uil-analytics text-primary full-img"></i>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-dashboard d-block rounded h3 mb-0"></i>
                                </div>
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Real-time Dashboard</Link>
                                    <p className="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                                    <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link>
                                    <i className="uil uil-dashboard text-primary full-img"></i>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-swatchbook d-block rounded h3 mb-0"></i>
                                </div>
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Bookkeeping</Link>
                                    <p className="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                                    <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link>
                                    <i className="uil uil-swatchbook text-primary full-img"></i>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-exchange d-block rounded h3 mb-0"></i>
                                </div>
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Transaction Control</Link>
                                    <p className="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                                    <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link>
                                    <i className="uil uil-exchange text-primary full-img"></i>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-lock-alt d-block rounded h3 mb-0"></i>
                                </div>
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Security & Privacy</Link>
                                    <p className="text-muted mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                                    <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link>
                                    <i className="uil uil-lock-alt text-primary full-img"></i>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
