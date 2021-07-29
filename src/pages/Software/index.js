import React, { Component } from "react";

//Import Components
import Section from "./Section";
import Features from "./Featuress";
import BlockContainer from "./BlockContainer";
import WebsiteDescription from "./WebsiteDescription";
import Price from "./Price";
import Reviews from "./Reviews";
import CTA from "./Cta";

class Software extends Component {
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
        {/* render section */}
        <Section />

        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
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

        <section className="section pt-md-4 pt-5">
          {/* Features */}
          <Features />

          {/* block container */}
          <BlockContainer />

          {/* wesite description */}
          <WebsiteDescription />

          {/* pricing */}
          <Price />

          {/* Reviews */}
          <Reviews />
        </section>

        {/* CTA */}
        <CTA />
      </React.Fragment>
    );
  }
}

export default Software;
