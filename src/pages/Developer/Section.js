import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//import Images
import bgimg from "../../assets/images/digital/about.png";

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-half bg-light d-table w-100">
          <Container>
            <Row className="align-items-center">
              <Col md={6} xs={12}>
                <div className="title-heading">
                  <span className="badge rounded-pill bg-soft-primary">
                    Development
                  </span>
                  <h1 className="fw-bold mt-2 mb-3">
                    A Complete <br /> Developer Toolset
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-primary me-2">
                      Get Started
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-outline-primary"
                    >
                      Documentation
                    </Link>
                  </div>
                  <p className="text-muted mb-0 mt-3">Current Version: v3.1</p>
                </div>
              </Col>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <img src={bgimg} className="img-fluid d-block mx-auto" alt="" />
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
