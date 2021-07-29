import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

//Import images
import marketing from "../../assets/images/illustrator/Marketing_strategy_SVG.svg";
import services from "../../assets/images/illustrator/services.svg";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          icon: "uil uil-briefcase",
          title: "Our Vision",
          desc:
            "It is a long established fact that a reader will be of a page reader will be of at its layout.",
        },
        {
          icon: "uil uil-rocket",
          title: "Our Mission",
          desc:
            "It is a long established fact that a reader will be of a page reader will be of at its layout.",
        },
        {
          icon: "uil uil-crosshairs",
          title: "Our Goal",
          desc:
            "It is a long established fact that a reader will be of a page reader will be of at its layout.",
        },
      ],
      featuresSmall: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      featuresSmall1: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            {this.state.features.map((feature, key) => (
              <Col lg={4} md={6} xs={12} key={key}>
                <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-primary">
                    <i className={feature.icon}></i>
                  </span>
                  <CardBody className="p-0 content">
                    <h5>{feature.title}</h5>
                    <p className="para text-muted mb-0">{feature.desc}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={5} md={6} className="mt-4 pt-2">
              <img src={services} alt="Landrick" />
            </Col>

            <Col lg={7} md={6} className="mt-4 pt-2">
              <div className="section-title ms-lg-5">
                <SectionTitleLeft
                  title="Health Insurance"
                  desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                  features={this.state.featuresSmall}
                  class=""
                />
                <div className="mt-4">
                  <Link to="#" className="btn btn-primary">
                    Read More{" "}
                    <i>
                      <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                    </i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg={5}
              md={{ size: 6, order: 2 }}
              xs={{ order: 1 }}
              className="mt-4 pt-2"
            >
              <img src={marketing} alt="Landrick" />
            </Col>

            <Col
              lg={7}
              md={{ size: 6, order: 1 }}
              xs={{ order: 2 }}
              className="mt-4 pt-2"
            >
              <div className="section-title me-lg-5">
                <SectionTitleLeft
                  title="Investment Plans"
                  desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                  features={this.state.featuresSmall1}
                  class=""
                />
                <div className="mt-4">
                  <Link to="#" className="btn btn-primary">
                    Read More{" "}
                    <i>
                      <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                    </i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
