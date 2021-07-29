import React, { Component } from "react";
import { Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class FeatureBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.features.map((feature, key) => (
          <Col key={key} md="6" xs="12">
            <div className="d-flex features pt-4 pb-4">
              <div className="icon text-center rounded-circle text-primary me-3 mt-2">
                <i>
                  <FeatherIcon
                    icon={feature.icon}
                    className="fea icon-ex-md text-primary"
                  />
                </i>
              </div>
              <div className="flex-1">
                <h4 className="title">{feature.title}</h4>
                <p className="text-muted para mb-0">{feature.desc}</p>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default FeatureBox;
