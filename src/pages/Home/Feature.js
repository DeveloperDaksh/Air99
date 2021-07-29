// React basic and bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Feather Icons
import FeatherIcon from 'feather-icons-react';

class Feature extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="features">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <div className="section-title mb-4 text-center">
                                    <h4 className="title text-uppercase fw-bold">Template Features</h4>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i>
                                            <FeatherIcon icon="monitor" className="fea icon-ex-md text-primary" />
                                        </i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Fully Responsive</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-microsoft-internet-explorer text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Browser Compatibility</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i>
                                            <FeatherIcon icon="eye" className="fea icon-ex-md text-primary" />
                                        </i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Retina Ready</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-bootstrap text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Based On Bootstrap 5</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i>
                                            <FeatherIcon icon="align-left" className="fea icon-ex-md text-primary" />
                                        </i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">RTL Supported Theme</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i>
                                            <FeatherIcon icon="moon" className="fea icon-ex-md text-primary" />
                                        </i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Dark Supported Theme</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i>
                                            <FeatherIcon icon="feather" className="fea icon-ex-md text-primary" />
                                        </i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Feather Icons</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-cube-outline text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Material Design Icon</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-vector-bezier text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Flaticon Icon</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-sass text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Built With SASS</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-check-decagram text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">W3c Valid Code</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i>
                                            <FeatherIcon icon="settings" className="fea icon-ex-md text-primary" />
                                        </i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Easy to customize</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-language-php text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Working Contact Form</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-file-image text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Free Illustrator Image</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i>
                                            <FeatherIcon icon="camera" className="fea icon-ex-md text-primary" />
                                        </i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Free Images</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-google-glass text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Free Google Fonts</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-source-commit text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Well Commented Code</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-code-tags text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Clean Code</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-update text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Free Updates</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-account-heart-outline text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Developer Friendly</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex align-items-center p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill me-3">
                                        <i className="mdi mdi-alpha-f-circle-outline text-primary mdi-24px"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb-0">Flatpickr</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default Feature;
