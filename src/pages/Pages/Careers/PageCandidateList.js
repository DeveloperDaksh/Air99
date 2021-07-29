// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Card,
  Form,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardBody,
} from "reactstrap";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

// import images
import client1 from "../../../assets/images/client/01.jpg";
import client2 from "../../../assets/images/client/02.jpg";
import client3 from "../../../assets/images/client/03.jpg";
import client4 from "../../../assets/images/client/04.jpg";
import client5 from "../../../assets/images/client/05.jpg";
import client6 from "../../../assets/images/client/06.jpg";
import client7 from "../../../assets/images/client/07.jpg";
import client8 from "../../../assets/images/client/08.jpg";

class PageCandidateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Page", link: "#" },
        { id: 3, name: "CAREERS", link: "#" },
        { id: 4, name: "CANDIDATES" },
      ],
      candidatedetails: [
        {
          id: 1,
          img: client1,
          name: "Calvin Carlo",
          post: "Front-end Developer",
        },
        {
          id: 2,
          img: client2,
          name: "Martha Griffin",
          post: "WordPress Developer",
        },
        {
          id: 3,
          img: client3,
          name: "Ashley Jen",
          post: "Back-end Developer",
        },
        {
          id: 4,
          img: client4,
          name: "Nicole Alan",
          post: "UX Designer",
        },
        {
          id: 5,
          img: client5,
          name: "Jennifer Pham",
          post: "Web Designer",
        },
        {
          id: 6,
          img: client6,
          name: "Alex Tom",
          post: "UI Designer",
        },
        {
          id: 7,
          img: client7,
          name: "Cristino Murphy",
          post: "PHP Developer",
        },
        {
          id: 8,
          img: client8,
          name: "Arlo Sons",
          post: "React Developer",
        },
      ],
    };
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
        <PageBreadcrumb title="Candidates" pathItems={this.state.pathItems} />
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
            <Row className="align-items-center">
              <Col lg={9} md={8}>
                <div className="section-title">
                  <h6 className="mb-0">Showing 1 – 8 of 10 results</h6>
                </div>
              </Col>

              <Col lg={3} md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Form className="custom-form">
                  <FormGroup className="mb-0">
                    <select
                      className="form-select form-control"
                      id="Sortbylist-job"
                    >
                      <option>Default</option>
                      <option>Newest</option>
                      <option>Oldest</option>
                      <option>Random</option>
                    </select>
                  </FormGroup>
                </Form>
              </Col>
            </Row>

            <Row>
              {this.state.candidatedetails.map((detail, key) => (
                <Col lg={4} md={6} xs={12} className="mt-4 pt-2" key={key}>
                  <Card className="candidate-list rounded border-0 shadow">
                    <CardBody>
                      <ul className="list-unstyled align-items-center">
                        <li className="list-inline-item float-end">
                          <Link to="#" className="text-muted like">
                            <i className="mdi mdi-heart h5 mb-0"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge rounded-pill bg-soft-success">
                            Featured
                          </span>
                        </li>
                      </ul>

                      <div className="content text-center">
                        <img
                          src={detail.img}
                          className="avatar avatar-md-md shadow-md rounded-circle"
                          alt=""
                        />
                        <ul className="list-unstyled mb-1 mt-2">
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
                        <Link
                          to="page-job-candidate"
                          className="text-dark h5 name"
                        >
                          {detail.name}
                        </Link>
                        <p className="text-muted my-1">{detail.post}</p>

                        <span className="text-muted">
                          <i className="uil uil-graduation-cap h4 mb-0 me-2 text-primary"></i>
                          Experience{" "}
                          <span className="text-success">3+ years</span>
                        </span>

                        <ul className="list-unstyled mt-3">
                          <li className="list-inline-item m-1">
                            <Link
                              to="#"
                              className="rounded bg-light py-1 px-2 text-muted small"
                            >
                              PHP
                            </Link>
                          </li>
                          <li className="list-inline-item m-1">
                            <Link
                              to="#"
                              className="rounded bg-light py-1 px-2 text-muted small"
                            >
                              WordPress
                            </Link>
                          </li>
                          <li className="list-inline-item m-1">
                            <Link
                              to="#"
                              className="rounded bg-light py-1 px-2 text-muted small"
                            >
                              Web Design
                            </Link>
                          </li>
                          <li className="list-inline-item m-1">
                            <Link
                              to="#"
                              className="rounded bg-light py-1 px-2 text-muted small"
                            >
                              CSS
                            </Link>
                          </li>
                          <li className="list-inline-item m-1">
                            <Link
                              to="#"
                              className="rounded bg-light py-1 px-2 text-muted small"
                            >
                              JS
                            </Link>
                          </li>
                        </ul>
                        <div className="d-grid">
                          <Link
                            to="page-job-candidate"
                            className="btn btn-soft-primary"
                          >
                            Read More{" "}
                            <i className="uil uil-angle-right-b align-middle"></i>
                          </Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}

              <Col xs={12} className="mt-4 pt-2">
                <Pagination listClassName="justify-content-center mb-0">
                  <PaginationItem>
                    <PaginationLink to="#">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink to="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink to="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink to="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink to="#">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageCandidateList;
