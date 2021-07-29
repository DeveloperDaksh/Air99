import React, { Component } from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Images
import bg from "../../assets/images/digital/home-bg.png";
import seo from "../../assets/images/digital/seo.gif";

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
          className="bg-half-260 d-table w-100"
          style={{ background: `url(${bg}) center center` }}
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <div className="title-heading mt-4">
                  <Alert
                    color="light"
                    className="alert-pills shadow"
                    role="alert"
                  >
                    <span color="danger" className="badge rounded-pill bg-danger me-1">
                      v3.1
                    </span>
                    <span className="content">
                      {" "}
                      Build <span className="text-primary">anything</span> you
                      want - Landrick.
                    </span>
                  </Alert>
                  <h1 className="heading mb-3">
                    A <span className="text-primary">Digital</span> Product{" "}
                    <br /> Marketing Agency
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="watch-video mt-4 pt-2">
                    <Link
                      to="#"
                      className="btn btn-pills btn-primary mb-2 me-1"
                    >
                      Get Started
                    </Link>
                    <Link
                      to="#"
                      onClick={this.openModal}
                      className="video-play-icon watch text-dark mb-2 ms-2"
                    >
                      <i className="mdi mdi-play play-icon-circle text-center d-inline-block me-2 rounded-circle bg-light text-white title-dark position-relative play play-iconbar"></i>{" "}
                      Watch now !
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <img src={seo} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="99025203"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
