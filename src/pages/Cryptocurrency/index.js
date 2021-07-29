import React, { Component } from "react";

//Import Components
import Section from "./Section";
import ListTable from "./ListTable";
import Process from "./Process";
import Counter from "./Counter";
import Features from "./Features";
import Faq from "./Faq";
import Testimonials from "./Testimonials";

class Cryptocurrency extends Component {
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
        {/* Render Section */}
        <Section />

        <section className="section border-top">
          {/* Render table */}
          <ListTable />

          {/* Process */}
          <Process />
        </section>

        {/* Counter */}
        <Counter />

        <section className="section">
          {/* Features */}
          <Features />

          {/* Faq */}
          <Faq />

          {/* testimonials */}
          <Testimonials />
        </section>
      </React.Fragment>
    );
  }
}

export default Cryptocurrency;
