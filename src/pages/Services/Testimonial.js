// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

//Import Images
import client1 from "../../assets/images/client/amazon.svg";
import client2 from "../../assets/images/client/google.svg";
import client3 from "../../assets/images/client/lenovo.svg";
import client4 from "../../assets/images/client/paypal.svg";
import client5 from "../../assets/images/client/shopify.svg";
import client6 from "../../assets/images/client/shopify.svg";
import analyzeReport4 from "../../assets/images/illustrator/analyze_report_4.svg";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: 1,
          image: client1,
          name: "Thomas Israel",
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
        },
        {
          id: 2,
          image: client2,
          name: "Carl Oliver",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        },
        {
          id: 3,
          image: client3,
          name: "Barbara McIntosh",
          desc:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
        },
        {
          id: 4,
          image: client4,
          name: "Jill Webb",
          desc:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
        },
        {
          id: 5,
          image: client5,
          name: " Dean Tolle",
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
        },
        {
          id: 6,
          image: client6,
          name: "Christa Smith",
          desc:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
        },
      ],
      cols: 4,
      step1: true,
      step2: false,
      successMsg: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateWindowSize.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
  }

  updateWindowSize = () => {
    if (window.outerWidth >= 1230) {
      this.setState({ itemCount: 3, cols: 4 });
    } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
      this.setState({ itemCount: 2, cols: 6 });
    } else if (window.outerWidth <= 970) {
      this.setState({ itemCount: 1, cols: 12 });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
    this.updateWindowSize();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col md="6">
                <img src={analyzeReport4} className="me-md-4" alt="" />
              </Col>

              <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">Clean And Modern Code</h4>
                  <p className="text-muted">
                    This prevents repetitive patterns from impairing the overall
                    visual impression and facilitates the comparison of
                    different typefaces. Furthermore, it is advantageous when
                    the dummy text is relatively realistic.
                  </p>
                  <Link to="#" className="btn btn-outline-primary">
                    Start Now <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="Our Happy Customers"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              <Col xs="12" className="mt-4">
                <div
                  id="customer-testi"
                  className="owl-carousel owl-theme owl-loaded owl-drag"
                >
                  <div className="owl-stage-outer">
                    <div className="owl-stage">
                      <Row>
                        {this.state.step1 === true
                          ? this.state.clients.map((client, key) =>
                            key >= 0 && key <= 2 ? (
                              <Col
                                key={key}
                                md={this.state.cols}
                                className="mb-1"
                              >
                                <Card className="customer-testi text-center border-0 shadow rounded">
                                  <CardBody>
                                    <img
                                      src={client.image}
                                      className="img-fluid avatar avatar-ex-sm mx-auto"
                                      alt=""
                                    />
                                    <p className="text-muted mt-4">
                                      " {client.desc} "
                                      </p>
                                    <h6 className="text-primary">
                                      - {client.name}
                                    </h6>
                                  </CardBody>
                                </Card>
                              </Col>
                            ) : null
                          )
                          : this.state.clients.map((client, key) =>
                            key >= 3 && key <= 5 ? (
                              <Col
                                key={key}
                                md={this.state.cols}
                                className="mb-1"
                              >
                                <Card className="customer-testi text-center border-0 shadow rounded">
                                  <CardBody>
                                    <img
                                      src={client.image}
                                      className="img-fluid avatar avatar-ex-sm mx-auto"
                                      alt=""
                                    />
                                    <p className="text-muted mt-4">
                                      " {client.desc} "
                                      </p>
                                    <h6 className="text-primary">
                                      - {client.name}
                                    </h6>
                                  </CardBody>
                                </Card>
                              </Col>
                            ) : null
                          )}
                      </Row>
                    </div>
                  </div>
                  <div className="tns-nav">
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({ step1: true, step2: false });
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
                        this.setState({ step1: false, step2: true });
                      }}
                      className={
                        this.state.step2
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="Subscribe for our Latest Newsletter"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="justify-content-center mt-4 pt-2">
              <Col lg={7} md={10}>
                <Alert
                  color="primary"
                  isOpen={this.state.successMsg}
                  toggle={() => {
                    this.setState({ successMsg: !this.state.successMsg });
                  }}
                >
                  Data sended successfully.
                </Alert>
                <div className="subcribe-form">
                  <Form className="ms-0">
                    <Input
                      name="email"
                      id="email"
                      type="email"
                      className="bg-white shadow rounded-pill"
                      placeholder="Your email :"
                      required
                    />
                    <Button
                      color="primary"
                      onClick={this.handleSubmit}
                      className="btn btn-pills btn-primary"
                      type="button"
                      id="newssubscribebtn"
                    >
                      Submit
                          <i className="uil uil-arrow-right ms-1"></i>
                    </Button>
                  </Form>
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
