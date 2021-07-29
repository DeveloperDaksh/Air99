import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import * as Unicons from "@iconscout/react-unicons";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Components
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

//Import Images
import social from "../../assets/images/illustrator/social.svg";

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
            <Col lg={5} md={{ size: 6, order: 2 }} xs={{ size: 12, order: 1 }}>
              <img src={social} className="img-fluid" alt="Landrick" />
            </Col>

            <Col
              lg={7}
              md={{ size: 6, order: 1 }}
              xs={{ size: 12, order: 2 }}
              className="mt-4 pt-2 mt-sm-0 pt-sm-0"
            >
              <div className="section-title me-lg-4">
                <p className="text-primary h2 mb-3">
                  <i>
                    <Unicons.UilLayerGroup size="33" />
                  </i>
                </p>
                <SectionTitleLeft
                  desc="Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect."
                  features={this.state.featuresSmall}
                  class=""
                >
                  <h4 className="title mb-3">
                    Rapidly Grow Your <br />{" "}
                    <span className="text-primary">Social Feeds</span>
                  </h4>
                </SectionTitleLeft>
                <div className="mt-4 pt-2">
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="btn btn-icon btn-pills btn-primary lightbox"
                  >
                    <FeatherIcon
                      icon="video"
                      className="icons"
                    />
                    WATCH VIDEO
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
