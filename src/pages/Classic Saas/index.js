import React, { Component } from "react";
import { Container } from "reactstrap";

//Import Components
import Section from "./section";
import Partners from "../../components/Shared/Partners";
import Feature from "../../components/Shared/Feature";
import FeatureDescription from "./FeatureDescription";
import CTA from "./cta";
import Pricings from "./pricings";
import Trial from "./trial";

//Import Images
import user from "../../assets/images/icon/user.svg";
import calendar from "../../assets/images/icon/calendar.svg";
import sandclock from "../../assets/images/icon/sand-clock.svg";
import classic02 from "../../assets/images/saas/classic02.png";
import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";

class IndexclassNameicSaas extends Component {
  state = {
    testimonials: [
      {
        id: 1,
        name: "Thomas Israel",
        image: client1,
        desc:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
      },
      {
        id: 2,
        name: "Carl Oliver",
        image: client2,
        desc:
          "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      },
      {
        id: 3,
        name: "Barbara McIntosh",
        image: client3,
        desc:
          "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
      },
      {
        id: 4,
        name: "Jill Webb",
        image: client4,
        desc:
          "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
      },
      {
        id: 5,
        name: "Dean Tolle",
        image: client5,
        desc:
          "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
      },
      {
        id: 6,
        name: "Christa Smith",
        image: client6,
        desc:
          "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
      },
    ],
    features: [
      {
        icon: "uil uil-airplay h1 text-primary",
        imgUrl: user,
        title: "Easy To Use",
        description:
          "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
      },
      {
        icon: "uil uil-calendar-alt h1 text-primary",
        imgUrl: calendar,
        title: "Daily Reports",
        description:
          "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word",
      },
      {
        icon: "uil uil-clock h1 text-primary",
        imgUrl: sandclock,
        title: "Real Time Zone",
        description:
          "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",
      },
    ],
    facilities: [
      {
        icon: "shield",
        title: "Fully Secured",
        desc:
          "Moreover, in Latin only words at the beginning of sentences are capitalized.",
      },
      {
        icon: "cpu",
        title: "Best Performance",
        desc:
          "If the fill text is intended to illustrate the characteristics of sometimes.",
      },
    ],
  };

  componentDidMount() {
    document.body.classList = "";
    document.getElementById("buyButton").classList.remove("btn-primary");
    document.getElementById("buyButton").classList.add("btn-light");

    var featurebox = document.getElementsByName("featurebox");
    for (var i = 0; i < featurebox.length; i++) {
      if (i !== 0) {
        featurebox[i].classList.add("mt-5");
        featurebox[i].classList.add("mt-sm-0");
      }
    }
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
      document.getElementById("buyButton").classList.remove("btn-light");
      document.getElementById("buyButton").classList.add("btn-primary");
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("buyButton").classList.remove("btn-primary");
      document.getElementById("buyButton").classList.add("btn-light");
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };
  render() {
    return (
      <React.Fragment>
        {/* render section */}
        <Section />

        <section className="pt-5">
          <Container>
            {/* render partner */}
            <Partners />
          </Container>
        </section>

        <section className="section overflow-hidden">
          <Container className="pb-5 mb-md-5">
            {/* feature box */}
            <Feature featureArray={this.state.features} isCenter={true} />
          </Container>

          {/* Render Feature Description */}
          <FeatureDescription
            image1={classic02}
            image2={classic02}
            testimonials={this.state.testimonials}
            facilities={this.state.facilities}
          />

          {/* Render CTA */}
          <CTA />

          {/* render pricing */}
          <Pricings pricings={this.state.pricings} />

          {/* render trial */}
          <Trial />
        </section>
      </React.Fragment>
    );
  }
}

export default IndexclassNameicSaas;
