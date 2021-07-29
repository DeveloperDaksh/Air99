import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import about01 from "../../assets/images/course/online/ab01.jpg";
import about02 from "../../assets/images/course/online/ab02.jpg";
import about03 from "../../assets/images/course/online/ab03.jpg";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen: false,
      branchName: "U.S.A",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin",
      branches: [
        {
          title: "U.S.A.",
          desc: "Long Street, WS, US",
          location:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin",
        },
        {
          title: "China",
          desc: "Wuhan, China",
          location:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin",
        },
        {
          title: "India",
          desc: "Channai, India",
          location:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin",
        },
      ],
    };
    this.openModal = this.openModal.bind(this);
    this.openModalMap.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  openModalMap = (branchName, location) => {
    this.setState({
      isOpen1: !this.state.isOpen1,
      branchName: branchName,
      location: location,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <Row className="align-items-center">
                <Col lg={6} md={6} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-lg">
                    <CardBody className="p-0">
                      <img src={about01} className="img-fluid" alt="work" />
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

                  <div className="mt-4 pt-2 text-end d-none d-md-block">
                    <Link to="#" className="btn btn-primary">
                      See More{" "}
                      <i>
                        <FeatherIcon
                          icon="chevron-right"
                          className="fea icon-sm"
                        />
                      </i>
                    </Link>
                  </div>
                </Col>

                <Col lg={6} md={6}>
                  <Row>
                    <Col lg={12} md={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-lg">
                        <CardBody className="p-0">
                          <img src={about02} className="img-fluid" alt="work" />
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
                      <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-lg">
                        <CardBody className="p-0">
                          <img src={about03} className="img-fluid" alt="work" />
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

            <Col lg={6} md={12} className="mt-4 mt-lg-0 pt- pt-lg-0">
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

                <h5>Our Branches :</h5>

                <Row>
                  {this.state.branches.map((branch, key) => (
                    <Col key={key} md={6} xs={12} className="mt-4">
                      <div className="d-flex align-items-center">
                        <i className="uil uil-map-marker text-muted h3"></i>
                        <div className="content ms-2">
                          <h5 className="mb-0">
                            <Link
                              onClick={() =>
                                this.openModalMap(branch.title, branch.location)
                              }
                              to="#"
                              className="video-play-icon text-primary"
                            >
                              {branch.title}
                            </Link>
                          </h5>
                          <p className="text-muted mb-0">{branch.desc}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>

                <div className="mt-4 pt-2">
                  <Link
                    to="https://1.envato.market/landrickreactjs"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Read More{" "}
                    <i className="uil uil-angle-right-b align-middle"></i>
                  </Link>
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="btn btn-icon btn-pills btn-primary m-1 lightbox"
                  >
                    <FeatherIcon
                      icon="video"
                      className="icons"
                    />
                  </Link>
                  <span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
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

        <Modal
          size="lg"
          isOpen={this.state.isOpen1}
          toggle={() => this.setState({ isOpen1: !this.state.isOpen1 })}
        >
          <ModalHeader
            toggle={() => this.setState({ isOpen1: !this.state.isOpen1 })}
          >
            {this.state.branchName} Branch Map
          </ModalHeader>
          <ModalBody>
            <div className="map">
              <iframe
                title="uniqueTitle"
                src={this.state.location}
                style={{ border: "0" }}
                allowFullScreen
              ></iframe>
            </div>
          </ModalBody>
        </Modal>

        <Container className="mt-100 mt-60">
          <Row>
            <Col lg={3} md={6} xs={12}>
              <Media className="d-flex features feature-clean">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-airplay d-block rounded h3 mb-0">
                    {/* <Unicons.UilAirplay size="32" /> */}
                  </i>
                </div>
                <div className="flex-1 content ms-3">
                  <h5 className="mb-1">
                    <Link to="#" className="text-dark">
                      Learners
                    </Link>
                  </h5>
                  <p className="text-muted mb-0">
                    This is required when, for text is not yet available.
                  </p>
                </div>
              </Media>
            </Col>

            <Col lg={3} md={6} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <Media className="d-flex features feature-clean">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-bag d-block rounded h3 mb-0">
                    {/* <Unicons.UilBag size="32" /> */}
                  </i>
                </div>
                <div className="flex-1 content ms-3">
                  <h5 className="mb-1">
                    <Link to="#" className="text-dark">
                      Teachers
                    </Link>
                  </h5>
                  <p className="text-muted mb-0">
                    This is required when, for text is not yet available.
                  </p>
                </div>
              </Media>
            </Col>

            <Col lg={3} md={6} xs={12} className="mt-4 pt-2 mt-lg-0 pt-lg-0">
              <Media className="d-flex features feature-clean">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-star d-block rounded h3 mb-0">
                    {/* <Unicons.UilStar size="32" /> */}
                  </i>
                </div>
                <div className="flex-1 content ms-3">
                  <h5 className="mb-1">
                    <Link to="#" className="text-dark">
                      Parents
                    </Link>
                  </h5>
                  <p className="text-muted mb-0">
                    This is required when, for text is not yet available.
                  </p>
                </div>
              </Media>
            </Col>

            <Col lg={3} md={6} xs={12} className="mt-4 pt-2 mt-lg-0 pt-lg-0">
              <Media className="d-flex features feature-clean">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-at d-block rounded h3 mb-0">
                    {/* <Unicons.UilAt size="32" /> */}
                  </i>
                </div>
                <div className="flex-1 content ms-3">
                  <h5 className="mb-1">
                    <Link to="#" className="text-dark">
                      Doners
                    </Link>
                  </h5>
                  <p className="text-muted mb-0">
                    This is required when, for text is not yet available.
                  </p>
                </div>
              </Media>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default About;
