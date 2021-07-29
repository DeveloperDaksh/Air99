import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

class Faq extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-4">Frequently Asked Questions</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>{" "}
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6} xs={12} className="mt-4 pt-2">
              <div className="d-flex">
                <i>
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
                </i>
                <div className="flex-1">
                  <h5 className="mt-0">
                    How our <span className="text-primary">Landrick</span> work
                    ?
                  </h5>
                  <p className="answer text-muted mb-0">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance: human perception is
                    tuned to recognize certain patterns and repetitions in
                    texts.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6} xs={12} className="mt-4 pt-2">
              <div className="d-flex">
                <i>
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
                </i>
                <div className="flex-1">
                  <h5 className="mt-0">
                    {" "}
                    What is the main process open account ?
                  </h5>
                  <p className="answer text-muted mb-0">
                    If the distribution of letters and 'words' is random, the
                    reader will not be distracted from making a neutral
                    judgement on the visual impact
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6} xs={12} className="mt-4 pt-2">
              <div className="d-flex">
                <i>
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
                </i>
                <div className="flex-1">
                  <h5 className="mt-0"> How to make unlimited data entry ?</h5>
                  <p className="answer text-muted mb-0">
                    Furthermore, it is advantageous when the dummy text is
                    relatively realistic so that the layout impression of the
                    final publication is not compromised.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6} xs={12} className="mt-4 pt-2">
              <div className="d-flex">
                <i>
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
                </i>
                <div className="flex-1">
                  <h5 className="mt-0">
                    {" "}
                    Is <span className="text-primary">Landrick</span> safer to
                    use with my account ?
                  </h5>
                  <p className="answer text-muted mb-0">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century. Lorem Ipsum
                    is composed in a pseudo-Latin language which more or less
                    corresponds to 'proper' Latin.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="my-md-5 pt-md-3 my-4 pt-2 pb-lg-5 mt-sm-0 pt-sm-0 justify-content-center">
            <Col xs={12} className="text-center">
              <div className="section-title">
                <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                <p className="text-muted para-desc mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
                <Link to="page-contact-two" className="btn btn-primary mt-4">
                  <i className="mdi mdi-phone"></i> Contact us
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Faq;
