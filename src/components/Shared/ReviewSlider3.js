import React, { Component } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

//Star Rating
import StarRatings from "react-star-ratings";

class ReviewSlider3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 4,
      step1: true,
      step2: false,
    };
    this.updateWindowSize.bind(this);
  }

  updateWindowSize = () => {
    if (window.outerWidth >= 1230) {
      this.setState({ itemCount: 3, cols: 4 });
    } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
      this.setState({ itemCount: 2, cols: 6 });
    } else if (window.outerWidth <= 970) {
      this.setState({ itemCount: 1, cols: 12 });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
    this.updateWindowSize();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }

  render() {
    return (
      <React.Fragment>
        <div
          id="customer-testi"
          className="tiny-three-item"
        >
          <div className="tiny-slide">
              <Row>
                {this.state.step1 === true
                  ? this.props.clients.map((client, key) =>
                      key >= 0 && key <= 2 ? (
                        <Col key={key} md={this.state.cols} className="mb-1">
                          <Card
                            key={key}
                            className={
                              this.props.isBgWhite
                                ? "client-testi m-2 text-center rounded shadow border-0"
                                : "client-testi text-center"
                            }
                          >
                            <CardBody>
                              <p className="text-muted h6 fst-italic">
                                " {client.desc} "
                              </p>
                              <img
                                src={client.image}
                                style={{ height: 65, width: 65 }}
                                className={
                                  this.props.isBgWhite
                                    ? "img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow mb-1"
                                    : "mb-1 img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                                }
                                alt=""
                              />
                              <br />
                              <StarRatings
                                rating={client.rating}
                                starRatedColor="#F17425"
                                numberOfStars={5}
                                name="rating"
                                starDimension="15px"
                                starSpacing="5px"
                                className="list-unstyled mb-0 mt-3"
                              />
                              <h6 className="text-primary mt-1">
                                - {client.name}
                                <small className="text-muted ms-1">
                                  {client.post}
                                </small>
                              </h6>
                            </CardBody>
                          </Card>
                        </Col>
                      ) : null
                    )
                  : this.props.clients.map((client, key) =>
                      key >= 3 && key <= 5 ? (
                        <Col key={key} md={this.state.cols} className="mb-1">
                          <Card
                            key={key}
                            className={
                              this.props.isBgWhite
                                ? "customer-testi m-2 text-center rounded shadow border-0"
                                : "customer-testi text-center"
                            }
                          >
                            <CardBody>
                              <p className="text-muted h6 fst-italic">
                                " {client.desc} "
                              </p>
                              <img
                                src={client.image}
                                style={{ height: 65, width: 65 }}
                                className={
                                  this.props.isBgWhite
                                    ? "img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow mb-1"
                                    : "img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow mb-1"
                                }
                                alt=""
                              />
                              <br />
                              <StarRatings
                                rating={client.rating}
                                starRatedColor="#F17425"
                                numberOfStars={5}
                                name="rating"
                                starDimension="15px"
                                starSpacing="5px"
                                className="list-unstyled mb-0 mt-3"
                              />
                              <h6 className="text-primary mt-1">
                                - {client.name}
                                <small className="text-muted ms-1">
                                  {client.post}
                                </small>
                              </h6>
                            </CardBody>
                          </Card>
                        </Col>
                      ) : null
                    )}
              </Row>
            </div>
          </div>
          <div className="tns-nav">
            <button
              type="button"
              onClick={() => {
                this.setState({ step1: true, step2: false });
              }}
              className={
                this.state.step1 ? "tns-nav-active" : "tns-nav-inactive"
              }
            ></button>
            <button
              type="button"
              onClick={() => {
                this.setState({ step1: false, step2: true });
              }}
              className={
                this.state.step2 ? "tns-nav-active" : "tns-nav-inactive"
              }
            ></button>
          </div>
      </React.Fragment>
    );
  }
}

export default ReviewSlider3;
