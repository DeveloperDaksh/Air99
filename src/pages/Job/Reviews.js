import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewSlider2 from "../../components/Shared/ReviewSlider2";

//Import Images
import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";

class Reviews extends Component {
  state = {
    clients: [
      {
        id: 1,
        image: client1,
        name: "Thomas Israel",
        desc:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
      },
      {
        id: 2,
        image: client2,
        name: "Carl Oliver",
        desc:
          "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      },
      {
        id: 3,
        image: client3,
        name: "Barbara McIntosh",
        desc:
          "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
      },
      {
        id: 4,
        image: client4,
        name: "Jill Webb",
        desc:
          "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
      },
      {
        id: 5,
        image: client5,
        name: " Dean Tolle",
        desc:
          "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
      },
      {
        id: 6,
        image: client6,
        name: "Christa Smith",
        desc:
          "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* Section title */}
          <SectionTitle
            title="Candidates Review"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            <Col xs="12" className="mt-4 pt-2">
              {/* review-slider */}
              <ReviewSlider2 clients={this.state.clients} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Reviews;
