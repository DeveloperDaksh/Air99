// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// import images
import about from "../../assets/images/course/about.jpg";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section pt-0">
          <Container>
            <Row className="align-items-center">
              <Col lg="5" md="6" xs="12">
                <img src={about} className="img-fluid shadow rounded" alt="" />
              </Col>
              <Col lg="7" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-4">
                  <h4 className="title mb-4">
                    Our Story :{" "}
                    <span className="text-primary">Landrick Education</span>
                  </h4>
                  <p className="text-muted">
                    Start Course with{" "}
                    <span className="text-primary fw-bold">
                      Landrick Education
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect. Dummy text is text that is used in
                    the publishing industry or by web designers to occupy the
                    space which will later be filled with 'real' content. This
                    is required when, for example, the final text is not yet
                    available. Dummy texts have been in use by typesetters since
                    the 16th century.
                  </p>
                  <ul className="list-unstyled feature-list mb-0 text-muted">
                    <li>
                      <i className="uil uil-arrow-circle-right text-primary h5 mb-0 align-middle me-2"></i>
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li>
                      <i className="uil uil-arrow-circle-right text-primary h5 mb-0 align-middle me-2"></i>
                      Our Talented & Experienced Marketing Agency
                    </li>
                    <li>
                      <i className="uil uil-arrow-circle-right text-primary h5 mb-0 align-middle me-2"></i>
                      Create your own skin to match your brand
                    </li>
                  </ul>
                  <Link to="#" className="btn btn-outline-primary mt-3">
                    Admission Now
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
