import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Counter
import CountUp from "react-countup";

class Counter extends Component {
  state = {
    counters: [
      { id: 1, start: 56343, end: 9706873, title: "Exchanged" },
      { id: 2, start: 23, end: 106, title: "Countries" },
      { id: 3, start: 6483, end: 56043, title: "Customers" },
    ],
  };
  
  render() {
    return (
      <React.Fragment>
        <section className="section-two bg-primary bg-gradient">
          <Container>
            <Row id="counter">
              {this.state.counters.map((counter, key) => (
                <Col
                  md="4"
                  key={key}
                  className={
                    counter.id === 1 ? "" : "mt-4 pt-2 mt-sm-0 pt-sm-0"
                  }
                >
                  <div className="counter-box text-center">
                    <h2 className="mb-0 mt-3 title-dark display-4 text-white">
                      {counter.id === 1 ? "$ " : ""}
                      <span className="counter-value">
                        <CountUp
                          start={counter.start}
                          end={counter.end}
                          duration={6}
                        />
                      </span>
                    </h2>
                    <h5 className="counter-head title-dark text-light">
                      {counter.title}
                    </h5>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Counter;
