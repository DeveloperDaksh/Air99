import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Images
import about from "../../assets/images/book/about.png";
import sign from "../../assets/images/book/sign.png";
import client05 from "../../assets/images/client/05.jpg";

class AboutBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="bg-light p-5 rounded-md shadow me-lg-5">
                <img
                  src={about}
                  className="img-fluid mx-auto d-block"
                  alt="Landrick"
                />
              </div>
            </Col>

            <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title">
                <h4 className="title mb-4">About the Book</h4>
                <p className="text-muted para-desc">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
                <ul className="list-unstyled text-muted my-4">
                  <li className="list-inline-item me-lg-5 me-4">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Organize your data
                  </li>
                  <li className="list-inline-item me-lg-5 me-4">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Work with any team
                  </li>
                  <li className="list-inline-item me-lg-5 me-4">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Business analytics
                  </li>
                  <li className="list-inline-item me-lg-5 me-4">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Always in sync
                  </li>
                  <li className="list-inline-item me-lg-5 me-4">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Embedded analytics
                  </li>
                </ul>
                <img src={sign} className="img-fluid" alt="Landrick" />
                <div className="d-flex align-items-center mt-4">
                  <img
                    src={client05}
                    className="avatar avatar-md-md rounded-circle shadow-lg"
                    alt="Landrick"
                  />
                  <div className="flex-1 content ms-3">
                    <h5 className="mb-0">Cristina Murphy</h5>
                    <p className="text-muted mb-0">Auther</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row>
            <Col lg={4} md={6} xs={12}>
              <div className="d-flex features feature-clean">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-user d-block rounded h3 mb-0"></i>
                </div>
                <div className="content ms-3">
                  <h5 className="mb-1">
                    <Link to="#" className="text-dark">
                      Experienced Author
                    </Link>
                  </h5>
                  <p className="text-muted mb-0">
                    This is required when, for text is not yet available.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="d-flex features feature-clean">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-usd-circle d-block rounded h3 mb-0"></i>
                </div>
                <div className="content ms-3">
                  <h5 className="mb-1">
                    <Link to="#" className="text-dark">
                      Money Back
                    </Link>
                  </h5>
                  <p className="text-muted mb-0">
                    This is required when, for text is not yet available.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} className="mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="d-flex features feature-clean">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-star d-block rounded h3 mb-0"></i>
                </div>
                <div className="content ms-3">
                  <h5 className="mb-1">
                    <Link to="#" className="text-dark">
                      Innovative Content
                    </Link>
                  </h5>
                  <p className="text-muted mb-0">
                    This is required when, for text is not yet available.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default AboutBook;
