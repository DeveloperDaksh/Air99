// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Card,
  CardBody,
} from "reactstrap";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import contact from "../../../assets/images/contact.svg";

class PageContactOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Page", link: "#" },
        { id: 3, name: "Contact", link: "#" },
        { id: 4, name: "Contact One" },
      ],
      Contactvisible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMail.bind(this);
    this.callNumber.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  componentDidMount() {
    document.body.classList = "";
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

  sendMail() {
    window.location.href = "mailto:contact@example.com";
  }

  callNumber() {
    window.location.href = "tel:+152534-468-854";
  }

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb title="Contact Us" pathItems={this.state.pathItems} />
        <div className="form-icon position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="section pb-0">
          <Container>
            <Row>
              <Col md={4}>
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h5 className="fw-bold">Phone</h5>
                    <p className="text-muted">
                      Start working with Landrick that can provide everything
                    </p>
                    <Link
                      to="#"
                      onClick={this.callNumber}
                      className="text-primary"
                    >
                      +152 534-468-854
                    </Link>
                  </div>
                </Card>
              </Col>

              <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h5 className="fw-bold">Email</h5>
                    <p className="text-muted">
                      Start working with Landrick that can provide everything
                    </p>
                    <Link
                      to="#"
                      onClick={this.sendMail}
                      className="text-primary"
                    >
                      contact@example.com
                    </Link>
                  </div>
                </Card>
              </Col>

              <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h5 className="fw-bold">Location</h5>
                    <p className="text-muted">
                      C/54 Northwest Freeway, Suite 558, <br />
                      Houston, USA 485
                    </p>
                    <Link to="#" className="video-play-icon h6 text-primary">
                      View on Google map
                    </Link>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg={5}
                md={6}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1"
              >
                <Card className="shadow rounded border-0">
                  <CardBody className="py-5">
                    <h4 className="card-title">Get In Touch !</h4>
                    <div className="custom-form mt-3">
                      <div id="message"></div>
                      <Alert
                        color="primary"
                        isOpen={this.state.Contactvisible}
                        toggle={() => {
                          this.setState({
                            Contactvisible: !this.state.Contactvisible,
                          });
                        }}
                      >
                        Contact details send successfully.
                      </Alert>
                      <Form
                        method="post"
                        onSubmit={this.handleSubmit}
                        name="contact-form"
                        id="contact-form"
                      >
                        <Row>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label className="form-label">
                                Your Name <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="user"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control ps-5"
                                placeholder="First Name :"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label className="form-label">
                                Your Email{" "}
                                <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="mail"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control ps-5"
                                placeholder="Your email :"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">Subject</Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="book"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="subject"
                                id="subject"
                                className="form-control ps-5"
                                placeholder="Your subject :"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">Comments</Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="message-circle"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <textarea
                                name="comments"
                                id="comments"
                                rows="4"
                                className="form-control ps-5"
                                placeholder="Your Message :"
                              ></textarea>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} className="text-center">
                            <div className="d-grid">
                              <input
                                type="submit"
                                id="submit"
                                name="send"
                                className="submitBnt btn btn-primary"
                                value="Send Message"
                              />
                            </div>
                            <div id="simple-msg"></div>

                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={7} md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                <Card className="border-0">
                  <CardBody className="p-0">
                    <img src={contact} className="img-fluid" alt="Landrick" />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60" fluid>
            <Row>
              <Col xs={12} className="p-0">
                <Card className="map border-0">
                  <CardBody className="p-0">
                    <iframe
                      title="myFrame"
                      src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                      style={{ border: "0" }}
                      className="rounded"
                      allowFullScreen
                    ></iframe>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageContactOne;
