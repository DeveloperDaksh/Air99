import React, { Component } from "react";

//Import Components
import Section from "./Section";
import Collection from "./Collection";
import MostViewedProducts from "./MostViewedProducts";
import TopCategories from "./TopCategories";
import PopularProducts from "./PopularProducts";
import Cta from "./Cta";
import RecentProducts from "./RecentProducts";

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
        {/* import Section */}
        <Section />

        {/* import Collection */}
        <Collection />

        <section className="section">
          <MostViewedProducts />

          <TopCategories />

          <PopularProducts />

          <Cta />

          <RecentProducts />
        </section>
      </React.Fragment>
    );
  }
}

export default Index;
