import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Progress,
  Collapse,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";

//Import Images
import litecoin from "../../assets/images/crypto/litecoin.png";
import bitcoin from "../../assets/images/crypto/bitcoin.png";
import auroracoin from "../../assets/images/crypto/auroracoin.png";
import coinye from "../../assets/images/crypto/coinye.png";
import ethereum from "../../assets/images/crypto/ethereum.png";
import potcoin from "../../assets/images/crypto/potcoin.png";
import zcash from "../../assets/images/crypto/zcash.png";
import monero from "../../assets/images/crypto/monero.png";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [
        { name: "Bitcoin", image: bitcoin, id: "Bitcoin", link: "" },
        { name: "coinye", image: coinye, id: "coinye", link: "" },
        { name: "ethereum", image: ethereum, id: "ethereum", link: "" },
        { name: "litecoin", image: litecoin, id: "litecoin", link: "" },
        { name: "monero", image: monero, id: "monero", link: "" },
        { name: "auroracoin", image: auroracoin, id: "auroracoin", link: "" },
        { name: "potcoin", image: potcoin, id: "potcoin", link: "" },
        { name: "zcash", image: zcash, id: "zcash", link: "" },
      ],
      collapse1: true,
      col1: true,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
    this.t_col5 = this.t_col5.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
      col5: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
      col5: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
      col5: false,
    });
  }
  t_col5() {
    this.setState({
      col5: !this.state.col5,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg="5" md="6" xs="12">
              <div className="p-4 text-center rounded bg-light shadow">
                <h4 className="mb-0">
                  <span className="text-warning">1 BTC</span> = $ 8654.32
                </h4>
              </div>

              <div className="mt-4 pt-2 text-center">
                {this.state.coins.map((coin, key) => (
                  <Link to={coin.link} key={key} className="ms-1">
                    <img
                      src={coin.image}
                      className="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow"
                      id={coin.id}
                      alt=""
                    />
                    <UncontrolledTooltip placement="top" target={coin.id}>
                      {coin.name}
                    </UncontrolledTooltip>
                  </Link>
                ))}
              </div>

              <Card className="mt-4 pt-2 rounded shadow border-0">
                <CardBody>
                  <h5 className="card-title">Open Cryptocurrency</h5>
                  <div className="progress-box mt-4">
                    <Progress
                      color="primary"
                      barClassName="position-relative"
                      striped
                      value={67}
                    />
                  </div>
                  <p className="text-muted mt-4 mb-0">
                    Build on the Cryptocurrency platform for free and make use
                    of an array of tools created by our community.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col lg="7" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="ms-lg-4">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Frequently asked questions</h4>
                  <p className="text-muted para-desc mb-0">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                </div>

                <div className="faq-content mt-4">
                  <div className="accordion" id="accordionExample">
                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col1}
                        className={
                          this.state.col1
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 bg-light p-3 pe-5"
                          id="headingOne"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            How our{" "}
                            <span className="text-primary">Landrick</span> work
                            ?
                            <i
                              className={
                                this.state.col1
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col1}>
                        <CardBody className="px-2 py-4">
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col2}
                        className={
                          this.state.col2
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 bg-light p-3 pe-5"
                          id="headingTwo"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            What is the main process open account ?
                            <i
                              className={
                                this.state.col2
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col2}>
                        <CardBody className="px-2 py-4">
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col3}
                        className={
                          this.state.col3
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 bg-light p-3 pe-5"
                          id="headingfive"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            How to make unlimited data entry ?
                            <i
                              className={
                                this.state.col3
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col3}>
                        <CardBody className="px-2 py-4">
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col4}
                        className={
                          this.state.col4
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 bg-light p-3 pe-5"
                          id="headingfive"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            Is <span className="text-primary">
                              Landrick
                            </span>{" "}
                            safer to use with my account ?
                            <i
                              className={
                                this.state.col4
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col4}>
                        <CardBody className="px-2 py-4">
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded">
                      <Link
                        to="#"
                        onClick={this.t_col5}
                        className={
                          this.state.col5
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 bg-light p-3 pe-5"
                          id="headingfive"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            How can i contact your technical team ?
                            <i
                              className={
                                this.state.col5
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col5}>
                        <CardBody className="px-2 py-4">
                          <p className="text-muted mb-0 faq-ans">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Faq;
