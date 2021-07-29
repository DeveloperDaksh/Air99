import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// import images
import online1 from "../../assets/images/course/online/ab01.jpg";
import online2 from "../../assets/images/course/online/ab02.jpg";
import online3 from "../../assets/images/course/online/ab03.jpg";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <Row className="align-items-center">
                <Col lg={6} xs={6} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                    <CardBody className="p-0">
                      <img
                        src={online1}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="overlay-work bg-dark"></div>
                      <div className="content">
                        <Link
                          to="#"
                          className="title text-white d-block fw-bold"
                        >
                          Web Development
                        </Link>
                        <small className="text-light">IT & Software</small>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg={6} xs={6}>
                  <Row>
                    <Col lg={12} md={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                        <CardBody className="p-0">
                          <img
                            src={online2}
                            className="img-fluid"
                            alt=""
                          />
                          <div className="overlay-work bg-dark"></div>
                          <div className="content">
                            <Link
                              to="#"
                              className="title text-white d-block fw-bold"
                            >
                              Michanical Engineer
                            </Link>
                            <small className="text-light">Engineering</small>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={12} md={12} className="mt-4 pt-2">
                      <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                        <CardBody className="p-0">
                          <img
                            src={online3}
                            className="img-fluid"
                            alt=""
                          />
                          <div className="overlay-work bg-dark"></div>
                          <div className="content">
                            <Link
                              to="#"
                              className="title text-white d-block fw-bold"
                            >
                              Chartered Accountant
                            </Link>
                            <small className="text-light">C.A.</small>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col lg={6} md={6} className="mt-4 mt-lg-0 pt- pt-lg-0">
              <div className="ms-lg-4">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">About Our Story</h4>
                  <p className="text-muted para-desc">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                  <p className="text-muted para-desc mb-0">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century. Lorem Ipsum
                    is composed in a pseudo-Latin language which more or less
                    corresponds to 'proper' Latin. It contains a series of real
                    Latin words.
                  </p>
                </div>

                <ul className="list-unstyled text-muted">
                  <li className="mb-0">
                    <span className="text-primary h4 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Fully Responsive
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h4 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Multiple Layouts
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h4 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Suits Your Style
                  </li>
                </ul>

                <div className="watch-video mt-4 pt-2">
                  <Link
                    to="https://1.envato.market/landrickreactjs"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Read More{" "}
                    <i>
                      <FeatherIcon
                        icon="chevron-right"
                        className="fea icon-sm"
                      />
                    </i>
                  </Link>
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="btn btn-icon btn-pills video-play-icon btn-primary m-1"
                  >
                    <i>
                      <FeatherIcon
                        icon="video"
                        className="icons"
                      />
                    </i>
                  </Link>
                  <span className="fw-bold text-uppercase small align-middle ms-1">
                    Watch Now
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="99025203"
            onClose={() => this.setState({ isOpen: false })}
          />
        </Container>
      </React.Fragment>
    );
  }
}
