import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";

//Import Images
import crypto from "../../assets/images/crypto/crypto.svg";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-half-260 bg-light bg-animation-left crypto-home d-table w-100">
          <Container className="position-relative" style={{ zIndex: "1" }}>
            <Row className="mt-5 justify-content-center">
              <Col lg="10">
                <div className="title-heading text-center">
                  <img src={crypto} height="136" className="mover" alt="" />
                  <h1 className="heading text-primary text-shadow-title mt-4 mb-3">
                    Buy And Sale Cryptocurrency
                  </h1>
                  <p className="para-desc mx-auto text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="text-center subcribe-form mt-4 pt-2">
                    <Form>
                      <div className="mb-3">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="border bg-white rounded-pill"
                          required
                          style={{ opacity : '0.75'}}
                          placeholder="E-mail :"
                        />
                        <Button
                          type="submit" 
                          className="btn btn-pills btn-primary"
                        >
                          Submit
                          <i className="uil uil-arrow-right"></i>
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
