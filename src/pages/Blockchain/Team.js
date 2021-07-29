import React, { Component } from 'react'

//import images
import crypto1 from '../../assets/images/crypto/lapy01.png';
import crypto2 from '../../assets/images/crypto/iphone.png';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6} md={6}>
                            <img src={crypto1} className="img-fluid" alt="" />
                        </Col>

                        <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">Crypto Management for Businesses</h4>
                                <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                </ul>
                                <Link to="#" className="mt-3 h6 text-primary">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={7} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title me-lg-5">
                                <h4 className="title mb-4">Smart Tools for Finance Teams</h4>
                                <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                </ul>
                                <Link to="#" className="mt-3 h6 text-primary">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>

                        <Col lg={5} md={6} className="order-1 order-md-2">
                            <img src={crypto2} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
