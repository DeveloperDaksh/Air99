import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import FeaturedJobBox from "./FeaturedJobBox";

//Import images
import img1 from "../../assets/images/job/Circleci.svg";
import img2 from "../../assets/images/job/Codepen.svg";
import img3 from "../../assets/images/job/Discord.svg";
import img4 from "../../assets/images/job/Eslint.svg";
import img5 from "../../assets/images/job/Gitlab.svg";
import img6 from "../../assets/images/job/Mg.svg";
import img7 from "../../assets/images/job/Sketch.svg";
import img8 from "../../assets/images/job/Twilio.svg";
import img9 from "../../assets/images/job/Udemy.svg";
import img10 from "../../assets/images/job/Webhooks.svg";
import img11 from "../../assets/images/job/Appdynamics.svg";
import img12 from "../../assets/images/job/Gradle.svg";

class FeaturedJobs extends Component {
  state = {
    jobs: [
      {
        id: 1,
        image: img1,
        title: "Senior Web Developer",
        city: "London",
        country: "UK",
      },
      {
        id: 2,
        image: img2,
        title: "Front-End Developer",
        city: "Brasilia",
        country: "Brazil",
      },
      {
        id: 3,
        image: img3,
        title: "Back-End Developer",
        city: "Ottawa",
        country: "Canada",
      },
      {
        id: 4,
        image: img4,
        title: "UI Designer",
        city: "Beijing",
        country: "China",
      },
      {
        id: 5,
        image: img5,
        title: "UX Designer",
        city: "Bogota",
        country: "Colombia",
      },
      {
        id: 6,
        image: img6,
        title: "Php Developer",
        city: "Havana",
        country: "Cuba",
      },
      {
        id: 7,
        image: img7,
        title: "IOS Developer",
        city: "Nicosia",
        country: "Cyprus",
      },
      {
        id: 8,
        image: img8,
        title: "Graphics Designer",
        city: "Cairo",
        country: "Egypt",
      },
      {
        id: 9,
        image: img9,
        title: "Data Entry",
        city: "Suva",
        country: "Fiji",
      },
      {
        id: 10,
        image: img10,
        title: "Sketch Designer",
        city: "Helsinki",
        country: "Finland",
      },
      {
        id: 11,
        image: img11,
        title: "Web Developer",
        city: "Berlin",
        country: "Germany",
      },
      {
        id: 12,
        image: img12,
        title: "Game Developer",
        city: "Ahmedabad",
        country: "India",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* section title */}
          <SectionTitle
            title="Featured Jobs"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect"
          />

          <Row>
            {/* Featured Job Box */}
            <FeaturedJobBox jobs={this.state.jobs} />

            <Col xs="12" className="text-center mt-4 pt-2">
              <Link to="/page-jobs" className="btn btn-primary">
                See All Jobs <i className="mdi mdi-chevron-right"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default FeaturedJobs;
