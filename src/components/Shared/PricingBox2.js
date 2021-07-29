import React, { Component } from "react";
import { Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


class PricingBox2 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.pricings.map((pricing, key) => (
          <Col md="4" xs="12" key={key} className="mt-4 pt-2">
            <Card
              className={
                pricing.isActive
                  ? "pricing-rates starter-plan bg-light py-5 border-0 rounded text-center"
                  : "pricing-rates bg-light py-5 border-0 rounded text-center"
              }
            >
              <CardBody>
                <h6
                  className={
                    pricing.isActive
                      ? "title fw-bold text-uppercase text-primary mb-4"
                      : "title fw-bold text-uppercase text-primary mb-4"
                  }
                >
                  {pricing.title}
                </h6>
                <div className="d-flex justify-content-center mb-4">
                  <span className="h4 mb-0 mt-2">$</span>
                  <span className="price h1 mb-0">{pricing.price}</span>
                  <span className="h4 align-self-end mb-1">
                    /{pricing.duration}
                  </span>
                </div>
                <ul className="list-unstyled mb-0 ps-0">
                  {pricing.features.map((feature, key) => (
                    <li key={key} className="h6 text-muted mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle">
                      </i>
                      </span>
                      {feature.title}
                    </li>
                  ))}
                </ul>
                <Link to="#" className="btn btn-primary mt-4">
                  {pricing.buttonText}
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default PricingBox2;
