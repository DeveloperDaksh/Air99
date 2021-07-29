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
} from "reactstrap";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

// import images
import circleci from "../../../assets/images/job/Circleci.svg";
import mg from "../../../assets/images/job/Mg.svg";
import twilio from "../../../assets/images/job/Twilio.svg";
import udemy from "../../../assets/images/job/Udemy.svg";
import webhooks from "../../../assets/images/job/Webhooks.svg";
import discord from "../../../assets/images/job/Discord.svg";
import eslint from "../../../assets/images/job/Eslint.svg";
import gitlab from "../../../assets/images/job/Gitlab.svg";

class PageCompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Page", link: "#" },
        { id: 3, name: "CAREERS", link: "#" },
        { id: 4, name: "COMPANIES" },
      ],
      companydetails: [
        {
          id: 1,
          img: circleci,
          title: "CircleCi",
          subtitle: "Internet Services",
          heading: "Company Details :",
          location: "San Francisco",
          company: " circleci.com",
          revenue: " $ 5M / Annual",
          employees: "200",
        },
        {
          id: 2,
          img: mg,
          title: "Mg",
          subtitle: "Internet Services",
          heading: "Company Details :",
          location: "San Francisco",
          company: " circleci.com",
          revenue: " $ 5M / Annual",
          employees: "200",
        },
        {
          id: 3,
          img: twilio,
          title: "Twilio",
          subtitle: "Internet Services",
          heading: "Company Details :",
          location: "San Francisco",
          company: " circleci.com",
          revenue: " $ 5M / Annual",
          employees: "200",
        },
        {
          id: 4,
          img: udemy,
          title: "Udemy",
          subtitle: "Internet Services",
          heading: "Company Details :",
          location: "San Francisco",
          company: " circleci.com",
          revenue: " $ 5M / Annual",
          employees: "200",
        },
        {
          id: 5,
          img: webhooks,
          title: "Webhooks",
          subtitle: "Internet Services",
          heading: "Company Details :",
          location: "San Francisco",
          company: " circleci.com",
          revenue: " $ 5M / Annual",
          employees: "200",
        },
        {
          id: 6,
          img: discord,
          title: "Discord",
          subtitle: "Internet Services",
          heading: "Company Details :",
          location: "San Francisco",
          company: " circleci.com",
          revenue: " $ 5M / Annual",
          employees: "200",
        },
        {
          id: 7,
          img: eslint,
          title: "Eslint",
          subtitle: "Internet Services",
          heading: "Company Details :",
          location: "San Francisco",
          company: " circleci.com",
          revenue: " $ 5M / Annual",
          employees: "200",
        },
        {
          id: 8,
          img: gitlab,
          title: "Gitlab",
          subtitle: "Internet Services",
          heading: "Company Details :",
          location: "San Francisco",
          company: " circleci.com",
          revenue: " $ 5M / Annual",
          employees: "200",
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
        <PageBreadcrumb
          title="All Companies"
          pathItems={this.state.pathItems}
        />
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
                      <option>All Companies</option>
                      <option>Popular</option>
                      <option>Newest</option>
                    </select>
                  </FormGroup>
                </Form>
              </Col>
            </Row>

            <Row>
              {this.state.companydetails.map((detail, key) => (
                <Col lg={4} md={6} xs={12} className="mt-4 pt-2" key={key}>
                  <Card className="company-list border-0 rounded shadow bg-white">
                    <div className="text-center py-5 border-bottom">
                      <img
                        src={detail.img}
                        className="avatar avatar-small mx-auto rounded-circle d-block mb-3"
                        alt=""
                      />
                      <Link
                        to="page-job-company"
                        className="text-dark h5 name"
                      >
                        {detail.title}
                      </Link>
                      <p className="text-muted mt-1 mb-0">{detail.subtitle}</p>
                    </div>

                    <div className="p-4">
                      <h5>{detail.heading}</h5>
                      <ul className="list-unstyled mb-4">
                        <li className="h6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-map-pin fea icon-sm text-warning me-2"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span className="text-muted">Location :</span>{" "}
                          {detail.location}
                        </li>
                        <li className="h6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-link fea icon-sm text-warning me-2"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                          </svg>
                          <span className="text-muted">Comapny :</span>{" "}
                          {detail.company}
                        </li>
                        <li className="h6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-dollar-sign fea icon-sm text-warning me-2"
                          >
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                          <span className="text-muted">Revenue :</span>{" "}
                          {detail.revenue}
                        </li>
                        <li className="h6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-users fea icon-sm text-warning me-2"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                          <span className="text-muted">No. of employees :</span>{" "}
                          {detail.employees}
                        </li>
                      </ul>
                      <Link
                        to="page-job-company"
                        className="btn btn-block btn-soft-primary"
                      >
                        View Detail{" "}
                        <i
                          data-feather="arrow-right"
                          className="fea icon-sm"
                        ></i>
                      </Link>
                    </div>
                  </Card>
                </Col>
              ))}

              <Col xs={12} className="mt-4 pt-2">
                <Pagination listClassName="justify-content-center mb-0">
                  <PaginationItem>
                    <PaginationLink to="#" previous>
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
                    <PaginationLink to="#" next>
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
export default PageCompanyList;
