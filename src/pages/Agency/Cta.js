// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Images
import bgImg from "../../assets/images/1.jpg";

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
          style={{ background: `url(${bgImg}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col xs="12" className="text-center">
                <div className="section-title">
                  <h4 className="title title-dark text-white mb-4">
                    Stop leaving money on the table.
                  </h4>
                  <p className="text-light para-dark para-desc mx-auto">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="play-btn border border-light mt-4 video-play-icon"
                  >
                    <i>
                      <FeatherIcon
                        icon="play"
                        className="fea icon-ex-md text-white title-dark"
                      />
                    </i>
                  </Link>

                  <ModalVideo
                    channel="vimeo"
                    isOpen={this.state.isOpen}
                    videoId="287684225"
                    onClose={() => this.setState({ isOpen: false })}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Cta;
