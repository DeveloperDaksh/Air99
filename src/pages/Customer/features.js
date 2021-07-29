import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import FeatureBox from "./FeatureBox";

//Import Images
import img1 from "../../assets/images/icon/chat.svg";
import img2 from "../../assets/images/icon/customer-service.svg";
import img3 from "../../assets/images/icon/user.svg";
import img4 from "../../assets/images/icon/call.svg";
import img5 from "../../assets/images/icon/writing.svg";
import img6 from "../../assets/images/icon/mail.svg";

class Features extends Component {
  state = {
    features: [
      {
        title: "Live Chat",
        image: img1,
        desc:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
        link: "",
      },
      {
        title: "Social",
        image: img2,
        desc:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
        link: "",
      },
      {
        title: "Support Portal",
        image: img3,
        desc:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
        link: "",
      },
      {
        title: "Phone Supports",
        image: img4,
        desc:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
        link: "",
      },
      {
        title: "Tickets",
        image: img5,
        desc:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
        link: "",
      },
      {
        title: "FAQ's",
        image: img6,
        desc:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making",
        link: "",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col xs="12" className="text-center">
              <div className="section-title mb-4 pb-2">
                <span
                  className="badge rounded-pill bg-success aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Features
                </span>
                <h4
                  className="title my-4"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  Communication Resources
                </h4>
                <p
                  className="text-muted para-desc mx-auto mb-0"
                  data-aos="fade-up"
                  data-aos-duration="1800"
                >
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {/* feature box */}
            <FeatureBox features={this.state.features} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
