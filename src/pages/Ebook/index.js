import React, { Component } from "react";

//Import Components
import Section from "./Section";

//Import Components
import AboutBook from "./AboutBook";
// import AboutAuthor from "./AboutAuthor";
import Features from "./Features";
import OtherBooks from "./OtherBooks";
import UpComing from "./UpComing";

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

        <section className="section">
          <AboutBook />

          {/* <AboutAuthor /> */}

          <Features />

          <OtherBooks />
        </section>

        <UpComing />
      </React.Fragment>
    );
  }
}

export default Index;
