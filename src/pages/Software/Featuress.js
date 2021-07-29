import React, { Component } from "react";
import { Container, Row, Col, Badge, Alert } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Feature from "../../components/Shared/Feature";

// import images
import mobile from "../../assets/images/software/mobile-hori.png";

class Features extends Component {
  state = {
    features: [
      {
        id: 1,
        icon: "uil uil-edit-alt h1 text-primary",
        title: "Seo Services",
        description:
          "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.",
      },
      {
        id: 2,
        icon: "uil uil-vector-square h1 text-primary",
        title: "Email Marketing",
        description:
          "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.",
      },
      {
        id: 3,
        icon: "uil uil-file-search-alt h1 text-primary",
        title: "Data Analysis",
        description:
          "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today.",
      },
      {
        id: 4,
        icon: "uil uil-airplay h1 text-primary",
        title: "Digital Marketing",
        description:
          "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.",
      },
      {
        id: 5,
        icon: "uil uil-calendar-alt h1 text-primary",
        title: "Social Media Marketing",
        description:
          "Allegedly, a Latin scholar established the origin of the text by compiling unusual established word.",
      },
      {
        id: 6,
        icon: "uil uil-clock h1 text-primary",
        title: "Link Building",
        description:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today.",
      },
    ],
  };

  componentDidMount() {
    var featureboxes = document.getElementsByName("featurebox");
    for (var i = 0; i < featureboxes.length; i++) {
      featureboxes[i].classList.add("mt-5");
    }
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          {/* Render Section Title */}
          <SectionTitle
            title="Solutions"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          {/* feature box */}
          <Feature featureArray={this.state.features} isCenter={true} />

          <Row className="justify-content-center mt-5 pt-4">
            <Col lg="10" md="12">
              <img src={mobile} className="img-fluid d-block mx-auto" alt="" />
            </Col>
            <Col xs="12" className="text-center pt-2">
              <Alert color="light" className="alert-pills shadow">
                <Badge className="rounded-pill bg-primary me-1">
                  Download
                </Badge>
                <span className="content">
                  {" "}
                  Trusted by the world's best{" "}
                  <i className="uil uil-cloud-download"></i>
                </span>
              </Alert>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
