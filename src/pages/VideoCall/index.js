import React, { Component } from 'react'
import { Container } from 'reactstrap';
import Client from './Client';
import Features from './Features';
import Group from './Group';
import Section from './Section'
import SectionTitle from '../../components/Shared/SectionTitle';
import ReviewsSlider from '../../components/Shared/ReviewsSlider';

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";
import Encryption from './Encryption';

export default class VideoCall extends Component {
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
        }
    }
    componentDidMount() {
        document.body.classList = "";
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
                {/* import section */}
                <Section />
                {/* import partners */}
                <Client />
                <section className="section bg-light">
                    <Features />
                    <Group />
                </section>
                <section className="section">
                    <Container>
                        <SectionTitle
                            title="Some of our happy customers"
                            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
                        />
                        <ReviewsSlider reviews={this.state.reviews} colclassName="mt-4" />
                    </Container>
                    <Encryption />
                </section>
            </React.Fragment>
        )
    }
}
