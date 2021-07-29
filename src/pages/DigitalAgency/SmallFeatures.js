import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Components
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

//Import Images
import about from "../../assets/images/digital/about.png";

class SmallFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuresSmall: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
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
          <Row className="align-items-center">
            <Col md={6}>
              <img src={about} className="img-fluid" alt="Landrick" />
            </Col>

            <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title">
                <SectionTitleLeft
                  title="We provide best SEO service"
                  desc="Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."
                  features={this.state.featuresSmall}
                  class=""
                />
                <div className="mt-4 pt-2">
                  <Link to="#" className="btn btn-primary m-1">
                    Read More <i className="uil uil-angle-right-b"></i>
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

export default SmallFeatures;
