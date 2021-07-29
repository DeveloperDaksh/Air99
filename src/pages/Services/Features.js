// React Basic and Bootstrap
import React, { Component } from "react";
import { Container } from "reactstrap";

//Import Components
import Feature from "../../components/Shared/Feature";

// Import images
import stairs from "../../assets/images/icon/stairs.svg";
import code from "../../assets/images/icon/code.svg";
import device from "../../assets/images/icon/device.svg";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          icon : 'uil uil-flip-h h1 text-primary',
          imgUrl: stairs,
          title: "Built for Everyone",
          description:
            "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
        },
        {
          id: 2,
          icon : 'uil uil-minus-path h1 text-primary',
          imgUrl: device,
          title: "Responsive Design",
          description:
            "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",
        },
        {
          id: 3,
          icon : 'uil uil-layers-alt h1 text-primary',
          imgUrl: code,
          title: "Build Everything",
          description:
            "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",
        },
      ],
    };
  }

  componentDidMount() {
    var featureboxes = document.getElementsByName("featurebox");
    for (var i = 0; i < featureboxes.length; i++) {
      if (i !== 0) {
        featureboxes[i].classList.add("mt-5");
        featureboxes[i].classList.add("mt-sm-0");
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-0">
          <Container>
            {/* feature box */}
            <Feature featureArray={this.state.features} isCenter={true} />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
