// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import PricingBox2 from "../../components/Shared/PricingBox2";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings: [
        {
          id: 1,
          title: "Free",
          price: 0,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Enhanced Security" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
          ],
        },
        {
          id: 2,
          title: "Starter",
          price: 39,
          duration: "mo",
          buttonText: "Get Started",
          btnLink: "",
          isActive: true,
          features: [
            { title: "Full Access" },
            { title: "Source Files" },
            { title: "Free Appointments" },
            { title: "Enhanced Security" },
          ],
        },
        {
          id: 3,
          title: "PROFESSIONAL",
          price: 59,
          duration: "mo",
          buttonText: "Try It Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Enhanced Security" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Choose The Pricing Plan"
              desc="that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row className="align-items-center">
              {/* pricing */}
              <PricingBox2 pricings={this.state.pricings} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default Pricing;
