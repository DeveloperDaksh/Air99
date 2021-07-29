import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardBody } from "reactstrap";

class FeatureBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.features.map((feature, key) => (
          <Col lg="4" md="6" xs="12" key={key} className="mt-4 pt-2">
            <Card
              className="catagories text-center rounded border-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <CardBody>
                <img
                  src={feature.image}
                  className="avatar avatar-small mb-3"
                  alt=""
                />
                <h5>
                  <Link to={feature.link} className="text-dark">
                    {feature.title}
                  </Link>
                </h5>
                <p className="text-muted mb-0 mt-3">{feature.desc}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default FeatureBox;
