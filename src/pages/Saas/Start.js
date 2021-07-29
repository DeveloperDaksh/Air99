// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Import images
import saas1 from "../../assets/images/saas/classic02.png";
import appDevelopmentSVG from "../../assets/images/illustrator/app_development_SVG.svg";

//Import Components
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Create your own skin to match your brand" },
      ],
      features2: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Create your own skin to match your brand" },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <img src={saas1} className="img-fluid shadow rounded" alt="" />
            </Col>

            <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <SectionTitleLeft
                  title="Great Product Analytics With Real Problem"
                  desc="Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact."
                  features={this.state.features}
                  class=""
                />
                <Link to="#" className="mt-3 h6 text-primary">
                  Find Out More <i className="mdi mdi-chevron-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg={7}
              md={{ size: 6, order: 1 }}
              xs={{ order: 2 }}
              className="mt-4 mt-sm-0 pt-2 pt-sm-0"
            >
              <div className="section-title me-lg-5">
                <SectionTitleLeft
                  title="Get Notified About Importent Email"
                  desc="This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic."
                  features={this.state.features2}
                  class=""
                />
                <Link to="#" className="mt-3 h6 text-primary">
                  Find Out More <i className="mdi mdi-chevron-right"></i>
                </Link>
              </div>
            </Col>

            <Col lg="5" md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
              <img src={appDevelopmentSVG} alt="" />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Start;
