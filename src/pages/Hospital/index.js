import React, { Component } from "react";
import { Container } from "reactstrap";
//Import Components
import AboutUs from "./AboutUs";
import Appointment from "./Appointment";
import Counter from "./Counter";
import QualifiedDoctors from "./QualifiedDoctors";
import Section from "./Section";
import Services from "./Services";
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";
import BookAppointment from "./BookAppointment";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          id: 1,
          img: img1,
          name: "Thomas Israel",
          post: "C.E.O",
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
          rating: 5,
        },
        {
          id: 2,
          img: img2,
          name: "Barbara McIntosh",
          post: "M.D",
          desc:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
          rating: 4,
        },
        {
          id: 3,
          img: img3,
          name: "Carl Oliver",
          post: "P.A",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          rating: 3,
        },
        {
          id: 4,
          img: img4,
          name: "Christa Smith",
          post: "Manager",
          desc:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
          rating: 5,
        },
        {
          id: 5,
          img: img5,
          name: "Dean Tolle",
          post: "Developer",
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
          rating: 5,
        },
        {
          id: 6,
          img: img6,
          name: "Jill Webb",
          post: "Designer",
          desc:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
          rating: 4,
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
        <Appointment />
        <section className="section">
          <AboutUs />
          <Services />
        </section>
        <Counter />
        <section className="section">
          <QualifiedDoctors />
          <Container className=" mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="What Our Patients Says"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            {/* clients slider */}
            <ReviewsSlider reviews={this.state.reviews} colClass="mt-4" />
          </Container>
         
        </section>
        <BookAppointment />
      </React.Fragment>
    );
  }
}
