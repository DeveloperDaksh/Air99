import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";

//Import Image
import img from "../../assets/images/onepage/bg.png";
import onepage from "../../assets/images/onepage/onepage.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-home bg-light d-flex align-items-center"
          style={{ background: `url(${img}) center center`, height: "auto" }}
          id="home"
        >
          <Container>
            <Row className="justify-content-center">
              <Col md="9" className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
                <div className="title-heading margin-top-100">
                  <h1
                    className="heading mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    Website Load Faster, and Grow Your{" "}
                    <span className="text-primary">SEO</span>
                  </h1>
                  <p
                    className="para-desc mx-auto text-muted"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                  >
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div
                    className="text-center subcribe-form mt-4 pt-2"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    <Form>
                      <FormGroup className="mb-0">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="shadow bg-white rounded-pill"
                          required
                          placeholder="Email Address"
                        />
                        <Button
                          type="submit"
                          color="primary"
                          className="btn-pills"
                        >
                          Get Started
                        </Button>
                      </FormGroup>
                    </Form>
                  </div>
                </div>

                <div
                  className="home-dashboard onepage-hero"
                  data-aos="fade-up"
                  data-aos-duration="2200"
                >
                  <img src={onepage} alt="" className="img-fluid" />
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
