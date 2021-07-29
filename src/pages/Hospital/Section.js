import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import doctors from '../../assets/images/illustrator/doctors-cuate.svg';

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 d-table w-100 home-wrapper overflow-hidden">
          <Container>
            <Row className="mt-5 align-items-center">
              <Col lg={6} md={6}>
                <div className="title-heading">
                  <span className="badge rounded-pill bg-soft-primary">
                    <b>Medical</b>
                  </span>
                  <h4 className="heading my-3">
                    We Take Care <br /> of Your{" "}
                    <span className="text-primary">Health</span>
                  </h4>
                  <p className="para-desc text-muted mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>

                  <div className="mt-3">
                    <Link
                      to="#"
                      className="btn btn-primary me-2 mt-2"
                    >
                      Find Doctors
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-soft-primary mt-2"
                    >
                      Book an Appointment
                    </Link>
                  </div>

                  <p className="text-muted mb-0 mt-3">
                    Don't have an account yet?{" "}
                    <Link
                      to="#"
                      className="text-primary ms-2 h6 mb-0"
                    >
                      Signup{" "}
                      <i><FeatherIcon icon="arrow-right"  className="fea icon-sm" /></i>
                    </Link>
                  </p>
                </div>
              </Col>

              <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="ms-lg-4">
                  <img
                    src={doctors}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
