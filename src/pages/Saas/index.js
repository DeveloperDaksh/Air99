// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Import images
import user from "../../assets/images/icon/user.svg";
import calendar from "../../assets/images/icon/calendar.svg";
import sandClock from "../../assets/images/icon/sand-clock.svg";

//Import Images
import img1 from "../../assets/images/client/amazon.svg";
import img2 from "../../assets/images/client/google.svg";
import img3 from "../../assets/images/client/lenovo.svg";
import img4 from "../../assets/images/client/paypal.svg";
import img5 from "../../assets/images/client/shopify.svg";
import img6 from "../../assets/images/client/spotify.svg";

// Import Generic Components
import Section from "./Section";
import SectionTitle from "../../components/Shared/SectionTitle";
import Feature from "../../components/Shared/Feature";
import Start from "./Start";
import Client from "./Client";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
        { image: img6 },
      ],
    };
  }

  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);

    var featureBox = document.getElementsByClassName("features");
    for (var i = 0; i < featureBox.length; i++) {
      featureBox[i].classList.remove("mt-5");
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
        icon: "uil uil-airplay h1 text-primary",
        title: "Easy To Use",
        description:
          "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper. ",
        imgUrl: user,
      },
      {
        id: 2,
        icon: "uil uil-calendar-alt h1 text-primary",
        title: "Daily Reports",
        description:
          "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",
        imgUrl: calendar,
      },
      {
        id: 3,
        icon: "uil uil-clock h1 text-primary",
        title: "Real Time Zone",
        description:
          "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",
        imgUrl: sandClock,
      },
    ];

    return (
      <React.Fragment>
        {/* section */}
        <Section />

        {/* Partner */}
        <section className="section bg-light mt-0 mt-md-5">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our Trusted Clients"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            />

            {/* partners */}
            <Row className="justify-content-center">
              {this.state.partners.map((partner, key) => (
                <Col
                  lg={2}
                  md={2}
                  xs={6}
                  key={key}
                  className="text-center mt-4 pt-2"
                >
                  <img
                    src={partner.image}
                    className="avatar avatar-ex-sm"
                    alt="Landrick"
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Feature */}
        <section className="section">
          <Container>
            <Feature featureArray={featureArray} isCenter={false} />
          </Container>

          {/* Start */}
          <Start />

          {/* Client */}
          <Client />
        </section>

        <div className="position-relative">
          <div className="shape overflow-hidden text-footer">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
