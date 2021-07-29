// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";

class ChangeLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Docs", link: "#" },
        { id: 3, name: "Changelog" },
      ],
    };
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

  render() {
    return (
      <React.Fragment>
        <PageBreadcrumb title="Changelog" pathItems={this.state.pathItems} />
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
              <Col lg={9}>
                <div className="p-4 shadow rounded border">
                  <h5 className="mt-5">Version <span className="text-success">3.1</span> - 15th May 2021<span className="badge rounded-pill bg-danger ms-2">Latest Updated</span></h5>
                  <ul className="list-unstyled">
                    <li className="text-muted my-2 ms-3">
                      <FeatherIcon
                        icon="arrow-right-circle"
                        className="fea icon-sm me-2"
                      />
                      <span className="fw-bold">Update :</span> Update Latest Bootstrap v5.0.0 Beta 2</li>
                    <li className="text-muted my-2 ms-3">
                      <FeatherIcon
                        icon="arrow-right-circle"
                        className="fea icon-sm me-2"
                      />
                      <span className="fw-bold">Added :</span> Added Mega menu</li>

                    <li className="text-muted my-2 ms-3">
                      <FeatherIcon
                        icon="arrow-right-circle"
                        className="fea icon-sm me-2"
                      />
                      <span className="fw-bold">New :</span> Finance Landing{" "}
                      <Link to="index-finance" target="_blank" className="h6 text-danger">Live Preview</Link> </li>

                    <li className="text-muted my-2 ms-3">
                      <FeatherIcon
                        icon="arrow-right-circle"
                        className="fea icon-sm me-2"
                      />
                      <span className="fw-bold">New :</span> Freelancer Landing{" "}
                      <Link to="index-freelancer" target="_blank" className="h6 text-danger">Live Preview</Link> </li>

                    <li className="text-muted my-2 ms-3">
                      <FeatherIcon
                        icon="arrow-right-circle"
                        className="fea icon-sm me-2"
                      />
                      <span className="fw-bold">New :</span> Blockchain Landing{" "}
                      <Link to="index-blockchain" target="_blank" className="h6 text-danger">Live Preview</Link> </li>

                    <li className="text-muted my-2 ms-3">
                      <FeatherIcon
                        icon="arrow-right-circle"
                        className="fea icon-sm me-2"
                      />
                      <span className="fw-bold">New :</span> Cryptocurrency Landing{" "}
                      <Link to="index-crypto-two" target="_blank" className="h6 text-danger">Live Preview</Link> </li>

                    <li className="text-muted my-2 ms-3">
                      <FeatherIcon
                        icon="arrow-right-circle"
                        className="fea icon-sm me-2"
                      />
                      <span className="fw-bold">New :</span> IT Solutions Landing{" "}
                      <Link to="index-it-solution-two" target="_blank" className="h6 text-danger">Live Preview</Link> </li>

                    <li className="text-muted my-2 ms-3">
                      <FeatherIcon
                        icon="arrow-right-circle"
                        className="fea icon-sm me-2"
                      />
                      <span className="fw-bold">New :</span> Video Conference Landing{" "}
                      <Link to="index-videocall" target="_blank" className="h6 text-danger">Live Preview</Link> </li>
                  </ul>
                  <h5>
                    Version <span className="text-success">2.6.1</span> - 16th
                    December 2020{" "}
                    <span className="badge badge-pill badge-danger ms-2">
                      Latest Updated
                    </span>
                  </h5>
                  <ul className="list-unstyled">
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Fixed :</span> Fixed
                      some issues in shop pages
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Fixed :</span> Fixed
                      some issues in shop pages (Menu)
                    </li>
                  </ul>

                  <ul className="list-unstyled">
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Developer
                      Landing{" "}
                      <Link
                        to="index-developer"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> SEO Agency
                      Landing{" "}
                      <Link
                        to="index-seo-agency"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span>{" "}
                      Construction Landing{" "}
                      <Link
                        to="index-construction"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Real
                      Estate Landing{" "}
                      <Link
                        to="index-real-estate"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Hospital
                      Landing{" "}
                      <Link
                        to="index-hospital"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span>{" "}
                      Integration Landing{" "}
                      <Link
                        to="index-integration"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Landing
                      Four{" "}
                      <Link
                        to="index-landing-four"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> IT
                      Solution Landing{" "}
                      <Link
                        to="index-it-solution"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Corporate
                      Business{" "}
                      <Link
                        to="index-corporate"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Email
                      Inbox Landing{" "}
                      <Link
                        to="index-email-inbox"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Task
                      Management Landing{" "}
                      <Link
                        to="index-task-management"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Travel
                      Landing{" "}
                      <Link
                        to="index-travel"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Blog
                      Landing{" "}
                      <Link
                        to="index-blog"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Landing
                      One{" "}
                      <Link
                        to="index-landing-one"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Landing
                      Two{" "}
                      <Link
                        to="index-landing-two"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Landing
                      Three
                      <Link
                        to="index-landing-three"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Forums{" "}
                      <Link
                        to="forums"
                        target="_blank"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                      <ul className="list-unstyled">
                        <li className="text-muted my-2 ms-3">
                          <FeatherIcon
                            icon="corner-down-right"
                            className="fea icon-sm me-2"
                          />
                          Forum Topic
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <FeatherIcon
                            icon="corner-down-right"
                            className="fea icon-sm me-2"
                          />
                          Forum Comments
                        </li>
                      </ul>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Added :</span> Product
                      Listing page in Shop pages
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Added :</span> Company
                      Listing page in Career pages
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Added :</span>{" "}
                      Candidate Listing page in Career pages
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Added :</span> Thank
                      you page in Spacial pages
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Fixed :</span> Fixed
                      some issues in Auth page(like: Login, Signup, Forgot
                      Password)
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Fixed :</span> Fixed
                      some issues in Responsive
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Fixed :</span> Fixed
                      some issues in Shop pages
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">New :</span> Case Study
                      Pages
                      <ul className="list-unstyled">
                        <li className="text-muted my-2 ms-3">
                          <FeatherIcon
                            icon="corner-down-right"
                            className="fea icon-sm me-2"
                          />
                          All Cases
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <FeatherIcon
                            icon="corner-down-right"
                            className="fea icon-sm me-2"
                          />
                          Case Details
                        </li>
                      </ul>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Added :</span> New Blog
                      Details Page
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Added :</span> New
                      About Us Page
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Added :</span> New
                      Company History Page
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Added :</span> User
                      Account Pages
                      <ul className="list-unstyled">
                        <li className="text-muted my-2 ms-3">
                          <FeatherIcon
                            icon="corner-down-right"
                            className="fea icon-sm me-2"
                          />
                          Profile Members
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <FeatherIcon
                            icon="corner-down-right"
                            className="fea icon-sm me-2"
                          />
                          Profile Works
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <FeatherIcon
                            icon="corner-down-right"
                            className="fea icon-sm me-2"
                          />
                          Profile Messages
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <FeatherIcon
                            icon="corner-down-right"
                            className="fea icon-sm me-2"
                          />
                          Profile Payments
                        </li>
                      </ul>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Fixed :</span> Fixed
                      issue in Comingsoon page
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Fixed :</span> Fixed
                      issue in Comingsoon two page
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      <span className="fw-bold">Fixed :</span> Fixed
                      issue in Maintenance page
                    </li>
                  </ul>
                  <h5>
                    Version <span className="text-success">2.2.0</span> - 21th
                    June, 2020{" "}
                    <Badge pill color="danger" className="ms-2">
                      Latest
                    </Badge>
                  </h5>
                  <ul className="list-unstyled">
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Update Latest{" "}
                      <span className="fw-bold">Bootstrap v4.5</span>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Update Latest{" "}
                      <span className="fw-bold">
                        Material Design Icons v5.3.45
                      </span>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Shop landing{" "}
                      <Link to="index-shop" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Added <b>Shop Inner</b> Pages
                      <ul className="list-unstyled">
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Shop Products
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Product Details
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Shop Cart
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Checkouts
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          My Profile / Account
                        </li>
                      </ul>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Insurance Landing{" "}
                      <Link to="index-insurance" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New E-Book Landing{" "}
                      <Link to="index-ebook" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Added <b>Help Center</b> Pages
                      <ul className="list-unstyled">
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Help center(Overview)
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          FAQs
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Guides
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Request Form
                        </li>
                      </ul>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Fixed some menu issues
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Menu easily move center to right (css based) and add light
                      menu (css based)
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Fixed some responsive issues
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Social Marketing landing{" "}
                      <Link
                        to="index-social-marketing"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Digital Agency Landing{" "}
                      <Link
                        to="index-digital-agency"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Online Learning Landing{" "}
                      <Link
                        to="index-online-learning"
                        className="h6 text-danger"
                      >
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Email Template
                      <ul className="list-unstyled">
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Email Confirmation
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Email Alert
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Email Billing
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Email Forgot Password
                        </li>
                      </ul>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Add New Blog Pages
                      <ul className="list-unstyled">
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Blog Listing Page
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Blog List with Sidebar
                        </li>
                      </ul>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Add New Work or Portfolio Pages
                      <ul className="list-unstyled">
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Work Classic
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Work Grids
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Work Masonry
                        </li>
                      </ul>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Add New Authentication Pages
                      <ul className="list-unstyled">
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Login Page
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Signup Page
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Recover Password Page
                        </li>
                      </ul>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Added new components in Components Page
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Update Documentation
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Update Widget
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Fixed couples of issues
                    </li>
                  </ul>

                  <h5>
                    Version <span className="text-success">2.0.0</span> - 18th
                    April, 2020
                  </h5>
                  <ul className="list-unstyled">
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Updated full Code structure and removed unnecessary
                      pacakges.
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Classic Application Landing Page{" "}
                      <Link to="index-classic-app" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Classic Saas Landing Page{" "}
                      <Link to="index-classic-saas" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Car Ride Landing Page{" "}
                      <Link to="index-car-riding" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Add New Job page in Careers pages
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Added new components in Components Page
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New{" "}
                      <span className="fw-bold text-primary">
                        RTL{" "}
                      </span>{" "}
                      Version (Only CSS Base)
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New{" "}
                      <span className="fw-bold text-primary">
                        Dark{" "}
                      </span>{" "}
                      Version (Only CSS Base)
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New{" "}
                      <span className="fw-bold text-primary">
                        Dark RTL{" "}
                      </span>{" "}
                      Version (Only CSS Base)
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Fixed couple of issues in One Page Menu
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Fixed couple of issues in mega Menu
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Job Landing Page{" "}
                      <Link to="index-job" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Customer Support Landing Page{" "}
                      <Link to="index-customer" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Onpage Landing Page{" "}
                      <Link to="index-onepage" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Account Pages
                      <ul className="list-unstyled">
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          User Profile{" "}
                          <Link to="page-profile" className="h6 text-danger">
                            Live Preview
                          </Link>
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Profile Setting{" "}
                          <Link
                            to="page-profile-edit"
                            className="h6 text-danger"
                          >
                            Live Preview
                          </Link>
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Bill / Invoice{" "}
                          <Link to="page-invoice" className="h6 text-danger">
                            Live Preview
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      New Widget Page{" "}
                      <Link to="widget" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Added Careers Pages
                      <ul className="list-unstyled">
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Candidate Profile{" "}
                          <Link
                            to="page-job-candidate"
                            className="h6 text-danger"
                          >
                            Live Preview
                          </Link>
                        </li>
                        <li className="text-muted my-2 ms-3">
                          <i>
                            <FeatherIcon
                              icon="corner-down-right"
                              className="fea icon-sm me-2"
                            />
                          </i>
                          Company Profile{" "}
                          <Link
                            to="page-job-company"
                            className="h6 text-danger"
                          >
                            Live Preview
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Fixed Responsive Issue
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Added RTL Supported Version
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Added Payments Landing Page{" "}
                      <Link to="index-payments" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Added Cryptocurrency Landing Page{" "}
                      <Link to="index-crypto" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Added Software Landing Page{" "}
                      <Link to="index-software" className="h6 text-danger">
                        Live Preview
                      </Link>
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Added Comingsoon Pages
                    </li>
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Fixed Responsive and Menu Issue
                    </li>
                  </ul>

                  <h5 className="mt-4">
                    Version <span className="text-success">1.0.0</span> - 15th
                    November 2019
                  </h5>
                  <ul className="list-unstyled">
                    <li className="text-muted my-2 ms-3">
                      <i>
                        <FeatherIcon
                          icon="arrow-right-circle"
                          className="fea icon-sm me-2"
                        />
                      </i>
                      Initial Released
                    </li>
                  </ul>

                  <div className="mt-4">
                    <Link
                      to="https://1.envato.market/landrickreactjs"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Purchase Now
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

export default ChangeLog;
