import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

// import images
import envelope from "../../assets/images/illustrator/envelope.svg";

//Import Icons
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

export default class SmartPhone extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={5} md={5} xs={12}>
              <img
                src={envelope}
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </Col>

            <div className="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title">
                <div className="alert alert-light alert-pills" role="alert">
                  <span className="badge bg-primary rounded-pill me-1">
                    Apps
                  </span>
                  <span className="content">
                    Download now{" "}
                    <i>
                      <FeatherIcon
                        icon="chevron-right"
                        className="fea icon-sm"
                      />{" "}
                    </i>
                  </span>
                </div>
                <h4 className="title mb-4">
                  Available for your <br /> Smartphones
                </h4>
                <p className="text-muted para-desc mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
                <div className="my-4">
                  <Link to="#" className="btn btn-lg btn-dark mt-2 me-2">
                    <i className="uil uil-apple"></i> App Store
                  </Link>
                  <Link to="#" className="btn btn-lg btn-dark mt-2">
                    <i className="uil uil-google-play"></i> Play Store
                  </Link>
                </div>

                <div className="d-inline-block">
                  <div className="pt-4 d-flex align-items-center border-top">
                    <i>
                      <FeatherIcon
                        icon="smartphone"
                        className="fea icon-md me-2 text-primary"
                      />{" "}
                    </i>
                    <div className="content">
                      <h6 className="mb-0">
                        Install app now on your cellphones
                      </h6>
                      <Link to="#" className="text-primary">
                        Learn More <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
