import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Typist from "react-typist";

import ScrollspyNav from "./ScrollspyNav";

import bg01 from "../../assets/images/personal/bg01.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-home rtl-personal-hero bg-light d-flex align-items-center"
          style={{ background: `url(${bg01}) center center` }}
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg="8" md="9">
                <div className="title-heading mt-4">
                  <h1 className="display-3 fw-bold mb-3">
                    Here I'm <br />
                    <Typist>
                      <span className="text-primary element">Calvin Carlo</span>
                      <Typist.Backspace count={15} delay={200} />
                      <span className="text-primary element">UI/UX Designer</span>
                      <Typist.Backspace count={15} delay={200} />
                      <span className="text-primary element">Web Developer</span>
                    </Typist>
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <ScrollspyNav
                      scrollTargetIds={["portfolio", "contact"]}
                      activeNavClass="active"
                      scrollDuration="800"
                      headerBackground="true"
                    >
                      <a
                        href="#portfolio"
                        className="btn btn-primary mt-2 me-2"
                      >
                        <i className="uil uil-camera"></i> View Portfolio
                      </a>
                      <a
                        href="#contact"
                        className="btn btn-outline-primary mt-2"
                      >
                        <i className="uil uil-cloud-download"></i> Hire Me
                      </a>
                    </ScrollspyNav>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
