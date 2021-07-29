import React, { Component } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

class ReviewSlider2 extends Component {
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
          className="owl-carousel owl-theme owl-loaded owl-drag"
        >
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <Row>
                {this.state.step1 === true
                  ? this.props.clients.map((client, key) =>
                      key >= 0 && key <= 2 ? (
                        <Col key={key} md={this.state.cols} className="mb-1">
                          <Card className="customer-testi border-0 text-center">
                            <CardBody>
                              <img
                                src={client.image}
                                style={{ height: 65, width: 65 }}
                                className="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                                alt=""
                              />
                              <p className="text-muted mt-4">
                                " {client.desc} "
                              </p>
                              <h6 className="text-primary">- {client.name}</h6>
                            </CardBody>
                          </Card>
                        </Col>
                      ) : null
                    )
                  : this.props.clients.map((client, key) =>
                      key >= 3 && key <= 5 ? (
                        <Col key={key} md={this.state.cols} className="mb-1">
                          <Card className="customer-testi border-0 text-center">
                            <CardBody>
                              <img
                                src={client.image}
                                style={{ height: 65, width: 65 }}
                                className="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                                alt=""
                              />
                              <p className="text-muted mt-4">
                                " {client.desc} "
                              </p>
                              <h6 className="text-primary">- {client.name}</h6>
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
        </div>
      </React.Fragment>
    );
  }
}

export default ReviewSlider2;
