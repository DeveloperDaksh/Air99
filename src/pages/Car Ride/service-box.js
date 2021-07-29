import React, { Component } from "react";
import { Col } from "reactstrap";

class ServiceBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.services.map((service, key) => (
          <Col lg="4" md="6" xs="12" key={key} className="mt-5">
            <div className="features text-center">
              <div className="image position-relative d-inline-block">
                <img
                  src={service.icon}
                  className="avatar avatar-small"
                  alt=""
                />
              </div>

              <div className="content mt-4">
                <h4 className="title-2">{service.title}</h4>
                <p className="text-muted mb-0">{service.desc}</p>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ServiceBox;
