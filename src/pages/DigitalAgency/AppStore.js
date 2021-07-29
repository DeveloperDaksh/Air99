import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import userInterface from "../../assets/images/illustrator/user_interface.svg";

class AppStore extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section border-bottom bg-light">
          <Container>
            <Row className="align-items-center">
              <Col
                lg={5}
                md={{ size: 5, order: 2 }}
                xs={{ size: 12, order: 1 }}
              >
                <img
                  src={userInterface}
                  className="img-fluid mx-auto d-block"
                  alt="Landrick"
                />
              </Col>

              <Col
                lg={7}
                md={{ size: 7, order: 1 }}
                xs={{ size: 12, order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title">
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
                      <i className="mdi mdi-apple"></i> App Store
                    </Link>
                    <Link to="#" className="btn btn-lg btn-dark mt-2 ms-1">
                      <i className="mdi mdi-google-play"></i> Play Store
                    </Link>
                  </div>

                  <div className="d-inline-block">
                    <div className="pt-4 d-flex align-items-center border-top">
                      <i>
                        <FeatherIcon
                          icon="smartphone"
                          className="fea icon-md me-2 text-primary"
                        />
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
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default AppStore;
