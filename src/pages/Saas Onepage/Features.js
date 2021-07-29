import React, { Component } from "react";
import { Container } from "reactstrap";


//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Feature from "../../components/Shared/Feature";

class Features extends Component {
  state = {
    features: [
      {
        id: 1,
        icon: 'uil uil-edit-alt h1 text-primary',
        title: "Design & Development",
        description:
          "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.",
      },
      {
        id: 2,
        icon: 'uil uil-vector-square h1 text-primary',
        title: "Management & Marketing",
        description:
          "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.",
      },
      {
        id: 3,
        icon: 'uil uil-file-search-alt h1 text-primary',
        title: "Stratagy & Research",
        description:
          "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today.",
      },
      {
        id: 4,
        icon: 'uil uil-airplay h1 text-primary',
        title: "Easy To Use",
        description:
          "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.",
      },
      {
        id: 5,
        icon: 'uil uil-calendar-alt h1 text-primary',
        title: "Daily Reports",
        description:
          "Allegedly, a Latin scholar established the origin of the text by compiling unusual established word.",
      },
      {
        id: 6,
        icon: 'uil uil-clock h1 text-primary',
        title: "Real Time Zone",
        description:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today.",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          {/* section title */}
          <SectionTitle
            title="Great Features"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          {/* feature box */}
          <Feature featureArray={this.state.features} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
