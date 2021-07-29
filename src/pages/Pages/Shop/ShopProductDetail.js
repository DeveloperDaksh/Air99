import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Card,
  CardBody,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";

//Import Slick Slider
import Slider from "react-slick";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

import client1 from "../../../assets/images/client/01.jpg";
import client2 from "../../../assets/images/client/02.jpg";

//Import Images
import product1 from "../../../assets/images/shop/product/s1.jpg";
import product2 from "../../../assets/images/shop/product/s2.jpg";
import product3 from "../../../assets/images/shop/product/s3.jpg";
import product4 from "../../../assets/images/shop/product/s4.jpg";
import product5 from "../../../assets/images/shop/product/s5.jpg";
import product6 from "../../../assets/images/shop/product/s6.jpg";
import product7 from "../../../assets/images/shop/product/s7.jpg";
import product8 from "../../../assets/images/shop/product/s8.jpg";

import prodtctOverlay1 from "../../../assets/images/shop/product/s-1.jpg";
import prodtctOverlay2 from "../../../assets/images/shop/product/s-2.jpg";
import prodtctOverlay3 from "../../../assets/images/shop/product/s-3.jpg";
import prodtctOverlay4 from "../../../assets/images/shop/product/s-4.jpg";
import prodtctOverlay5 from "../../../assets/images/shop/product/s-5.jpg";
import prodtctOverlay6 from "../../../assets/images/shop/product/s-6.jpg";
import prodtctOverlay7 from "../../../assets/images/shop/product/s-7.jpg";
import prodtctOverlay8 from "../../../assets/images/shop/product/s-8.jpg";

// import slider images
import single01 from "../../../assets/images/shop/product/single-1.jpg";
import single02 from "../../../assets/images/shop/product/single-2.jpg";
import single03 from "../../../assets/images/shop/product/single-3.jpg";
import single04 from "../../../assets/images/shop/product/single-4.jpg";
import single05 from "../../../assets/images/shop/product/single-5.jpg";
import single06 from "../../../assets/images/shop/product/single-6.jpg";

import work6 from "../../../assets/images/work/6.jpg";
import work7 from "../../../assets/images/work/7.jpg";

