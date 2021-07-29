import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// import Images
import amico from "../../assets/images/integration/interactiondesign-amico.svg";
import job1 from "../../assets/images/job/Circleci.svg";
import job2 from "../../assets/images/job/Codepen.svg";
import job3 from "../../assets/images/job/Discord.svg";
import job4 from "../../assets/images/job/Eslint.svg";

export default class Tools extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={5} md={6}>
              <img src={amico} className="img-fluid" alt="" />
            </Col>

            <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h4 className="title mb-4">
                  Integrate with monitoring & alerting tools
                </h4>

                <h5>
                  <i className="uil uil-arrow-circle-right text-primary me-1"></i>{" "}
                  Monitoring tool integrations
                </h5>
                <p className="text-muted para-desc ms-4 ps-2">
                  Integrate Statuspage with DataDog, New Relic, Librato or
                  Pingdom to update your page as soon as an issue is detected.
                </p>
                <h5>
                  <i className="uil uil-arrow-circle-right text-primary me-1"></i>{" "}
                  Alerting tool integrations
                </h5>
                <p className="text-muted para-desc ms-4 ps-2">
                  Integrate Statuspage with Opsgenie, PagerDuty, VictorOps, or
                  xMatters to update status directly from your alerting app.
                </p>
                <h5>
                  <i className="uil uil-arrow-circle-right text-primary me-1"></i>{" "}
                  Automation via API or email
                </h5>
                <p className="text-muted para-desc ms-4 ps-2">
                  Use our REST API to programmatically update your status page
                  by writing your own integration, or automatically update the
                  status of components by triggering en email with a subject
                  line containing the words “UP” or “DOWN”.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row>
            <Col lg={3} md={6} xs={12}>
              <Link to="#">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <img src={job1} className="avatar avatar-ex-sm" alt="" />
                  <div className="flex-1 ms-3">
                    <h4 className="title mb-0 text-dark">CircleCi</h4>
                    <p className="text-muted mb-0">Api Integration</p>
                  </div>
                </div>
              </Link>
            </Col>

            <Col lg={3} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <Link to="#">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <img src={job2} className="avatar avatar-ex-sm" alt="" />
                  <div className="flex-1 ms-3">
                    <h4 className="title mb-0 text-dark">Codepen</h4>
                    <p className="text-muted mb-0">Api Integration</p>
                  </div>
                </div>
              </Link>
            </Col>

            <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <Link to="#">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <img src={job3} className="avatar avatar-ex-sm" alt="" />
                  <div className="flex-1 ms-3">
                    <h4 className="title mb-0 text-dark">Discard</h4>
                    <p className="text-muted mb-0">Api Integration</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <Link to="#">
                <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                  <img src={job4} className="avatar avatar-ex-sm" alt="" />
                  <div className="flex-1 ms-3">
                    <h4 className="title mb-0 text-dark">Eslint</h4>
                    <p className="text-muted mb-0">Api Integration</p>
                  </div>
                </div>
              </Link>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
