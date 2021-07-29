import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  Label,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import imgbg from "../../../assets/images/job/company.jpg";
import profile from "../../../assets/images/job/Circleci.svg";

class PageJobCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          title: "Senior Web Developer",
          icon: "monitor",
          location: "London, UK",
        },
        {
          title: "Front-End Developer",
          icon: "airplay",
          location: "Brasilia, Brazil",
        },
        {
          title: "Back-End Developer",
          icon: "cpu",
          location: "Ottawa, Canada",
        },
        { title: "UI Designer", icon: "square", location: "Beijing, Chin" },
        { title: "UX Designer", icon: "monitor", location: "Bogota, Colombia" },
        { title: "Php Developer", icon: "crop", location: "Havana, Cuba" },
      ],
      modal: false,
    };
    this.togglemodal.bind(this);
  }

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

  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 d-table w-100"
          style={{ background: `url(${imgbg}) center center` }}
        >
          <div className="bg-overlay"></div>
        </section>
        <section className="section">
          <Container>
            <Row>
              <Col lg="4" md="5" xs="12">
                <div className="job-profile position-relative">
                  <div className="rounded shadow bg-white">
                    <div className="text-center py-5 border-bottom">
                      <img
                        src={profile}
                        className="avatar avatar-medium mx-auto rounded-circle d-block"
                        alt=""
                      />
                      <h5 className="mt-3 mb-0">CircleCi</h5>
                      <p className="text-muted mb-0">Internet Services</p>
                    </div>

                    <div className="p-4">
                      <h5>Company Details :</h5>
                      <ul className="list-unstyled mb-4">
                        <li className="h6">
                          <i>
                            <FeatherIcon
                              icon="map-pin"
                              className="fea icon-sm text-warning me-3"
                            />
                          </i>
                          <span className="text-muted">Location :</span> San
                          Francisco
                        </li>
                        <li className="h6">
                          <i>
                            <FeatherIcon
                              icon="link"
                              className="fea icon-sm text-warning me-3"
                            />
                          </i>
                          <span className="text-muted">Comapny :</span>{" "}
                          circleci.com
                        </li>
                        <li className="h6">
                          <i>
                            <FeatherIcon
                              icon="dollar-sign"
                              className="fea icon-sm text-warning me-3"
                            />
                          </i>
                          <span className="text-muted">Revenue :</span> $ 5M /
                          Annual
                        </li>
                        <li className="h6">
                          <i>
                            <FeatherIcon
                              icon="users"
                              className="fea icon-sm text-warning me-3"
                            />
                          </i>
                          <span className="text-muted">No. of employees :</span>{" "}
                          200
                        </li>
                      </ul>
                      <div className="d-grid">
                        <Link
                          to="#"
                          onClick={this.togglemodal}
                          className="btn btn-primary"
                        >
                          Apply Now
                      </Link>
                      </div>
                    </div>
                  </div>

                  <div className="map mt-4 pt-2">
                    <iframe
                      title="uniqueTitle"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9459036900826!2d-122.39420768440696!3d37.79130751898054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806516341641%3A0x3f1e44c262252836!2sCircleCI!5e0!3m2!1sen!2sin!4v1575034257139!5m2!1sen!2sin"
                      style={{ border: "0" }}
                      className="rounded"
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </div>
              </Col>

              <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ms-md-4">
                  <h4>About us :</h4>
                  <p className="text-muted">
                    Almost no business is immune from the need for quality
                    software development. The act of building quality software,
                    and shipping it quickly, has become the core engine of value
                    creation in companies across all industries. CircleCI allows
                    teams to rapidly release code they trust by automating the
                    build, test, and delivery process. Thousands of leading
                    companies, including Samsung, Ford Motor Company, Spotify,
                    Lyft, Coinbase, PagerDuty, Stitch Fix, and BuzzFeed rely on
                    CircleCI to accelerate delivery and improve quality.
                  </p>
                  <p className="text-muted">
                    CircleCI was named a Leader in cloud-native continuous
                    integration by Forrester in 2019 and has been named to
                    multiple Best DevOps Tools lists. CircleCI is the first
                    CI/CD tool to become FedRAMP certified and processes more
                    than 30 million builds each month across Linux, macOS,
                    Docker and Windows build environments.
                  </p>
                  <p className="text-muted mb-0">
                    Founded in 2011 and headquartered in San Francisco with a
                    global remote workforce, CircleCI is venture-backed by Scale
                    Venture Partners, Threshold Ventures (formerly DFJ),
                    Baseline Ventures, Top Tier Capital, Industry Ventures,
                    Heavybit, Harrison Metal Capital, Owl Rock Capital Partners,
                    and NextEquity Partners.
                  </p>

                  <h4 className="mt-lg-5 mt-4">Join The Team :</h4>
                  <p className="text-muted mb-0">
                    Started in 2011, we have grown to over 200 employees all
                    over the world. Headquartered in San Francisco, we have
                    offices in London, Tokyo, Toronto, Boston, and Denver, with
                    team members working across 50+ cities and 13 countries.
                  </p>

                  <Row>
                    {this.state.jobs.map((job, key) => (
                      <Col lg="6" key={key} className="mt-4 pt-2">
                        <Link to="/page-job-detail" className="text-dark">
                          <div className="key-feature d-flex align-items-center p-3 bg-white rounded shadow">
                            <div className="icon text-center rounded-circle me-3">
                              <i>
                                <FeatherIcon
                                  icon={job.icon}
                                  className="fea icon-ex-md text-primary"
                                />
                              </i>
                            </div>
                            <div className="content">
                              <h4 className="title mb-0">{job.title}</h4>
                              <p className="text-muted mb-0">{job.location}</p>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    ))}
                    <Col xs="12" className="mt-4 pt-2">
                      <Link to="/page-jobs" className="btn btn-primary">
                        See All Jobs <i className="uil uil-angle-right-b align-middle"></i>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Modal
          isOpen={this.state.modal}
          role="dialog"
          centered={true}
          id="trialform"
        >
          <ModalHeader toggle={this.togglemodal}>Apply now</ModalHeader>
          <ModalBody className="p-4">
            <Form>
              <Row>
                <Col md="6">
                  <div className="mb-3">
                    <Label className="form-label">
                      Your Name :<span className="text-danger">*</span>
                    </Label>
                    <div className="form-icon position-relative">
                      <i>
                        <FeatherIcon icon="user" className="fea icon-sm icons" />
                      </i>
                      <Input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control ps-5"
                        required
                        placeholder="First Name :"
                      />
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="mb-3">
                    <Label className="form-label">
                      Your Email :<span className="text-danger">*</span>
                    </Label>
                    <div className="form-icon position-relative">
                      <i>
                        <FeatherIcon icon="mail" className="fea icon-sm icons" />
                      </i>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control ps-5"
                        required
                        placeholder="Your email :"
                      />
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="mb-3">
                    <Label className="form-label">
                      Your Phone no. :<span className="text-danger">*</span>
                    </Label>
                    <div className="form-icon position-relative">
                      <i>
                        <FeatherIcon icon="phone" className="fea icon-sm icons" />
                      </i>
                      <Input
                        name="number"
                        id="number"
                        type="number"
                        className="form-control ps-5"
                        required
                        placeholder="Your phone no. :"
                      />
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="mb-3">
                    <Label className="form-label">Job Title :</Label>
                    <div className="form-icon position-relative">
                      <i>
                        <FeatherIcon icon="book" className="fea icon-sm icons" />
                      </i>
                      <Input
                        name="subject"
                        id="subject"
                        className="form-control ps-5"
                        required
                        placeholder="Title :"
                      />
                    </div>
                  </div>

                </Col>
                <Col md="6">
                  <div className="mb-3">
                    <Label className="form-label">Types of jobs :</Label>
                    <select
                      className="form-select form-control"
                      id="Sortbylist-job"
                    >
                      <option>All Jobs</option>
                      <option>Full Time</option>
                      <option>Half Time</option>
                      <option>Remote</option>
                      <option>In Office</option>
                    </select>
                  </div>
                </Col>
                <Col md="12">
                  <div className="mb-3">
                    <Label className="form-label">Description :</Label>
                    <div className="form-icon position-relative">
                      <i>
                        <FeatherIcon
                          icon="message-circle"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        className="form-control ps-5"
                        required
                        placeholder="Describe the job :"
                      ></textarea>
                    </div>
                  </div>
                </Col>
                <Col md="12">
                  <div className="mb-3">
                    <Label className="form-label">Upload Your Cv / Resume :</Label>
                    <Input
                      type="file"
                      className="form-control"
                      required
                      id="fileupload"
                    />
                  </div>
                </Col>
                <Col md="12">
                  <div className="mb-3">
                    <div className="form-check">
                      <Input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck1"
                      />
                      <Label
                        className="form-check-label"
                        for="customCheck1"
                      >
                        I Accept{" "}
                        <Link to="#" className="text-primary">
                          Terms And Condition
                        </Link>
                      </Label>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    className="submitBnt btn btn-primary"
                    value="Apply Now"
                  />
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PageJobCompany;
