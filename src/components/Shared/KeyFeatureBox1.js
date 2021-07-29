import React, { Component } from "react";
import { Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class KeyFeatureBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.keyfeatures.map((feature, key) => (
          <Col lg="4" md="6" key={key} className="mt-4 pt-2" name="keyfeature">
            <div className="d-flex key-feature align-items-center p-3 rounded shadow">
              <div className="icon text-center rounded-circle me-3">
                <i>
                  <FeatherIcon
                    icon={feature.icon}
                    className="fea icon-ex-md text-primary"
                  />
                </i>
              </div>
              <div className="flex-1">
                <h4 className="title mb-0">{feature.title}</h4>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default KeyFeatureBox;
