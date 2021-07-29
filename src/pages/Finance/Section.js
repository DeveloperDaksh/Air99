import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Typist from "react-typist";

//import images
import ctaImg from '../../assets/images/finance/bg.jpg'

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-260 d-table w-100" style={{ background: `url(${ctaImg}) fixed` }} >
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="title-heading">
                                    <span className="alert alert-white alert-pills shadow" role="alert">
                                        <span className="badge rounded-pill bg-primary me-1">Trusted</span>
                                        <span className="content"> Funds held securely and relibly</span>
                                    </span>
                                    <h1 className="heading title-white fw-bold mb-3">
                                        Help your &nbsp;
                                    <Typist>
                                            <span className="text-primary text-decoration-underline typewrite">Agency</span>
                                            <Typist.Backspace count={15} delay={200} />
                                            <span className="text-primary text-decoration-underline typewrite">Business</span>
                                            <Typist.Backspace count={15} delay={200} />
                                            <span className="text-primary text-decoration-underline typewrite">Startups</span>
                                            <Typist.Backspace count={15} delay={200} />
                                        </Typist>

                                    </h1>
                                    <h1 className="heading title-white fw-bold mb-3">Growth up to high level</h1>
                                    <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                                    <div className="mt-4 pt-2">
                                        <Link to="#" className="btn btn-primary">Contact us</Link>
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
