import React, { Component } from "react";
import { Col } from "reactstrap";

class FeatureBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.features.map((feature) => (
          <Col md="4" xs="12" className="mt-5">
            <div
              className="features"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              <div className="image position-relative d-inline-block">
                <img
                  src={feature.image}
                  className="avatar avatar-small"
                  alt=""
                />
              </div>

              <div className="content mt-4">
                <h4 className="title-2">Design &amp; {feature.title}</h4>
                <p className="text-muted mb-0">{feature.desc}</p>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default FeatureBox;
