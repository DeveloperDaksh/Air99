import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Table,
} from "reactstrap";

import CommonSidebar from "./CommonSidebar";

export default class overview extends Component {
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
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level">
                  <h4 className="title"> Forums </h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/index">Landrick</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Forums
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
            <Row>
              <Col lg={8}>              
                <div className="text-center subcribe-form mb-2">
                  <Form className="m-0" style={{ maxWidth: "800px" }}>
                    <FormGroup className="mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="rounded-pill shadow"
                        placeholder="Search forums..."
                        required
                      />
                      <Button
                        type="submit"
                        className="btn btn-pills btn-primary"
                      >
                        Search Forums
                      </Button>
                    </FormGroup>
                  </Form>
                </div>

                <div className="table-responsive bg-white shadow rounded mt-4">
                  <Table className="mb-0 table-center">
                    <thead className="bg-light">
                      <tr>
                        <th scope="col" className="border-bottom" style={{ minWidth: "300px" }}>
                          Forums Title
                        </th>
                        <th
                          scope="col"
                          className="border-bottom text-center"
                          style={{ maxWidth: "150px" }}
                        >
                          Posted
                        </th>
                        <th
                          scope="col"
                          className="border-bottom text-center"
                          style={{ width: "100px" }}
                        >
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
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Introductions: Landrick
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Calvin</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="flex-1 content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Web Designing and Developing
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">George</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="flex-1 content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Hosting and providers
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Parthiv</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                SEO starter guide
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">David</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Troubleshooting and managing issues
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Tiger</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Backup and restore
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Cristina</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Errors and how to fix them
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Miriam</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Template features & Services
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Janalia</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex">
                            <i className="uil uil-comment text-muted h5"></i>
                            <div className="content ms-3">
                              <Link
                                to="forums-topic"
                                className="forum-title text-primary fw-bold"
                              >
                                Landrick includes the ability to create a better
                                of sites by using the multisite feature.
                              </Link>
                              <p className="text-muted small mb-0 mt-2">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small h6">Harry</td>
                        <td className="text-center small">3</td>
                        <td className="text-center small">5</td>
                      </tr>
                    </tbody>
                  </Table>
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
