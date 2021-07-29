// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Card,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

import StarRatings from "react-star-ratings";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

//Import Images
import full from "../../../assets/images/job/full.jpg";
import part from '../../../assets/images/job/part.jpg';
import circleci from "../../../assets/images/job/Circleci.svg";
import remote from '../../../assets/images/job/remote.jpg';
import Codepen from "../../../assets/images/job/Codepen.svg";
import Discord from "../../../assets/images/job/Discord.svg";
import Eslint from "../../../assets/images/job/Eslint.svg";
import Gitlab from "../../../assets/images/job/Gitlab.svg";
import Gradle from "../../../assets/images/job/Gradle.svg";
import Mg from "../../../assets/images/job/Mg.svg";
import Sketch from "../../../assets/images/job/Sketch.svg";
import Twilio from "../../../assets/images/job/Twilio.svg";
import Udemy from "../../../assets/images/job/Udemy.svg";
import Webhooks from "../../../assets/images/job/Webhooks.svg";

class PageJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Page", link: "#" },
        { id: 3, name: "CAREERS", link: "#" },
        { id: 4, name: "Jobs" },
      ],
      jobs: [
        {
          id: 1,
          image: full,
          title: "Web Designer",
          time: "Full Time",
          rating: 4,
          cmpImage: circleci,
          cmpName: "CircleCi",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
        },
        {
          id: 2,
          image: full,
          title: "Web Developer",
          time: "Full Time",
          rating: 5,
          cmpImage: Codepen,
          cmpName: "Codepen",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
        },
        {
          id: 3,
          image: part,
          title: "UX Designer",
          time: "Part Time",
          rating: 4,
          cmpImage: Discord,
          cmpName: "Discord",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
        },
        {
          id: 4,
          image: full,
          title: "UI Designer",
          time: "Full Time",
          rating: 3,
          cmpImage: Eslint,
          cmpName: "Eslint",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
        },
        {
          id: 5,
          image: remote,
          title: "Back-End Developer",
          time: "Remote",
          rating: 4,
          cmpImage: Gitlab,
          cmpName: "Gitlab",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
        },
        {
          id: 6,
          image: part,
          title: "Photographer",
          time: "Part Time",
          rating: 5,
          cmpImage: Gradle,
          cmpName: "Gradle",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
        },
        {
          id: 7,
          image: full,
          title: "Mechanic",
          time: "Full Time",
          rating: 4,
          cmpImage: Mg,
          cmpName: "Mg",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
        },
        {
          id: 8,
          image: part,
          title: "Frontend Developer",
          time: "Part Timee",
          rating: 4,
          cmpImage: Sketch,
          cmpName: "Sketch",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
        },
        {
          id: 9,
          image: remote,
          title: "Web Designer",
          time: "Remote",
          rating: 3,
          cmpImage: Twilio,
          cmpName: "Twilio",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
        },
        {
          id: 10,
          image: part,
          title: "Php Developer",
          time: "Part Time",
          rating: 4,
          cmpImage: Udemy,
          cmpName: "Udemy",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
        },
        {
          id: 11,
          image: full,
          title: "Web Designer",
          time: "Full Time",
          rating: 4,
          cmpImage: Webhooks,
          cmpName: "Webhooks",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
        },
        {
          id: 12,
          image: remote,
          title: "Python Developer",
          time: "Remote",
          rating: 5,
          cmpImage: circleci,
          cmpName: "CircleCi",
          location: "San Francisco",
          Experience: "2 Year",
          workingHrs: "6hr",
          field: "Information strategy",
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
          title="Jobs / Careers"
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
            <Row>
              <Col xs="12">
                <div className="border-bottom pb-4">
                  <Row>
                    <Col lg="9" md="8">
                      <div className="section-title">
                        <h4 className="title mb-2">All Jobs</h4>
                        <p className="text-muted mb-0">Most Relevance Job</p>
                      </div>
                    </Col>

                    <Col lg="3" md="4" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <div className="form custom-form">
                        <FormGroup>
                          <Label className="form-label">Types of jobs :</Label>
                          <select
                            className="form-select form-control"
                            id="Sortbylist-job"
                          >
                            <option>All Jobs</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Remote</option>
                            <option>Work From Home</option>
                          </select>
                        </FormGroup>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs="12" className="mt-4 pt-2">
                <div className="section-title">
                  <h5 className="mb-0">Recommended Job :</h5>
                </div>
              </Col>
              {this.state.jobs.map((job, key) => (
                <Col key={key} lg="4" md="6" xs="12" className="mt-4 pt-2">
                  <Card className="job-box rounded shadow border-0 overflow-hidden">
                    <div className="border-bottom">
                      <div className="position-relative">
                        <img src={job.image} className="img-fluid" alt="" />
                        <div className="job-overlay bg-white"></div>
                      </div>
                      <h5 className="mb-0 position">
                        <Link to="page-job-detail" className="text-dark h5">
                          {job.title}
                        </Link>
                        <ul className="list-unstyled h6 mb-0 text-warning">
                          <StarRatings
                            rating={job.rating}
                            starRatedColor="#F17425"
                            numberOfStars={5}
                            name="rating"
                            starDimension="15px"
                            starSpacing="2px"
                          />
                        </ul>
                      </h5>
                      <ul className="list-unstyled head mb-0">
                        {job.time === "Full Time" ? (
                          <li className={"badge bg-success rounded-pill"}>
                            {job.time}
                          </li>
                        ) : job.time === "Part Time" ? (
                          <li className={"badge bg-warning rounded-pill"}>
                            {job.time}
                          </li>
                        ) : (
                          <li className={"badge bg-danger rounded-pill"}>
                            {job.time}
                          </li>
                        )}
                      </ul>
                    </div>

                    <CardBody className="content position-relative">
                      <div className="firm-logo rounded-circle shadow bg-light text-center">
                        <img
                          src={job.cmpImage}
                          className="avatar avatar-md-sm"
                          alt=""
                        />
                      </div>
                      <div className="company-detail text-center mt-3">
                        <h5 className="mb-0">
                          <Link
                            to={"/page-job-company"}
                            className="text-dark company-name"
                          >
                            {job.cmpName}
                          </Link>
                        </h5>
                        <p className="text-muted">
                          <Link to="#" className="video-play-icon text-muted">
                            <i>
                              <FeatherIcon
                                icon="map-pin"
                                className="fea icon-sm"
                              />
                            </i>{" "}
                            San Francisco
                          </Link>
                        </p>
                      </div>
                      <ul className="job-facts list-unstyled">
                        <li className="list-inline-item text-muted">
                          <i>
                            <FeatherIcon
                              icon="check"
                              className="fea icon-sm text-success me-1"
                            />
                          </i>{" "}
                          {job.Experience} Expirence
                        </li>
                        <li className="list-inline-item text-muted">
                          <i>
                            <FeatherIcon
                              icon="check"
                              className="fea icon-sm text-success me-1"
                            />
                          </i>{" "}
                          Working Hours- {job.workingHrs}
                        </li>
                        <li className="list-inline-item text-muted">
                          <i>
                            <FeatherIcon
                              icon="check"
                              className="fea icon-sm text-success me-1"
                            />
                          </i>{" "}
                          {job.field}
                        </li>
                      </ul>
                      <div className="d-grid">
                        <Link
                          to="/page-job-detail"
                          className="btn btn-outline-primary"
                        >
                          Apply Now
                      </Link>
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
export default PageJob;
