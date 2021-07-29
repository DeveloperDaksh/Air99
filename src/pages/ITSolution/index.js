// import react from "react";
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import file
import Section from "./Section";
import WhatWeDo from './WhatWeDo'
import Features from "./Features";
import WorkProcess from "./WorkProcess";
import Blog from "./Blog";

//Import Images
import img1 from "../../assets/images/client/amazon.svg";
import img2 from "../../assets/images/client/google.svg";
import img3 from "../../assets/images/client/lenovo.svg";
import img4 from "../../assets/images/client/paypal.svg";
import img5 from "../../assets/images/client/shopify.svg";
import img6 from "../../assets/images/client/spotify.svg";

import MindPower from "./MindPower";

class index extends Component {

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
    document.getElementById("top-menu").classList.add("nav-light");
    window.addEventListener("scroll", this.scrollNavigation, true);
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
    return (
      <React.Fragment>
        <Section />
        {/* Partner */}
        <section className="py-4 bg-light">
          <Container>
            {/* partners */}
            <Row className="justify-content-center">
              {this.state.partners.map((partner, key) => (
                <Col
                  lg={2}
                  md={2}
                  xs={6}
                  key={key}
                  className="text-center py-4"
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
        {/* What we do section */}
        <WhatWeDo />
        {/* Feature */}
        <Features />
        {/* WorkProcess */}
        <section className="section">
          <WorkProcess />
          <MindPower />
        </section>
        {/* Blog */}
        <section className="section bg-light">
          <Blog />
        </section>
      </React.Fragment>
    );
  }
}

export default index;
