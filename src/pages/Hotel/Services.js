// React Basic and Bootstrap
import React, { Component } from "react";
import { Container } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Feature from "../../components/Shared/Feature";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          icon: 'uil uil-wifi h1 text-primary',
          title: "Free WIFI",
          description:
            "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.",
        },
        {
          id: 2,
          icon: 'uil uil-process h1 text-primary',
          title: "Relaxation",
          description:
            "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.",
        },
        {
          id: 3,
          icon: 'uil uil-dumbbell h1 text-primary',
          title: "Spa & Fitness",
          description:
            "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today.",
        },
        {
          id: 4,
          icon: 'uil uil-restaurant h1 text-primary',
          title: "Restaurant",
          description:
            "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.",
        },
        {
          id: 5,
          icon: 'uil uil-band-aid h1 text-primary',
          title: "Smooth Parallax",
          description:
            "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.",
        },
        {
          id: 6,
          icon: 'uil uil-bed-double h1 text-primary',
          title: "Bedrooms",
          description:
            "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today.",
        },
      ],
    };
  }

  componentDidMount() {
    var featureboxes = document.getElementsByName("featurebox");
    for (var i = 0; i < featureboxes.length; i++) {
      featureboxes[i].classList.add("mt-5");
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container className="pb-lg-4 mb-md-5 mb-4">
            {/* section title */}
            <SectionTitle
              title="Best Services for you"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            {/* feature box */}
            <Feature featureArray={this.state.features} isCenter={true} />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
