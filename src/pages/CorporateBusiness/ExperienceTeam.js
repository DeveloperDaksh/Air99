import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//import bg image
import bgimg from "../../assets/images/cta-bg.jpg";

export default class ExperienceTeam extends Component {
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
        <section className="section bg-light pt-0">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <div
                  className="video-solution-cta position-relative"
                  style={{ zIndex: "1" }}
                >
                  <div className="position-relative">
                    <img
                      src={bgimg}
                      className="img-fluid rounded-md shadow-lg"
                      alt=""
                    />
                    <div className="play-icon">
                      <Link
                        to="#"
                        onClick={this.openModal}
                        className="play-btn video-play-icon"
                      >
                        <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content mt-md-4 pt-md-2">
                    <Row className="justify-content-center">
                      <Col lg={10} className="text-center">
                        <Row className="align-items-center">
                          <Col md={6} className="mt-4 pt-2">
                            <div className="section-title text-md-start">
                              <h6 className="text-white-50">Team</h6>
                              <h4 className="title text-white title-dark mb-0">
                                Meet Experience <br /> Team Member
                              </h4>
                            </div>
                          </Col>

                          <Col md={6} xs={12} className="mt-4 pt-md-2">
                            <div className="section-title text-md-start">
                              <p className="text-white-50 para-desc">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                              <Link to="#" className="text-white title-dark">
                                Read More{" "}
                                <i className="uil uil-angle-right-b align-middle"></i>
                              </Link>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="feature-posts-placeholder bg-primary bg-gradient"></div>
          </Container>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="yba7hPeTSjk"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
      </React.Fragment>
    );
  }
}
