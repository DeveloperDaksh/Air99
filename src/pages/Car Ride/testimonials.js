import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

//Import Images
import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";

class Testimonials extends Component {
  state = {
    testimonials: [
      {
        id: 1,
        name: "Thomas Israel",
        image: client1,
        post: "Driver",
        rating: 4,
        desc:
          "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century.",
      },
      {
        id: 1,
        name: "Barbara McIntosh",
        image: client2,
        post: "User",
        rating: 5,
        desc:
          "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century.",
      },
      {
        id: 1,
        name: "Christa Smith",
        image: client3,
        post: "Passenger",
        rating: 4,
        desc:
          "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century.",
      },
      {
        id: 1,
        name: "Carl Oliver",
        image: client4,
        post: "Driver",
        rating: 3,
        desc:
          "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century.",
      },
      {
        id: 1,
        name: "Jill Webb",
        image: client5,
        post: "Passenger",
        rating: 4,
        desc:
          "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century.",
      },
      {
        id: 1,
        name: "Dean Tolle",
        image: client6,
        post: "User",
        rating: 5,
        desc:
          "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century.",
      },
    ],
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
  };
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* Render Section Title */}
          <SectionTitle
            title="What our customer says!"
            desc="that can provide everything you need to generate awareness, drive traffic, connect"
          />

          <Row className="justify-content-center mt-4">
            <Col lg="8" xs="12">
              <div id="owl-fade" className="owl-carousel owl-theme">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <Row>
                      {this.state.step1 === true ? (
                        <Card className="rounded bg-light overflow-hidden border-0 m-2">
                          <Row className="align-items-center g-0">
                            <Col md={5}>
                              <img
                                src={client1}
                                className="img-fluid"
                                alt="Landrick"
                              />
                            </Col>

                            <Col md={7}>
                              <CardBody className="customer-testi">
                                <h6 className="text-primary fw-bold">
                                  Barbara McIntosh{" "}
                                  <small className="text-muted d-block">
                                    User
                                  </small>
                                </h6>
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                </ul>
                                <p className="text-muted h6 mb-0 fst-italic">
                                  " This seems that only fragments of the
                                  original text remain in the Ipsum texts used
                                  today. The well known have originated in the
                                  16th century. "
                                </p>
                              </CardBody>
                            </Col>
                          </Row>
                        </Card>
                      ) : null}

                      {this.state.step2 === true ? (
                        <Card className="rounded bg-light overflow-hidden border-0 m-2">
                          <Row className="align-items-center g-0">
                            <Col md={5}>
                              <img
                                src={client2}
                                className="img-fluid"
                                alt="Landrick"
                              />
                            </Col>

                            <Col md={7}>
                              <CardBody className="customer-testi">
                                <h6 className="text-primary fw-bold">
                                  Barbara McIntosh{" "}
                                  <small className="text-muted d-block">
                                    User
                                  </small>
                                </h6>
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                </ul>
                                <p className="text-muted h6 mb-0 fst-italic">
                                  " This seems that only fragments of the
                                  original text remain in the Ipsum texts used
                                  today. The well known have originated in the
                                  16th century. "
                                </p>
                              </CardBody>
                            </Col>
                          </Row>
                        </Card>
                      ) : null}

                      {this.state.step3 === true ? (
                        <Card className="rounded bg-light overflow-hidden border-0 m-2">
                          <Row className="align-items-center g-0">
                            <Col md={5}>
                              <img
                                src={client3}
                                className="img-fluid"
                                alt="Landrick"
                              />
                            </Col>

                            <Col md={7}>
                              <CardBody className="customer-testi">
                                <h6 className="text-primary fw-bold">
                                  Barbara McIntosh{" "}
                                  <small className="text-muted d-block">
                                    User
                                  </small>
                                </h6>
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                </ul>
                                <p className="text-muted h6 mb-0 fst-italic">
                                  " This seems that only fragments of the
                                  original text remain in the Ipsum texts used
                                  today. The well known have originated in the
                                  16th century. "
                                </p>
                              </CardBody>
                            </Col>
                          </Row>
                        </Card>
                      ) : null}

                      {this.state.step4 === true ? (
                        <Card className="rounded bg-light overflow-hidden border-0 m-2">
                          <Row className="align-items-center g-0">
                            <Col md={5}>
                              <img
                                src={client4}
                                className="img-fluid"
                                alt="Landrick"
                              />
                            </Col>

                            <Col md={7}>
                              <CardBody className="customer-testi">
                                <h6 className="text-primary fw-bold">
                                  Barbara McIntosh{" "}
                                  <small className="text-muted d-block">
                                    User
                                  </small>
                                </h6>
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                </ul>
                                <p className="text-muted h6 mb-0 fst-italic">
                                  " This seems that only fragments of the
                                  original text remain in the Ipsum texts used
                                  today. The well known have originated in the
                                  16th century. "
                                </p>
                              </CardBody>
                            </Col>
                          </Row>
                        </Card>
                      ) : null}

                      {this.state.step5 === true ? (
                        <Card className="rounded bg-light overflow-hidden border-0 m-2">
                          <Row className="align-items-center g-0">
                            <Col md={5}>
                              <img
                                src={client5}
                                className="img-fluid"
                                alt="Landrick"
                              />
                            </Col>

                            <Col md={7}>
                              <CardBody className="customer-testi">
                                <h6 className="text-primary fw-bold">
                                  Barbara McIntosh{" "}
                                  <small className="text-muted d-block">
                                    User
                                  </small>
                                </h6>
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                </ul>
                                <p className="text-muted h6 mb-0 fst-italic">
                                  " This seems that only fragments of the
                                  original text remain in the Ipsum texts used
                                  today. The well known have originated in the
                                  16th century. "
                                </p>
                              </CardBody>
                            </Col>
                          </Row>
                        </Card>
                      ) : null}

                      {this.state.step6 === true ? (
                        <Card className="rounded bg-light overflow-hidden border-0 m-2">
                          <Row className="align-items-center g-0">
                            <Col md={5}>
                              <img
                                src={client6}
                                className="img-fluid"
                                alt="Landrick"
                              />
                            </Col>

                            <Col md={7}>
                              <CardBody className="customer-testi">
                                <h6 className="text-primary fw-bold">
                                  Barbara McIntosh{" "}
                                  <small className="text-muted d-block">
                                    User
                                  </small>
                                </h6>
                                <ul className="list-unstyled mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                </ul>
                                <p className="text-muted h6 mb-0 fst-italic">
                                  " This seems that only fragments of the
                                  original text remain in the Ipsum texts used
                                  today. The well known have originated in the
                                  16th century. "
                                </p>
                              </CardBody>
                            </Col>
                          </Row>
                        </Card>
                      ) : null}
                    </Row>
                  </div>
                </div>
                <div className="tns-nav">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({
                        step1: true,
                        step2: false,
                        step3: false,
                        step4: false,
                        step5: false,
                        step6: false,
                      });
                    }}
                    className={
                      this.state.step1
                        ? "tns-nav-active"
                        : "tns-nav-inactive"
                    }
                  ></button>
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({
                        step1: false,
                        step2: true,
                        step3: false,
                        step4: false,
                        step5: false,
                        step6: false,
                      });
                    }}
                    className={
                      this.state.step2
                        ? "tns-nav-active"
                        : "tns-nav-inactive"
                    }
                  ></button>
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({
                        step1: false,
                        step2: false,
                        step3: true,
                        step4: false,
                        step5: false,
                        step6: false,
                      });
                    }}
                    className={
                      this.state.step3
                        ? "tns-nav-active"
                        : "tns-nav-inactive"
                    }
                  ></button>
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({
                        step1: false,
                        step2: false,
                        step3: false,
                        step4: true,
                        step5: false,
                        step6: false,
                      });
                    }}
                    className={
                      this.state.step4
                        ? "tns-nav-active"
                        : "tns-nav-inactive"
                    }
                  ></button>
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({
                        step1: false,
                        step2: false,
                        step3: false,
                        step4: false,
                        step5: true,
                        step6: false,
                      });
                    }}
                    className={
                      this.state.step5
                        ? "tns-nav-active"
                        : "tns-nav-inactive"
                    }
                  ></button>
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({
                        step1: false,
                        step2: false,
                        step3: false,
                        step4: false,
                        step5: false,
                        step6: true,
                      });
                    }}
                    className={
                      this.state.step6
                        ? "tns-nav-active"
                        : "tns-nav-inactive"
                    }
                  ></button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Testimonials;
