import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Button,
  Input,
} from "reactstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";
//Import Images
import bgimg from "../../../assets/images/1.jpg";
import blog1 from "../../../assets/images/blog/bg1.jpg";
import client1 from "../../../assets/images/client/01.jpg";
import client2 from "../../../assets/images/client/02.jpg";
import client3 from "../../../assets/images/client/03.jpg";

export default class PageBlogDetailTwo extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    document.getElementById("buyButton").className = "btn btn-light";
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
      document.getElementById("buyButton").className = "btn btn-primary";
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
    }
  };
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half d-table w-100"
          style={{ background: `url(${bgimg}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level">
                  <h3 className="title text-white title-dark">
                    {" "}
                    Smartest Applications for <br />
                    Your Business{" "}
                  </h3>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/index">Landrick</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="#">Blog</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Blog Details
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
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
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <Row>
                  <Col md={2} className="d-none d-md-block">
                    <ul className="list-unstyled text-center sticky-bar social-icon mb-0">
                      <li className="mb-3 h6">Share</li>
                      <li>
                        <Link to="#" className="rounded">
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="rounded">
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="rounded">
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="rounded">
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>
                    </ul>
                  </Col>

                  <div className="col-md-10">
                    <p className="text-muted">
                      This is required when, for example, the final text is not
                      yet available. Dummy text is also known as 'fill text'. It
                      is said that song composers of the past used dummy texts
                      as lyrics when writing melodies in order to have a
                      'ready-made' text to sing with the melody.
                    </p>

                    <ul className="list-unstyled d-flex justify-content-between mt-4">
                      <li className="list-inline-item user me-2">
                        <Link to="#" className="text-muted">
                          <i className="uil uil-user text-dark"></i> Calvin
                          Carlo
                        </Link>
                      </li>
                      <li className="list-inline-item date text-muted">
                        <i className="uil uil-calendar-alt text-dark"></i>{" "}
                        13th August, 2019
                      </li>
                    </ul>

                    <img
                      src={blog1}
                      className="img-fluid rounded-md shadow"
                      alt=""
                    />

                    <h5 className="mt-4">
                      Mornings contain the secret to an extraordinarily
                      successful life
                    </h5>

                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance: human perception
                      is tuned to recognize certain patterns and repetitions in
                      texts. If the distribution of letters and 'words' is
                      random, the reader will not be distracted from making a
                      neutral judgement on the visual impact and readability of
                      the typefaces (typography), or the distribution of text on
                      the page (layout or type area).
                    </p>

                    <h5 className="mt-4">Comments :</h5>

                    <ul className="media-list list-unstyled mb-0">
                      <li className="mt-4">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <Link className="pe-3" to="#">
                              <img
                                src={client1}
                                className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </Link>
                            <div className="commentor-detail">
                              <h6 className="mb-0">
                                <Link
                                  to="#"
                                  className="text-dark media-heading"
                                >
                                  Lorenzo Peterson
                                </Link>
                              </h6>
                              <small className="text-muted">
                                15th August, 2019 at 01:25 pm
                              </small>
                            </div>
                          </div>
                          <Link to="#" className="text-muted">
                            <i className="mdi mdi-reply"></i> Reply
                          </Link>
                        </div>
                        <div className="mt-3">
                          <p className="text-muted fst-italic p-3 bg-light rounded">
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>
                      </li>

                      <li className="mt-4">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <Link className="pe-3" to="#">
                              <img
                                src={client2}
                                className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </Link>
                            <div className="commentor-detail">
                              <h6 className="mb-0">
                                <Link
                                  to="#"
                                  className="media-heading text-dark"
                                >
                                  Tammy Camacho
                                </Link>
                              </h6>
                              <small className="text-muted">
                                15th August, 2019 at 05:44 pm
                              </small>
                            </div>
                          </div>
                          <Link to="#" className="text-muted">
                            <i className="mdi mdi-reply"></i> Reply
                          </Link>
                        </div>
                        <div className="mt-3">
                          <p className="text-muted fst-italic p-3 bg-light rounded">
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>
                      </li>

                      <li className="mt-4">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <Link className="pe-3" to="#">
                              <img
                                src={client3}
                                className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </Link>
                            <div className="commentor-detail">
                              <h6 className="mb-0">
                                <Link
                                  to="#"
                                  className="media-heading text-dark"
                                >
                                  Tammy Camacho
                                </Link>
                              </h6>
                              <small className="text-muted">
                                16th August, 2019 at 03:44 pm
                              </small>
                            </div>
                          </div>
                          <Link to="#" className="text-muted">
                            <i className="mdi mdi-reply"></i> Reply
                          </Link>
                        </div>
                        <div className="mt-3">
                          <p className="text-muted fst-italic p-3 bg-light rounded">
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>

                        <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                          <li className="mt-4">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <Link className="pe-3" to="#">
                                  <img
                                    src={client1}
                                    className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                    alt="img"
                                  />
                                </Link>
                                <div className="commentor-detail">
                                  <h6 className="mb-0">
                                    <Link
                                      to="#"
                                      className="text-dark media-heading"
                                    >
                                      Lorenzo Peterson
                                    </Link>
                                  </h6>
                                  <small className="text-muted">
                                    17th August, 2019 at 01:25 pm
                                  </small>
                                </div>
                              </div>
                              <Link to="#" className="text-muted">
                                <i className="mdi mdi-reply"></i> Reply
                              </Link>
                            </div>
                            <div className="mt-3">
                              <p className="text-muted fst-italic p-3 bg-light rounded">
                                " There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour "
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <h5 className="mt-4">Leave A Comment :</h5>

                    <Form className="mt-3">
                      <Row>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">Your Comment</Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="message-circle"
                                className="fea icon-sm icons"
                              />
                              <textarea
                                id="message"
                                placeholder="Your Comment"
                                rows="5"
                                name="message"
                                className="form-control ps-5"
                                required=""
                              ></textarea>
                            </div>
                          </div>
                        </Col>

                        <div className="col-lg-6">
                          <div className="mb-3">
                            <Label className="form-label">
                              Name <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="user"
                                className="fea icon-sm icons"
                              />
                              <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="form-control ps-5"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="mail"
                                className="fea icon-sm icons"
                              />
                              <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="form-control ps-5"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <Col md={12}>
                          <div className="send d-grid">
                            <Button
                              type="submit"
                              className="btn btn-primary"
                            >
                              Send Message
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
