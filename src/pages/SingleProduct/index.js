// React Basic and Bootstrap
import React, { Component } from "react";

// Import Generic components
import Section from "./Section";
import Feature from "./Feature";
import Description from "./Description";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";

class Index extends Component {
  componentDidMount() {
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
        {/* Hero Start */}
        <Section />

        {/* Feature */}
        <Feature />

        {/* Description */}
        <Description />

        {/* Testimonial */}
        <Testimonial />

        {/* Gallery */}
        <Gallery />
      </React.Fragment>
    );
  }
}

export default Index;
