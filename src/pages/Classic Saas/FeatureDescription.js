import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Images
import client01 from "../../assets/images/client/01.jpg";
import client02 from "../../assets/images/client/02.jpg";
import client03 from "../../assets/images/client/03.jpg";
import client04 from "../../assets/images/client/04.jpg";
import client05 from "../../assets/images/client/05.jpg";
import client06 from "../../assets/images/client/06.jpg";

class FeatureDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 4,
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
    };
    this.updateWindowSize.bind(this);
  }

  updateWindowSize = () => {
    if (window.outerWidth >= 1230) {
      this.setState({ itemCount: 3, cols: 4 });
    } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
      this.setState({ itemCount: 2, cols: 6 });
    } else if (window.outerWidth <= 970) {
      this.setState({ itemCount: 1, cols: 12 });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
    this.updateWindowSize();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }

  render() {
    return (
      <React.Fragment>
        <Container className="pb-5 mb-md-5 mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg="7">
              <div className="saas-feature-shape-left position-relative">
                <img
                  src={this.props.image1}
                  className="img-fluid mx-auto d-block rounded shadow"
                  alt=""
                />
              </div>
            </Col>

            <Col lg="5" className="mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="section-title ms-lg-4">
                <h1 className="title mb-3">
                  Build your site for using this app
                </h1>
                <p className="para-desc text-muted">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap v5 html
                  page.
                </p>
                <div
                  id="customer-testi"
                  className="owl-carousel owl-theme owl-loaded owl-drag"
                >
                  <div className="owl-stage-outer">
                    <div className="owl-stage">
                      <Row>
                        {this.state.step1 === true ? (
                          <div className="customer-testi py-3">
                            <img
                              src={client01}
                              className="img-fluid avatar avatar-small rounded-circle shadow"
                              alt="Landrick"
                            />
                            <p className="text-muted mt-4">
                              " It seems that only fragments of the original
                              text remain in the Lorem Ipsum texts used today. "
                            </p>
                            <h6 className="text-primary">- Thomas Israel</h6>
                          </div>
                        ) : null}
                        {this.state.step2 === true ? (
                          <div className="customer-testi py-3">
                            <img
                              src={client02}
                              className="img-fluid avatar avatar-small rounded-circle shadow"
                              alt="Landrick"
                            />
                            <p className="text-muted mt-4">
                              " It seems that only fragments of the original
                              text remain in the Lorem Ipsum texts used today. "
                            </p>
                            <h6 className="text-primary">- Carl Oliver</h6>
                          </div>
                        ) : null}
                        {this.state.step3 === true ? (
                          <div className="customer-testi py-3">
                            <img
                              src={client03}
                              className="img-fluid avatar avatar-small rounded-circle shadow"
                              alt="Landrick"
                            />
                            <p className="text-muted mt-4">
                              " It seems that only fragments of the original
                              text remain in the Lorem Ipsum texts used today. "
                            </p>
                            <h6 className="text-primary">- Barbara McIntosh</h6>
                          </div>
                        ) : null}
                        {this.state.step4 === true ? (
                          <div className="customer-testi py-3">
                            <img
                              src={client04}
                              className="img-fluid avatar avatar-small rounded-circle shadow"
                              alt="Landrick"
                            />
                            <p className="text-muted mt-4">
                              " It seems that only fragments of the original
                              text remain in the Lorem Ipsum texts used today. "
                            </p>
                            <h6 className="text-primary">- Thomas Israel</h6>
                          </div>
                        ) : null}
                        {this.state.step5 === true ? (
                          <div className="customer-testi py-3">
                            <img
                              src={client05}
                              className="img-fluid avatar avatar-small rounded-circle shadow"
                              alt="Landrick"
                            />
                            <p className="text-muted mt-4">
                              " It seems that only fragments of the original
                              text remain in the Lorem Ipsum texts used today. "
                            </p>
                            <h6 className="text-primary">- Jill Webb</h6>
                          </div>
                        ) : null}
                        {this.state.step6 === true ? (
                          <div className="customer-testi py-3">
                            <img
                              src={client06}
                              className="img-fluid avatar avatar-small rounded-circle shadow"
                              alt="Landrick"
                            />
                            <p className="text-muted mt-4">
                              " It seems that only fragments of the original
                              text remain in the Lorem Ipsum texts used today. "
                            </p>
                            <h6 className="text-primary">- Christa Smith</h6>
                          </div>
                        ) : null}
                      </Row>
                    </div>
                  </div>
                  <div className="tns-nav">
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          step1: true,
                          step2: false,
                          step3: false,
                          step4: false,
                          step5: false,
                          step6: false,
                        });
                      }}
                      className={
                        this.state.step1
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          step1: false,
                          step2: true,
                          step3: false,
                          step4: false,
                          step5: false,
                          step6: false,
                        });
                      }}
                      className={
                        this.state.step2
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          step1: false,
                          step2: false,
                          step3: true,
                          step4: false,
                          step5: false,
                          step6: false,
                        });
                      }}
                      className={
                        this.state.step3
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          step1: false,
                          step2: false,
                          step3: false,
                          step4: true,
                          step5: false,
                          step6: false,
                        });
                      }}
                      className={
                        this.state.step4
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          step1: false,
                          step2: false,
                          step3: false,
                          step4: false,
                          step5: true,
                          step6: false,
                        });
                      }}
                      className={
                        this.state.step5
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          step1: false,
                          step2: false,
                          step3: false,
                          step4: false,
                          step5: false,
                          step6: true,
                        });
                      }}
                      className={
                        this.state.step6
                          ? "tns-nav-active"
                          : "tns-nav-inactive"
                      }
                    ></button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg={{ size: 5, order: 1 }}
              xs={{ order: 2 }}
              className="mt-4 pt-2 mt-lg-0 pt-lg-0"
            >
              <div className="section-title me-lg-4">
                <h1 className="title mb-3">Why Choose us ?</h1>
                <p className="para-desc text-muted">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap v5 html
                  page.
                </p>

                <Row>
                  {this.props.facilities.map((facility, key) => (
                    <Col xs="12" key={key}>
                      <div className="d-flex align-items-center pt-4">
                        <h2>
                          <i>
                            <FeatherIcon
                              icon={facility.icon}
                              className="fea icon-m-md text-primary"
                            />
                          </i>
                        </h2>
                        <div className="ms-3">
                          <h5> {facility.title} </h5>
                          <p className="text-muted mb-0">{facility.desc}</p>
                        </div>
                      </div>
                    </Col>
                  ))}

                  <Col xs="12" className="pt-4">
                    <Link to="" className="btn btn-outline-primary">
                      Install Now <i className="mdi mdi-chevron-right"></i>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={{ size: 7, order: 2 }} xs={{ order: 1 }}>
              <div className="saas-feature-shape-right position-relative">
                <img
                  src={this.props.image1}
                  className="img-fluid mx-auto d-block rounded shadow"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default FeatureDescription;
