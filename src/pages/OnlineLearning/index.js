import React, { Component } from "react";

//Import Components
import Section from "./Section";
import Courses from "./Courses";
import Partners from "../../components/Shared/Partners1";
import About from "./About";
import PopularCourses from "./PopularCourses";
import Cta from "./Cta";
import Instructors from "./Instructors";
import Testimonials from "./Testimonials";
import Blog from "./Blog";

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

        <Courses />

        <Partners />

        <section className="section">
          <About />

          <PopularCourses />

          <Cta />

          <Instructors />

          <Testimonials />

          <Blog />
        </section>
      </React.Fragment>
    );
  }
}

export default Index;
