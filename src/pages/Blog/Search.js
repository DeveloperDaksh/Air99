import React, { Component } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";

export default class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="features-absolute blog-search">
                <Row className="justify-content-center">
                  <Col md={10}>
                    <div className="subcribe-form">
                      <Form style={{ maxWidth: "800px" }}>
                        <FormGroup>
                          <input
                            type="text"
                            id="course"
                            name="name"
                            className="rounded-pill shadow-md bg-white"
                            placeholder="Search keywords..."
                          />
                          <Button
                            type="submit"
                            className="btn btn-pills btn-primary"
                          >
                            Search
                          </Button>
                        </FormGroup>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
