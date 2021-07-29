// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import maintenanceImg from "../../../assets/images/maintenance.jpg";
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

         <span id="maintenance" class="timer">
         {hours} : {minutes}
         </span>
         <span class="d-block h6 text-uppercase text-white">Minutes</span>

        
      </React.Fragment>
    );
  }
};

class PageMaintenance extends Component {
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
          style={{ backgroundImage: `url(${maintenanceImg})` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} md={12} className="text-center">
                <Link to="#" className="logo h5">
                  <img src={logolight} height="24" alt="" />
                </Link>
                <div className="text-uppercase text-white title-dark mt-2 mb-4 maintenance">
                  System Is Under Maintenance
                </div>
                <p className="text-white-50 para-desc mx-auto para-dark">
                  Perfect and awesome template to present your future product or
                  service. Hooking audience attention is all in the opener.
                </p>
              </Col>
            </Row>

            <Row>
              <Col md={12} className="text-center">
                <div className="text-center">
                  <Countdown
                    date={Date.now() + 1199658655000}
                    renderer={renderer}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={12} className="text-center">
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
export default PageMaintenance;
