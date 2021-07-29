import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  Input,
  Button,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Card,
  CardBody,
} from "reactstrap";

//Import Images
import card from "../../assets/images/icon/credit-card.svg";
import master from "../../assets/images/payments/payment/master.png";
import visaa from "../../assets/images/payments/payment/visaa.png";
import rupay from "../../assets/images/payments/payment/rupay.png";
import paypal from "../../assets/images/payments/payment/paypals.png";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMsg: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
  }
  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 pb-0 d-table w-100">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10">
                <div className="title-heading text-center mt-4">
                  <img src={card} className="avatar avatar-md-sm" alt="" />
                  <h6 className="text-primary mt-3 fw-bold">
                    PAYMENTS
                  </h6>
                  <h1 className="heading mb-3">
                    A quick way to send your money faster
                  </h1>
                  <p className="para-desc mx-auto text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="" className="btn btn-primary">
                      Get Started <i className="mdi mdi-chevron-right"></i>
                    </Link>
                  </div>
                </div>

                <Row className="justify-content-center mt-lg-4 mt-3">
                  <Col md="6" className="mt-4 pt-2">
                    <Card className="rounded shadow bg-light border-0">
                      <CardBody className="py-5">
                        <img
                          src={master}
                          height="60"
                          className="text-end"
                          alt=""
                        />
                        <div className="mt-4">
                          <h5 className="">•••• •••• •••• 4559</h5>
                          <div className="d-flex justify-content-between">
                            <p className="h6 text-muted mb-0">Cristino Murfy</p>
                            <h6 className="mb-0">
                              Exp: <span className="text-muted">10/22</span>
                            </h6>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="6" className="mt-4 pt-2">
                    <Card className="rounded shadow bg-dark border-0">
                      <CardBody className="py-5">
                        <img
                          src={visaa}
                          height="60"
                          className="text-end"
                          alt=""
                        />
                        <div className="mt-4">
                          <h5 className="text-light">•••• •••• •••• 9856</h5>
                          <div className="d-flex justify-content-between">
                            <p className="h6 text-muted mb-0">Calvin Carlo</p>
                            <h6 className="mb-0 text-muted">
                              Exp: <span className="text-muted">01/24</span>
                            </h6>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="6" className="mt-4 pt-2">
                    <Card className=" rounded shadow bg-info border-0">
                      <CardBody className="py-5">
                        <img
                          src={rupay}
                          height="60"
                          className="text-end"
                          alt=""
                        />
                        <div className="mt-4">
                          <h5 className="text-white">•••• •••• •••• 5465</h5>
                          <div className="d-flex justify-content-between">
                            <p className="h6 text-light mb-0">Miriam Jockky</p>
                            <h6 className="mb-0 text-light">
                              Exp: <span className="text-light">03/23</span>
                            </h6>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="6" className="mt-4 pt-2">
                    <Card className="rounded shadow bg-light border-0">
                      <CardBody className="py-5">
                        <img
                          src={paypal}
                          height="60"
                          className="text-end"
                          alt=""
                        />
                        <div className="mt-4">
                          <Alert
                            color="primary"
                            isOpen={this.state.successMsg}
                            toggle={() => {
                              this.setState({
                                successMsg: !this.state.successMsg,
                              });
                            }}
                          >
                            Data sended successfully.
                          </Alert>
                          <Form>
                            <FormGroup className="mt-4 pt-3 mb-0">
                              <InputGroup>
                                <Input
                                  name="email"
                                  id="email"
                                  type="email"
                                  className="form-control"
                                  placeholder="Paypal Email :"
                                  required
                                  aria-describedby="newssubscribebtn"
                                />
                                <InputGroupAddon addonType="append">
                                  <Button
                                    onClick={this.handleSubmit}
                                    className="btn btn-primary submitBnt"
                                    type="submit"
                                    id="paypalmail"
                                  >
                                    Send
                                  </Button>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
                          </Form>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
