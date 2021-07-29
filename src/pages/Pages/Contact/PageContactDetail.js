// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import contactDetail from "../../../assets/images/contact-detail.jpg";
import Topbar from "../../../components/Layout/Topbar";

class PageContactDetail extends Component {
  constructor(props) {
    super(props);
    this.sendMail.bind(this);
    this.callNumber.bind(this);
  }

  sendMail() {
    window.location.href = "mailto:contact@example.com";
  }

  callNumber() {
    window.location.href = "tel:+152534-468-854";
  }

  render() {
    return (
      <React.Fragment>
        <Topbar hasDarkTopBar={true} />

        <section
          className="vh-100 d-flex align-items-center"
          style={{ background: `url(${contactDetail}) center center` }}
        >
          <div className="bg-overlay bg-overlay-white"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg={{ size: 6, offset: 6 }} md={{ size: 7, offset: 5 }}>
                <div className="title-heading mt-5 pt-4">
                  <h1 className="heading">Let's talk about your portfolio</h1>
                  <p className="text-dark">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>

                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-m-md text-dark me-3"
                        />
                      </i>
                    </div>
                    <div className="flex-1 content">
                      <h5 className="title fw-bold mb-0">Email</h5>
                      <Link
                        to="#"
                        onClick={this.sendMail}
                        className="text-primary"
                      >
                        contact@example.com
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="phone"
                          className="fea icon-m-md text-dark me-3"
                        />
                      </i>
                    </div>
                    <div className="flex-1 content">
                      <h5 className="title fw-bold mb-0">Phone</h5>
                      <Link
                        to="#"
                        onClick={this.callNumber}
                        className="text-primary"
                      >
                        +152 534-468-854
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="map-pin"
                          className="fea icon-m-md text-dark me-3"
                        />
                      </i>
                    </div>
                    <div className="flex-1 content">
                      <h5 className="title fw-bold mb-0">Location</h5>
                      <Link to="#" className="video-play-icon text-primary">
                        View on Google map
                      </Link>
                    </div>
                  </div>

                  <ul className="list-unstyled social-icon mb-0 mt-4">
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="github"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="youtube"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="gitlab"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageContactDetail;
