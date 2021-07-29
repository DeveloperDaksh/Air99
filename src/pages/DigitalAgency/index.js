import React, { Component } from "react";

//Import Components
import Section from "./Section";
import Partners from "../../components/Shared/Partners1";
import Features from "./Features";
import SmallFeatures from "./SmallFeatures";
import Services from "./Services";
import About from "./About";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import Faq from "./Faq";
import AppStore from "./AppStore";

class Index extends Component {
  componentDidMount() {
    document.body.classList = "";
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

        <Partners />

        <section className="section overflow-hidden">
          <Features />

          <SmallFeatures />

          <Services />

          <About />
        </section>

        <Testimonial />

        <section className="section">
          <Pricing />

          <Faq />
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
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

        <AppStore />
      </React.Fragment>
    );
  }
}

export default Index;
