import React, { Component } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';


export default class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features : [
                {
                    id: 1,
                    icon: "uil uil-crosshair",
                    title: "Strategy",
                    desc: "It is a long established fact that a reader will be will be of at its layout.",
                },
                {
                    id: 2,
                    icon: "uil uil-search",
                    title: "Research",
                    desc: "It is a long established fact that a reader will be will be of at its layout.",
                },
                {
                    id: 3,
                    icon: "uil uil-lightbulb-alt",
                    title: "Planning",
                    desc: "It is a long established fact that a reader will be will be of at its layout.",
                },
                {
                    id: 4,
                    icon: "uil uil-usd-circle",
                    title: "Assurance",
                    desc: "It is a long established fact that a reader will be will be of at its layout.",
                },
                {
                    id: 5,
                    icon: "uil uil-analytics",
                    title: "Analysis",
                    desc: "It is a long established fact that a reader will be will be of at its layout.",
                },
                {
                    id: 6,
                    icon: "uil uil-invoice",
                    title: "Investment",
                    desc: "It is a long established fact that a reader will be will be of at its layout.",
                },
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="bg-light">
                    <Container fluid className="px-0">
                        <Row className="g-0 align-items-center">
                            {this.state.features.map(( features, key) => (
                                <Col xl={2} lg={4} md={4} key={key}>
                                    <Card className="features fea-primary text-center rounded-0 px-4 py-5 bg-light bg-gradient position-relative overflow-hidden border-0">
                                        <span className="h2 icon2 text-primary">
                                            <i className={features.icon}></i>
                                        </span>
                                        <CardBody className="p-0 content">
                                            <h5>{features.title}</h5>
                                            <p className="para text-muted mb-0">{features.desc}</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}
