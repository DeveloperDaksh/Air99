import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";

//Import Images
import amazon from "../../assets/images/client/amazon.svg";
import google from "../../assets/images/client/google.svg";
import lenovo from "../../assets/images/client/lenovo.svg";
import paypal from "../../assets/images/client/paypal.svg";

export default class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: [1000, 1402],
    }
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row>
            <Col lg={6}>
              <div className="section-title text-center text-lg-start">
                <h4 className="title mb-4">
                  Trusted client by over <br />{" "}
                  <span className="text-primary">10000+</span> of the world’s
                </h4>
                <p className="text-muted mb-0 mx-auto para-desc">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <Row>
                <Col md={6} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div className="content text-center">
                    <h1 className="mb-0">
                      <span className="counter-value" >
                        <CountUp end={1000} duration={8} />
                      </span>
                      +
                    </h1>
                    <ul className="list-unstyled mb-0 h5">
                      <li className="list-inline-item">
                        <i className="uil uil-heart text-danger"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="uil uil-heart text-danger"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="uil uil-heart text-danger"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="uil uil-heart text-danger"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="uil uil-heart text-danger"></i>
                      </li>
                    </ul>
                    <h6>Trusted Users</h6>
                  </div>
                </Col>

                <Col md={6} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div className="content text-center">
                    <h1 className="mb-0">
                      <span className="counter-value">
                      <CountUp end={1402} duration={8} />
                      </span>
                      +
                    </h1>
                    <ul className="list-unstyled mb-0 h5">
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                      </li>
                    </ul>
                    <h6>Users Review</h6>
                  </div>
                </Col>
              </Row>

              <Row className="justify-ontent-center mt-4">
                <Col lg={3} md={3} xs={6} className="text-center py-4">
                  <img
                    src={amazon}
                    className="avatar avatar-ex-sm"
                    alt=""
                  />
                </Col>

                <div className="col-lg-3 col-md-3 col-6 text-center py-4">
                  <img
                    src={google}
                    className="avatar avatar-ex-sm"
                    alt=""
                  />
                </div>

                <div className="col-lg-3 col-md-3 col-6 text-center py-4">
                  <img
                    src={lenovo}
                    className="avatar avatar-ex-sm"
                    alt=""
                  />
                </div>

                <div className="col-lg-3 col-md-3 col-6 text-center py-4">
                  <img
                    src={paypal}
                    className="avatar avatar-ex-sm"
                    alt=""
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
