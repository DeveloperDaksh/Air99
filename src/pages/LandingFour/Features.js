import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// import images
import about from "../../assets/images/company/about2.png";

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class Features extends Component {
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
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <span className="badge badge-pill badge-soft-primary">
                  Features
                </span>
                <h4 className="title mt-3 mb-4">What we do ?</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap v5 html
                  page.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4} md={6} className="mt-4 pt-2">
              <Card className="border-0 text-center features feature-clean rounded">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-envelope-lock d-block rounded h3 mb-0"></i>
                </div>

                <CardBody className="p-0 mt-4">
                  <h5>Fully Secured</h5>
                  <p className="text-muted mb-0">
                    Composed in a pseudo-Latin language which more or less
                    pseudo-Latin language corresponds.
                  </p>
                  <div className="mt-2">
                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />
                      </i>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mt-4 pt-2">
              <Card className="border-0 text-center features feature-clean rounded">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-edit d-block rounded h3 mb-0"></i>
                </div>

                <CardBody className="p-0 mt-4">
                  <h5>Easy to Edit</h5>
                  <p className="text-muted mb-0">
                    Composed in a pseudo-Latin language which more or less
                    pseudo-Latin language corresponds.
                  </p>
                  <div className="mt-2">
                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />
                      </i>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mt-4 pt-2">
              <Card className="border-0 text-center features feature-clean rounded">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-circle-layer d-block rounded h3 mb-0"></i>
                </div>

                <CardBody className="p-0 mt-4">
                  <h5>Design & Branding</h5>
                  <p className="text-muted mb-0">
                    Composed in a pseudo-Latin language which more or less
                    pseudo-Latin language corresponds.
                  </p>
                  <div className="mt-2">
                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />
                      </i>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={5} md={6}>
              <img src={about} className="img-fluid" alt="" />
            </Col>

            <Col lg={7} md={6} className="mt-4 mt-lg-0 pt- pt-lg-0">
              <div className="ms-lg-5">
                <div className="section-title mb-3">
                  <span className="badge rounded-pill bg-soft-primary">
                    Meet the future
                  </span>
                  <h4 className="title my-3">Introducing a new way</h4>
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
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Fully Responsive
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Multiple Layouts
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Suits Your Style
                  </li>
                </ul>

                <div className="watch-video mt-3">
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
                      />{" "}
                    </i>
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-icon btn-pills video-play-icon btn-primary m-1"
                    onClick={this.openModal}
                  >
                    <i>
                      <FeatherIcon icon="video" className="icons" />{" "}
                    </i>
                  </Link>
                  <span className="fw-bold text-uppercase small align-middle ms-1">
                    Watch Now
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <ModalVideo
          channel="vimeo"
          isOpen={this.state.isOpen}
          videoId="99025203"
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    );
  }
}