class ShopProductDetail extends Component {
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
          imgOverlay: prodtctOverlay1,
          name: "Branded T-Shirt",
          price: "16.00",
          oldPrice: "21.00",
          isFeatures: true,
        },
        {
          id: 2,
          image: product2,
          imgOverlay: prodtctOverlay2,
          name: "Shopping Bag",
          price: "21.00",
          oldPrice: "25.00",
          isNew: true,
          isFeatures: true,
          isSale: true,
          isOutofStock: true,
        },
        {
          id: 3,
          image: product3,
          imgOverlay: prodtctOverlay3,
          name: "Elegent Watch",
          price: "5.00",
          desc: "30% off",
          isSale: true,
        },
        {
          id: 4,
          image: product4,
          imgOverlay: prodtctOverlay4,
          name: "Casual Shoes",
          price: "18.00",
          oldPrice: "22.00",
          isNew: true,
          isFeatures: true,
          isSale: true,
        },
        {
          id: 5,
          image: product5,
          imgOverlay: prodtctOverlay5,
          name: "Earphones",
          price: "3.00",
        },
        {
          id: 6,
          image: product6,
          imgOverlay: prodtctOverlay6,
          name: "Elegent Mug",
          price: "4.50",
          oldPrice: "6.50",
          isOutofStock: true,
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
          isSale: true,
        },
      ],
      topProducts: [
        {
          image: product1,
          name: "T-Shirt",
          oldPrice: "$22.00",
          NewPrice: "$18.00 ",
        },
        {
          image: product3,
          name: "Watch",
          oldPrice: "$22.00",
          NewPrice: "$18.00 ",
        },
        {
          image: product6,
          name: "Coffee Cup",
          oldPrice: "$22.00",
          NewPrice: "$18.00 ",
        },
        {
          image: product8,
          name: "Wooden Stools",
          oldPrice: "$22.00",
          NewPrice: "$18.00 ",
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
      activeTab: "1",
    };
    this.addItem.bind(this);
    this.removeItem.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
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
    var settings = {
      autoplay: true,
      infinite: true,
      autoplaySpeed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      draggable: true,
      pauseOnHover: true,
    };

    const settings2 = {
      dots: false,
      infinite: true,
      autoplaySpeed: 2000,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 2,
    };

    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb
          title="Branded T-Shirts"
          pathItems={this.state.pathItems}
        />
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="section pb-0">
          <Container>
            <Row className="align-items-center">
              <Col md={5}>
                {/* main slider */}
                <Slider
                  {...settings}
                  asNavFor={this.state.nav2}
                  ref={(slider) => (this.slider1 = slider)}
                >
                  <div>
                    <img
                      src={single01}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={single02}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={single03}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={single04}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={single05}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={single06}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                </Slider>

                {/* Slider thumbnails */}
                <Slider
                  asNavFor={this.state.nav1}
                  ref={(slider) => (this.slider2 = slider)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div>
                    <img src={single01} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={single02} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={single03} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={single04} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={single05} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={single06} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </Col>

              <Col md={7} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-md-4">
                  <h4 className="title">Branded T-Shirts</h4>
                  <h5 className="text-muted">
                    $21.00 <del className="text-danger ms-2">$25.00</del>{" "}
                  </h5>
                  <ul className="list-unstyled text-warning h5 mb-0">
                    <li className="list-inline-item">
                      <i className="mdi mdi-star"></i>
                    </li>{" "}
                    <li className="list-inline-item">
                      <i className="mdi mdi-star"></i>
                    </li>{" "}
                    <li className="list-inline-item">
                      <i className="mdi mdi-star"></i>
                    </li>{" "}
                    <li className="list-inline-item">
                      <i className="mdi mdi-star"></i>
                    </li>{" "}
                    <li className="list-inline-item">
                      <i className="mdi mdi-star"></i>
                    </li>
                  </ul>

                  <h5 className="mt-4 py-2">Overview :</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero exercitationem, unde molestiae sint quae inventore
                    atque minima natus fugiat nihil quisquam voluptates ea
                    omnis. Modi laborum soluta tempore unde accusantium.
                  </p>

                  <ul className="list-unstyled text-muted">
                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span> Digital Marketing Solutions for Tomorrow</li>
                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span> Our Talented &amp; Experienced Marketing Agency</li>
                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span> Create your own skin to match your brand</li>
                  </ul>

                  <Row className="mt-4 pt-2">
                    <Col lg={6} xs={12}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0">Your Size:</h6>
                        <ul className="list-unstyled mb-0 ms-3">
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="btn btn-icon btn-soft-primary"
                            >
                              S
                            </Link>
                          </li>{" "}
                          <li className="list-inline-item ms-1">
                            <Link
                              to="#"
                              className="btn btn-icon btn-soft-primary"
                            >
                              M
                            </Link>
                          </li>{" "}
                          <li className="list-inline-item ms-1">
                            <Link
                              to="#"
                              className="btn btn-icon btn-soft-primary"
                            >
                              L
                            </Link>
                          </li>{" "}
                          <li className="list-inline-item ms-1">
                            <Link
                              to="#"
                              className="btn btn-icon btn-soft-primary"
                            >
                              XL
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>

                    <Col lg={6} xs={12} className="mt-4 mt-lg-0">
                      <div className="d-flex shop-list align-items-center">
                        <h6 className="mb-0">Quantity:</h6>
                        <div className="qty-icons ms-3">
                          <Input
                            type="button"
                            value="-"
                            onClick={this.removeItem}
                            className="minus btn btn-icon btn-soft-primary fw-bold"
                            readOnly
                          />{" "}
                          <Input
                            type="text"
                            step="1"
                            min="1"
                            name="quantity"
                            value={this.state.items}
                            title="Qty"
                            readOnly
                            className="btn btn-icon btn-soft-primary qty-btn quantity"
                          />{" "}
                          <Input
                            type="button"
                            value="+"
                            onClick={this.addItem}
                            className="btn btn-icon btn-soft-primary plus"
                            readOnly
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-primary">
                      Shop Now
                    </Link>{" "}
                    <Link to="shop-cart" className="btn btn-soft-primary ms-2">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              <Col xs={12}>
                <ul className="nav nav-pills shadow flex-column flex-sm-row d-md-inline-flex mb-0 p-1 bg-white rounded position-relative overflow-hidden">
                  <NavItem className="m-1">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "1" },
                        "rounded py-2 px-5"
                      )}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      <div className="text-center">
                        <h6 className="mb-0">Description</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="m-1">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "2" },
                        "rounded py-2 px-5"
                      )}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      <div className="text-center">
                        <h6 className="mb-0">Additional Information</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="m-1">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "3" },
                        "rounded py-2 px-5"
                      )}
                      onClick={() => {
                        this.toggle("3");
                      }}
                    >
                      <div className="text-center">
                        <h6 className="mb-0">Review</h6>
                      </div>
                    </NavLink>
                  </NavItem>
                </ul>

                <TabContent className="mt-5" activeTab={this.state.activeTab}>
                  <TabPane className="card border-0 fade show" tabId="1">
                    <p className="text-muted mb-0">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance: human perception
                      is tuned to recognize certain patterns and repetitions in
                      texts. If the distribution of letters and 'words' is
                      random, the reader will not be distracted from making a
                      neutral judgement on the visual impact and readability of
                      the typefaces (typography), or the distribution of text on
                      the page (layout or type area). For this reason, dummy
                      text usually consists of a more or less random series of
                      words or syllables.
                    </p>
                  </TabPane>

                  <TabPane className="card border-0 fade show" tabId="2">
                    <Table>
                      <tbody>
                        <tr>
                          <td style={{ width: "100px" }}>Color</td>
                          <td className="text-muted">
                            Red, White, Black, Orange
                          </td>
                        </tr>

                        <tr>
                          <td>Material</td>
                          <td className="text-muted">Cotton</td>
                        </tr>

                        <tr>
                          <td>Size</td>
                          <td className="text-muted">S, M, L, XL, XXL</td>
                        </tr>
                      </tbody>
                    </Table>
                  </TabPane>

                  <TabPane className="card border-0 fade show" tabId="3">
                    <Row>
                      <Col lg={6}>
                        <ul className="media-list list-unstyled mb-0">
                          <li>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <Link className="pe-3" to="#">
                                  <img
                                    src={client1}
                                    className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                    alt="img"
                                  />
                                </Link>
                                <div className="flex-1 commentor-detail">
                                  <h6 className="mb-0">
                                    <Link
                                      to="#"
                                      className="text-dark media-heading"
                                    >
                                      Lorenzo Peterson
                                    </Link>
                                  </h6>
                                  <small className="text-muted">
                                    15th August, 2019 at 01:25 pm
                                  </small>
                                </div>
                              </div>
                              <ul className="list-unstyled mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="mt-3">
                              <p className="text-muted fst-italic p-3 bg-light rounded">
                                " Awesome product "
                              </p>
                            </div>
                          </li>

                          <li className="mt-4">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <Link className="pe-3" to="#">
                                  <img
                                    src={client2}
                                    className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                    alt="img"
                                  />
                                </Link>
                                <div className="flex-1 commentor-detail">
                                  <h6 className="mb-0">
                                    <Link
                                      to="#"
                                      className="media-heading text-dark"
                                    >
                                      Tammy Camacho
                                    </Link>
                                  </h6>
                                  <small className="text-muted">
                                    15th August, 2019 at 05:44 pm
                                  </small>
                                </div>
                              </div>
                              <ul className="list-unstyled mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>{" "}
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star-outline text-warning"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="mt-3">
                              <p className="text-muted fst-italic p-3 bg-light rounded mb-0">
                                " Good "
                              </p>
                            </div>
                          </li>
                        </ul>
                      </Col>

                      <Col lg={6} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <form className="ms-lg-4">
                          <Row>
                            <Col xs={12}>
                              <h5>Add your review:</h5>
                            </Col>
                            <Col xs={12} className="mt-4">
                              <h6 className="small fw-bold">
                                Your Rating:
                              </h6>
                              <Link to="#" className="d-inline-block me-3">
                                <ul className="list-unstyled mb-0 small">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star-outline text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star-outline text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star-outline text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star-outline text-warning"></i>
                                  </li>
                                </ul>
                              </Link>

                              <Link to="#" className="d-inline-block me-3">
                                <ul className="list-unstyled mb-0 small">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star-outline text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star-outline text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star-outline text-warning"></i>
                                  </li>
                                </ul>
                              </Link>

                              <Link to="#" className="d-inline-block me-3">
                                <ul className="list-unstyled mb-0 small">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star-outline text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star-outline text-warning"></i>
                                  </li>
                                </ul>
                              </Link>

                              <Link to="#" className="d-inline-block me-3">
                                <ul className="list-unstyled mb-0 small">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star-outline text-warning"></i>
                                  </li>
                                </ul>
                              </Link>

                              <Link to="#" className="d-inline-block">
                                <ul className="list-unstyled mb-0 small">
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>{" "}
                                  <li className="list-inline-item">
                                    <i className="mdi mdi-star text-warning"></i>
                                  </li>
                                </ul>
                              </Link>
                            </Col>
                            <Col md={12} className="mt-3">
                              <div className="mb-3">
                                <Label className="form-label">Your Review:</Label>
                                <div className="form-icon position-relative">
                                  <FeatherIcon
                                    icon="message-circle"
                                    className="fea icon-sm icons"
                                  />
                                  <textarea
                                    id="message"
                                    placeholder="Your Comment"
                                    rows="5"
                                    name="message"
                                    className="form-control ps-5"
                                    required=""
                                  ></textarea>
                                </div>
                              </div>
                            </Col>

                            <div className="col-lg-6">
                              <div className="mb-3">
                                <Label className="form-label">
                                  Name <span className="text-danger">*</span>
                                </Label>
                                <div className="form-icon position-relative">
                                  <FeatherIcon
                                    icon="user"
                                    className="fea icon-sm icons"
                                  />
                                  <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="form-control ps-5"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>

                            <Col lg={6}>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Your Email{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <div className="form-icon position-relative">
                                  <FeatherIcon
                                    icon="mail"
                                    className="fea icon-sm icons"
                                  />
                                  <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="form-control ps-5"
                                    required=""
                                  />
                                </div>
                              </div>
                            </Col>

                            <Col md={12}>
                              <div className="send d-grid">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Submit
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </form>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              <Col xs={12}>
                <h5 className="mb-0">Related Products</h5>
              </Col>

              <Col xs={12} className="mt-4">
                <Slider {...settings2} className="owl-carousel owl-theme">
                  {this.state.products.map((product, key) => (
                    <div key={key} style={{ marginLeft: 5, marginRight: 5 }}>
                      <Card className="shop-list border-0 position-relative overflow-hidden m-2">
                        <ul className="label list-unstyled mb-0">
                          <li><Link to="#" className="badge badge-link rounded-pill bg-danger">Hot</Link></li>
                        </ul>

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
                          {product.isFeatures && (
                            <li>
                              <Link
                                to="#"
                                className="badge badge-link rounded-pill bg-success"
                              >
                                Featured
                              </Link>
                            </li>
                          )}

                          {product.isSale && (
                            <li>
                              <Link
                                to="#"
                                className="badge badge-link rounded-pill bg-warning"
                              >
                                Sale
                              </Link>
                            </li>
                          )}
                        </ul>

                        <div className="shop-image position-relative overflow-hidden rounded shadow">
                          <Link to="shop-product-detail">
                            <img
                              src={product.image}
                              className="img-fluid"
                              alt="Landrick"
                            />
                          </Link>
                          <Link
                            to="shop-product-detail"
                            className="overlay-work"
                          >
                            <img
                              src={product.imgOverlay}
                              className="img-fluid"
                              alt="Landrick"
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
                        </div>
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
                              <li className="list-inline-item me-1">
                                <i className="mdi mdi-star"></i>
                              </li>
                              <li className="list-inline-item me-1">
                                <i className="mdi mdi-star"></i>
                              </li>
                              <li className="list-inline-item me-1">
                                <i className="mdi mdi-star"></i>
                              </li>
                              <li className="list-inline-item me-1">
                                <i className="mdi mdi-star"></i>
                              </li>
                              <li className="list-inline-item me-1">
                                <i className="mdi mdi-star"></i>
                              </li>
                            </ul>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </Slider>
                
              </Col>
            </Row>
          </Container>
          <Container fuild className="mt-100 mt-60 px-0">
            <div className="py-5 bg-light">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between">
                      <Link to="shop-product-detail" className="text-dark align-items-center">
                        <span className="pro-icons">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-left fea icon-sm"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </span>
                        <span className="text-muted d-none d-md-inline-block">Web Development</span>
                        <img src={work6} className="avatar avatar-small rounded shadow ms-2" style={{ height: "auto" }} alt="" />
                      </Link>

                      <Link to="/" className="btn btn-lg btn-pills btn-icon btn-soft-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home icons"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                      </Link>

                      <Link to="shop-product-detail" className="text-dark align-items-center">
                        <img src={work7} className="avatar avatar-small rounded shadow me-2" style={{ height: "auto" }} alt="" />
                        <span className="text-muted d-none d-md-inline-block">Web Designer</span>
                        <span className="pro-icons">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right fea icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default ShopProductDetail;
