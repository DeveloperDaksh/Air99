import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// import images
import landing from "../../assets/images/landing/2.jpg";
import shapes from "../../assets/images/shapes/shape1.png";

export default class Section extends Component {
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
        <section className="bg-half-260 pb-lg-0 pb-md-4 bg-primary d-table w-100">
          <div className="bg-overlay bg-black" style={{ opacity: "0.8" }}></div>
          <Container>
            <Row className="position-relative" style={{ zIndex: "1" }}>
              <Col md={7} xs={12} className="mt-lg-5">
                <div className="title-heading">
                  <h1 className="heading text-white title-dark mb-4">
                    Bluid your audiance <br /> and sale more
                  </h1>
                  <p className="para-desc text-white-50">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="watch-video mt-4 pt-2">
                    <Link to="#" className="btn btn-primary m-1">
                      Get Started
                    </Link>
                    <Link
                      to="#"
                      onClick={this.openModal}
                      className="btn btn-icon btn-pills video-play-icon btn-primary m-1"
                    >
                      <i>
                        <FeatherIcon icon="video" className="icons" />
                      </i>
                    </Link>
                    <span className="fw-bold text-uppercase text-white-50 small align-middle ms-2">
                      Watch Now
                    </span>
                  </div>
                </div>
              </Col>

              <Col md={5} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="shape-before">
                  <div className="carousel-cell">
                    <img
                      src={landing}
                      className="img-fluid rounded-md"
                      alt=""
                    />
                  </div>
                  <img src={shapes} className="img-fluid shape-img" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="287684225"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
