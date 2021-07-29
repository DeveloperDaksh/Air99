import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Label,
  Alert,
  Card,
  CardBody,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Containers
import SectionTitle from "../../components/Shared/SectionTitle";

//Import Images
import customer from "../../assets/images/customer/customer.png";

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketVisible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ ticketVisible: true });
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* section title */}
          <SectionTitle
            title="Submit A Ticket"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row className="align-items-center">
            <Col lg="6" md="5" xs="12" className="mt-4 pt-2">
              <img
                src={customer}
                data-aos="fade-up"
                data-aos-duration="1400"
                className="img-fluid"
                alt=""
              />
            </Col>

            <Col lg="6" md="7" xs="12" className="mt-4 pt-2">
              <Alert
                color="primary"
                isOpen={this.state.ticketVisible}
                toggle={() => {
                  this.setState({ ticketVisible: !this.state.ticketVisible });
                }}
              >
                Ticket details send successfully.
              </Alert>
              <Card className="rounded shadow border-0 ms-lg-4">
                <CardBody className="p-4">
                  <Form
                    onSubmit={this.handleSubmit}
                    data-aos="fade-up"
                    data-aos-duration="1400"
                  >
                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label className="form-label">Your Name :</Label>
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
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">Your Email :</Label>
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
                          <Label className="form-label">Reasons / Catagories :</Label>
                          <select
                            className="form-control custom-select"
                            id="Sortbylist-Shop"
                          >
                            <option>Catagories</option>
                            <option>General Question</option>
                            <option>Bugs</option>
                            <option>Remote</option>
                          </select>
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">Subject :</Label>

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
                            className="form-control ps-5"
                            placeholder="Your subject :"
                            required
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">Url :</Label>

                          <div className="form-icon position-relative">
                            <i>
                              <FeatherIcon
                                icon="globe"
                                className="fea icon-sm icons"
                              />
                            </i>
                          </div>
                          <Input
                            name="url"
                            id="url"
                            type="url"
                            className="form-control ps-5"
                            placeholder="Url :"
                            required
                          />
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="mb-3">
                          <Label className="form-label">Description :</Label>

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
                            placeholder="Describe your problem :"
                          ></textarea>
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="mb-3">
                          <div className="form-check">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck1"
                            />
                            <Label
                              className="form-check-label"
                              for="customCheck1"
                            >
                              I Accept{" "}
                              <Link to="#" className="text-primary">
                                Terms And Condition
                              </Link>
                            </Label>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                          value="Submit"
                        />
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Ticket;
