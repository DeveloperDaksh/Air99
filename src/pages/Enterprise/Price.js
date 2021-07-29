// React Basic and Bootstrap
import React, { Component } from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Pricing from "../../components/Shared/PricingBox";
import BlogBox from "../../components/Shared/BlogBox";

// Blog Images
import blog1 from "../../assets/images/blog/01.jpg";
import blog2 from "../../assets/images/blog/02.jpg";
import blog3 from "../../assets/images/blog/03.jpg";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings: [
        {
          id: 1,
          title: "Free",
          price: 0,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [{ title: "Full Access" }, { title: "Source Files" }],
        },
        {
          id: 2,
          title: "Starter",
          price: 39,
          duration: "mo",
          buttonText: "Get Started",
          btnLink: "",
          isActive: true,
          features: [
            { title: "Full Access" },
            { title: "Source Files" },
            { title: "Free Appointments" },
          ],
        },
        {
          id: 3,
          title: "PROFESSIONAL",
          price: 59,
          duration: "mo",
          buttonText: "Try It Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
            { title: "Enhanced Security" },
          ],
        },
        {
          id: 4,
          title: "ULTIMATE",
          price: 79,
          duration: "mo",
          buttonText: "Started Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Enhanced Security" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
            { title: "Free Installment" },
          ],
        },
      ],
      blogs: [
        {
          id: 1,
          image: blog1,
          title: "Design your apps in your own way",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 2,
          image: blog2,
          title: "How apps is changing the IT world",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 3,
          image: blog3,
          title: "Smartest Applications for Business",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Charge your creative inspiration"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row id="pricing">
              {/* pricing */}
              <Pricing pricings={this.state.pricings} />
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="Latest News"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* blog box */}
              <BlogBox blogs={this.state.blogs} />
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="Schedule a demo with us"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="justify-content-center mt-4">
              <Col lg="7" md="10">
                <div className="subcribe-form">
                  <form className="ms-0">
                    <input type="email" id="email" name="email" className="bg-white shadow rounded-pill" placeholder="E-mail :" />
                    <button type="submit" className="btn btn-pills btn-primary">Submit <i className="uil uil-angle-right-b align-middle"></i></button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
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

export default Price;
