import React, { Component } from "react";
import { Col } from "reactstrap";
import CountUp from "react-countup";

class Counter2 extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.counters.map((counter, key) => (
          <Col md="3" xs="6" key={key} className="mt-4 pt-2">
            <div className="counter-box text-center">
              <img src={counter.image} height="70" alt="" />
              <h2 className="mb-0 mt-4">
                <span className="counter-value">
                  {" "}
                  <CountUp
                    start={counter.start}
                    end={counter.value}
                    duration={12}
                  />
                </span>
                {counter.postfix}
              </h2>
              <h6 className="counter-head text-muted">{counter.title}</h6>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default Counter2;
