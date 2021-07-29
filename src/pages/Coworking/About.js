// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import about from "../../assets/images/coworking/about.jpg";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col lg="5" md="6" xs="12">
                <img src={about} className="img-fluid rounded" alt="" />
              </Col>

              <Col lg="7" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-4">
                  <h4 className="title mb-4">About Our Community</h4>
                  <p className="text-muted">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick Space
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect. Dummy text is text that is used in
                    the publishing industry or by web designers to occupy the
                    space which will later be filled with 'real' content. This
                    is required when, for example, the final text is not yet
                    available. Dummy texts have been in use by typesetters since
                    the 16th century.
                  </p>
                  <Link to="#" className="btn btn-primary mt-3">
                    Join now
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
