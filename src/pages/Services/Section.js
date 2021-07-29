import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import services from "../../assets/images/illustrator/services.svg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

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
        <section className="bg-half-170 d-table w-100" id="home">
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={7}>
                <div className="title-heading mt-4">
                  <h1 className="heading mb-3">
                    Build Anything <br />
                    For Your Project
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link
                      to="page-services"
                      className="btn btn-primary m-1"
                    >
                      Our Services
                    </Link>
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
                    <span className="fw-bold text-uppercase small align-middle ms-2">Watch Now</span>
                    <ModalVideo
                      channel="vimeo"
                      isOpen={this.state.isOpen}
                      videoId="99025203"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                  </div>
                </div>
              </Col>

              <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <img src={services} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
