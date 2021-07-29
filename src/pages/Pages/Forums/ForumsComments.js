import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Label, Row } from "reactstrap";
// import images
import client1 from "../../../assets/images/client/01.jpg";
import client5 from "../../../assets/images/client/05.jpg";
import client6 from "../../../assets/images/client/06.jpg";

//Import Icons
import FeatherIcon from "feather-icons-react";
import CommonSidebar from "./CommonSidebar";

export default class ForumsComments extends Component {
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
        <section className="bg-half bg-light d-table w-100">
          <Container>
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="page-next-level">
                  <h4 className="title"> Author Comments </h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <a href="index">Landrick</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="forums">Forums</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="forums-topic">Forums Topic</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Comments
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
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
            <Row>
              <Col lg={8}>
                <div className="rounded shadow">
                  <div className="d-flex justify-content-between p-4 bg-light">
                    <h6 className="mb-0">Author</h6>
                    <h6 className="mb-0">Date</h6>
                  </div>

                  <div className="p-4">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <Link className="pe-3" to="#">
                          <img
                            src={client1}
                            className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                            alt="img"
                          />
                        </Link>
                        <div className="flex-1 commentor-detail">
                          <h6 className="mb-0">
                            <Link to="#" className="media-heading text-dark">
                              Calvin Carlo
                            </Link>
                          </h6>
                          <small className="text-muted">Author</small>
                        </div>
                      </div>
                      <small className="text-muted">
                        16th August, 2019 <br /> at 03:44 pm
                      </small>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted mb-0">
                        " Dummy text is text that is used in the publishing
                        industry or by web designers to occupy the space which
                        will later be filled with 'real' content. This is
                        required when, for example, the final text is not yet
                        available."
                      </p>
                    </div>
                  </div>

                  <div className="p-4 border-top">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <Link className="pe-3" to="#">
                          <img
                            src={client5}
                            className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                            alt="img"
                          />
                        </Link>
                        <div className="flex-1 commentor-detail">
                          <h6 className="mb-0">
                            <Link to="#" className="media-heading text-dark">
                              Crista Joseph
                            </Link>
                          </h6>
                          <small className="text-muted">Author</small>
                        </div>
                      </div>
                      <small className="text-muted">
                        16th August, 2019 <br /> at 03:44 pm
                      </small>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted mb-0">
                        " Dummy text is text that is used in the publishing
                        industry or by web designers to occupy the space which
                        will later be filled with 'real' content. This is
                        required when, for example, the final text is not yet
                        available."
                      </p>
                    </div>
                  </div>

                  <div className="p-4 border-top">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <Link className="pe-3" to="#">
                          <img
                            src={client6}
                            className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                            alt="img"
                          />
                        </Link>
                        <div className="flex-1 commentor-detail">
                          <h6 className="mb-0">
                            <Link to="#" className="media-heading text-dark">
                              George Meta
                            </Link>
                          </h6>
                          <small className="text-muted">Author</small>
                        </div>
                      </div>
                      <small className="text-muted">
                        16th August, 2019 <br /> at 03:44 pm
                      </small>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted mb-0">
                        " Dummy text is text that is used in the publishing
                        industry or by web designers to occupy the space which
                        will later be filled with 'real' content. This is
                        required when, for example, the final text is not yet
                        available."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <div className="rounded shadow p-4">
                    <Form className="login-form">
                      <Row>
                        <Col lg={12}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="user"
                                className="fea icon-sm icons"
                              />
                              <input
                                type="email"
                                className="form-control ps-5"
                                placeholder="Email"
                                name="email"
                                required=""
                              />
                            </div>
                          </div>
                        </Col>

                        <Col lg={12}>
                          <div className="mb-3">
                            <Label className="form-label">
                              Password <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="lock"
                                className="fea icon-sm icons"
                              />
                              <input
                                type="password"
                                className="form-control ps-5"
                                placeholder="Password"
                                required=""
                              />
                            </div>
                          </div>
                        </Col>

                        <Col lg={12}>
                          <div className="d-flex justify-content-between">
                            <div className="mb-3">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="customCheck2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customCheck2"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={12} className="mb-0">
                          <div className="d-grid">
                            <button className="btn btn-primary">
                              Login Now
                          </button>
                          </div>  
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </Col>
              <CommonSidebar />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
