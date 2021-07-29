import React, { Component } from 'react'
import { Col, Container, Form, Input, Row,Button } from 'reactstrap';

import bg from '../../assets/images/crypto/crypto.png';

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100"
                    style={{ background: `url(${bg}) top fixed` }}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} className="mt-5 pt-md-5">
                                <div className="title-heading text-center">
                                    <h4 className="heading text-white title-dark mb-4">Buy & sell Cryptocurrency in minutes</h4>
                                    <p className="text-light para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                    <div className="subcribe-form mt-4 pt-2">
                                        <Form>
                                            <div className="mb-2">
                                                <Input className="rounded-pill" placeholder="Email Address / Phone Number" />
                                                <Button type="submit" className="btn btn-pills btn-primary">Register Now</Button>
                                            </div>
                                        </Form>
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
