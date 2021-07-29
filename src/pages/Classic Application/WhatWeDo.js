import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

// import images
import img2 from "../../assets/images/app/classic02.png";
import img3 from "../../assets/images/app/classic03.png";
import img4 from "../../assets/images/app/classic04.png";

class WhatWeDo extends Component {
  state = {
    features1: [
      { title: "Digital Marketing Solutions for Tomorrow" },
      { title: "Our Talented & Experienced Marketing Agency" },
      { title: "Create your own skin to match your brand" },
    ],
    features2: [
      { title: "Digital Marketing Solutions for Tomorrow" },
      { title: "Our Talented & Experienced Marketing Agency" },
      { title: "Create your own skin to match your brand" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg="6" md="5">
              <div className="app-feature-shape-left position-relative">
                <div className="text-center text-md-start">
                  <img src={img2} className="img-fluid" alt="" />
                </div>
              </div>
            </Col>

            <Col lg="6" md="7" className="mt-5 mt-sm-0">
              <div className="section-title">
                <SectionTitleLeft
                  desc="Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."
                  features={this.state.features1}
                  className=""
                >
                  <h1 className="title mb-3">
                    We Build High Performing <br /> Application
                  </h1>
                </SectionTitleLeft>
                <div className="mt-4">
                  <Link to="" className="mt-3 h6 text-primary">
                    Find Out More <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg="6"
              md={{ size: 7, order: 1 }}
              xs={{ order: 2 }}
              className="mt-5 mt-sm-0"
            >
              <div className="section-title">
                <h1 className="title mb-3">
                  Easy And Best Solution <br /> For Your App
                </h1>
                <p className="para-desc text-muted">
                  Launch your Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Eveniet eligendi expedita ducimus fuga sed
                  possimus veritatis eum voluptates. Ab ex odio sed atque. Quam
                  delectus, voluptatibus rem harum nihil minus. campaign and
                  benefit from our expertise on designing and managing
                  conversion centered bootstrap v5 html page.
                </p>
                <div className="mt-4">
                  <Link to="" className="btn btn-primary">
                    Learn More <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg="6" md={{ size: 5, order: 2 }} xs={{ order: 1 }}>
              <div className="app-feature-shape-right position-relative">
                <div className="text-center text-md-end">
                  <img src={img3} className="img-fluid" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg="6" md="5">
              <div className="app-feature-shape-left position-relative">
                <div className="text-center text-md-start">
                  <img src={img4} className="img-fluid" alt="" />
                </div>
              </div>
            </Col>

            <Col lg="6" md="7" className="mt-5 mt-sm-0">
              <div className="section-title">
                <SectionTitleLeft
                  desc="Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."
                  features={this.state.features1}
                  className=""
                >
                  <h1 className="title mb-3">
                    Beautiful, Simple & <br /> Easy to Use
                  </h1>
                </SectionTitleLeft>
                <div className="mt-4">
                  <Link to="#" className="btn btn-primary">
                    Read More <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default WhatWeDo;
