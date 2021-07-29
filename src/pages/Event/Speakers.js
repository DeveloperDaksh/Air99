// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import TeamBox from "../../components/Shared/TeamBox";

//Import Images
import image1 from "../../assets/images/client/01.jpg";
import image2 from "../../assets/images/client/02.jpg";
import image3 from "../../assets/images/client/03.jpg";
import image4 from "../../assets/images/client/04.jpg";

//Import Images
import img1 from "../../assets/images/client/amazon.svg";
import img2 from "../../assets/images/client/google.svg";
import img3 from "../../assets/images/client/lenovo.svg";
import img4 from "../../assets/images/client/paypal.svg";
import img5 from "../../assets/images/client/shopify.svg";
import img6 from "../../assets/images/client/spotify.svg";

class Speakers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [
        {
          id: 1,
          image: image1,
          name: "Ronny Jofra",
          designation: "Organizer",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
        {
          id: 2,
          image: image4,
          name: "Micheal Carlo",
          designation: "Event Manager",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
        {
          id: 3,
          image: image3,
          name: "Aliana Rosy",
          designation: "Motivator",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
        {
          id: 4,
          image: image2,
          name: "Sofia Razaq",
          designation: "Speaker",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
      ],
      partners: [
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
        { image: img6 },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our Speakers"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* teambox */}
              <TeamBox candidates={this.state.candidates} />
            </Row>
          </Container>

          <Container className="mt-100 mt-50">
            {/* section title */}
            <SectionTitle
              title="Event Sponsors"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            {/* Partners */}
            <Row className="justify-content-center">
              {this.state.partners.map((partner, key) => (
                <Col
                  lg={2}
                  md={2}
                  xs={6}
                  key={key}
                  className="text-center mt-4 pt-2"
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

export default Speakers;
