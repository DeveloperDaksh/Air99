// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

// import images
import bg01 from "../../assets/images/course/bg01.jpg";
import bg04 from "../../assets/images/course/bg04.jpg";
import bg05 from "../../assets/images/course/bg05.jpg";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          image: bg01,
          title: "You Can Learn Anything With Us",
          desc:
            "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.",
          btnText: "Find Courses",
          btnLink: "#",
          icon: "mdi-book-open-variant",
        },
        {
          image: bg04,
          title: "Better Education For A Better Future",
          desc:
            "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.",
          btnText: "Admission Now",
          btnLink: "#",
          icon: "mdi-school",
        },
        {
          image: bg05,
          title: "Education Is The Key of Success",
          desc:
            "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.",
          btnText: "Instructors",
          btnLink: "#",
          icon: "mdi-account",
        },
      ],
      autoplay: true,
    };
  }

  componentDidMount() {
    var e1 = document.getElementsByClassName("slick-slide");
    for (var i = 0; i < 3; i++) {
      if (i === 0) e1[i].style.backgroundImage = `url(${bg01})`;
      if (i === 1) e1[i].style.backgroundImage = `url(${bg04})`;
      if (i === 2) e1[i].style.backgroundImage = `url(${bg05})`;
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
        <section className="main-slider">
          <Slider className="slides" {...settings}>
            {this.state.items.map((item, key) => (
              <li
                key={key}
                className="bg-home d-flex align-items-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-overlay"></div>
                <Container>
                  <Row className="justify-content-center">
                    <Col xs="12" className="text-center">
                      <div className="title-heading text-white mt-4">
                        <h1 className="display-4 title-dark fw-bold mb-3">
                          {item.title}
                        </h1>
                        <p className="para-desc para-dark mx-auto text-light">
                          {item.desc}
                        </p>
                        <div className="mt-4">
                          <Link
                            to={item.btnLink}
                            className="btn btn-primary mt-2 mouse-down"
                          >
                            <i className={"mdi " + item.icon}></i>{" "}
                            {item.btnText}
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
