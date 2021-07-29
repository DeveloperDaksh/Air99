import React, { Component } from "react";

//Import Components
import Section from "./Section";
import Features from "./Features";
import Cta from "./Cta";
import InsurancePlans from "./InsurancePlans";
import Customers from "./Customers";
import Contact from "./Contact";
import Faq from "./Faq";

class Index extends Component {
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
        <Section />

        <section className="section">
          <Features />

          <Cta />

          <InsurancePlans />

          <Customers />

          <Contact />

          <Faq />
        </section>
      </React.Fragment>
    );
  }
}

export default Index;
