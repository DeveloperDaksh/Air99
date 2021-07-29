import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Import Icons
// import FeatherIcon from "feather-icons-react";

//import images
import about from "../../assets/images/construction/about.jpg";
import google from '../../assets/images/client/google.svg';
import lenovo from '../../assets/images/client/lenovo.svg';
import paypal from '../../assets/images/client/paypal.svg';
import amazon from '../../assets/images/client/amazon.svg';

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export default class AboutUs extends Component {
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
          <Row className="align-items-center">
            <Col lg={5} md={6} xs={12}>
              <div className="position-relative">
                <img
                  src={about}
                  className="rounded img-fluid mx-auto d-block"
                  alt=""
                />
                <div className="play-icon">
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="play-btn video-play-icon"
                  >
                    <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                  </Link>
                  <ModalVideo
                    channel="vimeo"
                    isOpen={this.state.isOpen}
                    videoId="287684225"
                    onClose={() => this.setState({ isOpen: false })}
                  />
                </div>
              </div>
            </Col>

            <div className="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="ms-lg-5 ms-md-4">
                <div className="section-title">
                  <span className="badge rounded-pill bg-soft-primary">
                    About us
                  </span>
                  <h4 className="title mt-3 mb-4">
                    We are the leader <br /> in the{" "}
                    <span className="text-primary">Landrick</span>
                  </h4>
                  <p className="text-muted para-desc mx-auto">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                  <p className="text-muted para-desc mx-auto mb-0">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century. Lorem Ipsum
                    is composed in a pseudo-Latin language which more or less
                    corresponds to 'proper' Latin.
                  </p>
                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={4} md={3} className="col-lg-4 col-md-3">
              <h6 className="text-muted mb-0">
                Trusted by over 2,000 of the world’s leading construction
                companies
              </h6>
            </Col>

            <Col lg={8} md={9} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="rounded shadow bg-light p-4">
                <Row className="justify-content-center">
                  <Col lg={3} md={3} xs={6} className="text-center py-4">
                    <img
                      src={amazon}
                      className="avatar avatar-ex-sm"
                      alt=""
                    />
                  </Col>

                  <Col lg={3} md={3} xs={6} className="text-center py-4">
                    <img
                      src={google}
                      className="avatar avatar-ex-sm"
                      alt=""
                    />
                  </Col>

                  <Col lg={3} md={3} xs={6} className="text-center py-4">
                    <img
                      src={lenovo}
                      className="avatar avatar-ex-sm"
                      alt=""
                    />
                  </Col>

                  <Col lg={3} md={3} xs={6} className="text-center py-4">
                    <img
                      src={paypal}
                      className="avatar avatar-ex-sm"
                      alt=""
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
