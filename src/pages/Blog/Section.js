import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import BackgroundSlider from "react-background-slider";
import ReactTextRotator from 'react-text-rotator';

// Import images
import bg01 from "../../assets/images/blog/bg1.jpg";
import bg02 from "../../assets/images/blog/bg2.jpg";
import bg03 from "../../assets/images/blog/bg3.jpg";
import { Link } from "react-router-dom";


const rotatetext = [
  {
    text: "Weekend Travel",
    animation: "false",
  },
  {
    text: "Business Meeting",
    animation: "false",
  },
  {
    text: "Delicious & Organic",
    animation: "false",
  },
];

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [bg01, bg02, bg03],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="home-slider position-relative mt-5">
          <div className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item mt-4 active">
                <div
                  className="bg-half-170"
                >
                  <BackgroundSlider
                    images={this.state.items}
                    duration={8}
                    transition={1}
                  />
                  <div className="bg-overlay"></div>
                  <Container>
                    <Row className="mt-5 justify-content-center">
                      <Col xs={12}>
                        <div className="title-heading text-center">
                          <h2 className="text-white title-dark mb-3">
                            <ReactTextRotator
                              content={rotatetext}
                              time={8000}
                            />
                          </h2>
                          <ul className="list-unstyled">
                            <li className="list-inline-item small user text-white-50 me-2">
                              <i className="mdi mdi-account text-white title-dark"></i>{" "}
                          Calvin Carlo
                            </li>
                            <li className="list-inline-item small date text-white-50">
                              <i className="mdi mdi-calendar-check text-white title-dark"></i>{" "}
                              13th August, 2019
                            </li>
                          </ul>
                          <p className="para-desc mx-auto text-white-50 mb-0">
                            Start working with Landrick that can provide everything
                            you need to generate awareness, drive traffic, connect.
                          </p>
                          <div className="mt-4">
                            <Link to="#" className="btn btn-primary">
                              Read More{" "}
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
