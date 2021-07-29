import React, { Component } from 'react'

import Section from './Section';
import ModernBlockchain from './ModernBlockchain';
import Team from './Team';
import { Container, Row, Col } from 'reactstrap';

//import images
import client1 from "../../assets/images/client/amazon.svg";
import client2 from "../../assets/images/client/google.svg";
import client3 from "../../assets/images/client/lenovo.svg";
import client4 from "../../assets/images/client/paypal.svg";
import client5 from "../../assets/images/client/shopify.svg";
import client6 from "../../assets/images/client/spotify.svg";
import Cta from './Cta';
export default class index extends Component {
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
    componentDidMount() {
        document.body.classList = "";
        document.getElementById("top-menu").classList.add("nav-light");
        document.getElementById("buyButton").className = "btn btn-light";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById("topnav").classList.add("nav-sticky");
            document.getElementById("buyButton").className = "btn btn-primary";
        } else {
            document.getElementById("topnav").classList.remove("nav-sticky");
            document.getElementById("buyButton").className = "btn btn-light";
        }
    };
    render() {
        return (
            <React.Fragment>
                <Section />
                <section className="section">
                    <ModernBlockchain />
                    <Team />
                </section>
                <section className="py-4 border-bottom border-top">
                    <Container>
                        {/* partners */}
                        <Row className="justify-content-center">
                            {this.state.partners.map((partner, key) => (
                                <Col
                                    lg={2}
                                    md={2}
                                    xs={6}
                                    key={key}
                                    className="text-center py-4"
                                >
                                    <img
                                        src={partner.image}
                                        className="avatar avatar-ex-sm"
                                        alt="Landrick"
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                <Cta />
            </React.Fragment>
        )
    }
}
