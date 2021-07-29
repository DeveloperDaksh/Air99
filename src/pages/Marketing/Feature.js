// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";

// Import images
import youtubeMedia from "../../assets/images/illustrator/youtube-media.svg";
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      reviews: [
        {
          id: 1,
          img: img1,
          name: "Thomas Israel",
          post: "C.E.O",
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
          rating: 5,
        },
        {
          id: 2,
          img: img2,
          name: "Barbara McIntosh",
          post: "M.D",
          desc:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
          rating: 4,
        },
        {
          id: 3,
          img: img3,
          name: "Carl Oliver",
          post: "P.A",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          rating: 3,
        },
        {
          id: 4,
          img: img4,
          name: "Christa Smith",
          post: "Manager",
          desc:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
          rating: 5,
        },
        {
          id: 5,
          img: img5,
          name: "Dean Tolle",
          post: "Developer",
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
          rating: 5,
        },
        {
          id: 6,
          img: img6,
          name: "ill Webb",
          post: "Designer",
          desc:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
          rating: 4,
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Sample Features"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row>
              {/* key Features */}
              <Col lg={4} md={6} className="mt-4 pt-2">
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

              <Col lg={4} md={6} className="mt-4 pt-2">
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

              <Col lg={4} md={6} className="mt-4 pt-2">
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

              <Col lg={4} md={6} className="mt-4 pt-2">
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

              <Col lg={4} md={6} className="mt-4 pt-2">
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

              <Col lg={4} md={6} className="mt-4 pt-2">
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

              <Col lg={4} md={6} className="mt-4 pt-2">
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

              <Col lg={4} md={6} className="mt-4 pt-2">
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

              <Col lg={4} md={6} className="mt-4 pt-2">
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
              <Col xs="12" className="text-center mt-4 pt-2">
                <Link to="#" className="btn btn-primary">
                  See More <i className="mdi mdi-arrow-right"></i>
                </Link>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg="5" md="6">
                <img src={youtubeMedia} alt="" />
              </Col>

              <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <SectionTitleLeft
                    title="A better compose with landrick marketing"
                    desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                    features={this.state.features}
                    class=""
                  />
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="Our Valuable Clients"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            {/* clients slider */}
            <ReviewsSlider reviews={this.state.reviews} colClass="mt-4" />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
