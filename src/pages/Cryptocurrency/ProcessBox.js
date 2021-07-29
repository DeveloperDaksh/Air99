import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class ProcessBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.map((process, key) => (
          <Col md="3" xs="12" key={key} className="mt-4 pt-2">
            <div className="text-center">
              <div className="rounded p-4 shadow">
                <Link to={process.link}>
                  <img
                    src={process.icon}
                    height="100"
                    className="mx-auto d-block"
                    alt=""
                  />
                </Link>
              </div>

              <div className="mt-3">
                <h5>
                  <Link to={process.link} className="text-primary">
                    {process.title}
                  </Link>
                </h5>
                <p className="text-muted mb-0">{process.desc}</p>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ProcessBox;
