import React, { Component } from 'react'

//import images
import bg1 from '../../assets/images/shapes/shape2.png'
import freelancer from '../../assets/images/freelancer/freelancer.png';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 pb-0 bg-light d-table w-100 overflow-hidden"
                    style={{ background: `url(${bg1}) top z-index: 0` }}
                >
                    <Container>
                        <Row className="align-items-center mt-5 mt-sm-0">
                            <Col md={6}>
                                <div className="title-heading text-center text-md-start">
                                    <span className="badge rounded-pill bg-soft-primary">Freelancing</span>
                                    <h4 className="heading mb-3 mt-2">Grow your freelance <span className="fw-bold">Business</span></h4>
                                    <p className="text-muted mb-0 para-dark para-desc mx-auto ms-md-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>

                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary">Sign up & Start growing</Link>
                                        <p className="text-muted mt-1 mb-0">*No Credit Card Required</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="freelance-hero position-relative">
                                    <div className="bg-shape position-relative">
                                        <img src={freelancer} className="mx-auto d-block img-fluid" alt="" />
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
