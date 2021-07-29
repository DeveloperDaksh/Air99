import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class FeatureTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col xs="12" className="text-center">
            <div className="section-title mb-4 pb-2">
            <span className={"badge bg-"+ this.props.badgeColor + " rounded-pill mb-2"}>{this.props.maintitle}</span>
              <h4 className="title mb-4">{this.props.title}</h4>
              <p className="text-muted para-desc mx-auto mb-0">
                Start working with{" "}
                <span className="text-primary fw-bold">Landrick</span>{" "}
                {this.props.desc}
              </p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default FeatureTitle;
