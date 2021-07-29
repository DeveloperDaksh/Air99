import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          icon: "uil uil-airplay d-block rounded h3 mb-0",
          title: "Design & Development",
        },
        {
          id: 2,
          icon: "uil uil-clipboard-alt d-block rounded h3 mb-0",
          title: "Management & Marketing",
        },
        {
          id: 3,
          icon: "uil uil-credit-card-search d-block rounded h3 mb-0",
          title: "Stratagy & Research",
        },
        {
          id: 4,
          icon: "uil uil-ruler-combined d-block rounded h3 mb-0",
          title: "Easy To Use",
        },
        {
          id: 5,
          icon: "uil uil-exposure-alt d-block rounded h3 mb-0",
          title: "Daily Reports",
        },
        {
          id: 6,
          icon: "uil uil-clock d-block rounded h3 mb-0",
          title: "Real Time Zone",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <div className="section-title mb-4 pb-2">
                <h6 className="text-primary">Features</h6>
                <h4 className="title mb-4">Explore awesome features</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
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
            {this.state.features.map((features, key) => (
              <Col lg={4} md={6} xs={12} className="mt-4 pt-2" key={key}>
                <Card className="features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                  <div className="icons text-primary text-center mx-auto">
                    <i className={features.icon}></i>
                  </div>

                  <CardBody className="p-0 content">
                    <h5 className="mt-4">
                      <Link to="#" className="title text-dark">
                        {features.title}
                      </Link>
                    </h5>
                    <p className="text-muted">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have originated
                    </p>

                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i>
                        <FeatherIcon
                          icon="chevron-right"
                          className="fea icon-sm"
                        />
                      </i>
                    </Link>
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
