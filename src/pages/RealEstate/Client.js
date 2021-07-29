import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

// import bg-Image
import homeBGImage from "../../assets/images/real/1.jpg";

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

export default class Client extends Component {
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
          name: "Ronald Kinsey",
          post: "User",
        },
        {
          id: 2,
          img: img2,
          name: "Raquel Service",
          post: "App User",
        },
        {
          id: 3,
          img: img3,
          name: "Leona Moore",
          post: "Client",
        },
        {
          id: 4,
          img: img4,
          name: "Mark Rose",
          post: "CEO",
        },
        {
          id: 5,
          img: img5,
          name: "Marsha Donoho",
          post: "User",
        },
        {
          id: 6,
          img: img6,
          name: "Xavier Giancola",
          post: "App User",
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
        <div className="container-fluid mt-100 mt-60">
          <div
            className="rounded shadow py-5"
            style={{
              background: `url(${homeBGImage})`,
                backgroundPosition: "center center",
            }}
          >
            <Container>
              <Row>
                <Col lg={4} md={6}>
                  <div className="rounded p-4 bg-light">
                    <div id="single-owl" className="owl-carousel owl-theme">
                      <div className="testi text-center">
                        <Slider
                          {...settings2}
                          className="owl-carousel owl-theme"
                        >
                          {this.state.reviews.map((reviews, key) => (
                            <div
                              key={key}
                              style={{ marginLeft: 5, marginRight: 5 }}
                            >
                              <p className="h6 text-muted fst-italic font-weight-normal">
                                " The most well-known dummy text is the 'Lorem
                                Ipsum', which is said to have originated in the
                                16th century. It contains a series of real Latin
                                words. "
                              </p>
                              <div className="commenter mt-4">
                                <img
                                  src={reviews.img}
                                  className="avatar avatar-small rounded-circle d-block mx-auto shadow-lg"
                                  alt="Landrick"
                                />
                                <div className="content mt-4">
                                  <ul className="list-unstyled h6 text-warning mb-0">
                                    <li className="list-inline-item">
                                      <i className="mdi mdi-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="mdi mdi-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="mdi mdi-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="mdi mdi-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="mdi mdi-star"></i>
                                    </li>
                                  </ul>
                                  <h5 className="text-primary mb-0">
                                   {reviews.name}
                                  </h5>
                                  <small className="text-muted">{reviews.post}</small>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </Col>{" "}
              </Row>{" "}
            </Container>{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
