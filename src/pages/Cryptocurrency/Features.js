import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import FeatureBox from "./FeatureBox";

//Import Images
import portfolio from "../../assets/images/crypto/portfolio.png";
import report from "../../assets/images/icon/report.svg";
import marketing from "../../assets/images/icon/marketing.svg";
import currency from "../../assets/images/icon/currency.svg";

class Features extends Component {
  state = {
    features: [
      {
        id: 1,
        icon: report,
        title: "Manage your portfolio",
        desc:
          "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
        link: "",
      },
      {
        id: 1,
        icon: marketing,
        title: "Recurring buys",
        desc:
          "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",
        link: "",
      },
      {
        id: 1,
        icon: currency,
        title: "Mobile apps",
        desc:
          "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",
        link: "",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          {/* Section title */}
          <SectionTitle
            title="Create your cryptocurrency portfolio today"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            <Col xs="12" className="mt-4 pt-2">
              <img
                src={portfolio}
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </Col>

            {/* feature box */}
            <FeatureBox features={this.state.features} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
