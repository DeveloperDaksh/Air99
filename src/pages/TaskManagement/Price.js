import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class Price extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">
                  Let’s get some real price done here.
                </h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="align-items-end">
            <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
              <div className="pricing text-center rounded overflow-hidden shadow">
                <div className="price-header border-bottom pt-5 pb-5">
                  <h1 className="text-primary">
                    <i className="uil uil-lightbulb-alt"></i>
                  </h1>
                  <h5 className="price-title">Starter</h5>
                  <p className="mb-0 text-muted">Suitable for Starter</p>
                </div>
                <div className="border-bottom py-4">
                  <h2 className="fw-bold">$ 0.00</h2>
                  <h6 className="text-muted mb-0 font-weight-normal">
                    Billed monthly per user
                  </h6>
                  <Link to="#" className="btn btn-primary mt-4">
                    Start Free
                  </Link>
                </div>
                <div className="pricing-features text-start p-4">
                  <h5>What's included:</h5>
                  <ul className="feature list-unstyled mb-0">
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Full Access
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Enhanced Security
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Source Files
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      1 Domain Free
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Free Appointments
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Free Installment
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="pricing text-center rounded overflow-hidden shadow-lg">
                <div className="price-header border-bottom bg-primary pt-5 pb-5">
                  <h1 className="text-white-50">
                    <i className="uil uil-award"></i>
                  </h1>
                  <h5 className="price-title text-white">Standerd</h5>
                  <p className="mb-0 text-light">
                    Suitable for Collaborating Team
                  </p>
                </div>
                <div className="border-bottom py-5">
                  <h2 className="fw-bold">$ 19.00</h2>
                  <h6 className="text-muted mb-0 font-weight-normal">
                    Billed monthly per user
                  </h6>
                  <Link to="#" className="btn btn-primary mt-4">
                    Start Standerd
                  </Link>
                </div>
                <div className="pricing-features text-start p-4">
                  <h5>What's included:</h5>
                  <ul className="feature list-unstyled mb-0">
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Full Access
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Enhanced Security
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Source Files
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      1 Domain Free
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Free Appointments
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Free Installment
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="pricing text-center rounded overflow-hidden shadow">
                <div className="price-header border-bottom pt-5 pb-5">
                  <h1 className="text-primary">
                    <i className="uil uil-briefcase-alt"></i>
                  </h1>
                  <h5 className="price-title">Premium</h5>
                  <p className="mb-0 text-muted">Suitable for Premium</p>
                </div>
                <div className="border-bottom py-4">
                  <h2 className="fw-bold">$ 9.00</h2>
                  <h6 className="text-muted mb-0 font-weight-normal">
                    Billed monthly per user
                  </h6>
                  <Link to="#" className="btn btn-primary mt-4">
                    Start Premium
                  </Link>
                </div>
                <div className="pricing-features text-start p-4">
                  <h5>What's included:</h5>
                  <ul className="feature list-unstyled mb-0">
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Full Access
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Enhanced Security
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Source Files
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      1 Domain Free
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Free Appointments
                    </li>
                    <li className="text-muted mt-2">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />{" "}
                      </i>
                      Free Installment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
