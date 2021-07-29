// React Basic and Bootstrap
import React, { Component } from "react";

// import generic components
import Section from "./section";
import SearchBar from "./SearchBar";
import Rooms from "./Rooms";
import Cta from "./Cta";
import Services from "./Services";
import News from "./News";
import Client from "./Client";
import Contact from "./Contact";

class Index extends Component {
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
        {/* Hero Start */}
        <Section />

        {/* search bar */}
        <SearchBar />

        {/* Rooms */}
        <Rooms />

        {/* Cta */}
        <Cta />

        {/* Services */}
        <Services />

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

        {/* News */}
        <News />

        {/* Client */}
        <Client />

        {/* Contact */}
        <Contact />
      </React.Fragment>
    );
  }
}

export default Index;
