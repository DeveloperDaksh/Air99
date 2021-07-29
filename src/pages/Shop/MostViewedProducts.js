import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import FeatherIcon from "feather-icons-react";

//Import Images
import product1 from "../../assets/images/shop/product/s1.jpg";
import product2 from "../../assets/images/shop/product/s2.jpg";
import product3 from "../../assets/images/shop/product/s3.jpg";
import product4 from "../../assets/images/shop/product/s4.jpg";
import product5 from "../../assets/images/shop/product/s5.jpg";
import product6 from "../../assets/images/shop/product/s6.jpg";
import product7 from "../../assets/images/shop/product/s7.jpg";
import product8 from "../../assets/images/shop/product/s8.jpg";

import prodtctOverlay1 from "../../assets/images/shop/product/s-1.jpg";
import prodtctOverlay2 from "../../assets/images/shop/product/s-2.jpg";
import prodtctOverlay3 from "../../assets/images/shop/product/s-3.jpg";
import prodtctOverlay4 from "../../assets/images/shop/product/s-4.jpg";
import prodtctOverlay5 from "../../assets/images/shop/product/s-5.jpg";
import prodtctOverlay6 from "../../assets/images/shop/product/s-6.jpg";
import prodtctOverlay7 from "../../assets/images/shop/product/s-7.jpg";
import prodtctOverlay8 from "../../assets/images/shop/product/s-8.jpg";

class MostViewedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: product1,
          imgOverlay: prodtctOverlay1,
          name: "Branded T-Shirt",
          price: "16.00",
          oldPrice: "21.00",
          isNew: true,
          isFeatured: true,
          isSale: true
        },
        {
          id: 2,
          image: product2,
          imgOverlay: prodtctOverlay2,
          name: "Shopping Bag",
          price: "21.00",
          oldPrice: "25.00",
        },
        {
          id: 3,
          image: product3,
          imgOverlay: prodtctOverlay3,
          name: "Elegent Watch",
          price: "5.00",
          desc: "30% off",
          isSale: true
        },
        {
          id: 4,
          image: product4,
          imgOverlay: prodtctOverlay4,
          name: "Casual Shoes",
          price: "18.00",
          oldPrice: "22.00",
        },
        {
          id: 5,
          image: product5,
          imgOverlay: prodtctOverlay5,
          name: "Earphones",
          price: "3.00",
          isSale: true
        },
        {
          id: 6,
          image: product6,
          imgOverlay: prodtctOverlay6,
          name: "Elegent Mug",
          price: "4.50",
          oldPrice: "6.50",
        },
        {
          id: 7,
          image: product7,
          imgOverlay: prodtctOverlay7,
          name: "Sony Headphones",
          price: "9.99",
          desc: "20% off",
        },
        {
          id: 8,
          image: product8,
          imgOverlay: prodtctOverlay8,
          name: "Wooden Stools",
          price: "22.00",
          oldPrice: "25.00",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={12}>
              <h5 className="mb-0">Most Viewed Products</h5>
            </Col>
          </Row>

          <Row>
            {this.state.products.map((product, key) => (
              <Col key={key} lg={3} md={6} xs={12} className="mt-4 pt-2">
                <Card className="shop-list border-0 position-relative">
                  <ul className="label list-unstyled mb-0">
                    {product.isNew && (
                      <li>
                        <Link
                          to="#"
                          className="badge badge-link rounded-pill bg-primary"
                        >
                          New
                        </Link>
                      </li>
                    )}
                    {product.isFeatured && (
                      <li><Link to="#" className="badge badge-link rounded-pill bg-success">Featured</Link></li>
                    )}
                    {product.isSale && (
                      <li><Link to="#" className="badge badge-link rounded-pill bg-warning">Sale</Link></li>
                    )}
                  </ul>
                  <ul className="shop-image position-relative overflow-hidden rounded shadow">
                    <Link to="shop-product-detail">
                      <img
                        src={product.image}
                        className="img-fluid"
                        alt="shop"
                      />
                    </Link>
                    <Link to="shop-product-detail" className="overlay-work">
                      <img
                        src={product.imgOverlay}
                        className="img-fluid"
                        alt="shop"
                      />
                    </Link>
                    <ul className="list-unstyled shop-icons">
                      <li>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-soft-danger"
                        >
                          <i>
                            <FeatherIcon icon="heart" className="icons" />
                          </i>
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link
                          to="shop-product-detail"
                          className="btn btn-icon btn-pills btn-soft-primary"
                        >
                          <i>
                            <FeatherIcon icon="eye" className="icons" />
                          </i>
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link
                          to="shop-cart"
                          className="btn btn-icon btn-pills btn-soft-warning"
                        >
                          <i>
                            <FeatherIcon
                              icon="shopping-cart"
                              className="icons"
                            />
                          </i>
                        </Link>
                      </li>
                    </ul>
                  </ul>
                  <CardBody className="content pt-4 p-2">
                    <Link
                      to="shop-product-detail"
                      className="text-dark product-name h6"
                    >
                      {product.name}
                    </Link>
                    <div className="d-flex justify-content-between mt-1">
                      <h6 className="text-muted small fst-italic mb-0 mt-1">
                        ${product.price}{" "}
                        {product.oldPrice ? (
                          <del className="text-danger ms-2">
                            ${product.oldPrice}
                          </del>
                        ) : null}
                        {product.desc ? (
                          <span className="text-success ms-1">
                            {product.desc}
                          </span>
                        ) : null}
                      </h6>
                      <ul className="list-unstyled text-warning mb-0">
                        <li className="list-inline-item">
                          <i className="mdi mdi-star me-1"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star me-1"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star me-1"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star me-1"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star"></i>
                        </li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default MostViewedProducts;
