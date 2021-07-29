// React Basic and Bootstrap
import React, { Component } from "react";
import CountUp from "react-countup";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Button,
  Label,
  Card,
  CardBody,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import bg03 from "../../assets/images/course/bg03.jpg";

class Cta1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          icon: "uil uil-graduation-cap title-dark text-light h1",
          title: "Students",
          end: 25,
          postfix: "K",
        },
        {
          icon: "uil uil-book title-dark text-light h1",
          title: "Courses",
          end: 70,
          postfix: "+",
        },
        { icon: "uil uil-user title-dark text-light h1", title: "Instructors", end: 55, postfix: "+" },
        {
          icon: "mdi mdi-language-swift title-dark text-light h1",
          title: "Languages",
          end: 25,
          postfix: "+",
        },
      ],
      Contactvisible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="section bg-cta"
          style={{ background: `url(${bg03}) center center` }}
          id="admission"
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg="8" md="7" xs="12">
                <div className="section-title">
                  <h4 className="title title-dark text-white mb-4">
                    Admission Now
                  </h4>
                  <p className="para-desc para-dark mb-0 text-light">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                </div>
                <Row id="counter">
                  {this.state.counters.map((counter, key) => (
                    <Col md="3" xs="6" key={key} className="mt-4 pt-2">
                      <div className="counter-box">
                        <i
                          className={counter.icon}
                        ></i>
                        <h2 className="mb-0 text-white title-dark mt-2">
                          <span className="counter-value">
                            <CountUp duration={8} end={counter.end} />
                          </span>
                          {counter.postfix}
                        </h2>
                        <h6 className="counter-head title-dark text-light">
                          {counter.title}
                        </h6>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col lg="4" md="5" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Alert
                  color="primary"
                  isOpen={this.state.Contactvisible}
                  toggle={() => {
                    this.setState({
                      Contactvisible: !this.state.Contactvisible,
                    });
                  }}
                >
                  Data Sended successfully.
                </Alert>
                <Card className="border-0 rounded">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <h4>7 Days Free Trial</h4>
                      <Row>
                        <Col lg="12">
                          <div className="mb-3">
                            <Label className="form-label">
                              Name : <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              type="text"
                              className="form-control ps-5"
                              placeholder="Name"
                              name="name"
                              required
                            />
                          </div>
                        </Col>

                        <Col lg="12">
                          <div className="mb-3">
                            <Label className="form-label">
                              Email : <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              type="email"
                              className="form-control ps-5"
                              placeholder="Email"
                              name="email"
                              required
                            />
                          </div>
                        </Col>

                        <Col lg="12">
                          <div className="mb-3">
                            <Label className="form-label">
                              Phone : <span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="phone"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              type="number"
                              id="number"
                              className="form-control ps-5"
                              placeholder="phone"
                              required
                            />
                          </div>
                        </Col>

                        <Col lg="12" className="mt-2 mb-0">
                          <div className="d-grid">
                            <Button color="primary" type="submit">
                              Register Now
                          </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Cta1;
