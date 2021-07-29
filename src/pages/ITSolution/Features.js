import React, { Component } from "react";

import Asset190 from "../../assets/images/illustrator/Asset190.svg";
import Asset189 from "../../assets/images/illustrator/Asset189.svg";
import Asset192 from "../../assets/images/illustrator/Asset192.svg";
import Asset187 from "../../assets/images/illustrator/Asset187.svg";
import { Col, Container, Row } from "reactstrap";

export default class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: [
        {
          id: 1,
          img: Asset190,
          count: "97",
          percentage: "%",
          heading: "Happy Client",
        },
        {
          id: 2,
          img: Asset189,
          count: "15",
          percentage: "+",
          heading: "Awards",
        },
        {
          id: 3,
          img: Asset192,
          count: "2",
          percentage: "K",
          heading: "Job Placement",
        },
        {
          id: 4,
          img: Asset187,
          count: "98",
          percentage: "%",
          heading: "Project Complete",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section pt-0">
          <Container>
            <div
              className="p-4 rounded shadow bg-primary position-relative"
              style={{ zIndex: "1" }}
            >
              <Row>
                <Col md={6} xs={12}>
                  <div className="progress-box">
                    <h6 className="title text-light title-dark">
                      Web Designing
                    </h6>
                    <div
                      className="progress title-bg-dark"
                      style={{ height: "10px", padding: "3px" }}
                    >
                      <div
                        className="progress-bar position-relative bg-black"
                        style={{ width: "84%" }}
                      >
                        <div className="progress-value d-block text-light title-dark h6">
                          84%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-light title-dark">
                      Web Development
                    </h6>
                    <div
                      className="progress title-bg-dark"
                      style={{ height: "10px", padding: "3px" }}
                    >
                      <div
                        className="progress-bar position-relative bg-black"
                        style={{ width: "75%" }}
                      >
                        <div className="progress-value d-block text-light title-dark h6">
                          75%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-light title-dark">
                      Game Development
                    </h6>
                    <div
                      className="progress title-bg-dark"
                      style={{ height: "10px", padding: "3px" }}
                    >
                      <div
                        className="progress-bar position-relative bg-black"
                        style={{ width: "79%" }}
                      >
                        <div className="progress-value d-block text-light title-dark h6">
                          79%
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className="progress-box mt-4 mt-sm-0">
                    <h6 className="title text-light title-dark">
                      App Development
                    </h6>
                    <div
                      className="progress title-bg-dark"
                      style={{ height: "10px", padding: "3px" }}
                    >
                      <div
                        className="progress-bar position-relative bg-black"
                        style={{ width: "84%" }}
                      >
                        <div className="progress-value d-block text-light title-dark h6">
                          84%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-light title-dark">
                      Digital Marketing
                    </h6>
                    <div
                      className="progress title-bg-dark"
                      style={{ height: "10px", padding: "3px" }}
                    >
                      <div
                        className="progress-bar position-relative bg-black"
                        style={{ width: "75%" }}
                      >
                        <div className="progress-value d-block text-light title-dark h6">
                          75%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-light title-dark">
                      Full stack Development
                    </h6>
                    <div
                      className="progress title-bg-dark"
                      style={{ height: "10px", padding: "3px" }}
                    >
                      <div
                        className="progress-bar position-relative bg-black"
                        style={{ width: "79%" }}
                      >
                        <div className="progress-value d-block text-light title-dark h6">
                          79%
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <Row
              className="mt-4 pt-2 position-relative"
              id="counter"
              style={{ zIndex: "1" }}
            >
              {this.state.progress.map((progress, key) => (
                <Col md={3} xs={6} className="mt-4 pt-2" key={key}>
                  <div className="counter-box text-center">
                    <img
                      src={progress.img}
                      className="avatar avatar-small"
                      alt=""
                    />
                    <h2 className="mb-0 mt-4">
                      <span className="counter-value" data-count="97">
                        {progress.count}
                      </span>
                      {progress.percentage}
                    </h2>
                    <h6 className="counter-head text-muted">
                      {progress.heading}
                    </h6>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="feature-posts-placeholder bg-light"></div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
