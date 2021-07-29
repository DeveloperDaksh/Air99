import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Label,
  Input,
  FormGroup,
  Card,
  CardBody,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class ContactUs extends Component {
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
        <Container>
          {/* section title */}
          <SectionTitle
            title="Get In Touch !"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row className="align-items-center">
            <Col
              lg="5"
              md={{ size: 6, order: 1 }}
              xs={{ order: 2 }}
              className="mt-4 pt-2"
            >
              <Card
                className="rounded shadow border-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <CardBody>
                  <div className="custom-form bg-white">
                    <div id="message"></div>
                    <Alert
                      color="info"
                      isOpen={this.state.successMsg}
                      toggle={() => {
                        this.setState({ successMsg: !this.state.successMsg });
                      }}
                    >
                      Data sended successfully.
                    </Alert>
                    <Form
                      method="post"
                      onSubmit={this.handleSubmit}
                      name="contact-form"
                      id="contact-form"
                    >
                      <Row>
                        <Col lg="6">
                          <FormGroup className="mb-3">
                            <Label className="form-label">
                              Your Name <span className="text-danger">*</span>
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
                              name="name"
                              id="name"
                              type="text"
                              className="form-control ps-5"
                              placeholder="First Name :"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="mb-3">
                            <Label className="form-label">
                              Your Email <span className="text-danger">*</span>
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
                              name="email"
                              id="email2"
                              type="email"
                              className="form-control ps-5"
                              placeholder="Your email :"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="mb-3">
                            <Label className="form-label">Comments</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control ps-5"
                              placeholder="Your Message :"
                            ></textarea>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12" className="text-center">
                          <Input
                            type="submit"
                            id="submit"
                            name="send"
                            className="submitBnt btn btn-primary btn-block"
                            value="Send Message"
                          />
                          <div id="simple-msg"></div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col
              lg="7"
              md={{ size: 6, order: 2 }}
              xs={{ order: 1 }}
              className="mt-4 pt-2 order-1 order-md-2"
            >
              <div className="title-heading ms-lg-4">
                <h4
                  className="mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Contact Details
                </h4>
                <p
                  className="text-muted"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
                <Card className="border-0 bg-transparent">
                  <CardBody className="p-0">
                    <div
                      className="contact-detail d-flex align-items-center mt-3"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="icon">
                        <i>
                          <FeatherIcon
                            icon="mail"
                            className="fea icon-m-md text-dark me-3"
                          />
                        </i>
                      </div>
                      <div className="content overflow-hidden d-block">
                        <h6 className="fw-bold mb-0">Email</h6>
                        <Link to="#" className="text-primary">
                          contact@example.com
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="border-0 bg-transparent">
                  <CardBody className="p-0">
                    <div
                      className="contact-detail d-flex align-items-center mt-3"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="icon">
                        <i>
                          <FeatherIcon
                            icon="phone"
                            className="fea icon-m-md text-dark me-3"
                          />
                        </i>
                      </div>
                      <div className="content overflow-hidden d-block">
                        <h6 className="fw-bold mb-0">Phone</h6>
                        <Link to="#" className="text-primary">
                          +152 534-468-854
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="border-0 bg-transparent">
                  <CardBody className="p-0">
                    <div
                      className="contact-detail d-flex align-items-center mt-3"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="icon">
                        <i>
                          <FeatherIcon
                            icon="map-pin"
                            className="fea icon-m-md text-dark me-3"
                          />
                        </i>
                      </div>
                      <div className="content overflow-hidden d-block">
                        <h6 className="fw-bold mb-0">Location</h6>
                        <Link to="#" className="text-primary">
                          View on Google map
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ContactUs;
