import React, { Component } from "react";
import Features from "./Features";
import Reviews from "./Reviews";
import Section from "./Section";
import Team from "./Team";
import SectionTitle from "../../components/Shared/SectionTitle";
import BlogBox from "../../components/Shared/BlogBox";
import { Container, Row } from "reactstrap";

// Blog Images
import blog1 from "../../assets/images/blog/01.jpg";
import blog2 from "../../assets/images/blog/02.jpg";
import blog3 from "../../assets/images/blog/03.jpg";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          image: blog1,
          title: "Design your apps in your own way",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 2,
          image: blog2,
          title: "How apps is changing the IT world",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 3,
          image: blog3,
          title: "Smartest Applications for Business",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
      ],
    };
  }
  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);

    var featurebox = document.getElementsByName("featurebox");
    for (var i = 0; i < featurebox.length; i++) {
      if (i !== 0) {
        featurebox[i].classList.add("mt-5");
        featurebox[i].classList.add("mt-sm-0");
      }
    }
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
        <section className="section bg-light">
          <Features />
          <Team />
        </section>
        <section className="section">
          <Reviews />
          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="Latest News"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* blog box */}
              <BlogBox blogs={this.state.blogs} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
