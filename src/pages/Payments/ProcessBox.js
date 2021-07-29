import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardBody } from "reactstrap";

class ProcessBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.map((process, key) => (
          <Col lg="3" md="6" xs="12" key={key} className="mt-4 pt-2">
            <Card className="bg-light rounded shadow border-0">
              <CardBody className="py-5">
                <i className={process.icon}></i>
                <div className="mt-2">
                  <h5 className="card-title">
                    <Link to="" className="text-primary">
                      {" "}
                      {process.title}
                    </Link>
                  </h5>
                  <p className="text-muted mt-3 mb-0">{process.desc}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ProcessBox;
