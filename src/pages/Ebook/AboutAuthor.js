import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import FeatherIcon from "feather-icons-react";

//Import Images
import auther from "../../assets/images/book/auther.jpg";
import client05 from "../../assets/images/client/05.jpg";

class AboutAuthor extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="mt-100 mt-60">
          <div
            className="bg-light py-5 rounded shadow"
            style={{ background: `url(${auther}) center center` }}
          >
            <Container>
              <Row className="align-items-center">
                <Col lg={6} md={6}>
                  <div className="section-title text-center">
                    <img
                      src={client05}
                      className="img-fluid rounded-circle shadow-lg"
                      alt="Landrick"
                    />
                  </div>
                </Col>

                <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="ms-md-5">
                    <div>
                      <p className="text-muted">
                        This prevents repetitive patterns from impairing the
                        overall visual impression and facilitates the comparison
                        of different typefaces. Furthermore, it is advantageous
                        when the dummy text is relatively realistic so that the
                        layout impression of the final publication is not
                        compromised.
                      </p>
                      <p className="text-muted">
                        The comparison of different typefaces. Furthermore, it
                        is advantageous when the dummy text is relatively
                        realistic so that the layout impression of the final
                        publication is not compromised.
                      </p>

                      <h5>Cristina Murphy</h5>

                      <ul className="list-unstyled social-icon mb-0 mt-3">
                        <li className="list-inline-item me-1">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="facebook"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                        <li className="list-inline-item me-1">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="instagram"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                        <li className="list-inline-item me-1">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="twitter"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="linkedin"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                      </ul>
                    </div>
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

export default AboutAuthor;
