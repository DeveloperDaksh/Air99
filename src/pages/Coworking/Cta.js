// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import PricingBox3 from "../../components/Shared/PricingBox3";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//import images
import cta from "../../assets/images/coworking/cta.jpg";
import lightbulb from "../../assets/images/icon/lightbulb.svg";
import tableImg from "../../assets/images/icon/table.svg";
import star from "../../assets/images/icon/star.svg";
import startUp from "../../assets/images/icon/start-up.svg";

class Cta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings: [
        {
          id: 1,
          title: "MEMBER",
          image: lightbulb,
          price: "19",
          duration: "mo",
          desc:
            "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
          btnName: "Buy Now",
        },
        {
          id: 2,
          title: "DESK",
          image: tableImg,
          price: "39",
          duration: "mo",
          desc:
            "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
          btnName: "Get Started",
          isActive: true,
        },
        {
          id: 3,
          title: "DEDICATED",
          image: star,
          price: "49",
          duration: "mo",
          desc:
            "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
          btnName: "Get Started",
        },
        {
          id: 4,
          title: "OFFICE",
          image: startUp,
          price: "59",
          duration: "mo",
          desc:
            "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
          btnName: "Try It Now",
        },
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
            <Card className=" bg-light rounded border-0 overflow-hidden">
              <Row className="g-0 align-items-center">
                <Col lg="6">
                  <img src={cta} className="rounded img-fluid" alt="" />
                </Col>

                <Col lg="6" className="text-center">
                  <CardBody className="section-title p-md-5">
                    <Link
                      onClick={this.openModal}
                      to="#"
                      className="play-btn mt-0 border border-light text-center video-play-icon"
                    >
                      <i>
                        <FeatherIcon
                          icon="play"
                          className="fea icon-ex-md text-dark"
                        />
                      </i>
                    </Link>
                    <ModalVideo
                      channel="vimeo"
                      isOpen={this.state.isOpen}
                      videoId="287684225"
                      onClose={() => this.setState({ isOpen: false })}
                    />

                    <h4 className="title mb-4 mt-4">
                      We Are Creative Dreamers and Co-workers
                    </h4>
                    <p className="text-muted mx-auto para-desc mb-0">
                      Start working with Landrick that can provide everything
                      you need to generate awareness, drive traffic, connect.
                    </p>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Container>

          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="Choose The Pricing Plan"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="align-items-center">
              {/* Pricing */}
              <PricingBox3 pricings={this.state.pricings} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Cta;
