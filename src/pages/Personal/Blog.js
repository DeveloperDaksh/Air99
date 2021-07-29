// React Basic and Bootstrap
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import BlogBox from "../../components/Shared/BlogBox";

// import images
import personal01 from "../../assets/images/personal/1.jpg";
import personal02 from "../../assets/images/personal/2.jpg";
import personal03 from "../../assets/images/personal/3.jpg";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          image: personal01,
          title: "Design your apps in your own way",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 2,
          image: personal02,
          title: "How apps is changing the IT world",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 3,
          image: personal03,
          title: "Smartest Applications for Business",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
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
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              isLeft={true}
              title="Latest News"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* blog box */}
              <BlogBox blogs={this.state.blogs} />

              <Col xs="12" className="mt-4 pt-2">
                <Link to="page-blog-grid" className="btn btn-primary ">
                  See More <i className="mdi mdi-chevron-right"></i>
                </Link>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60" id="contact">
            {/* section title */}
            <SectionTitle
              isLeft={true}
              title="Contact Me"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              <Col lg="4" md="6" className="mt-4 pt-2">
                <Card className="rounded shadow border-0">
                  <CardBody className="py-5">
                    <h4>Get In Touch !</h4>
                    <div className="custom-form mt-3">
                      <div id="message"></div>
                      <Alert
                        color="primary"
                        isOpen={this.state.Contactvisible}
                        toggle={() => {
                          this.setState({
                            Contactvisible: !this.state.Contactvisible,
                          });
                        }}
                      >
                        Contact details send successfully.
                      </Alert>
                      <Form
                        method="post"
                        onSubmit={this.handleSubmit}
                        name="contact-form"
                        id="contact-form"
                      >
                        <Row>
                          <Col md="12">
                            <div className="mb-3">
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
                                required
                              />
                            </div>
                          </Col>
                          <Col md="12">
                            <div className="mb-3">
                              <Label className="form-label">
                                Your Email{" "}
                                <span className="text-danger">*</span>
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
                                id="email"
                                type="email"
                                className="form-control ps-5"
                                placeholder="Your email :"
                                required
                              />
                            </div>
                          </Col>
                          <Col md="12">
                            <div className="mb-3">
                              <Label className="form-label">
                                Subject{" "}
                                <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="book"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="subject"
                                id="subject"
                                type="subject"
                                className="form-control ps-5"
                                placeholder="Subject :"
                                required
                              />
                            </div>
                          </Col>
                          <Col md="12">
                            <div className="mb-3">
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
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm={12} className="text-center">
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

              <Col lg="8" md="6" className="ps-md-3 pe-md-3 mt-4 pt-2">
                <Card className="border-0 shadow rounded">
                  <div className="map map-height-two map-gray">
                    <iframe
                      title="Landrick"
                      src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      className="rounded"
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;
