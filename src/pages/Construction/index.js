import React, { Component } from "react";
import Section from "./Section";
import Services from "./Services";
import Projects from "./Projects";

import AboutUs from "./AboutUs";
import TeamMembers from "./TeamMembers";
import News from "./News";

export default class index extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  UNSAFE_componentWillMount() {
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
        {/* Section */}
        <Section />

        {/* Project Planning */}
        <Services />

        {/* About Us */}
        <section className="section">
          <AboutUs />
          <Projects />
          <TeamMembers />
        </section>
        <News />
      </React.Fragment>
    );
  }
}
