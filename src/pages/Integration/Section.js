import React, { Component } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "reactstrap";

// import bg-Image
import bg_img from "../../assets/images/integration/bg.png";
import integration from "../../assets/images/integration/hero.png";

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-home bg-primary d-flex align-items-center"
          style={{ background: `url(${bg_img}) center center`, height: "auto" }}
          id="home"
        >
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
                <div className="title-heading">
                  <span className="badge rounded-pill bg-success">
                    Integration
                  </span>
                  <h4 className="heading text-white title-dark my-3">
                    The future is too <br /> <b>Interesting</b> and to be{" "}
                    <b>Predictable</b>.
                  </h4>
                  <p className="para-desc mx-auto text-white-50">
                    Explore and learn more about everything from machine
                    learning and global payments to scaling your team.
                  </p>
                  <div className="subcribe-form mt-4 pt-2">
                    <Form>
                      <FormGroup>
                        <input
                          type="url"
                          id="url"
                          className="border bg-white rounded-lg"
                          style={{ opacity: "0.85" }}
                          required
                          placeholder="https://themesbrand.com"
                        />
                        <Button
                          type="submit"
                          className="btn btn-pills btn-primary"
                        >
                          Get Started
                        </Button>
                      </FormGroup>
                    </Form>
                  </div>
                </div>

                <Row className="justify-content-center">
                  <Col lg={8} md={10}>
                    <div className="home-dashboard">
                      <img src={integration} alt="" className="img-fluid" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape integration-hero overflow-hidden text-light"></div>
        </div>
      </React.Fragment>
    );
  }
}
