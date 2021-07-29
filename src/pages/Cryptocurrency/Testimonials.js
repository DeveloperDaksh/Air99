import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

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
    clients: [
      {
        id: 1,
        image: client1,
        name: "Thomas Israel",
        post: "C.E.O",
        rating: 5,
        desc:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      },
      {
        id: 2,
        image: client2,
        name: "Carl Oliver",
        post: "P.A",
        rating: 4,
        desc:
          "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories..",
      },
      {
        id: 3,
        image: client3,
        name: "Barbara McIntosh",
        post: "M.D",
        rating: 3.5,
        desc:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      },
      {
        id: 4,
        image: client4,
        name: "Jill Webb",
        post: "Manager",
        rating: 4.5,
        desc:
          "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find",
      },
      {
        id: 5,
        image: client5,
        name: " Dean Tolle",
        post: "Developer",
        rating: 5,
        desc:
          "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.",
      },
      {
        id: 6,
        image: client6,
        name: "Christa Smith",
        post: "Designer",
        rating: 5,
        desc:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.",
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
            title="Buyer's Review"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row className="justify-content-center">
            <Col lg="9" className="mt-4 pt-2 text-center">
              {/* review-slider */}
              <div id="owl-fade" className="owl-carousel owl-theme">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <Row>
                      {this.state.step1 === true ? (
                        <div className="customer-testi text-center">
                          <p className="text-muted h6 fst-italic">
                            " It seems that only fragments of the original text
                            remain in the Lorem Ipsum texts used today. One may
                            speculate that over the course of time certain
                            letters were added or deleted at various positions
                            within the text. "
                          </p>
                          <img
                            src={client6}
                            className="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                            alt="Landrick"
                          />
                          <ul className="list-unstyled mb-0 mt-3">
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
                          <h6 className="text-primary">
                            - Jill Webb{" "}
                            <small className="text-muted">Designer</small>
                          </h6>
                        </div>
                      ) : null}

                      {this.state.step2 === true ? (
                        <div className="customer-testi text-center">
                          <p className="text-muted h6 fst-italic">
                            " It seems that only fragments of the original text
                            remain in the Lorem Ipsum texts used today. The most
                            well-known dummy text is the 'Lorem Ipsum', which is
                            said to have originated in the 16th century. "
                          </p>
                          <img
                            src={client5}
                            className="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                            alt="Landrick"
                          />
                          <ul className="list-unstyled mb-0 mt-3">
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
                          <h6 className="text-primary">
                            - Dean Tolle{" "}
                            <small className="text-muted">Developer</small>
                          </h6>
                        </div>
                      ) : null}

                      {this.state.step3 === true ? (
                        <div className="customer-testi text-center">
                          <p className="text-muted h6 fst-italic">
                            " According to most sources, Lorum Ipsum can be
                            traced back to a text composed by Cicero in 45 BC.
                            Allegedly, a Latin scholar established the origin of
                            the text by compiling all the instances of the
                            unusual word 'consectetur' he could find "
                          </p>
                          <img
                            src={client4}
                            className="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                            alt="Landrick"
                          />
                          <ul className="list-unstyled mb-0 mt-3">
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
                          <h6 className="text-primary">
                            - Christa Smith{" "}
                            <small className="text-muted">Manager</small>
                          </h6>
                        </div>
                      ) : null}

                      {this.state.step4 === true ? (
                        <div className="customer-testi text-center">
                          <p className="text-muted h6 fst-italic">
                            " There is now an abundance of readable dummy texts.
                            These are usually used when a text is required
                            purely to fill a space. These alternatives to the
                            classic Lorem Ipsum texts are often amusing and tell
                            short, funny or nonsensical stories. "
                          </p>
                          <img
                            src={client3}
                            className="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                            alt="Landrick"
                          />
                          <ul className="list-unstyled mb-0 mt-3">
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
                          <h6 className="text-primary">
                            - Barbara McIntosh{" "}
                            <small className="text-muted">M.D</small>
                          </h6>
                        </div>
                      ) : null}

                      {this.state.step5 === true ? (
                        <div className="customer-testi text-center">
                          <p className="text-muted h6 fst-italic">
                            " The advantage of its Latin origin and the relative
                            meaninglessness of Lorum Ipsum is that the text does
                            not attract attention to itself or distract the
                            viewer's attention from the layout. "
                          </p>
                          <img
                            src={client2}
                            className="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                            alt="Landrick"
                          />
                          <ul className="list-unstyled mb-0 mt-3">
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
                          <h6 className="text-primary">
                            - Carl Oliver{" "}
                            <small className="text-muted">P.A</small>
                          </h6>
                        </div>
                      ) : null}

                      {this.state.step6 === true ? (
                        <div className="customer-testi text-center">
                          <p className="text-muted h6 fst-italic">
                            " It seems that only fragments of the original text
                            remain in the Lorem Ipsum texts used today. The most
                            well-known dummy text is the 'Lorem Ipsum', which is
                            said to have originated in the 16th century. "
                          </p>
                          <img
                            src={client1}
                            className="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                            alt="Landrick"
                          />
                          <ul className="list-unstyled mb-0 mt-3">
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
                          <h6 className="text-primary">
                            - Thomas Israel{" "}
                            <small className="text-muted">C.E.O</small>
                          </h6>
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
      </React.Fragment>
    );
  }
}

export default Testimonials;
