import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  Card,
  CardBody,
  Collapse,
  CardHeader,
} from "reactstrap";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

class HelpCenterOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Help Center", link: "#" },
        { id: 3, name: "Overview" },
      ],
      features: [
        {
          icon: "uil uil-question-circle",
          link: "/helpcenter-faqs",
          title: "FAQs",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability is of great importance.",
        },
        {
          icon: "uil uil-file-bookmark-alt",
          link: "/helpcenter-guides",
          title: "Guides / Support",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability is of great importance.",
        },
        {
          icon: "uil uil-cog",
          link: "/helpcenter-support-request",
          title: "Support Request",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability is of great importance.",
        },
      ],
      col1: true,
      col2: false,
      col3: false,
      col4: false,
    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb pathItems={this.state.pathItems}>
          <h4 className="title">
            {" "}
            Hello! <br /> How can we help you?{" "}
          </h4>

          <div className="subcribe-form mt-4 pt-2">
            <Form>
              <FormGroup className="mb-0">
                <input
                  type="text"
                  id="help"
                  name="name"
                  className="border bg-white rounded-pill shadow"
                  required
                  placeholder="Search your questions or topic..."
                />
                <Button type="submit" color="primary" className="btn-pills">
                  Search
                </Button>
              </FormGroup>
            </Form>
          </div>
        </PageBreadcrumb>

        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="mb-4">Find the help you need</h4>
                  <p className="para-desc mx-auto text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              {this.state.features.map((feature, key) => (
                <Col key={key} lg={4} md={6} xs={12} className="mt-4 pt-2">
                  <Card className="explore-feature border-0 rounded text-center bg-white">
                    <CardBody>
                      <div className="icon rounded-circle shadow-lg d-inline-block mb-2 h2">
                        <i className={feature.icon}></i>
                      </div>
                      <div className="content mt-3">
                        <Link to={feature.link} className="title h5 text-dark">
                          {feature.title}
                        </Link>
                        <p className="text-muted mt-3 mb-0">{feature.desc}</p>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="mb-4">Get Started</h4>
                  <p className="para-desc mx-auto text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={9} className="mt-4 pt-2">
                <div className="faq-content">
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
                          className="border-0 shadow bg-light p-3"
                          id="headingOne"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            How does it work ?
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
                          className="border-0 shadow bg-light p-3"
                          id="headingTwo"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            Do I need a designer to use Landrick ?
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
                          className="border-0 shadow bg-light p-3"
                          id="headingfive"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            What do I need to do to start selling ?
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

                    <Card className="border-0 rounded mb-0">
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
                          className="border-0 shadow bg-light p-3"
                          id="headingfive"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            What happens when I receive an order ?
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
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-envelope-check d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Get in Touch !
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Submit a Request
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-webcam d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Start a Meeting
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Start Video Chat
                      </Link>
                    </div>
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

export default HelpCenterOverview;
