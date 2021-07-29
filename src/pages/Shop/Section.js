import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

//Import Images
import bg1 from "../../assets/images/shop/bg1.jpg";
import bg2 from "../../assets/images/shop/bg2.jpg";
import bg3 from "../../assets/images/shop/bg3.jpg";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          image: bg2,
          class: "slider-rtl-2",
          titleLine1: "New Accessories ",
          titleLine2: "Collections",
          desc:
            "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.",
          link: "#",
        },
        {
          image: bg3,
          class: "slider-rtl-3",
          titleLine1: "Headphones ",
          titleLine2: "Speaker",
          desc:
            "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.",
          link: "#",
        },
        {
          image: bg1,
          class: "slider-rtl-1",
          titleLine1: "Modern Furniture, ",
          titleLine2: "Armchair",
          desc:
            "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.",
          link: "#",
        },
      ],
    };
  }

  componentDidMount() {
    var e1 = document.getElementsByClassName("slick-slide");
    for (var i = 0; i < 3; i++) {
      if (i === 0) e1[i].style.background = `url(${bg2}) center center`;
      if (i === 1) e1[i].style.background = `url(${bg3}) center center`;
      if (i === 2) e1[i].style.background = `url(${bg1}) center center`;
    }
  }

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
    return (
      <React.Fragment>
        <section className="home-slider position-relative">
          <Slider className="carousel slide carousel-fade" {...settings}>
            {this.state.items.map((item, key) => (
              <li
                key={key}
                className={"bg-home slider-rtl-2 d-flex align-items-center " + item.class}
                style={{ background: `url(${item.image}) center center` }}
              >
                <Container>
                  <Row className="align-items-center mt-5">
                    <Col lg={7} md={7} className="slider-desc">
                      <div className="title-heading mt-4">
                        <h1 className="display-4 title-white fw-bold mb-3">
                          {item.titleLine1} <br /> {item.titleLine2}
                        </h1>
                        <p className="para-desc text-muted para-dark">
                          {item.desc}
                        </p>
                        <div className="mt-4">
                          <Link to={item.link} className="btn btn-soft-primary">
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </li>
            ))}
          </Slider>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
