import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings: [
        {
          id: 1,
          title: "Free",
          price: 0,
          duration: "mo",
          buttonText: "Buy Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Enhanced Security" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
          ],
        },
        {
          id: 2,
          title: "Starter",
          price: 39,
          duration: "mo",
          buttonText: "Get Started",
          btnLink: "",
          isActive: true,
          features: [
            { title: "Full Access" },
            { title: "Source Files" },
            { title: "Free Appointments" },
            { title: "Enhanced Security" },
          ],
        },
        {
          id: 3,
          title: "PROFESSIONAL",
          price: 59,
          duration: "mo",
          buttonText: "Try It Now",
          btnLink: "",
          features: [
            { title: "Full Access" },
            { title: "Enhanced Security" },
            { title: "Source Files" },
            { title: "1 Domain Free" },
          ],
        },
      ],
      featuresLines: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
      counter: [97, 15, 2, 98],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Choose Simple Pricing"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row className="align-items-center">
              {/* pricing */}
              <Col md={4} xs={12} className="mt-4 pt-2">
                <Card className="pricing-rates business-rate shadow bg-light rounded text-center border-0">
                  <CardBody className="py-5">
                    <h6 className="title fw-bold text-uppercase text-primary mb-4">
                      Free
                    </h6>
                    <div className="d-flex justify-content-center mb-4">
                      <span className="h4 mb-0 mt-2">$</span>
                      <span className="price h1 mb-0">0</span>
                      <span className="h4 align-self-end mb-1">/mo</span>
                    </div>

                    <ul className="list-unstyled mb-0 ps-0">
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Full Access
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Enhanced Security
                      </li>

                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Source Files
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        1 Domain Free
                      </li>
                    </ul>
                    <Link to="#" className="btn btn-primary mt-4">
                      Buy Now
                    </Link>
                  </CardBody>
                </Card>
              </Col>

              <Col md={4} xs={12} className="mt-4 pt-2">
                <Card className="pricing-rates business-rate shadow bg-light rounded text-center border-0">
                  <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                    <span className="text-center d-block shadow small h6">
                      Best
                    </span>
                  </div>
                  <CardBody className="py-5">
                    <h6 className="title fw-bold text-uppercase text-primary mb-4">
                      Starter
                    </h6>
                    <div className="d-flex justify-content-center mb-4">
                      <span className="h4 mb-0 mt-2">$</span>
                      <span className="price h1 mb-0">39</span>
                      <span className="h4 align-self-end mb-1">/mo</span>
                    </div>

                    <ul className="list-unstyled mb-0 ps-0">
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Full Access
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Source Files
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Free Appointments
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Free Installment
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Enhanced Security
                      </li>
                    </ul>
                    <Link to="#" className="btn btn-primary mt-4">
                      Get Started
                    </Link>
                  </CardBody>
                </Card>
              </Col>

              <Col md={4} xs={12} className="mt-4 pt-2">
                <Card className="pricing-rates business-rate shadow bg-light rounded text-center border-0">
                  <CardBody className="py-5">
                    <h6 className="title fw-bold text-uppercase text-primary mb-4">
                      Professional
                    </h6>
                    <div className="d-flex justify-content-center mb-4">
                      <span className="h4 mb-0 mt-2">$</span>
                      <span className="price h1 mb-0">59</span>
                      <span className="h4 align-self-end mb-1">/mo</span>
                    </div>

                    <ul className="list-unstyled mb-0 ps-0">
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Full Access
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Enhanced Security
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Source Files
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        1 Domain Free
                      </li>
                    </ul>
                    <Link to="#" className="btn btn-primary mt-4">
                      Try It Now
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg="6">
                <div className="section-title">
                  <h4 className="title mb-4">
                    See everything about your{" "}
                    <span className="text-primary">Landrick</span> Business
                  </h4>
                  <p className="text-muted para-desc">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                  <ul className="list-unstyled feature-list text-muted">
                    {this.state.featuresLines.map((feature, key) => (
                      <li key={key} className="mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              <Col lg="6">
                <Row className="ms-lg-5" id="counter">
                  <Col md={6} xs={12}>
                    <Row>
                      <Col xs={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <Card className="counter-box border-0 bg-light shadow text-center rounded">
                          <CardBody className="py-5">
                            <h2 className="mb-0">
                              <span className="counter-value">
                                <CountUp start={3} end={97} duration={8} />
                              </span>
                              %
                            </h2>
                            <h5 className="counter-head mb-0 title-dark">
                            Happy Client
                            </h5>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col xs={12} className="mt-4 pt-2">
                        <Card className=" counter-box border-0 bg-primary shadow text-center rounded">
                          <CardBody className="py-5">
                            <h2 className="text-light title-dark mb-0">
                              <span className="counter-value">
                                <CountUp start={1} end={15} duration={8} />
                              </span>
                              +
                            </h2>
                            <h5 className="counter-head mb-0 title-dark text-light">
                              Awards
                            </h5>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6} xs={12}>
                    <Row className="pt-lg-4 mt-lg-4">
                      <Col xs={12} className="mt-4 pt-2">
                        <Card className="counter-box border-0 bg-success shadow text-center rounded">
                          <CardBody className="py-5">
                            <h2 className="text-light title-dark mb-0">
                              <span className="counter-value">
                                <CountUp start={0} end={2} duration={8} />
                              </span>
                              K
                            </h2>
                            <h5 className="counter-head mb-0 title-dark text-light">
                              Job Placement
                            </h5>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col xs={12} className="mt-4 pt-2">
                        <Card className="counter-box border-0 bg-light shadow text-center rounded">
                          <CardBody className="py-5">
                            <h2 className="mb-0">
                              <span className="counter-value">
                                <CountUp start={3} end={98} duration={8} />
                              </span>
                              %
                            </h2>
                            <h5 className="counter-head mb-0">
                              Project Complete
                            </h5>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;
