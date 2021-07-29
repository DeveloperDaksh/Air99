import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap'
import SectionTitle from '../../components/Shared/SectionTitle';

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class Business extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    <SectionTitle
                        title="We Provide IT & Business Solutions"
                        desc="that can provide everything you need to generate awareness, drive traffic, connect"
                    />

                    <Row>
                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex key-feature align-items-center p-3 rounded-pill shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon
                                        icon="monitor"
                                        className="fea icon-ex-md text-primary"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Innovative Thinking</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex key-feature align-items-center p-3 rounded-pill shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon
                                        icon="heart"
                                        className="fea icon-ex-md text-primary"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Technology</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex key-feature align-items-center p-3 rounded-pill shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon
                                        icon="eye"
                                        className="fea icon-ex-md text-primary"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Software Development</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex key-feature align-items-center p-3 rounded-pill shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon
                                        icon="bold"
                                        className="fea icon-ex-md text-primary"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Business Idea</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex key-feature align-items-center p-3 rounded-pill shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon
                                        icon="feather"
                                        className="fea icon-ex-md text-primary"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Content Strategy</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex key-feature align-items-center p-3 rounded-pill shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon
                                        icon="code"
                                        className="fea icon-ex-md text-primary"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Visual Interface</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex key-feature align-items-center p-3 rounded-pill shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon
                                        icon="user-check"
                                        className="fea icon-ex-md text-primary"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Time Management</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex key-feature align-items-center p-3 rounded-pill shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon
                                        icon="git-merge"
                                        className="fea icon-ex-md text-primary"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Faster Enrollments</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex key-feature align-items-center p-3 rounded-pill shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon
                                        icon="settings"
                                        className="fea icon-ex-md text-primary"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Work Dedication</h4>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} className="mt-4 pt-2 text-center">
                            <Link to="#" className="btn btn-primary">See More <i className="uil uil-angle-right"></i></Link>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
