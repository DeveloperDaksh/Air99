import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, CardBody, Card } from "reactstrap";

class PricingBox3 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.pricings.map((pricing, key) => (
          <Col md="3" xs="12" key={key} className="mt-4 pt-2">
            <Card
              className={
                pricing.isActive
                  ? "pricing-rates best-plan rounded shadow text-center border-0"
                  : "pricing-rates best-plan rounded bg-light text-center border-0"
              }
            >
              {pricing.isActive ? (
                <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
              ) : null}
              <CardBody className="py-5">
                <img src={pricing.image} className="mb-4" height="50" alt="" />
                <h6 className="title text-uppercase mb-4">{pricing.title}</h6>
                <div className="d-flex justify-content-center mb-4">
                  <span className="h4 mb-0 mt-2">$</span>
                  <span className="price h1 mb-0">{pricing.price}</span>
                  <span className="h4 align-self-end mb-1">
                    /{pricing.duration}
                  </span>
                </div>

                <p className="text-muted">{pricing.desc}</p>
                <Link to="#" className="btn btn-outline-primary btn-sm mt-4">
                  {pricing.btnName}
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default PricingBox3;
