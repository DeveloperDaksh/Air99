import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

export default class KeyFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyfeatures: [
        {
          id: 1,
          icon: "uil uil-layer-group d-block rounded h3 mb-0",
          hoverIcon: "uil uil-layer-group text-primary full-img",
          title: "Modular",
        },
        {
          id: 2,
          icon: "uil uil-airplay d-block rounded h3 mb-0",
          hoverIcon: "uil uil-airplay text-primary full-img",
          title: "Responsive",
        },
        {
          id: 3,
          icon: "uil uil-focus-target d-block rounded h3 mb-0",
          hoverIcon: "uil uil-focus-target text-primary full-img",
          title: "Customizable",
        },
        {
          id: 4,
          icon: "uil uil-expand-arrows d-block rounded h3 mb-0",
          hoverIcon: "uil uil-expand-arrows text-primary full-img",
          title: "Scalable",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Key Features</h4>
                <p className="para-desc text-muted mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span>{" "}
                that can provide everything you need to generate awareness,
                drive traffic, connect.
              </p>
              </div>
            </Col>
          </Row>

          <Row className=" align-items-center">
            {this.state.keyfeatures.map((keyfeatures, key) => (
              <Col lg={3} md={6} className="mt-4 pt-2" key={key}>
                <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow">
                  <div className="icons text-primary text-center">
                    <i className={keyfeatures.icon}></i>
                  </div>
                  <CardBody className="p-0 mt-4">
                    <Link to="#" className="title h5 text-dark">
                      {keyfeatures.title}
                    </Link>
                    <p className="text-muted mt-2">
                      Composed in a pseudo-Latin language which more or less
                      corresponds.
                  </p>
                    <Link to="#" className="text-primary read-more">
                      Read More <i className="mdi mdi-chevron-right"></i>
                    </Link>
                    <i className={keyfeatures.hoverIcon}></i>
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
