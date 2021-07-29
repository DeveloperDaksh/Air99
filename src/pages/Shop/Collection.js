import React, { Component } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import fea1 from "../../assets/images/shop/fea1.jpg";
import fea2 from "../../assets/images/shop/fea2.jpg";
import fea3 from "../../assets/images/shop/fea3.jpg";

class Collection extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="mt-4">
          <Row>
            <Col md={4} className="mt-4 pt-2">
              <Card
                className="shop-features border-0 rounded overflow-hidden"
              >
              <img src={fea1} className="img-fluid" alt="" />
                <div className="category-title">
                  <h4>
                    Summer <br /> Collection
                  </h4>
                  <Link to="#" className="btn btn-sm btn-soft-primary mt-2">
                    Shop Now
                  </Link>
                </div>
              </Card>
            </Col>

            <Col md={4} className="mt-4 pt-2">
              <Card
                className="shop-features border-0 rounded overflow-hidden"
              >
              <img src={fea2} className="img-fluid" alt="" />
                <div className="category-title">
                  <h4>
                    Summer <br /> Collection
                  </h4>
                  <Link to="#" className="btn btn-sm btn-soft-primary mt-2">
                    Shop Now
                  </Link>
                </div>
              </Card>
            </Col>

            <Col md={4} className="mt-4 pt-2">
              <Card
                className="shop-features border-0 rounded overflow-hidden"
              >
              <img src={fea3} className="img-fluid" alt="" />
                <div className="category-title">
                  <h4>
                    Summer <br /> Collection
                  </h4>
                  <Link to="#" className="btn btn-sm btn-soft-primary mt-2">
                    Shop Now
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Collection;
