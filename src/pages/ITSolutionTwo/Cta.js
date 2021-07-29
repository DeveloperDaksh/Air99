import React, { Component } from 'react'
import CountUp from "react-countup";
import { Col, Container, Row } from 'reactstrap';
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import SectionTitle from '../../components/Shared/SectionTitle';
import BlogBox from "../../components/Shared/BlogBox";

//import images
import bgImage from '../../assets/images/it/cta.jpg';
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";

// Blog Images
import blog1 from '../../assets/images/blog/01.jpg';
import blog2 from '../../assets/images/blog/02.jpg';
import blog3 from '../../assets/images/blog/03.jpg';


export default class Cta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [
                { id: 1, img: img1, name: "Thomas Israel", post: "C.E.O", desc: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", rating: 5 },
                { id: 2, img: img2, name: "Barbara McIntosh", post: "M.D", desc: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.", rating: 4 },
                { id: 3, img: img3, name: "Carl Oliver", post: "P.A", desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.", rating: 3 },
                { id: 4, img: img4, name: "Christa Smith", post: "Manager", desc: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.", rating: 5 },
                { id: 5, img: img5, name: "Dean Tolle", post: "Developer", desc: "There is now an abundance of readable dummy texts. These are usually used when a text is required.", rating: 5 },
                { id: 6, img: img6, name: "Jill Webb", post: "Designer", desc: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.", rating: 4 },
            ],
            blogs: [
                { id: 1, image: blog1, title: "Design your apps in your own way", like: "33", comment: "08", autor: "Calvin Carlo", date: "13th August, 2019" },
                { id: 2, image: blog2, title: "How apps is changing the IT world", like: "33", comment: "08", autor: "Calvin Carlo", date: "13th August, 2019" },
                { id: 3, image: blog3, title: "Smartest Applications for Business", like: "33", comment: "08", autor: "Calvin Carlo", date: "13th August, 2019" },
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="section pt-0">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <div className="video-solution-cta position-relative" style={{ zIndex: '1' }}>
                                    <div className="position-relative py-5 rounded"
                                        style={{ background: `url(${bgImage}) top` }}>
                                        <div className="bg-overlay rounded bg-primary bg-gradient" style={{ opacity: '0.8' }}></div>

                                        <Row>
                                            <Col lg={3} xs={6} className="my-4">
                                                <div className="counter-box text-center px-lg-4">
                                                    <i className="uil uil-users-alt text-white-50 h2"></i>
                                                    <h1 className="mb-0 text-white">
                                                        <span className="counter-value">
                                                            <CountUp start={100} end={9759} duration={8} />
                                                        </span>
                                                    +</h1>
                                                    <h6 className="counter-head text-white-50">Happy Client</h6>
                                                </div>
                                            </Col>

                                            <Col lg={3} xs={6} className="my-4">
                                                <div className="counter-box text-center px-lg-4">
                                                    <i className="uil uil-schedule text-white-50 h2"></i>
                                                    <h1 className="mb-0 text-white">
                                                        <span className="counter-value">
                                                            <CountUp start={1} end={15} duration={8} />
                                                        </span>
                                                    +</h1>
                                                    <h6 className="counter-head text-white-50">Years Experience</h6>
                                                </div>
                                            </Col>

                                            <Col lg={3} xs={6} className="my-4">
                                                <div className="counter-box text-center px-lg-4">
                                                    <i className="uil uil-file-check-alt text-white-50 h2"></i>
                                                    <h1 className="mb-0 text-white">
                                                        <span className="counter-value">
                                                            <CountUp start={12} end={151} duration={8} />
                                                        </span>+</h1>
                                                    <h6 className="counter-head text-white-50">Project Complete</h6>
                                                </div>
                                            </Col>

                                            <Col lg={3} xs={6} className="my-4">
                                                <div className="counter-box text-center px-lg-4">
                                                    <i className="uil uil-hard-hat text-white-50 h2"></i>
                                                    <h1 className="mb-0 text-white">
                                                        <span className="counter-value">
                                                            <CountUp start={3} end={98} duration={8} />
                                                        </span>
                                                    +</h1>
                                                    <h6 className="counter-head text-white-50">Expert Engineers</h6>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="content mt-md-5 mt-4">
                                        <ReviewsSlider reviews={this.state.reviews} colClass="mt-4" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="feature-posts-placeholder bg-light"></div>
                    </Container>
                </section>
                <section className="section">
                    <Container>
                        <SectionTitle
                            title="Latest News"
                            desc="that can provide everything you need to generate awareness, drive traffic, connect"
                        />
                        <Row>
                            <BlogBox blogs={this.state.blogs} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}
