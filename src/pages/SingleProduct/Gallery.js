// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Alert,
  Button,
} from "reactstrap";

//Import Slick Slider
import Slider from "react-slick";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

//Import Slick Slider CSS
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

// import images
import single01 from "../../assets/images/single/01.jpg";
import single02 from "../../assets/images/single/02.jpg";
import single03 from "../../assets/images/single/03.jpg";
import single04 from "../../assets/images/single/04.jpg";
import single05 from "../../assets/images/single/05.jpg";
import single06 from "../../assets/images/single/06.jpg";
import single07 from "../../assets/images/single/07.jpg";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      successMsg: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
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
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col md="6">
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
                  <div>
                    <img
                      src={single07}
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
                  <div>
                    <img src={single07} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </Col>

              <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-md-4">
                  <h4 className="title mb-4">DJI Spark Drone</h4>
                  <div className="d-flex justify-content-between my-4">
                    <h4 className="mb-0">
                      <b>$ 1800</b>
                    </h4>
                    <div className="text-warning">
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star-half"></span>
                      <span className="text-muted ps-2">23 Reviews</span>
                    </div>
                  </div>
                  <p className="text-muted para-desc mx-auto">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect. This is required when, for example,
                    the final text is not yet available. Dummy text is also
                    known as 'fill text'. It is said that song composers of the
                    past used dummy texts as lyrics when writing melodies in
                    order to have a 'ready-made' text to sing with the melody.
                  </p>
                  <ul className="list-unstyled feature-list text-muted">
                    <li>
                      <i className="mdi mdi-check me-2"></i>Digital Marketing
                      Solutions for Tomorrow
                    </li>
                    <li>
                      <i className="mdi mdi-check me-2"></i>Create your own skin
                      to match your brand
                    </li>
                    <li>
                      <i className="mdi mdi-check me-2"></i>Digital Marketing
                      Solutions for Tomorrow
                    </li>
                    <li>
                      <i className="mdi mdi-check me-2"></i>Create your own skin
                      to match your brand
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              title="Sign up for our Newsletter"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="justify-content-center mt-4 pt-2">
              <Col lg="7" md="10">
                <Alert
                  color="primary"
                  isOpen={this.state.successMsg}
                  toggle={() => {
                    this.setState({ successMsg: !this.state.successMsg });
                  }}
                >
                  Data sended successfully.
                </Alert>
                <div className="text-center subcribe-form mt-4 pt-2">
                  <Form>
                    <Input
                      name="email"
                      id="email"
                      type="email"
                      className="form-control rounded-pill border"
                      placeholder="Your email :"
                      required=""
                    />
                    <Button
                      color="primary"
                      className="btn btn-pills btn-primary submitBnt"
                      onClick={this.handleSubmit}
                      type="button"
                      id="newssubscribebtn"
                    >
                      Subscribe
                      </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Gallery;
