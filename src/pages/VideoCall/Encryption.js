import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

//import images
import cta from '../../assets/images/video/cta.png';

export default class Encryption extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={{ size: 6, order: 1 }} className="order-2 mt-4 mt-lg-0 pt-2 pt-lg-0">
                            <div className="section-title me-lg-5">
                                <h4 className="title mb-4">Keep calls private with end-to-end encryption</h4>
                                <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                </ul>
                                <Link to="#" className="mt-3 h6 text-primary">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>

                        <Col lg={{ size: 6, order: 2 }} className="order-1">
                            <img src={cta} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <div className="section-title text-center">
                                <h4 className="title mb-4">Get started with <span className="text-primary fw-bold">Landrick</span> for free</h4>
                                <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                <div className="mt-4">
                                    <Link to="#" className="btn btn-primary m-1"><i className="uil uil-apple"></i> App Store</Link>
                                    <Link to="#" className="btn btn-outline-primary m-1"><i className="uil uil-google-play"></i> Play Store</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
