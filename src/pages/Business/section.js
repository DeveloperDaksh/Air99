import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Alert } from "reactstrap";
import Typist from "react-typist";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// Import images
import busi01 from "../../assets/images/busi01.jpg";

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
        {/* Hero Start */}
        <section className="bg-half-170 border-bottom d-table w-100" id="home">
          <Container>
            <Row className="align-items-center">
              <Col lg="6" md="7">
                <div className="title-heading mt-4">
                  <Alert
                    className="alert-light alert-pills shadow"
                    role="alert"
                  >
                    <span className="badge rounded-pill bg-danger me-1">v3.1</span>
                    <span className="content">
                      {" "}
                      Build <span className="text-primary">anything</span> you
                      want - Landrick.
                    </span>
                  </Alert>
                  <h1 className="heading mb-3">
                    Leading Digital Business For &nbsp;
                    <Typist style={{ display: "contents" }}>
                      <span className="element text-primary">Agency</span>
                      <Typist.Backspace count={15} delay={1200} />
                      <span className="element text-primary">Software</span>
                      <Typist.Backspace count={15} delay={1200} />
                      <span className="element text-primary">Technology</span>
                      <Typist.Backspace count={15} delay={1200} />
                      <span className="element text-primary">Studio</span>
                      <Typist.Backspace count={15} delay={1200} />
                      <span className="element text-primary">Webapps</span>
                      <Typist.Backspace count={15} delay={1200} />
                      <span className="element text-primary">Agency</span>
                      <Typist.Backspace count={15} delay={1200} />
                      <span className="element text-primary">Software</span>
                      <Typist.Backspace count={15} delay={1200} />
                      <span className="element text-primary">Technology</span>
                      <Typist.Backspace count={15} delay={1200} />
                      <span className="element text-primary">Studio</span>
                      <Typist.Backspace count={15} delay={1200} />
                      <span className="element text-primary">Webapps</span>
                      <Typist.Backspace count={15} delay={1200} />
                    </Typist>
                    &nbsp; Solution
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4">
                    <Link to="#" className="btn btn-outline-primary rounded">
                      <i className="uil uil-store me-1"></i>Make
                      Your Shop
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="6" md="5" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="position-relative">
                  <img
                    src={busi01}
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
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
