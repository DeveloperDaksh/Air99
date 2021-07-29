import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Images
import laptop from "../../assets/images/onepage/laptop.png";

class ModalVideoSection extends Component {
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
          <Row>
            <Col xs="12">
              <div
                className="position-relative"
                style={{ zIndex: "1" }}
                data-aos="zoom-in"
                data-aos-duration="1600"
              >
                <img
                  src={laptop}
                  className="rounded img-fluid mx-auto d-block"
                  alt=""
                />
                <div className="play-icon">
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="play-btn video-play-icon"
                  >
                    <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="287684225"
            onClose={() => this.setState({ isOpen: false })}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default ModalVideoSection;
