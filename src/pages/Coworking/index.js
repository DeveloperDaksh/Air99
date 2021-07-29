// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Import Generic components
import Section from "./section";
import About from "./About";
import Service from "./Service";
import Cta from "./Cta";
import ClientBlog from "./ClientBlog";
import ContactForm from "./ContactForm";

//Import Images
import img1 from "../../assets/images/client/amazon.svg";
import img2 from "../../assets/images/client/google.svg";
import img3 from "../../assets/images/client/lenovo.svg";
import img4 from "../../assets/images/client/paypal.svg";
import img5 from "../../assets/images/client/shopify.svg";
import img6 from "../../assets/images/client/spotify.svg";

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
    document.getElementById("top-menu").classList.add("nav-light");
    document.getElementById("buyButton").className = "btn btn-light";
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
      document.getElementById("buyButton").className = "btn btn-primary";
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <Section />

        {/* Partners */}
        <section className="py-5 border-bottom border-top">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <h5>Trusted client by over 10,000+ of the world’s</h5>
              </Col>
            </Row>
            <Row className="mt-5 justify-content-center">
              <Col id="partner1" lg="2" md="2" xs="6" className="text-center">
                <img src={img1} className="avatar avatar-ex-sm" alt="" />
              </Col>

              <Col id="partner2" lg="2" md="2" xs="6" className="text-center">
                <img src={img2} className="avatar avatar-ex-sm" alt="" />
              </Col>

              <Col
                id="partner3"
                lg="2"
                md="2"
                xs="6"
                className="text-center  mt-4 mt-sm-0"
              >
                <img src={img3} className="avatar avatar-ex-sm" alt="" />
              </Col>

              <Col
                id="partner4"
                lg="2"
                md="2"
                xs="6"
                className="text-center  mt-4 mt-sm-0"
              >
                <img src={img4} className="avatar avatar-ex-sm" alt="" />
              </Col>

              <Col
                id="partner5"
                lg="2"
                md="2"
                xs="6"
                className="text-center  mt-4 mt-sm-0"
              >
                <img src={img5} className="avatar avatar-ex-sm" alt="" />
              </Col>

              <Col
                id="partner6"
                lg="2"
                md="2"
                xs="6"
                className="text-center  mt-4 mt-sm-0"
              >
                <img src={img6} className="avatar avatar-ex-sm" alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        {/* About */}
        <About />

        {/* Service */}
        <Service />

        {/* Cta */}
        <Cta />

        {/* ClientBlog */}
        <ClientBlog />

        {/* ContactForm */}
        <ContactForm />
      </React.Fragment>
    );
  }
}

export default Index;
