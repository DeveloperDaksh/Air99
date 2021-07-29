import React, { Component } from "react";
import { Col } from "reactstrap";

class ServiceBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.services.map((service, key) => (
          <Col lg="3" md="4" xs="6" key={key} className="mt-4 pt-2">
            <div className="features text-center pt-3 pb-3">
              <i className={service.icon}></i>
              <div className="content mt-3">
                <h5 className="title-2">{service.title}</h5>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ServiceBox;
 