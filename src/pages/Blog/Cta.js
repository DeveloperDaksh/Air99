import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import bgImg from "../../assets/images/3.jpg";

//Import Icons
import FeatherIcon from "feather-icons-react";

export default class Cta extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="mt-100 mt-60">
          <div
            className="rounded-md shadow-md py-5 position-relative"
            style={{ background: `url(${bgImg}) center center` }}
          >
            <div className="bg-overlay rounded-md"></div>
            <Container className="py-5">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title text-center">
                    <h2 className="fw-bold text-white title-dark mb-4 pb-2">
                      People are podcasting <br /> all over the world
                    </h2>
                    <Link to="#" className="btn btn-primary">
                      Read More{" "}
                      <i>
                        <FeatherIcon
                          icon="arrow-right"
                          className="fea icon-sm"
                        />
                      </i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
