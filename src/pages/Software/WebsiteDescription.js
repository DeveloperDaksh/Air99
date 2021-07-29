import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

//Import Images
import mobile from "../../assets/images/software/mobile01.png";

class WebsiteDescription extends Component {
  state = {
    features: [
      { title: "Digital Marketing Solutions for Tomorrow" },
      { title: "Our Talented & Experienced Marketing Agency" },
      { title: "Create your own skin to match your brand" },
    ],
  };

  componentDidMount() {
    var featurelines = document.getElementsByName("featurelines");
    featurelines[0].classList.add("mb-0");
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg="5" md="6">
              <img src={mobile} className="img-fluid" alt="" />
            </Col>

            <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <SectionTitleLeft
                  title="Carry out Marketing Initiatives : Landrick"
                  desc="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                  features={this.state.features}
                  className=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default WebsiteDescription;
