import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import blog1 from "../../assets/images/blog/01.jpg";
import blog2 from "../../assets/images/blog/02.jpg";
import blog3 from "../../assets/images/blog/03.jpg";
import blog4 from "../../assets/images/blog/04.jpg";
import blog5 from "../../assets/images/blog/05.jpg";
import blog6 from "../../assets/images/blog/06.jpg";

export default class PageHistory extends Component {
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
        <section className="bg-half bg-light d-table w-100">
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level">
                  <h4 className="title"> Company Story </h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/index">Landrick</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="#">Company</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          History
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
            <Row className="justify-content-center">
              <Col lg={9}>
                <div className="main-icon rounded-pill text-primary text-center mt-4 pt-2">
                  <i>
                    <FeatherIcon icon="star" className="fea icon-md-sm" />
                  </i>
                </div>
                <div className="timeline-page pt-2 position-relative">
                  <div className="timeline-item mt-4">
                    <Row>
                      <Col lg={6} md={6} sm={6}>
                        <div className="duration date-label-left border rounded p-2 px-4 position-relative shadow">
                          2002
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <Card className="event event-description-right rounded shadow border-0 overflow-hidden float-start">
                          <img src={blog1} className="img-fluid" alt="" />
                          <CardBody>
                            <h5 className="mb-0 text-capitalize">Founding</h5>
                            <p className="mt-3 mb-0 text-muted">
                              The generated injected humour, or
                              non-characteristic words etc. Cum sociis natoque
                              penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus. Donec quam felis,
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>

                  <div className="timeline-item mt-4">
                    <Row>
                      <Col lg={6} md={6} sm={6} className="order-sm-1 order-2">
                        <Card className="event event-description-left rounded shadow border-0 overflow-hidden float-start">
                          <img src={blog2} className="img-fluid" alt="" />
                          <CardBody>
                            <h5 className="mb-0 text-capitalize">
                              Partnership
                            </h5>
                            <p className="mt-3 mb-0 text-muted">
                              The generated injected humour, or
                              non-characteristic words etc. Cum sociis natoque
                              penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus. Donec quam felis,
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg={6} md={6} sm={6} className="order-sm-2 order-1">
                        <div className="duration duration-right rounded border p-2 px-4 position-relative shadow text-start">
                          2006
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="timeline-item mt-4">
                    <Row>
                      <Col lg={6} md={6} sm={6}>
                        <div className="duration date-label-left border rounded p-2 px-4 position-relative shadow">
                          2012
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <Card className="event event-description-right rounded shadow border-0 overflow-hidden float-start">
                          <img src={blog3} className="img-fluid" alt="" />
                          <CardBody>
                            <h5 className="mb-0 text-capitalize">Secuirty</h5>
                            <p className="mt-3 mb-0 text-muted">
                              The generated injected humour, or
                              non-characteristic words etc. Cum sociis natoque
                              penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus. Donec quam felis,
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>

                  <div className="timeline-item mt-4">
                    <Row>
                      <Col lg={6} md={6} sm={6} className="order-sm-1 order-2">
                        <Card className="event event-description-left rounded shadow border-0 overflow-hidden float-start">
                          <img src={blog4} className="img-fluid" alt="" />
                          <CardBody>
                            <h5 className="mb-0 text-capitalize">Branch</h5>
                            <p className="mt-3 mb-0 text-muted">
                              The generated injected humour, or
                              non-characteristic words etc. Cum sociis natoque
                              penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus. Donec quam felis,
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg={6} md={6} sm={6} className="order-sm-2 order-1">
                        <div className="duration duration-right rounded border p-2 px-4 position-relative shadow text-start">
                          2013
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="timeline-item mt-4">
                    <Row>
                      <Col lg={6} md={6} sm={6}>
                        <div className="duration date-label-left border rounded p-2 px-4 position-relative shadow">
                          2016
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <Card className="event event-description-right rounded shadow border-0 overflow-hidden float-start">
                          <img src={blog5} className="img-fluid" alt="" />
                          <CardBody>
                            <h5 className="mb-0 text-capitalize">Global</h5>
                            <p className="mt-3 mb-0 text-muted">
                              The generated injected humour, or
                              non-characteristic words etc. Cum sociis natoque
                              penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus. Donec quam felis,
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>

                  <div className="timeline-item mt-4">
                    <Row>
                      <Col lg={6} md={6} sm={6} className="order-sm-1 order-2">
                        <Card className="event event-description-left rounded shadow border-0 overflow-hidden float-start">
                          <img src={blog6} className="img-fluid" alt="" />
                          <CardBody>
                            <h5 className="mb-0 text-capitalize">Branches</h5>
                            <p className="mt-3 mb-0 text-muted">
                              The generated injected humour, or
                              non-characteristic words etc. Cum sociis natoque
                              penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus. Donec quam felis,
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg={6} md={6} sm={6} className="order-sm-2 order-1">
                        <div className="duration duration-right rounded border p-2 px-4 position-relative shadow text-start">
                          2018
                        </div>
                      </Col>
                    </Row>
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
