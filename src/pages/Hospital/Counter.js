import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";

//Import Images
import img1 from "../../assets/images/client/amazon.svg";
import img2 from "../../assets/images/client/google.svg";
import img3 from "../../assets/images/client/lenovo.svg";
import img4 from "../../assets/images/client/paypal.svg";
import img5 from "../../assets/images/client/shopify.svg";
import img6 from "../../assets/images/client/spotify.svg";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          title: "Positive feedback",
          end: 99.0,
          postFix: ".00%",
          desc: "From Doctors",
        },
        {
          title: "Experienced Clinics",
          end: 25,
          postFix: "+",
          desc: "High Qualified",
        },
        {
          title: "Questions & Answers",
          end: 1100,
          postFix: "+",
          desc: "Your Questions",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section pt-0">
          <Container>
            <div className="position-relative" style={{ zIndex: "1" }}>
              <div className="rounded shadow bg-white p-4">
                <Row id="counter">
                  {this.state.counters.map((counter, key) => (
                    <Col md={4} key={key}>
                      <div className="counter-box text-center">
                        <h1 className="mb-0 mt-3">
                          <span className="counter-value">
                            <CountUp end={counter.end} duration={8} />
                          </span>
                          {counter.postFix}
                        </h1>
                        <h5 className="counter-head mb-1">{counter.title}</h5>
                        <p className="text-muted mb-0">{counter.desc}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
              <div className="row justify-content-center pt-4">
                <Col lg={2} md={2} xs={6} className="text-center py-4 pb-md-0">
                  <img
                    src={img1}
                    className="avatar avatar-ex-sm"
                    alt=""
                  />
                </Col>

                <Col lg={2} md={2} xs={6} className="text-center py-4 pb-md-0">
                  <img
                    src={img2}
                    className="avatar avatar-ex-sm"
                    alt=""
                  />
                </Col>

                <Col lg={2} md={2} xs={6} className="text-center py-4 pb-md-0">
                  <img
                    src={img3}
                    className="avatar avatar-ex-sm"
                    alt=""
                  />
                </Col>

                <Col lg={2} md={2} xs={6} className="text-center py-4 pb-md-0">
                  <img
                    src={img4}
                    className="avatar avatar-ex-sm"
                    alt=""
                  />
                </Col>

                <Col lg={2} md={2} xs={6} className="text-center py-4 pb-md-0">
                  <img
                    src={img5}
                    className="avatar avatar-ex-sm"
                    alt=""
                  />
                </Col>

                <Col lg={2} md={2} xs={6} className="text-center py-4 pb-md-0">
                  <img
                    src={img6}
                    className="avatar avatar-ex-sm"
                    alt=""
                  />
                </Col>
              </div>
            </div>
            <div className="feature-posts-placeholder bg-primary"></div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Counter;
