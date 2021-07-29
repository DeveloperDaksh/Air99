import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "reactstrap";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 bg-light d-table w-100">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10">
                <div className="title-heading text-center mt-5 pt-3">
                  <Alert
                    color="light"
                    className="alert-pills"
                    role="alert"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <span className="badge rounded-pill bg-success me-1">
                      Support
                    </span>
                    <span className="content"> Customer Support 24/7</span>
                  </Alert>
                  <h1
                    className="heading mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                  >
                    How Can We Help You ?
                  </h1>
                  <p
                    className="para-desc mx-auto text-muted"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div
                    className="subcribe-form mt-4 pt-2"
                    data-aos="fade-up"
                    data-aos-duration="2200"
                  >
                    <Form>
                      <div className="mb-0">
                        <input
                          type="text"
                          id="help"
                          name="name"
                          className="form-control bg-white rounded-pill"
                          required
                          placeholder="Search the help center"
                        />
                        <Button
                          type="submit"
                          color="primary"
                          className="btn btn-pills btn-primary"
                        >
                          Search
                        </Button>
                      </div>
                    </Form>
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

export default Section;
