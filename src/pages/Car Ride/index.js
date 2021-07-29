import React, { Component } from "react";

//Import Components
import Section from "./section";
import Shape from "./shape";
import Features from "./features";
import GoogleMap from "./GoogleMap";
import Service from "./service";
import Testimonials from "./testimonials";
import Faq from "./faq";

class IndexCarRiding extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.getElementById("topnav").classList.add("bg-white");
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
        {/* Render Section */}
        <Section />

        {/* Render Curved Shape */}
        <Shape />

        {/* Render Features */}
        <Features />

        {/* Render Curved Shape */}
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
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

        <section className="section">
          {/* Render Google Map */}
          <GoogleMap />

          {/* Render Services */}
          <Service />

          {/* Render Testimonials */}
          <Testimonials />
        </section>

        {/* Render Curved Shape */}
        <Shape />

        {/* Render Curved Shape */}
        <Faq />

        {/* Render Curved Shape */}
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

export default IndexCarRiding;
