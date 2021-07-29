import React, { Component } from 'react'
import AboutUs from './AboutUs';
import Cta from './Cta';
import Features from './Features';
import Revolution from './Revolution';
import Section from './Section';
import SectionTitle from '../../components/Shared/SectionTitle';
import ReviewsSlider from '../../components/Shared/ReviewsSlider';
import BlogBox from '../../components/Shared/BlogBox';
import { Container, Row, Col } from 'reactstrap';

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";
import client1 from "../../assets/images/client/amazon.svg";
import client2 from "../../assets/images/client/google.svg";
import client3 from "../../assets/images/client/lenovo.svg";
import client4 from "../../assets/images/client/paypal.svg";
import client5 from "../../assets/images/client/shopify.svg";
import client6 from "../../assets/images/client/spotify.svg";
import personal01 from "../../assets/images/blog/01.jpg";
import personal02 from "../../assets/images/blog/02.jpg";
import personal03 from "../../assets/images/blog/03.jpg";
export default class Finance extends Component {
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
                {
                    id: 1,
                    image: personal01,
                    title: "Design your apps in your own way",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019",
                },
                {
                    id: 2,
                    image: personal02,
                    title: "How apps is changing the IT world",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019",
                },
                {
                    id: 3,
                    image: personal03,
                    title: "Smartest Applications for Business",
                    like: "33",
                    comment: "08",
                    autor: "Calvin Carlo",
                    date: "13th August, 2019",
                },
            ],
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
        document.getElementById("topnav").classList.add("bg-white");
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
        } else {
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
    };

    render() {
        return (
            <React.Fragment>
                {/* import Section */}
                <Section />
                {/* import Features */}
                <Features />
                <section className="section">
                    {/* import AboutUs */}
                    <AboutUs />
                    {/* import Revolution */}
                    <Revolution />
                </section>
                {/* import Cta */}
                <Cta />
                <section className="section">
                    <Container>
                        <SectionTitle
                            title="Partners Testimonial"
                            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
                        />
                        <ReviewsSlider reviews={this.state.reviews} colclassName="mt-4" />
                    </Container>
                    <Container className="mt-100 mt-60">
                        <SectionTitle
                            title="Latest News"
                            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
                        />
                        <Row>
                            <BlogBox blogs={this.state.blogs} />
                        </Row>
                    </Container>
                </section>
                <section className="py-4 bg-light">
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

            </React.Fragment>
        )
    }
}
