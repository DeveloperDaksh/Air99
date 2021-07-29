// React Basic and Bootstrap
import React, { Component } from "react";

// import generic component
import Section from "./section";
import Feature from "./Feature";
import Faqs from "./Faqs";
import Partners from "../../components/Shared/Partners1";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
        {/* Hero Start */}
        <Section />

        {/* partners */}
        <Partners />

        {/* Feature */}
        <Feature />

        {/* Faqs */}
        <Faqs />
      </React.Fragment>
    );
  }
}

export default Index;
