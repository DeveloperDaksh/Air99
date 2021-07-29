import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewSlider3 from "../../components/Shared/ReviewSlider3";

//Import Images
import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";

class Review extends Component {
  state = {
    clients: [
      {
        id: 1,
        image: client1,
        name: "Thomas Israel",
        post: "C.E.O",
        rating: 5,
        desc:
          "It seems that only fragments of the oem Ipsum', which is said to have originated in the 16th century.",
      },
      {
        id: 2,
        image: client2,
        name: "Carl Oliver",
        post: "P.A",
        rating: 4,
        desc:
          "The advantage of its Latin origin andor distract the viewer's attention from the layout.",
      },
      {
        id: 3,
        image: client3,
        name: "Barbara McIntosh",
        post: "M.D",
        rating: 3.5,
        desc:
          "There is now an abundance of readableives to the classic and tell short, funny or nonsensical stories.",
      },
      {
        id: 4,
        image: client4,
        name: "Jill Webb",
        post: "Manager",
        rating: 4.5,
        desc:
          "According to most sources, Lorum Ipsuthe origin of the text by of the unusual word  he could find",
      },
      {
        id: 5,
        image: client5,
        name: " Dean Tolle",
        post: "Developer",
        rating: 5,
        desc:
          "It seems that only fragments of the oem Ipsum', which is said to have originated in the 16th century.",
      },
      {
        id: 6,
        image: client6,
        name: "Christa Smith",
        post: "Designer",
        rating: 5,
        desc:
          "It seems that only fragments of the otime certain letters at various positions within the text.",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          {/* Render Section Title */}
          <SectionTitle
            title="What customers say about us"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row className="justify-content-center">
            <Col lg="12" className="pt-2 mt-2 text-center">
              {/* review-slider */}
              <ReviewSlider3
                clients={this.state.clients}
                items={3}
                isBgWhite={true}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Review;
