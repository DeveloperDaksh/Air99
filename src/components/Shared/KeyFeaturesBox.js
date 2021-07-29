import React, { Component } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

class KeyFeaturesBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.keyFeatures.map((feature, key) => (
          <Col key={key} lg={4} md={6} className="mt-4 pt-2">
            <Link
              to={feature.link}
              className="d-flex key-feature align-items-center p-3 rounded shadow"
            >
              <div className="icon text-center rounded-circle h4 text-primary me-3 mb-0">
                <i className={feature.icon}></i>
              </div>
              <div className="flex-1">
                <h4 className="title text-dark mb-0">{feature.title}</h4>
              </div>
            </Link>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default KeyFeaturesBox;
