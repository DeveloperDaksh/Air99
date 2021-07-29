import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

//import images
import client1 from "../../assets/images/client/amazon.svg";
import client2 from "../../assets/images/client/google.svg";
import client3 from "../../assets/images/client/lenovo.svg";
import client4 from "../../assets/images/client/paypal.svg";
import client5 from "../../assets/images/client/shopify.svg";
import client6 from "../../assets/images/client/spotify.svg";

export default class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: [
                { image: client1 },
                { image: client2 },
                { image: client3 },
                { image: client4 },
                { image: client5 },
                { image: client6 },
            ],
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="py-5 border-top">
                    <Container>
                        <Row className="justify-content-center" id="counter">
                            <Col xs={12} className="text-center">
                                <h4>Trusted client by over <span className="text-primary fw-bold"><span className="counter-value" data-target="1100">100</span>+</span> of the world’s</h4>
                                <p className="text-muted mb-0 mx-auto">Trust <span className="text-primary fw-bold">Landrick</span> to host webinars and online meetings</p>
                            </Col>
                        </Row>

                        <Row className="mt-5 justify-content-center">
                            {this.state.partners.map((client, key) => (
                                <Col lg={2} md={2} xs={6} className="text-center" key={key}>
                                    <img src={client.image} className="avatar avatar-ex-sm" alt="" />
                                </Col>
                            ))}

                        </Row>

                        <Row className="mt-5 justify-content-center">
                            <Col xs={12}>
                                <div className="text-center">
                                    <ul className="list-unstyled mb-0 h6">
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item ms-1">5 Star <span className="text-muted">(380 Review received)</span></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}
