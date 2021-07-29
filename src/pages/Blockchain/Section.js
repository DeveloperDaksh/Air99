import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import bg from '../../assets/images/crypto/bg.jpg';

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-home d-flex align-items-center"
                style={{ background: `url(${bg}) top ` }}
                >
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className="title-heading text-center">
                            <h4 className="heading fw-bold text-white title-dark mb-3">The World's Most Popular Way to Buy, <br /> Hold, and Use Crypto</h4>
                            <h5 className="para-desc mx-auto text-light title-dark">Automated. Precise. Efficient.</h5>
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Get Started</Link>
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
