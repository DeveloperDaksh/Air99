// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Import images
import bg04 from "../../assets/images/hotel/bg04.jpg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class Cta extends Component {
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
          className="section bg-cta"
          style={{ background: `url(${bg04}) center center` }}
          id="cta"
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col xs="12" className="text-center">
                <div className="section-title">
                  <h4 className="title title-dark text-white mb-4">
                    Resembling Tour of Landrick Resort
                  </h4>
                  <p className="text-light para-dark para-desc mx-auto">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                  <Link
                    onClick={this.openModal}
                    to="#"
                    className="play-btn border border-light mt-4 video-play-icon"
                  >
                    <i>
                      <FeatherIcon
                        icon="play"
                        className="fea icon-ex-md text-white title-dark"
                      />
                    </i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="L61p2uyiMSo"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
      </React.Fragment>
    );
  }
}

export default Cta;
