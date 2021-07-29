// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import Images
import dubai from "../../assets/images/travel/dubai.jpg";
import thailand from "../../assets/images/travel/thailand.jpg";
import india from "../../assets/images/travel/india.jpg";
import london from "../../assets/images/travel/london.jpg";
import paris from "../../assets/images/travel/paris.jpg";
import singapore from "../../assets/images/travel/singapore.jpg";

class PopularDestination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Shop", link: "#" },
        { id: 3, name: "Product Details" },
      ],
      travel: [
        {
          id: 1,
          image: dubai,
          title: "dubai",
        },
        {
          id: 2,
          image: thailand,
          title: "thailand",
        },
        {
          id: 3,
          image: india,
          title: "india",
        },
        {
          id: 4,
          image: london,
          title: "london",
        },
        {
          id: 5,
          image: paris,
          title: "paris",
        },
        {
          id: 6,
          image: singapore,
          title: "singapore",
        },
        {
          id: 7,
          image: dubai,
          title: "dubai",
        },
        {
          id: 8,
          image: thailand,
          title: "thailand",
        },
        {
          id: 9,
          image: india,
          title: "india",
        },
        {
          id: 10,
          image: london,
          title: "london",
        },
        {
          id: 11,
          image: paris,
          title: "paris",
        },
        {
          id: 12,
          image: singapore,
          title: "singapore",
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
      slidesToShow: 6,
      slidesToScroll: 1,
    };
    return (
      <React.Fragment>
        <Container className=" mt-100 mt-60">
          <Row className="align-items-end mb-4 pb-2">
            <Col lg={8}>
              {/* section title */}
              <div className="section-title text-center text-md-start">
                <h6 className="text-primary">Find Out Most</h6>
                <h4 className="title mb-4">Popular Destination</h4>
                <p className="text-muted mb-0 para-desc">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>
            <Col md={4} className="mt-4 mt-sm-0">
              <div className="text-center text-md-end">
                <Link to="#" className="text-primary h6">
                  See More{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                  </i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col md={12} className="mt-4 pt-2">
              <Slider {...settings2} className="owl-carousel owl-theme">
                {this.state.travel.map((items, key) => (
                  <div key={key} style={{ marginLeft: 5, marginRight: 5 }}>
                    <div className="popular-tour rounded-md position-relative overflow-hidden mx-3">
                      <img src={items.image} className="img-fluid" alt="" />
                      <div className="overlay-work bg-dark"></div>
                      <div className="content">
                        <Link to="#" className="title text-white h4 title-dark">
                          {items.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default PopularDestination;
