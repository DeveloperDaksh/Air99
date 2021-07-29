// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          icon: "uil uil-file d-block rounded h3 mb-0",
          title: "Unlimited Access",
          desc:
            "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.",
          link: "#",
          hoverIcon: "uil uil-file text-primary full-img",
        },
        {
          icon: "uil uil-graduation-cap d-block rounded h3 mb-0",
          title: "Our Courses",
          desc:
            "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.",
          link: "#",
          hoverIcon: "uil uil-graduation-cap text-primary full-img",
        },
        {
          icon: "uil uil-book-reader d-block rounded h3 mb-0",
          title: "Expert Teachers",
          desc:
            "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.",
          link: "#",
          hoverIcon: "uil uil-book-reader text-primary full-img",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="features-absolute">
                  <Row>
                    {this.state.features.map((feature, key) => (
                      <Col md={4} key={key}>
                        <Card className="border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">

                          <div className="icons text-primary text-center mx-auto">
                            <i className={feature.icon}></i>
                          </div>
                          <CardBody className="p-0 mt-4">
                            <h4 className="mt-3">
                              <Link
                                to={feature.link}
                                className="title h5 text-dark"
                              >
                                {" "}
                                {feature.title}
                              </Link>
                            </h4>
                            <p className="text-muted mt-2">{feature.desc} </p>
                            <Link
                              to={feature.link}
                              className="text-primary read-more"
                            >
                              Read More{" "}
                              <i className="uil uil-angle-right-b align-middle"></i>
                            </Link>
                            <i className={feature.hoverIcon}></i>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
