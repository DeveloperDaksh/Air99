import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Images
import testi from "../../assets/images/digital/testi.png";

//Import Client Images
import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          img: client1,
          name: "Ronald Kinsey",
          post: "User",
          rating: 5,
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
        },
        {
          img: client2,
          name: "Raquel Service",
          post: "App User",
          rating: 4,
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
        },
        {
          img: client3,
          name: "Leona Moore",
          post: "Client",
          rating: 4.5,
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
        },
        {
          img: client4,
          name: "Mark Rose",
          post: "CEO",
          rating: 4.5,
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
        },
        {
          img: client5,
          name: "Marsha Donoho",
          post: "User",
          rating: 5,
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
        },
        {
          img: client6,
          name: "Xavier Giancola",
          post: "App User",
          rating: 5,
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.",
        },
      ],
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="section bg-light"
          style={{ background: `url(${testi}) center center` }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <div id="customer-testi" className="owl-carousel owl-theme">
                  <div className="owl-stage-outer">
                    <div className="owl-stage">
                      <Row>
                        {this.state.step1 === true ? (
                          <div className="testi text-center">
                            <p className="h5 text-muted fst-italic font-weight-normal">
                              " The most well-known dummy text is the 'Lorem
                              Ipsum', which is said to have originated in the
                              16th century. Lorem Ipsum is composed in a
                              pseudo-Latin language which more or less
                              corresponds to 'proper' Latin. It contains a
                              series of real Latin words. "
                            </p>
                            <div className="commenter mt-5">
                              <img
                                src={client1}
                                className="avatar avatar-medium rounded-circle d-block mx-auto shadow-lg"
                                alt="Landrick"
                              />
                              <div className="content mt-4">
                                <ul className="list-unstyled h6 text-warning mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                </ul>
                                <h5 className="text-primary mb-0">
                                  Ronald Kinsey
                                </h5>
                                <small className="text-muted">User</small>
                              </div>
                            </div>
                          </div>
                        ) : null}
                        {this.state.step2 === true ? (
                          <div className="testi text-center">
                            <p className="h5 text-muted fst-italic font-weight-normal">
                              " The most well-known dummy text is the 'Lorem
                              Ipsum', which is said to have originated in the
                              16th century. Lorem Ipsum is composed in a
                              pseudo-Latin language which more or less
                              corresponds to 'proper' Latin. It contains a
                              series of real Latin words. "
                            </p>
                            <div className="commenter mt-5">
                              <img
                                src={client2}
                                className="avatar avatar-medium rounded-circle d-block mx-auto shadow-lg"
                                alt="Landrick"
                              />
                              <div className="content mt-4">
                                <ul className="list-unstyled h6 text-warning mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                </ul>
                                <h5 className="text-primary mb-0">
                                  Raquel Service
                                </h5>
                                <small className="text-muted">App User</small>
                              </div>
                            </div>
                          </div>
                        ) : null}
                        {this.state.step3 === true ? (
                          <div className="testi text-center">
                            <p className="h5 text-muted fst-italic font-weight-normal">
                              " The most well-known dummy text is the 'Lorem
                              Ipsum', which is said to have originated in the
                              16th century. Lorem Ipsum is composed in a
                              pseudo-Latin language which more or less
                              corresponds to 'proper' Latin. It contains a
                              series of real Latin words. "
                            </p>
                            <div className="commenter mt-5">
                              <img
                                src={client4}
                                className="avatar avatar-medium rounded-circle d-block mx-auto shadow-lg"
                                alt="Landrick"
                              />
                              <div className="content mt-4">
                                <ul className="list-unstyled h6 text-warning mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                </ul>
                                <h5 className="text-primary mb-0">
                                  Leona Moore
                                </h5>
                                <small className="text-muted">Client</small>
                              </div>
                            </div>
                          </div>
                        ) : null}
                        {this.state.step4 === true ? (
                          <div className="testi text-center">
                            <p className="h5 text-muted fst-italic font-weight-normal">
                              " The most well-known dummy text is the 'Lorem
                              Ipsum', which is said to have originated in the
                              16th century. Lorem Ipsum is composed in a
                              pseudo-Latin language which more or less
                              corresponds to 'proper' Latin. It contains a
                              series of real Latin words. "
                            </p>
                            <div className="commenter mt-5">
                              <img
                                src={client3}
                                className="avatar avatar-medium rounded-circle d-block mx-auto shadow-lg"
                                alt="Landrick"
                              />
                              <div className="content mt-4">
                                <ul className="list-unstyled h6 text-warning mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                </ul>
                                <h5 className="text-primary mb-0">Mark Rose</h5>
                                <small className="text-muted">CEO</small>
                              </div>
                            </div>
                          </div>
                        ) : null}
                        {this.state.step5 === true ? (
                          <div className="testi text-center">
                            <p className="h5 text-muted fst-italic font-weight-normal">
                              " The most well-known dummy text is the 'Lorem
                              Ipsum', which is said to have originated in the
                              16th century. Lorem Ipsum is composed in a
                              pseudo-Latin language which more or less
                              corresponds to 'proper' Latin. It contains a
                              series of real Latin words. "
                            </p>
                            <div className="commenter mt-5">
                              <img
                                src={client5}
                                className="avatar avatar-medium rounded-circle d-block mx-auto shadow-lg"
                                alt="Landrick"
                              />
                              <div className="content mt-4">
                                <ul className="list-unstyled h6 text-warning mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                </ul>
                                <h5 className="text-primary mb-0">
                                  Marsha Donoho
                                </h5>
                                <small className="text-muted">User</small>
                              </div>
                            </div>
                          </div>
                        ) : null}
                        {this.state.step6 === true ? (
                          <div className="testi text-center">
                            <p className="h5 text-muted fst-italic font-weight-normal">
                              " The most well-known dummy text is the 'Lorem
                              Ipsum', which is said to have originated in the
                              16th century. Lorem Ipsum is composed in a
                              pseudo-Latin language which more or less
                              corresponds to 'proper' Latin. It contains a
                              series of real Latin words. "
                            </p>
                            <div className="commenter mt-5">
                              <img
                                src={client6}
                                className="avatar avatar-medium rounded-circle d-block mx-auto shadow-lg"
                                alt="Landrick"
                              />
                              <div className="content mt-4">
                                <ul className="list-unstyled h6 text-warning mb-0">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star"></i>
                                  </li>
                                </ul>
                                <h5 className="text-primary mb-0">
                                  Xavier Giancola
                                </h5>
                                <small className="text-muted">App User</small>
                              </div>
                            </div>
                          </div>
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
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonial;
