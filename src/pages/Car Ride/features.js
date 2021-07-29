import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Images
import feature1 from "../../assets/images/riding/01.png";
import feature2 from "../../assets/images/riding/02.png";
import feature3 from "../../assets/images/riding/03.png";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import FeatureBox from "./FeatureBox";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          image: feature1,
          title: "Select Car",
          link: "",
          desc:
            "Dummy text is text that is used in the publishing industry or by web designers to occupy the space",
        },
        {
          id: 2,
          image: feature2,
          title: "Decide Your Destination",
          link: "",
          desc:
            "Dummy text is text that is used in the publishing industry or by web designers to occupy the space",
        },
        {
          id: 3,
          image: feature3,
          title: "Contact With Dealer",
          link: "",
          desc:
            "Dummy text is text that is used in the publishing industry or by web designers to occupy the space",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* Render Section Title */}
            <SectionTitle
              title="Find Your Better Rides"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* Render Feature Box */}
              <FeatureBox features={this.state.features} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
