import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// import images
import startupSVG from '../../assets/images/illustrator/Startup_SVG.svg';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100" id="home">
                    <Container>
                        <Row className="mt-5 align-items-center">
                            <Col lg={7} md={7}>
                                <div className="title-heading me-lg-4">
                                    <h1 className="heading mb-3">Our Creativity Is Your <span className="text-primary">Success</span> </h1>
                                    <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                                    <div className="mt-4">
                                        <Link to="/page-contact-one" className="btn btn-primary mt-2 me-2"><i className="uil uil-envelope"></i> Get Started</Link>
                                        <Link to="/documentation" className="btn btn-outline-primary mt-2"><i className="uil uil-book-alt"></i> Documentation</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <img src={startupSVG} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;