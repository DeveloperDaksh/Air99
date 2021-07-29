import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Form,
  Input,
  Row,
  Table,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";
import CommonSidebar from "./CommonSidebar";

export default class ForumTopic extends Component {
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
          <div className="container">
            <div className="row justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level">
                  <h4 className="title"> Introduction: Landrick </h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="index">Landrick</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="forums">Forums</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Forum Topic
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </Col>
            </div>
          </div>
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
                <div className="table-responsive bg-white shadow rounded">
                  <Table className="table mb-0 table-center">
                    <thead className="bg-light">
                      <tr>
                        <th scope="col" className="border-bottom" style={{ minWidth: "300px" }}>
                          Topics
                        </th>
                        <th
                          scope="col"
                          className="border-bottom text-center"
                          style={{ width: "100px" }}
                        >
                          Comments
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="flex-1 content ms-3">
                              <Link
                                to="forums-comments"
                                className="forum-title text-primary fw-bold"
                              >
                                Changelog
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Write by:{" "}
                                <Link
                                  to="#"
                                  className="text-dark fw-bold"
                                >
                                  Calvin Carlo
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small">2</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="flex-1 content ms-3">
                              <Link
                                to="forums-comments"
                                className="forum-title text-primary fw-bold"
                              >
                                Documentation
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Write by:{" "}
                                <Link
                                  to="#"
                                  className="text-dark fw-bold"
                                >
                                  George Meta
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small">4</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="flex-1 content ms-3">
                              <Link
                                to="forums-comments"
                                className="forum-title text-primary fw-bold"
                              >
                                Components
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Write by:{" "}
                                <Link
                                  to="#"
                                  className="text-dark fw-bold"
                                >
                                  Crista Joseph
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small">1</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div className="mt-4 pt-2">
                  <div className="rounded shadow p-4">
                    <Form className="login-form">
                      <Row>
                        <Col lg={12}>
                          <div className="mb-3">
                            <label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Password <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <FeatherIcon
                                icon="lock"
                                className="fea icon-sm icons"
                              />
                              <Input
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
