// React Basic and Bootstrap
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Componenets
import Counter2 from "../../components/Shared/counter2";

//import images
import Asset190 from "../../assets/images/illustrator/Asset190.svg";
import Asset189 from "../../assets/images/illustrator/Asset189.svg";
import Asset192 from "../../assets/images/illustrator/Asset192.svg";
import Asset187 from "../../assets/images/illustrator/Asset187.svg";
import faq from "../../assets/images/illustrator/faq.svg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class Faqs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          title: "Happy Client",
          image: Asset190,
          start: 0,
          value: 97,
          postfix: "%",
        },
        { title: "Awards", image: Asset189, start: 0, value: 15, postfix: "+" },
        {
          title: "Job Placement",
          image: Asset192,
          start: 0,
          value: 2,
          postfix: "K",
        },
        {
          title: "Project Complete",
          image: Asset187,
          start: 0,
          value: 98,
          postfix: "%",
        },
      ],
      isOpen: false,
      collapse1: true,
      col1: true,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
    };
    this.openModal = this.openModal.bind(this);
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
    this.t_col5 = this.t_col5.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
      col5: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
      col5: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
      col5: false,
    });
  }
  t_col5() {
    this.setState({
      col5: !this.state.col5,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">
                    See everything about your{" "}
                    <span className="text-primary">Landrick</span>
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
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

            <Row id="counter">
              {/* counter */}
              <Counter2 counters={this.state.counters} />
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg="7" md="6">
                <div className="faq-content me-lg-5">
                  <div className="accordion" id="accordionExample">
                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col1}
                        className={
                          this.state.col1
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 bg-light p-3 pe-5"
                          id="headingOne"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            How our{" "}
                            <span className="text-primary">Landrick</span> work
                            ?
                            <i
                              className={
                                this.state.col1
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col1}>
                        <CardBody>
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col2}
                        className={
                          this.state.col2
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 bg-light p-3 pe-5"
                          id="headingTwo"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            What is the main process open account ?
                            <i
                              className={
                                this.state.col2
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col2}>
                        <CardBody>
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col3}
                        className={
                          this.state.col3
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 bg-light p-3 pe-5"
                          id="headingfive"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            How to make unlimited data entry ?
                            <i
                              className={
                                this.state.col3
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col3}>
                        <CardBody>
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col4}
                        className={
                          this.state.col4
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 bg-light p-3 pe-5"
                          id="headingfive"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            Is <span className="text-primary">
                              Landrick
                            </span>{" "}
                            safer to use with my account ?
                            <i
                              className={
                                this.state.col4
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col4}>
                        <CardBody>
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded">
                      <Link
                        to="#"
                        onClick={this.t_col5}
                        className={
                          this.state.col5
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 bg-light p-3 pe-5"
                          id="headingfive"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            How can i contact your technical team ?
                            <i
                              className={
                                this.state.col5
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col5}>
                        <CardBody>
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>
                  </div>
                </div>
              </Col>

              <Col lg="5" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <img src={faq} alt="" />
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs="12" className="text-center">
                <div className="section-title">
                  <h4 className="title mb-4">Get Started!</h4>
                  <p className="text-muted para-desc mx-auto">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>

                  <div className="watch-video mt-4 pt-2">
                    <a href="https://1.envato.market/landrickreactjs" className="btn btn-primary m-1">Buy Now <span className="badge rounded-pill bg-danger ms-2">v3.1</span></a>
                    <Link to="#" onClick={this.openModal} className="btn btn-icon btn-pills btn-primary m-1 lightbox">
                      <FeatherIcon
                        icon="video"
                        className="icons"
                      />
                    </Link><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                    <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="L61p2uyiMSo"
                      onClose={() => this.setState({ isOpen: false })}
                    />
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

export default Faqs;
