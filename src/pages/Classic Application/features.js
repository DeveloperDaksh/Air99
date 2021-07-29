import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

// import images
import img1 from "../../assets/images/icon/art-and-design.svg";
import img2 from "../../assets/images/icon/smartphone.svg";
import img3 from "../../assets/images/icon/clock.svg";

//Import Components
import FeatureTitle from "./FeatureTitle";

class Features extends Component {
  state = {
    features: [
      {
        id: 1,
        img: img1,
        title: "Design & Branding",
        desc:
          "If the distribution of letters and distribution 'words' is random, the reader will not be distracted.",
      },
      {
        id: 2,
        img: img2,
        title: "Fully Secured",
        desc:
          "If the distribution of letters and distribution 'words' is random, the reader will not be distracted.",
      },
      {
        id: 3,
        img: img3,
        title: "High Performance",
        desc:
          "If the distribution of letters and distribution 'words' is random, the reader will not be distracted.",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          {/* render feature title */}
          <FeatureTitle
            maintitle="Features"
            title="What We Do ?"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
            badgeColor="primary"
          />
          <Row>
            {this.state.features.map((feature, key) => (
              <Col md="4" xs="12" key={key} className="mt-4 pt-2">
                <Card
                  className={
                    feature.id === 2
                      ? "bg-primary text-center rounded border-0"
                      : "text-center rounded border-0"
                  }
                >
                  <CardBody>
                    <div
                      className={
                        feature.id === 2
                          ? "p-3 bg-white rounded shadow d-inline-block"
                          : "p-3 bg-light rounded shadow d-inline-block"
                      }
                    >
                      <img
                        src={feature.img}
                        className="avatar avatar-small"
                        alt=""
                      />
                    </div>
                    <div className="mt-4">
                      <h5>
                        <Link
                          to=""
                          className={
                            feature.id === 2 ? "text-white" : "text-dark"
                          }
                        >
                          {feature.title}
                        </Link>
                      </h5>
                      <p
                        className={
                          feature.id === 2
                            ? "text-white-50 mt-3 mb-0"
                            : "text-muted mt-3 mb-0"
                        }
                      >
                        {feature.desc}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
