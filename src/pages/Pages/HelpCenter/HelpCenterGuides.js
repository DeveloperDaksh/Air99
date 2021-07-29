import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

class HelpCenterGuides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Help Center", link: "#" },
        { id: 3, name: "Guides" },
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
          title="Guides & Support"
          pathItems={this.state.pathItems}
        />

        <section className="section">
          <Container>
            <Row>
              <Col lg={4} md={6} xs={12}>
                <h5>Getting started</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Deciding to purchase
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      List your space
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Landing an experience or adventure
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Top uses questions
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col lg={4} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5>Your calendar</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Pricing & availability
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Booking settings
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Responding to enquiries & requests
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Snoozing or deactivating your listing
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col
                lg={4}
                md={6}
                xs={12}
                className="mt-4 mt-lg-0 pt-2 pt-lg-0 pt-2"
              >
                <h5>Your listings</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Updating your listing
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Neighbourhoods
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Listing photos & photography
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Landrick Plus
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      API-connected software
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                <h5>How payouts work</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Getting paid
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Adding payout info
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Your payout status
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Donations
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Taxes
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                <h5>Your reservations</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Landrick safely
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Landrick Experiences and Adventures
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Changing a reservation
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Cancelling a reservation
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Long-term reservations
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                <h5>Reservation help</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Help with a reservation or guest
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Guest cancellations
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col lg={4} md={6} xs={12} className="mt-4 pt-2">
                <h5>Your account</h5>
                <ul className="list-unstyled mt-4 mb-0">
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Your profile
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Account security
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Identification & verifications
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Reviews
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="#" className="text-muted">
                      <i className="mdi mdi-arrow-right text-primary me-2"></i>
                      Superhost status
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-envelope-check d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Get in Touch !
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Submit a Request
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-webcam d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Start a Meeting
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Start Video Chat
                      </Link>
                    </div>
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

export default HelpCenterGuides;
