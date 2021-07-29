import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import bg01 from "../../assets/images/single/bg01.jpg";
import single01 from "../../assets/images/single/1.png";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Icons
import FeatherIcon from "feather-icons-react";
class Section extends Component {
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
        <section
          className="bg-home d-flex align-items-center"
          style={{ background: `url(${bg01}) center center`, height: "auto" }}
          id="home"
        >
          <div className="bg-overlay bg-overlay-white"></div>
          <Container>
            <Row className="justify-content-center">
              <Col md="9" className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
                <div className="title-heading margin-top-100">
                  <h1 className="display-4 fw-bold mb-3">
                    DJI Professional Drone Camera
                  </h1>
                  <p className="para-desc mx-auto text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link
                      onClick={this.openModal}
                      to="#"
                      className="btn btn-icon btn-pills btn-primary m-1 lightbox"
                    >
                      <FeatherIcon
                        icon="video"
                        className="icons"
                      />
                    </Link>
                    <span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                    <ModalVideo
                      channel="vimeo"
                      isOpen={this.state.isOpen}
                      videoId="99025203"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                  </div>
                </div>
                <div className="home-dashboard">
                  <img src={single01} alt="" className="img-fluid mover" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
