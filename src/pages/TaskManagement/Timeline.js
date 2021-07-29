import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import timeline from "../../assets/images/task/timeline.png";
import task from "../../assets/images/task/task.svg";

//Import Icons
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

export default class Timeline extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <img
                src={timeline}
                className="img-fluid shadow rounded-md"
                alt=""
              />
            </Col>

            <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h1 className="text-primary">
                  <i className="uil uil-schedule"></i>
                </h1>
                <h4 className="title mb-4">Track your timeline</h4>
                <p className="text-muted">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance: human perception is
                  tuned to recognize certain patterns and repetitions in texts.
                  If the distribution of letters visual impact.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>
                    <i>
                      <FeatherIcon
                        icon="arrow-right-circle"
                        className="fea icon-sm text-primary me-2"
                      />
                    </i>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li>
                    <i>
                      <FeatherIcon
                        icon="arrow-right-circle"
                        className="fea icon-sm text-primary me-2"
                      />
                    </i>
                    Create your own skin to match your brand
                  </li>
                </ul>
                <Link to="#" className="mt-3 h6 text-primary">
                  Find Out More <i className="mdi mdi-chevron-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6} className="order-1 order-md-2">
              <img src={task} className="img-fluid" alt="" />
            </Col>

            <Col
              lg={6}
              md={6}
              className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1"
            >
              <div className="section-title me-lg-5">
                <h1 className="text-primary">
                  <i className="uil uil-list-ui-alt"></i>
                </h1>
                <h4 className="title mb-4">
                  Plans and Collaborate <br /> your content
                </h4>
                <p className="text-muted">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance: human perception is
                  tuned to recognize certain patterns and repetitions in texts.
                  If the distribution of letters visual impact.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>
                    <FeatherIcon
                      icon="arrow-right-circle"
                      className="fea icon-sm text-primary me-2"
                    />
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li>
                    <FeatherIcon
                      icon="arrow-right-circle"
                      className="fea icon-sm text-primary me-2"
                    />
                    Create your own skin to match your brand
                  </li>
                </ul>
                <Link to="#" className="mt-3 h6 text-primary">
                  Find Out More <i className="mdi mdi-chevron-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
