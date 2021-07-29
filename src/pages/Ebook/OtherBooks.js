import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import Images
import book1 from "../../assets/images/book/1.jpg";
import book2 from "../../assets/images/book/2.jpg";
import book3 from "../../assets/images/book/3.jpg";
import book4 from "../../assets/images/book/4.jpg";
import book5 from "../../assets/images/book/5.jpg";
import book6 from "../../assets/images/book/6.jpg";
import book7 from "../../assets/images/book/7.jpg";

import "../../../node_modules/react-image-lightbox/style.css";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class OtherBooks extends Component {
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
          image: book1,
        },
        {
          id: 2,
          image: book2,
        },
        {
          id: 3,
          image: book3,
        },
        {
          id: 4,
          image: book4,
        },
        {
          id: 5,
          image: book5,
        },
        {
          id: 6,
          image: book6,
        },
        {
          id: 7,
          image: book7,
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
        <Container className="mt-100 mt-60">
          {/* render Section title */}
          <SectionTitle
            title="Other Books"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />
        </Container>
        <Container fluid className="mb-md-5">
          <Row>
            <Col md={12} className="mt-4 pt-2">
              <Slider {...settings2} className="owl-carousel owl-theme">
                {this.state.travel.map((items, key) => (
                  <div key={key} style={{ marginLeft: 5, marginRight: 5 }}>
                    <Card className="border-0 work-container work-grid position-relative d-block overflow-hidden mx-3">
                      <CardBody className="p-0">
                        <Link
                          className="mfp-image d-inline-block"
                          to="#"
                          title=""
                        >
                          <img
                            src={items.image}
                            className="img-fluid shadow rounded"
                            alt=""
                          />
                        </Link>
                        <div className="content bg-white p-3">
                          <h5 className="mb-0">
                            <Link to="#" className="text-dark title">
                              Iphone mockup
                            </Link>
                          </h5>
                          <h6 className="text-muted tag mb-0">$ 16</h6>
                        </div>
                      </CardBody>
                    </Card>
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

export default OtherBooks;
