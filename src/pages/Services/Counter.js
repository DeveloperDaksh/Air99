// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Counter Box
import CounterBox from "./CounterBox";

// Import images
import saas from "../../assets/images/saas/classic01.png";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          title: "Happy Client",
          end: 97,
          postFix: "%",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        },
        {
          title: "Awards",
          end: 15,
          postFix: "+",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        },
        {
          title: "Project Complete",
          end: 98,
          postFix: "%",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row className="align-items-center">
              <Col
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title me-lg-5">
                  <h4 className="title mb-4">
                    Get Notified About Importent Email
                  </h4>
                  <p className="text-muted">
                    This prevents repetitive patterns from impairing the overall
                    visual impression and facilitates the comparison of
                    different typefaces. Furthermore, it is advantageous when
                    the dummy text is relatively realistic.
                  </p>
                  <Link to="#" className="btn btn-outline-primary">
                    Start Now <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </div>
              </Col>

              <Col md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                <img src={saas} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center" id="counter">
              <CounterBox counters={this.state.counters} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Counter;
