// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// import images
import bg01 from "../../assets/images/corporate/2.jpg";
import bg02 from "../../assets/images/corporate/1.jpg";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      items: [
        {
          id: 1,
          image: bg01,
          title: "Meet our brand",
          brtitle: "new solution",
          desc:
            "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
        },
        {
          id: 2,
          image: bg02,
          title: "Discover the world of ",
          brtitle: "business",
          desc:
            "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
        },
      ],
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  ele = (id) => {
    if (id === 1) {
      return (
        <React.Fragment>
          <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-11">
            <Link to="#" className="btn btn-primary mt-2">
              <i className="mdi mdi-email"></i>Get Started
            </Link>
          </div>
        </React.Fragment>
      );
    } else if (id === 2) {
      return (
        <React.Fragment>
          <div className="text-center subcribe-form mt-4 pt-2 animated fadeInUpBig animation-delay-11">
            <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-11">
              <Link to="#" className="btn btn-primary mt-2">
                <i className="mdi mdi-email"></i>Contact us
              </Link>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="watch-video mt-4 pt-2 animated fadeInUpBig animation-delay-11">
            <Link
              to="#"
              onClick={() => this.setState({ isOpen: true })}
              id="playbtn"
              className="video-play-icon watch text-white title-dark mb-2 ms-2"
            >
              <i className="mdi mdi-play play-icon-circle text-center d-inline-block me-2 rounded-pill text-white title-dark position-relative play play-iconbar"></i>{" "}
              WATCH VIDEO
            </Link>
          </div>
        </React.Fragment>
      );
    }
  };

  componentDidMount() {
    var e1 = document.getElementsByClassName("slick-slide");
    for (var i = 0; i < 3; i++) {
      if (i === 0) e1[i].style.backgroundImage = `url(${bg01})`;
      if (i === 1) e1[i].style.backgroundImage = `url(${bg02})`;
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
        <section className="swiper-slider-hero position-relative d-block">
          <Slider className="slides" {...settings}>
            {this.state.items.map((item, key) => (
              <div
                key={key}
                className="vh-100 slide-inner slide-bg-image d-flex align-items-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-overlay"></div>
                <Container>
                  <Row className="justify-content-center">
                    <Col lg="12">
                      <div className="title-heading text-center">
                        <h1 className="heading text-white title-dark mb-4">
                          {item.title}
                          <br />
                          {item.brtitle}
                        </h1>
                        <p className="para-desc mx-auto text-white-50">
                          {item.desc}
                        </p>
                        {this.ele(item.id)}
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            ))}
          </Slider>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="99025203"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
