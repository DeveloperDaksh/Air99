// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// import images
import bg01 from "../../assets/images/coworking/bg01.jpg";
import bg02 from "../../assets/images/coworking/bg02.jpg";
import bg03 from "../../assets/images/coworking/bg03.jpg";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      items: [
        {
          id: 1,
          image: bg01,
          subtitle: "Private office and Co-working space for $19",
          title: "Coworking  Space For a Success",
          desc:
            "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.",
        },
        {
          id: 2,
          image: bg02,
          subtitle: "The Best Coworking in The City",
          title: "Office Space in Vietnam",
          desc:
            "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.",
        },
        {
          id: 3,
          image: bg03,
          subtitle: "Our Space for You",
          title: "Own Your Office For A Day",
          desc:
            "At vero eos et accusamus et iusto odio dignissimos ducimus a qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate.",
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
              <i className="uil uil-envelope"></i>Get Started
            </Link>
          </div>
        </React.Fragment>
      );
    } else if (id === 2) {
      return (
        <React.Fragment>
          <div className="text-center subcribe-form mt-4 pt-2 animated fadeInUpBig animation-delay-11">
            <Form>
              <input
                type="email"
                id="email"
                name="email"
                className="rounded"
                placeholder="E-mail"
                required
              />
              <Button type="submit" color="primary">
                Book Space
                </Button>
            </Form>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-11">
            <Link
              to="#"
              onClick={() => this.setState({ isOpen: true })}
              id="playbtn"
              className="btn btn-icon btn-pills btn-primary m-1 lightbox"
            >
              <FeatherIcon
                icon="video"
                className="icons"
              />
            </Link>
            <span className="fw-bold text-uppercase small text-light title-dark align-middle ms-1">Watch Now</span>
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
      if (i === 2) e1[i].style.backgroundImage = `url(${bg03})`;
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
              <div
                key={key}
                className="bg-home d-flex align-items-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-overlay"></div>
                <Container>
                  <Row className="justify-content-center">
                    <Col lg="12" className="text-center">
                      <div className="title-heading mt-4">
                        <h6 className="text-light para-dark animated fadeInDownBig animation-delay-1">
                          {item.subtitle}
                        </h6>
                        <h1 className="heading mb-3 text-white title-dark animated fadeInUpBig animation-delay-3">
                          {item.title}
                        </h1>
                        <p className="para-desc text-light para-dark mx-auto animated fadeInUpBig animation-delay-7">
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
