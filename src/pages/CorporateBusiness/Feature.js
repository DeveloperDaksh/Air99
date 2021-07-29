import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Icons
import FeatherIcon from "feather-icons-react";

//import image
import about1 from "../../assets/images/company/about2.png";

export default class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      features: [
        {
          id: 1,
          icon: "uil uil-airplay d-block rounded h3 mb-0",
          heading: "Best Financial Advice",
        },
        {
          id: 2,
          icon: "uil uil-clipboard-alt d-block rounded h3 mb-0",
          heading: "Authorised Finance Brand",
        },
        {
          id: 3,
          icon: "uil uil-credit-card-search d-block rounded h3 mb-0",
          heading: "Compehensive Advices",
        },
        {
          id: 4,
          icon: "uil uil-ruler-combined d-block rounded h3 mb-0",
          heading: "Best Tax Advantages",
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
        <section className="section bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col lg={12}>
                <div className="features-absolute">
                  <Row>
                    {this.state.features.map((items, key) => (
                      <Col lg={3} md={6} xs={12} key={key}>
                        <Card className="features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                          <div className="icons text-primary text-center mx-auto">
                            <i className={items.icon}></i>
                          </div>

                          <CardBody className="p-0 content">
                            <h5 className="mt-4">
                              <Link to="#" className="title text-dark">
                                {items.heading}
                              </Link>
                            </h5>
                            <p className="text-muted">
                              The most well-known which is said to have
                              originated
                            </p>

                            <Link to="#" className="text-primary">
                              Read More{" "}
                              <i>
                                <FeatherIcon
                                  icon="chevron-right"
                                  className="fea icon-sm"
                                />
                              </i>
                            </Link>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="position-relative">
                  <img src={about1} className="img-fluid mx-auto" alt="" />
                  <div className="play-icon">
                    <Link
                      to="#"
                      onClick={this.openModal}
                      className="play-btn video-play-icon"
                    >
                      <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title ms-lg-4">
                  <h4 className="title mb-4">
                    We are the largest <br /> Business expert{" "}
                  </h4>
                  <p className="text-muted">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect. Dummy text is text that is used in
                    the publishing industry or by web designers to occupy the
                    space which will later be filled with 'real' content. This
                    is required when, for example, the final text is not yet
                    available. Dummy texts have been in use by typesetters since
                    the 16th century.
                  </p>
                  <Link to="#" className="btn btn-primary mt-3">
                    Buy Now{" "}
                    <i>
                      <FeatherIcon
                        icon="chevron-right"
                        className="fea icon-sm"
                      />
                    </i>
                  </Link>
                </div>
              </Col>
            </Row>
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
