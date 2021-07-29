import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

//Import images
import cta from '../../assets/images/seo/cta.png';

export default class Website extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="mt-100 mt-60">
          <div
            className="bg-primary rounded shadow py-5"
            style={{ background: `url(${cta}) center center` }}
          >
            <Container className="my-md-5">
              <Row>
                <Col xs={12} className="text-center">
                  <div className="section-title">
                    <h4 className="title text-white title-dark mb-4">
                      Check your website SEO
                    </h4>
                    <p className="text-white-50 para-desc mb-0 mx-auto">
                      Start working with Landrick that can provide everything
                      you need to generate awareness, drive traffic, connect.
                    </p>
                    <div className="subcribe-form mt-4 pt-2">
                      <form>
                        <div className="form-group mb-0">
                          <input
                            type="url"
                            id="url"
                            className="border bg-white rounded-lg"
                            style={{opacity : '0.85'}}
                            required
                            placeholder="http://themesbrand.com"
                          />
                          <button
                            type="submit"
                            className="btn btn-pills btn-primary"
                          >
                            Get Started
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
