// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

//Import Images
import logo from "../../../assets/images/job/Gradle.svg";

class PageJobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Pages", link: "#" },
        { id: 3, name: "CAREERS", link: "#" },
        { id: 4, name: "Job Detail" },
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
        <PageBreadcrumb pathItems={this.state.pathItems}>
          <img src={logo} className="avatar avatar-small" alt="Landrick" />
          <h4 className="title mt-4 mb-3"> Back-End Developer </h4>
          <p className="para-desc mx-auto text-muted">
            Launch your campaign and benefit from our expertise on designing and
            managing conversion centered bootstrap v5 html page.
          </p>
          <ul className="list-unstyled">
            <li className="list-inline-item text-primary me-3">
              <i className="mdi mdi-map-marker text-warning me-2"></i>Beijing, China
            </li>
            <li className="list-inline-item text-primary">
              <i className="mdi mdi-office-building text-warning me-2"></i>
              Gradle
            </li>
          </ul>
        </PageBreadcrumb>
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
              <Col lg="4" md="5" xs="12">
                <Card className="sidebar sticky-bar rounded shadow border-0">
                  <CardBody className="widget border-bottom">
                    <h5 className="mb-0">Job Information</h5>
                  </CardBody>

                  <CardBody>
                    <div className="d-flex widget align-items-center">
                      <i>
                        <FeatherIcon
                          icon="user-check"
                          className="fea icon-ex-md me-3"
                        />
                      </i>
                      <div className="flex-1">
                        <h6 className="widget-title mb-1">Employee Type:</h6>
                        <p className="text-primary mb-0">Full Time</p>
                      </div>
                    </div>
                    <div className="d-flex widget align-items-center mt-3">
                      <i>
                        <FeatherIcon
                          icon="map-pin"
                          className="fea icon-ex-md me-3"
                        />
                      </i>
                      <div className="flex-1">
                        <h6 className="widget-title mb-1">Location:</h6>
                        <p className="text-primary mb-0">Beijing, China</p>
                      </div>
                    </div>
                    <div className="d-flex widget align-items-center mt-3">
                      <i>
                        <FeatherIcon
                          icon="monitor"
                          className="fea icon-ex-md me-3"
                        />
                      </i>
                      <div className="flex-1">
                        <h6 className="widget-title mb-1">Job Type:</h6>
                        <p className="text-primary mb-0">Back-end Developer</p>
                      </div>
                    </div>
                    <div className="d-flex widget align-items-center mt-3">
                      <i>
                        <FeatherIcon
                          icon="briefcase"
                          className="fea icon-ex-md me-3"
                        />
                      </i>
                      <div className="flex-1">
                        <h6 className="widget-title mb-1">Experience:</h6>
                        <p className="text-primary mb-0">+2 Year</p>
                      </div>
                    </div>
                    <div className="d-flex widget align-items-center mt-3">
                      <i>
                        <FeatherIcon
                          icon="book"
                          className="fea icon-ex-md me-3"
                        />
                      </i>
                      <div className="flex-1">
                        <h6 className="widget-title mb-1">Qualifications:</h6>
                        <p className="text-primary mb-0">MSCIT</p>
                      </div>
                    </div>
                    <div className="d-flex widget align-items-center mt-3">
                      <i>
                        <FeatherIcon
                          icon="dollar-sign"
                          className="fea icon-ex-md me-3"
                        />
                      </i>
                      <div className="flex-1">
                        <h6 className="widget-title mb-1">Salary:</h6>
                        <p className="text-primary mb-0">+50k to 70k</p>
                      </div>
                    </div>
                    <div className="d-flex widget align-items-center mt-3">
                      <i>
                        <FeatherIcon
                          icon="clock"
                          className="fea icon-ex-md me-3"
                        />
                      </i>
                      <div className="flex-1">
                        <h6 className="widget-title mb-1">Date posted:</h6>
                        <p className="text-primary mb-0">5th Sep, 2019</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ms-lg-4">
                  <h5>Job Description: </h5>
                  <p className="text-muted">
                    One disadvantage of Lorum Ipsum is that in Latin certain
                    letters appear more frequently than others - which creates a
                    distinct visual impression. Moreover, in Latin only words at
                    the beginning of sentences are capitalized.
                  </p>
                  <p className="text-muted">
                    This means that Lorem Ipsum cannot accurately represent, for
                    example, German, in which all nouns are capitalized. Thus,
                    Lorem Ipsum has only limited suitability as a visual filler
                    for German texts. If the fill text is intended to illustrate
                    the characteristics of different typefaces.
                  </p>
                  <p className="text-muted">
                    It sometimes makes sense to select texts containing the
                    various letters and symbols specific to the output language.
                  </p>

                  <h5 className="mt-4">Responsibilities and Duties: </h5>
                  <p className="text-muted">
                    It sometimes makes sense to select texts containing the
                    various letters and symbols specific to the output language.
                  </p>
                  <ul className="list-unstyled">
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Participate in requirements analysis
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Write clean, scalable code using C# and .NET frameworks
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Test and deploy applications and systems
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Revise, update, refactor and debug code
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Improve existing software
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Develop documentation throughout the software development
                      life cycle (SDLC)
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Serve as an expert on applications and provide technical
                      support
                    </li>
                  </ul>

                  <h5 className="mt-4">
                    Required Experience, Skills and Qualifications:{" "}
                  </h5>
                  <p className="text-muted">
                    It sometimes makes sense to select texts containing the
                    various letters and symbols specific to the output language.
                  </p>
                  <ul className="list-unstyled">
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Proven experience as a .NET Developer or Application
                      Developer
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      good understanding of SQL and Relational Databases,
                      specifically Microsoft SQL Server.
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Experience designing, developing and creating RESTful web
                      services and APIs
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Basic know how of Agile process and practices
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Good understanding of object-oriented programming.
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Good understanding of concurrent programming.
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Sound knowledge of application architecture and design.
                    </li>
                    <li className="text-muted">
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm text-success me-2"
                        />
                      </i>
                      Excellent problem solving and analytical skills
                    </li>
                  </ul>

                  <div className="mt-4">
                    <Link
                      to="page-job-apply"
                      className="btn btn-outline-primary"
                    >
                      Apply Now <i className="mdi mdi-send"></i>
                    </Link>
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
export default PageJobDetail;
