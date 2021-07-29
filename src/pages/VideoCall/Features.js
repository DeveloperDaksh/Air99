import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap'

import SectionTitle from '../../components/Shared/SectionTitle';

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <SectionTitle
                        title="Video communication for any context"
                        desc=" that can provide everything you need to generate awareness, drive traffic, connect."
                    />
                    <Row className="justify-content-center">
                        <Col xl={10}>
                            <Row>
                                <Col md={6} className="mt-4 pt-2">
                                    <div className="d-flex features feature-clean p-4 bg-white shadow rounded">
                                        <div className="icons text-primary d-block text-center rounded">
                                            <i className="uil uil-comment-verify d-block rounded h3 mb-0"></i>
                                        </div>
                                        <div className="flex-1 content ms-4">
                                            <h5 className="mb-1"><Link to="#" className="text-dark">Make one-to-one calls</Link></h5>
                                            <p className="text-muted mb-0">The most well-known dummy text is the, which is said to have originated in the 16th century.</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6} className="mt-4 pt-2">
                                    <div className="d-flex features feature-clean p-4 bg-white shadow rounded">
                                        <div className="icons text-primary d-block text-center rounded">
                                            <i className="uil uil-database-alt d-block rounded h3 mb-0"></i>
                                        </div>
                                        <div className="flex-1 content ms-4">
                                            <h5 className="mb-1"><Link to="#" className="text-dark">Duo uses end-to-end encryption</Link></h5>
                                            <p className="text-muted mb-0">The most well-known dummy text is the, which is said to have originated in the 16th century.</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6} className="mt-4 pt-2">
                                    <div className="d-flex features feature-clean p-4 bg-white shadow rounded">
                                        <div className="icons text-primary d-block text-center rounded">
                                            <i className="uil uil-image d-block rounded h3 mb-0"></i>
                                        </div>
                                        <div className="flex-1 content ms-4">
                                            <h5 className="mb-1"><Link to="#" className="text-dark">Let friends know that you’ve joined</Link></h5>
                                            <p className="text-muted mb-0">The most well-known dummy text is the, which is said to have originated in the 16th century.</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6} className="mt-4 pt-2">
                                    <div className="d-flex features feature-clean p-4 bg-white shadow rounded">
                                        <div className="icons text-primary d-block text-center rounded">
                                            <i className="uil uil-video d-block rounded h3 mb-0"></i>
                                        </div>
                                        <div className="flex-1 content ms-4">
                                            <h5 className="mb-1"><Link to="#" className="text-dark">Set up groups for your friends & family</Link></h5>
                                            <p className="text-muted mb-0">The most well-known dummy text is the, which is said to have originated in the 16th century.</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs={12} className="mt-4 pt-2 text-center">
                                    <Link to="#" className="text-primary h6">Explore features
                                    <FeatherIcon
                                            icon="arrow-right"
                                            className="fea icon-sm"
                                        />
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
