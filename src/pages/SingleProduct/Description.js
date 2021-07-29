// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import KeyFeatureBox from "../../components/Shared/KeyFeatureBox1";

// Import images
import drone from "../../assets/images/single/drone.gif";
import bg02 from "../../assets/images/single/bg02.jpg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyfeatures: [
        { icon: "camera", title: "48mp Camera" },
        { icon: "wifi", title: "Faster Connection" },
        { icon: "eye", title: "Easy to Operate" },
        { icon: "video", title: "Stable Video" },
        { icon: "rss", title: "Powerful Antenna" },
        { icon: "battery", title: "Battery Backup" },
        { icon: "cpu", title: "Advance Technology" },
        { icon: "compass", title: "Easy Disassembly" },
        { icon: "git-merge", title: "Rebust Structure" },
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
        <section className="section">
          <Container>
            <Row>
              <Col xs="12" className="text-center">
                <img src={drone} className="img-fluid" alt="" />
              </Col>
            </Row>

            {/* section title */}
            <SectionTitle
              title="Awesome Features"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* key feature */}
              <KeyFeatureBox keyfeatures={this.state.keyfeatures} />
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col md="7">
                <div className="position-relative">
                  <img
                    src={bg02}
                    className="rounded img-fluid mx-auto d-block"
                    alt=""
                  />
                  <div className="play-icon">
                    <Link
                      onClick={this.openModal}
                      to="#"
                      className="play-btn shadow video-play-icon"
                    >
                      <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <ModalVideo
          channel="vimeo"
          isOpen={this.state.isOpen}
          videoId="287684225"
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    );
  }
}

export default Description;
