// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// Feature Images
import saas2 from "../../assets/images/saas/2.png";
import pen from "../../assets/images/icon/pen.svg";
import video from "../../assets/images/icon/video.svg";
import intellectual from "../../assets/images/icon/intellectual.svg";

// Import Generic Components
import Feature from "../../components/Shared/Feature";
import Section from "./section";
import Cta from "./Cta";
import KeyFeature from "./KeyFeature";
import Testi from "./Testi";

class IndexAgency extends Component {
  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);

    var featurebox = document.getElementsByName("featurebox");
    for (var i = 0; i < featurebox.length; i++) {
      if (i !== 0) {
        featurebox[i].classList.add("mt-5");
        featurebox[i].classList.add("mt-sm-0");
      }
    }
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    const featureArray = [
      {
        id: 1,
        icon : 'uil uil-edit-alt h1 text-primary',
        title: "Design & Development",
        description:
          "Nisi aenean vulputate eleifend tellus vitae eleifend enim a eleifend Aliquam aenean elementum semper.",
        imgUrl: pen,
      },
      {
        id: 2,
        icon : 'uil uil-vector-square h1 text-primary',
        title: "Management & Marketing",
        description:
          "Allegedly, a Latin scholar established the origin of the text established by compiling unusual word.",
        imgUrl: video,
      },
      {
        id: 3,
        icon : 'uil uil-file-search-alt h1 text-primary',
        title: "Stratagy & Research",
        description:
          "It seems that only fragments of the original text remain in the Lorem the original Ipsum texts used today.",
        imgUrl: intellectual,
      },
    ];

    return (
      <React.Fragment>
        {/* Home Section */}
        <Section />

        {/* Feature */}
        <section className="section">
          <Container>
            <Feature featureArray={featureArray} isCenter={true} />
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg="6" md="6">
                <img src={saas2} className="img-fluid" alt="" />
              </Col>

              <Col lg="6" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-3">
                  <h4 className="title mb-4">
                    Great Product Analytics With Real Problem
                  </h4>
                  <p className="text-muted">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance: human perception is
                    tuned to recognize certain patterns and repetitions in
                    texts. If the distribution of letters visual impact.
                  </p>
                  <Link to="#" className="mt-3 h6 text-primary">
                    Find Out More <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Cta */}
        <Cta />

        {/* KeyFeature */}
        <KeyFeature />
        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        {/* Testi */}
        <Testi />
        <div className="position-relative">
          <div className="shape overflow-hidden text-footer">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IndexAgency;
