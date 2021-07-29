import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ServiceBox from "./service-box";

//Import Images
import car from "../../assets/images/icon/car.svg";
import food from "../../assets/images/icon/food-and-restaurant.svg";
import fast from "../../assets/images/icon/fast.svg";
import card from "../../assets/images/icon/card.svg";
import movieTickets from "../../assets/images/icon/movie-tickets.svg";
import hotel from "../../assets/images/icon/hotel.svg";

class Service extends Component {
  state = {
    services: [
      {
        icon: car,
        title: "Transportation",
        desc:
          "Nisi aenean vulputate eleifend tellus vitae eleifend enim a eleifend Aliquam aenean elementum semper.",
      },
      {
        icon: food,
        title: "Food",
        desc:
          "Allegedly, a Latin scholar established the origin of the text established by compiling unusual word.",
      },
      {
        icon: fast,
        title: "Delivery",
        desc:
          "It seems that only fragments of the original text remain in the Lorem the original Ipsum texts used today.",
      },
      {
        icon: card,
        title: "Payments",
        desc:
          "Nisi aenean vulputate eleifend tellus vitae eleifend enim a eleifend Aliquam aenean elementum semper.",
      },
      {
        icon: movieTickets,
        title: "Tickets",
        desc:
          "It seems that only fragments of the original text remain in the Lorem the original Ipsum texts used today.",
      },
      {
        icon: hotel,
        title: "Hotels",
        desc:
          "Allegedly, a Latin scholar established the origin of the text established by compiling unusual word.",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* Render Section Title */}
          <SectionTitle
            title="We've Provided More Services Too"
            desc="that can provide everything you need to generate awareness, drive traffic, connect"
          />

          <Row>
            {/* Render Service Box */}
            <ServiceBox services={this.state.services} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Service;
