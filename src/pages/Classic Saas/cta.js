import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";

import CountUp from "react-countup";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class CTA extends Component {
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
        <Container className="pt-4 mt-100 mt-60">
          <Row className="justify-content-center" id="counter">
            <Col xs="12" className="text-center">
              <div className="section-title">
                <h4 className="title mb-4">
                  Overall{" "}
                  <span className="text-primary">
                    <span className="counter-value">
                      <CountUp end={333} delay={5} />
                    </span>
                    k+
                  </span>{" "}
                  client are using, Get Started
                </h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Build responsive, mobile-first projects on the web with the
                  world's most popular front-end component library.
                </p>

                <div className="mt-4">
                  <Link to="#" className="btn btn-primary m-1">
                    Get Started <i className="uil uil-angle-right-b"></i>
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

export default CTA;
