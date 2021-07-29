import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import TeamBox from "../../components/Shared/TeamBox";

//Import Images
import image1 from "../../assets/images/client/01.jpg";
import image2 from "../../assets/images/client/02.jpg";
import image3 from "../../assets/images/client/03.jpg";
import image4 from "../../assets/images/client/04.jpg";

class Team extends Component {
  state = {
    candidates: [
      {
        id: 1,
        image: image1,
        name: "Ronny Jofra",
        designation: "Web Developer",
        salary: "2300",
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
        designation: "Web Designer",
        salary: "1950",
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
        designation: "IOS Developer",
        salary: "2540",
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
        designation: "Php Developer",
        salary: "2190",
        link: "",
        socialIds: [
          { icon: "facebook", link: "#" },
          { icon: "instagram", link: "#" },
          { icon: "twitter", link: "#" },
          { icon: "linkedin", link: "#" },
        ],
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our Team Member"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* teambox */}
              <TeamBox candidates={this.state.candidates} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Team;
