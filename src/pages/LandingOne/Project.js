import React, { Component } from "react";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";
import online from "../../assets/images/course/online/ab03.jpg";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Shop", link: "#" },
        { id: 3, name: "Product Details" },
      ],
      reviews: [
        {
          id: 1,
          img: img1,
          name: "Thomas Israel",
          post: "C.E.O",
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. ",
        },
        {
          id: 2,
          img: img2,
          name: "Barbara McIntosh",
          post: "M.D",
          desc:
            " One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. ",
        },
        {
          id: 3,
          img: img3,
          name: "Carl Oliver",
          post: "P.A",
          desc:
            'The most well-known dummy text is the "Lorem Ipsum", which is said to have originated in the 16th century.',
        },
        {
          id: 4,
          img: img4,
          name: " Christa Smith",
          post: "Manager",
          desc:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. ",
        },
        {
          id: 5,
          img: img5,
          name: " Dean Tolle",
          post: "Developer",
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
        },
        {
          id: 6,
          img: img6,
          name: "Jill Webb",
          post: "Designer",
          desc:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. ",
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
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={5} md={6} className="order-1 order-md-2">
              <div className="text-end">
                <img
                  src={online}
                  className="img-fluid rounded-md shadow-lg"
                  alt=""
                />
              </div>
            </Col>

            <Col
              lg={7}
              md={6}
              className="order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0"
            >
              <div className="section-title text-md-start text-center">
                <h4 className="title mb-4">
                  Whats our clients said <br /> about landrick project
                </h4>
                <p className="text-muted mb-0 para-desc">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>

                <Row className="justify-content-center">
                  <Col lg={12} className="mt-4">
                    <div id="single-owl" className="owl-carousel owl-theme">
                      <div className="testi">
                        <Slider
                          {...settings2}
                          className="owl-carousel owl-theme"
                        >
                          {this.state.reviews.map((reviews, key) => (
                            <div
                              key={key}
                              style={{ marginLeft: 5, marginRight: 5 }}
                            >
                              <div className="d-flex client-testi m-2">
                                <img
                                  src={reviews.img}
                                  className="avatar avatar-small me-3 rounded shadow"
                                  alt="Landrick"
                                />

                                <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                                  <ul className="list-unstyled mb-0">
                                    <li className="list-inline-item">
                                      <i className="mdi mdi-star text-warning"></i>
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="mdi mdi-star text-warning"></i>
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="mdi mdi-star text-warning"></i>
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="mdi mdi-star text-warning"></i>
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="mdi mdi-star text-warning"></i>
                                    </li>
                                  </ul>
                                  <p className="text-muted mt-2">
                                    - {reviews.desc}
                                  </p>
                                  <h5 className="text-primary mb-0">
                                    {reviews.name}
                                  </h5>
                                  <small className="text-muted">
                                    {reviews.post}
                                  </small>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <div className="section-title">
                <h4 className="title mb-4">
                  See everything about your employee at one place.
                </h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>

                <div className="mt-4">
                  <Link to="#" className="btn btn-primary mt-2 me-2">
                    Get Started Now
                  </Link>
                  <Link to="#" className="btn btn-outline-primary mt-2">
                    Free Trial
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
