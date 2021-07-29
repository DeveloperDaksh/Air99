import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Input,
  Button,
  Label,
  Alert,
} from "reactstrap";
import FeatherIcon from "feather-icons-react";

//Import Images
import client1 from "../../assets/images/client/01.jpg";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      featuresSmall: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Our Talented & Experienced Marketing Agency" },
        { title: "Create your own skin to match your brand" },
      ],
    };
    this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={7} md={6} xs={12}>
              <div className="section-title">
                <h4 className="title mb-4">We're here to help you</h4>
                <p className="text-muted para-desc">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
                <ul className="list-unstyled text-muted">
                  {this.state.featuresSmall.map((feature, key) => (
                    <li key={key} className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      {feature.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={5} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <Card className="rounded border-0 shadow-lg ms-lg-5">
                <CardBody>
                  <div className="text-center">
                    <img
                      src={client1}
                      className="avatar avatar-md-md rounded-circle shadow"
                      alt="Landrick"
                    />
                    <div className="section-title">
                      <h6 className="my-3">Calvin Carlo</h6>
                      <p className="text-muted para-desc mx-auto mb-0">
                        Start working with{" "}
                        <span className="text-primary fw-bold">
                          Landrick
                        </span>{" "}
                        that can provide everything you need.
                      </p>
                    </div>
                  </div>

                  <div className="content mt-4 pt-2">
                    <Alert
                      color="primary"
                      isOpen={this.state.isOpen}
                      toggle={() =>
                        this.setState({ isOpen: !this.state.isOpen })
                      }
                    >
                      Your Data Submitted Successfully.
                    </Alert>
                    <Form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col lg={12}>
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
                              required=""
                            />
                          </div>
                        </Col>

                        <Col lg={12}>
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
                              required=""
                            />
                          </div>
                        </Col>

                        <Col lg={12} className="mt-2">
                          <div className="d-grid">
                            <Button
                              type="submit"
                              className="btn btn-soft-primary"
                            >
                              Request call{" "}
                              <i>
                                <FeatherIcon
                                  icon="arrow-right"
                                  className="fea icon-sm"
                                />
                              </i>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Contact;
