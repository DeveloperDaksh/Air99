// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import ReviewSlider5 from "./ReviewSlider5";

//import images
import img3 from "../../assets/images/3.jpg";
import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";

class Testi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: 1,
          image: client1,
          name: "Thomas Israel",
          rating: 5,
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        },
        {
          id: 2,
          image: client2,
          name: "Carl Oliver",
          rating: 4,
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories..",
        },
        {
          id: 3,
          image: client3,
          name: "Barbara McIntosh",
          rating: 3.5,
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        },
        {
          id: 4,
          image: client4,
          name: "Jill Webb",
          rating: 4.5,
          desc:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find",
        },
        {
          id: 5,
          image: client5,
          name: " Dean Tolle",
          rating: 5,
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.",
        },
        {
          id: 6,
          image: client6,
          name: "Christa Smith",
          rating: 5,
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="section"
          style={{ background: `url(${img3}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="py-5 justify-content-center">
              <Col lg="8" className="text-center">
                <ReviewSlider5 clients={this.state.clients} items={1} />
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Testi;
