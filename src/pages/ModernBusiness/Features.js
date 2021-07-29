// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Feature from "../../components/Shared/Feature";
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";
import Counter2 from "../../components/Shared/counter2";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// import images
import about from "../../assets/images/about.jpg";

import Asset190 from "../../assets/images/illustrator/Asset190.svg";
import Asset189 from "../../assets/images/illustrator/Asset189.svg";
import Asset186 from "../../assets/images/illustrator/Asset186.svg";
import Asset187 from "../../assets/images/illustrator/Asset187.svg";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          icon: 'uil uil-edit-alt h1 text-primary',
          title: "Design & Development",
          description:
            "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.",
        },
        {
          id: 2,
          icon: 'uil uil-vector-square h1 text-primary',
          title: "Management & Marketing",
          description:
            "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.",
        },
        {
          id: 3,
          icon: 'uil uil-file-search-alt h1 text-primary',
          title: "Stratagy & Research",
          description:
            "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today.",
        },
      ],
      features_Line: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      counters: [
        {
          title: "Investment",
          image: Asset190,
          start: 11000,
          value: 45000,
          postfix: "$",
        },
        { title: "Awards", image: Asset189, start: 0, value: 9, postfix: "+" },
        {
          title: "Profitability",
          image: Asset186,
          start: 12050,
          value: 48002,
          postfix: "$",
        },
        { title: "Growth", image: Asset187, start: 0, value: 11, postfix: "%" },
      ],
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  componentDidMount() {
    var featureboxes = document.getElementsByName("featurebox");
    for (var i = 0; i < featureboxes.length; i++) {
      featureboxes[i].classList.add("mt-5");
    }
  }
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Beautiful & Creative Interfaces"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            {/* feature box */}
            <Feature featureArray={this.state.features} isCenter={true} />
          </Container>

          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="L61p2uyiMSo"
            onClose={() => this.setState({ isOpen: false })}
          />

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg="5" md="5">
                <div className="position-relative">
                  <img
                    src={about}
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

              <Col lg="7" md="7" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title ms-lg-4">
                  <SectionTitleLeft
                    title="Startup Business Solution"
                    desc="templates into a single one, you can take a component from the Application theme and use it in the Website."
                    features={this.state.features_Line}
                    className=""
                  />
                  <Link to="#" className="btn btn-primary mt-3">
                    Buy Now <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              {/* keyfeatures */}
              <Col lg={4} md={6} className="mb-4 pb-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-monitor fea icon-ex-md text-primary"
                    >
                      <rect
                        x="2"
                        y="3"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="title mb-0">Fully Responsive</h4>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4 pb-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart fea icon-ex-md text-primary"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="title mb-0">Browser Compatibility</h4>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4 pb-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye fea icon-ex-md text-primary"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="title mb-0">Retina Ready</h4>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4 pb-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-bold fea icon-ex-md text-primary"
                    >
                      <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                      <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="title mb-0">Based On Bootstrap 5</h4>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4 pb-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-feather fea icon-ex-md text-primary"
                    >
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                      <line x1="16" y1="8" x2="2" y2="22"></line>
                      <line x1="17.5" y1="15" x2="9" y2="15"></line>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="title mb-0">Feather Icons</h4>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4 pb-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-code fea icon-ex-md text-primary"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="title mb-0">Built With SASS</h4>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4 pb-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user-check fea icon-ex-md text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <polyline points="17 11 19 13 23 9"></polyline>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="title mb-0">W3c Valid Code</h4>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4 pb-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-git-merge fea icon-ex-md text-primary"
                    >
                      <circle cx="18" cy="18" r="3"></circle>
                      <circle cx="6" cy="6" r="3"></circle>
                      <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="title mb-0">Flaticon Icons</h4>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mb-4 pb-2">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <div className="icon text-center rounded-circle me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-settings fea icon-ex-md text-primary"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="title mb-0">Easy to customize</h4>
                  </div>
                </div>
              </Col>
              <Col xs="12" className="text-center">
                <Link to="#" className="btn btn-primary">
                  See More <i className="mdi mdi-arrow-right"></i>
                </Link>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs="12" className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">
                    See everything about your{" "}
                    <span className="text-primary">Landrick</span>
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
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
            <Row id="counter">
              {/* counter */}
              <Counter2 counters={this.state.counters} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
