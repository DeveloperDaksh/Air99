import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//React Typist
import Typist from "react-typist";

// import images
import comingsoon from "../../../assets/images/comingsoon2.jpg";
import logolight from "../../../assets/images/logo-light.png";

//CountDown
import Countdown from "react-countdown-now";

//Import Background Video
import Video from "./Video";

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
            45
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
        </ul>
      </React.Fragment>
    );
  }
};

class PageComingsoon2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.togglemodal.bind(this);
  }

  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/index" className="btn btn-icon btn-soft-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>
        <section
          className="bg-home bg-animation-left dark-left d-flex align-items-center"
          style={{ backgroundImage: `url(${comingsoon})` }}
          id="home"
        >
          <Video />
          <Container
            className="position-relative text-md-start text-center"
            style={{ zIndex: 1 }}
          >
            <Row>
              <Col md="12">
                <Link to="#" className="logo h5">
                  <img src={logolight} height="24" alt="" />
                </Link>
                <h1 className="text-uppercase text-white title-dark mt-2 mb-4 coming-soon">
                  <Typist>
                    <span className="element">We're Coming soon...</span>
                    <Typist.Backspace count={20} delay={400} />
                    <span className="element">We're Be Ready to</span>
                    <Typist.Backspace count={17} delay={400} />
                    <span className="element">We're Connected with us</span>
                  </Typist>
                </h1>
                <p className="text-light para-dark para-desc">
                  Start working with{" "}
                  <span className="fw-bold">Landrick</span> that can
                  provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <div id="countdown">
                  <Countdown
                    date={Date.now() + 1199658655000}
                    renderer={renderer}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Link
                  to="#"
                  onClick={this.togglemodal}
                  className="btn btn-primary mt-4 me-2"
                >
                  <i className="mdi mdi-check"></i> Notify Me
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        <Modal
          isOpen={this.state.modal}
          role="dialog"
          centered={true}
          id="trialform"
        >
          <ModalHeader toggle={this.togglemodal}>Subscribe Me</ModalHeader>
          <ModalBody>
            <div className="bg-white p-3 rounded box-shadow">
              <p>
                We are comingsoon. Please, Enter your mail id and subscribe.
              </p>
              <Form>
                <div className="mb-3">
                  <InputGroup>
                    <Input
                      name="email"
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Your Email :"
                      required=""
                      aria-describedby="newssubscribebtn"
                    />
                    <InputGroupAddon addonType="append">
                      <Button
                        color="primary"
                        className="submitBnt"
                        type="submit"
                        id="paypalmail"
                      >
                        Subscribe
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </Form>
            </div>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PageComingsoon2;
