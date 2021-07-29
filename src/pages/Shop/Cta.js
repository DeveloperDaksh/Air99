import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import ctaImg from "../../assets/images/shop/cta.jpg";

class Cta extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="mt-100 mt-60">
          <div
            className="rounded py-5"
            style={{ background: `url(${ctaImg}) fixed` }}
          >
            <Container>
              <Row>
                <Col xs={12}>
                  <div className="section-title">
                    <h2 className="fw-bold mb-4">
                      End of Season Clearance <br /> Sale upto 30%
                    </h2>
                    <p className="para-desc para-white text-muted mb-0">
                      Launch your campaign and benefit from our expertise on
                      designing and managing conversion centered bootstrap v5 html
                      page.
                    </p>
                    <div className="mt-4">
                      <Link to="#" className="btn btn-primary">
                        Shop Now
                      </Link>
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

export default Cta;
