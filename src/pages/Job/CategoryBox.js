import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardBody } from "reactstrap";

class CategoryBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.jobCategories.map((category, key) => (
          <Col lg="3" md="6" xs="12" key={key} className="mt-4 pt-2">
            <Card className="catagories overflow-hidden rounded shadow border-0">
              <img src={category.image} className="img-fluid" alt="" />
              <CardBody>
                <ul className="list-unstyled d-flex justify-content-between mb-0">
                  <li>
                    <Link to={category.link} className="title h6 text-dark">
                      {category.title}
                    </Link>
                  </li>
                  <li className="h6 mb-0 jobs">{category.jobs} Jobs</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default CategoryBox;
