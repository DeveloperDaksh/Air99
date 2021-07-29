import React, { Component } from "react";
import { Col } from "reactstrap";

class FeatureBoxSmall extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.features.map((feature, key) => (
          <Col md="3" xs="6" key={key} className="p-4 text-center">
            <img src={feature.image} height="45" alt="" />
            <h5 className="mt-2">{feature.title}</h5>
            <p className="text-muted mb-0">{feature.desc}</p>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default FeatureBoxSmall;
