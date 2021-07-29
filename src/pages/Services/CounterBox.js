import React, { Component } from "react";
import { Col } from "reactstrap";
import CountUp from "react-countup";

class CounterBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.counters.map((counter, key) => (
          <Col md={4} key={key} className="mt-4 pt-2">
            <div className="counter-box text-center px-lg-4">
              <h2 className="mb-0 text-primary display-4">
                <span className="counter-value">
                  <CountUp end={counter.end} duration={8} />
                </span>
                {counter.postFix}
              </h2>
              <h5 className="counter-head">{counter.title}</h5>
              <p className="text-muted mb-0">{counter.desc}</p>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default CounterBox;
