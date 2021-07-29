import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export default class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      features: [
        {
          id: 1,
          icon: "uil uil-comment-verify d-block rounded h3 mb-0",
          title: "Instant Chat",
        },
        {
          id: 2,
          icon: "uil uil-image d-block rounded h3 mb-0",
          title: "Media Messages",
        },
        {
          id: 3,
          icon: "uil uil-video d-block rounded h3 mb-0",
          title: "Video Messages",
        },
        {
          id: 4,
          icon: "uil uil-database-alt d-block rounded h3 mb-0",
          title: "Dedicated Server",
        },
        {
          id: 5,
          icon: "uil uil-users-alt d-block rounded h3 mb-0",
          title: "Team Collaboration",
        },
        {
          id: 6,
          icon: "uil uil-apps d-block rounded h3 mb-0",
          title: "Responsive App",
        },
      ],

    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <section className="section border-bottom">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-4">Our Features</h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              {this.state.features.map((features, key) => (
                <Col lg={4} md={6} className="mt-5" key={key}>
                  <div className="d-flex features feature-clean">
                    <div className="icons text-primary text-center mx-auto">
                      <i className={features.icon}></i>
                    </div>
                    <div className="flex-1 content ms-4">
                      <h5 className="mb-1">
                        <Link to="#" className="text-dark">
                          {features.title}
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">
                        The most well-known dummy text is the, which is said to
                        have originated in the 16th century.
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <Row className="justify-content-center">
              <div className="col-12 mt-5">
                <div className="watch-video text-center">
                  <Link to="#" className="btn btn-primary m-1">
                    Get Started <i className="mdi mdi-chevron-right"></i>
                  </Link>
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="btn btn-icon btn-pills video-play-icon btn-primary m-1"
                  >
                    <i>
                      <FeatherIcon
                        icon="video"
                        className="fea icon-sm text-white title-dark"
                      />
                    </i>
                  </Link>
                  <span className="fw-bold text-uppercase small align-middle ms-1">
                    Watch Now
                  </span>
                </div>
              </div>
            </Row>
          </Container>

          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="287684225"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
      </React.Fragment>
    );
  }
}
