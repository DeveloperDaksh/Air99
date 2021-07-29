// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import comingsoon from "../../../assets/images/comingsoon.jpg";
import logolight from "../../../assets/images/logo-light.png";

//CountDown
import Countdown from "react-countdown-now";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <React.Fragment>

        <ul className="count-down list-unstyled">
          <li id="days" className="count-number list-inline-item m-2">
          380
          <p className="count-head">Days</p>
          </li>
          <li id="hours" className="count-number list-inline-item m-2">
          {hours}
          <p className="count-head">Hours</p>
          </li>
          <li id="mins" className="count-number list-inline-item m-2">
          {minutes}
          <p className="count-head">Hours</p>
          </li>
          <li id="secs" className="count-number list-inline-item m-2">
          {seconds}
          <p className="count-head">Seconds</p>
          </li>
          <li id="end" className="h1"></li>
        </ul>

      </React.Fragment>
    );
  }
};

class PageComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/index" className="btn btn-icon btn-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>
        <section
          className="bg-home d-flex align-items-center"
          style={{ backgroundImage: `url(${comingsoon})` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="8" md="12" className="text-center">
                <Link to="#" className="logo h5">
                  <img src={logolight} height="24" alt="" />
                </Link>
                <div className="text-uppercase title-dark text-white mt-2 mb-4 coming-soon">
                  We're Coming soon...
                </div>
                <p className="text-light para-desc para-dark mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </Col>
            </Row>

            <Row>
              <Col md="12" className="text-center">
                <div id="countdown">
                  <Countdown
                    date={Date.now() + 1199658655000}
                    renderer={renderer}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12" className="text-center">
                <Link to="/index" className="btn btn-primary mt-4">
                  <i className="mdi mdi-backup-restore"></i> Go Back Home
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageComingSoon;
