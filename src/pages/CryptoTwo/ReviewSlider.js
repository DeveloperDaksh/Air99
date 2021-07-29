import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";

import crypto1 from '../../assets/images/crypto/1.jpg';
import crypto2 from '../../assets/images/crypto/2.jpg';
import crypto3 from '../../assets/images/crypto/3.jpg';
import crypto4 from '../../assets/images/crypto/4.jpg';
import crypto5 from '../../assets/images/crypto/5.jpg';
import crypto6 from '../../assets/images/crypto/6.jpg';
import crypto7 from '../../assets/images/crypto/7.jpg';
import crypto8 from '../../assets/images/crypto/8.jpg';

class ReviewsSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: 4,
            step1: true,
            step2: false,
            review: [
                {
                    id: 1,
                    img: crypto1
                },
                {
                    id: 2,
                    img: crypto2
                },
                {
                    id: 3,
                    img: crypto3
                },
                {
                    id: 4,
                    img: crypto4
                },
                {
                    id: 5,
                    img: crypto5
                },
                {
                    id: 6,
                    img: crypto6
                },
                {
                    id: 7,
                    img: crypto7
                },
                {
                    id: 8,
                    img: crypto8
                },
            ]
        };
        this.updateWindowSize.bind(this);
    }

    updateWindowSize = () => {
        if (window.outerWidth >= 1230) {
            this.setState({ itemCount: 4, cols: 3 });
        } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
            this.setState({ itemCount: 2, cols: 6 });
        } else if (window.outerWidth <= 970) {
            this.setState({ itemCount: 1, cols: 12 });
        }
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowSize);
        this.updateWindowSize();
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowSize);
    }
    render() {
        return (
            <React.Fragment>
                <section className="mt-5 pt-4">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <div
                                    id="customer-testi"
                                    className="tiny-four-item"
                                >
                                    <div className="tiny-slide">
                                        <Row>
                                            {this.state.step1 === true
                                                ? this.state.review.map((review, key) =>
                                                    key >= 0 && key <= 3 ? (
                                                        <Col
                                                            key={key}
                                                            md={this.state.cols}
                                                            className="mb-1"
                                                        >
                                                            <Link to="#" className="customer-testi">
                                                                <img src={review.img} className="img-fluid rounded shadow" alt="" />
                                                            </Link>
                                                        </Col>
                                                    ) : null
                                                )
                                                : this.state.review.map((review, key) =>
                                                    key >= 4 && key <= 8 ? (
                                                        <Col
                                                            key={key}
                                                            md={this.state.cols}
                                                            className="mb-1"
                                                        >
                                                            <Link to="#" className="customer-testi">
                                                                <img src={review.img} className="img-fluid rounded shadow" alt="" />
                                                            </Link>
                                                        </Col>
                                                    ) : null
                                                )}
                                        </Row>
                                    </div>
                                </div>
                                <div className="tns-nav">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            this.setState({ step1: true, step2: false });
                                        }}
                                        className={
                                            this.state.step1 ? "tns-nav-active" : "tns-nav-inactive"
                                        }
                                    ></button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            this.setState({ step1: false, step2: true });
                                        }}
                                        className={
                                            this.state.step2 ? "tns-nav-active" : "tns-nav-inactive"
                                        }
                                    ></button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default ReviewsSlider;
