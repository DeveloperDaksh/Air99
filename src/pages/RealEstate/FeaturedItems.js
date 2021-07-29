// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import Images
import product1 from "../../assets/images/real/p1.jpg";
import product2 from "../../assets/images/real/p2.jpg";
import product3 from "../../assets/images/real/p3.jpg";
import product4 from "../../assets/images/real/p4.jpg";
import product5 from "../../assets/images/real/p5.jpg";
import product6 from "../../assets/images/real/p6.jpg";
import product7 from "../../assets/images/real/p7.jpg";
import product8 from "../../assets/images/real/p8.jpg";

class FeaturedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Shop", link: "#" },
        { id: 3, name: "Product Details" },
      ],
      products: [
        {
          id: 1,
          image: product1,
        },
        {
          id: 2,
          image: product2,
        },
        {
          id: 3,
          image: product3,
          name: "Elegent Watch",
          price: "5.00",
          desc: "30% off",
        },
        {
          id: 4,
          image: product4,
        },
        {
          id: 5,
          image: product5,
          name: "Earphones",
          price: "3.00",
        },
        {
          id: 6,
          image: product6,
        },
        {
          id: 7,
          image: product7,
          name: "Sony Headphones",
          price: "9.99",
          desc: "20% off",
        },
        {
          id: 8,
          image: product8,
        },
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
      nav1: null,
      nav2: null,
      items: 1,
    };
    this.addItem.bind(this);
    this.removeItem.bind(this);
  }

  addItem = () => {
    this.setState({ items: this.state.items + 1 });
  };

  removeItem = () => {
    if (this.state.items > 1) {
      this.setState({ items: this.state.items - 1 });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    const settings2 = {
      dots: false,
      infinite: true,
      autoplaySpeed: 2000,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <React.Fragment>
        <Container className=" mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={4}>
              {/* section title */}
              <div className="section-title text-center text-lg-start mb-4 mb-lg-0">
                <span className="badge badge-pill badge-soft-primary">
                  Featured Items
                </span>
                <h4 className="title mt-3 mb-4">Latest Property</h4>
                <p className="text-muted mx-auto mx-lg-left para-desc mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
                <div className="mt-4 d-none d-lg-block">
                  <Link to="#" className="btn btn-primary">
                    See More
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={8} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div id="two-testi" className="owl-carousel owl-theme">
                <Slider {...settings2} className="owl-carousel owl-theme">
                  {this.state.products.map((product, key) => (
                    <div key={key} style={{ marginLeft: 5, marginRight: 5 }}>
                      <Card className="shop-list border-0 shadow position-relative overflow-hidden m-3">
                        <div className="shop-image position-relative overflow-hidden shadow">
                          <Link to="#">
                            <img
                              src={product.image}
                              className="img-fluid"
                              alt="Landrick"
                            />
                          </Link>
                          <ul className="list-unstyled shop-icons">
                            <li className="list-inline-item me-1">
                              <Link
                                to="#"
                                className="btn btn-icon btn-pills btn-primary"
                              >
                                <i className="uil uil-home icons"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item me-1">
                              <Link
                                to="#"
                                className="btn btn-icon btn-pills btn-primary"
                              >
                                <i className="uil uil-heart icons"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                className="btn btn-icon btn-pills btn-primary"
                              >
                                <i className="uil uil-camera icons"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <CardBody className="content p-4">
                          <Link to="#" className="text-dark product-name h6">
                            Luxury Apartment In chelsea
                          </Link>
                          <ul className="list-unstyled text-muted mt-2 mb-0">
                            <li className="list-inline-item me-3">
                              <i className="uil uil-bed"></i>1 Bed
                            </li>
                            <li className="list-inline-item">
                              <i className="uil uil-bath"></i>1 Bath
                            </li>
                          </ul>
                          <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                            <li className="list-inline-item">
                              <b>$ 44000</b>
                            </li>
                            <li className="list-inline-item text-muted">
                              $ 850 / sqft
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default FeaturedItems;
