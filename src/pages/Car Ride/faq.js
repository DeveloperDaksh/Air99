import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class Faq extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* Render Section Title */}
            <SectionTitle
              title="Have Question ?"
              desc="that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row>
              <Row>
                <Col md="6" xs="12" className="mt-4 pt-2">
                  <div className="d-flex">
                    <i>
                      <FeatherIcon
                        icon="help-circle"
                        className="fea icon-ex-md text-primary me-2 mt-1"
                      />
                    </i>
                    <div className="flex-1">
                      <h5 className="mt-0">
                        How our <span className="text-primary">Landrick</span>{" "}
                        work ?
                      </h5>
                      <p className="answer text-muted mb-0">
                        Due to its widespread use as filler text for layouts,
                        non-readability is of great importance: human perception
                        is tuned to recognize certain patterns and repetitions
                        in texts.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md="6" xs="12" className="mt-4 pt-2">
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
                        If the distribution of letters and 'words' is random,
                        the reader will not be distracted from making a neutral
                        judgement on the visual impact
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md="6" xs="12" className="mt-4 pt-2">
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
                        How to make unlimited data entry ?
                      </h5>
                      <p className="answer text-muted mb-0">
                        Furthermore, it is advantageous when the dummy text is
                        relatively realistic so that the layout impression of
                        the final publication is not compromised.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md="6" xs="12" className="mt-4 pt-2">
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
                        Is <span className="text-primary">Landrick</span> safer
                        to use with my account ?
                      </h5>
                      <p className="answer text-muted mb-0">
                        The most well-known dummy text is the 'Lorem Ipsum',
                        which is said to have originated in the 16th century.
                        Lorem Ipsum is composed in a pseudo-Latin language which
                        more or less corresponds to 'proper' Latin.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Row>

            <Row className="mt-5 pt-lg-3 justify-content-center">
              <Col xs="12" className="text-center">
                <div className="section-title">
                  <h4 className="title mb-4">Download Our App Now !</h4>
                  <p className="text-muted para-desc mx-auto">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                  <div className="mt-4 pt-2">
                    <div className="text-center subcribe-form">
                      <Form className="mb-4">
                        <Input
                          name="number"
                          id="number"
                          type="number"
                          className="form-control rounded-pill"
                          placeholder="Your Cell Number. :"
                          required=""
                          aria-describedby="cellnumber"
                        />
                        <Button
                          color="primary"
                          className="btn btn-pills btn-primary submitBnt"
                          type="submit"
                          id="cellnumber"
                        >
                          Send App Link
                                </Button>
                      </Form>
                    </div>

                    <p className="text-muted">Or</p>

                    <Link to="" className="btn btn-primary mt-2 me-2">
                      <i className="mdi mdi-apple"></i> App Store
                    </Link>
                    <Link to="" className="btn btn-outline-primary mt-2 ms-1">
                      <i className="mdi mdi-google-play"></i> Play Store
                    </Link>
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

export default Faq;
