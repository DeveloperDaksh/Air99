import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  Input,
  Label,
  Card,
  CardBody,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class PricingAndPayment extends Component {
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
        <Container className="mt-100 mt-60">
          {/* Render Section Title */}
          <SectionTitle
            title="Pricing & Add Payment Card"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            <Col lg="5" md="6" xs="12" className="mt-4 pt-2">
              <Card className="bg-light shadow rounded border-0">
                <div className="bg-primary bg-gradient p-4 text-center rounded-top">
                  <h4 className="mb-0 card-title title-dark text-light">
                    Payment plan
                  </h4>
                </div>

                <CardBody>
                  <div className="d-flex justify-content-center mb-4">
                    <span className="price text-primary fw-bold display-4 mb-0">
                      2
                    </span>
                    <span className="h4 mb-0 mt-2 text-primary">%</span>
                    <span className="h6 align-self-end fw-bold text-uppercase mb-2 ms-2">
                      {" "}
                      Per Transection
                    </span>
                  </div>

                  <ul className="feature list-inline">
                    <li className="h6 mt-2 fw-normal">
                      <i>
                        <FeatherIcon
                          icon="check-circle"
                          className="fea icon-ex-md text-primary me-2"
                        />
                      </i>
                      Transparent payouts
                    </li>
                    <li className="h6 mt-2 fw-normal">
                      <i>
                        <FeatherIcon
                          icon="check-circle"
                          className="fea icon-ex-md text-primary me-2"
                        />
                      </i>
                      Deposit tagging
                    </li>
                    <li className="h6 mt-2 fw-normal">
                      <i>
                        <FeatherIcon
                          icon="check-circle"
                          className="fea icon-ex-md text-primary me-2"
                        />
                      </i>
                      Control payout timing
                    </li>
                    <li className="h6 mt-2 fw-normal">
                      <i>
                        <FeatherIcon
                          icon="check-circle"
                          className="fea icon-ex-md text-primary me-2"
                        />
                      </i>
                      24×7 support
                    </li>
                  </ul>
                  <div className="d-grid">
                    <Link to="#" className="btn btn-primary mt-4 pt-2">
                      Payment Now
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg="7" md="6" xs="12" className="mt-4 pt-2">
              <Card className="rounded border-0 shadow">
                <div className="bg-light p-4 text-center rounded-top">
                  <h4 className="mb-0 text-primary">Add a new card</h4>
                </div>

                <CardBody>
                  <Alert
                    color="primary"
                    isOpen={this.state.successMsg}
                    toggle={() => {
                      this.setState({ successMsg: !this.state.successMsg });
                    }}
                  >
                    Card Added successfully.
                  </Alert>
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      <Col md="12">
                        <div className="mb-3">
                          <Label className="form-label">Name of card holder : </Label>
                          <Input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control fw-bold"
                            required
                            placeholder="Name"
                          />
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="mb-3">
                          <Label className="form-label">Card Number :</Label>
                          <Input
                            type="number"
                            min="0"
                            autoComplete="off"
                            id="cardnumber"
                            className="form-control fw-bold"
                            required
                            placeholder="0000 0000 0000 0000"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">Expires End :</Label>
                          <Input
                            type="number"
                            min="0"
                            autoComplete="off"
                            id="exdate"
                            className="form-control fw-bold"
                            required
                            placeholder="MM/YY"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label">CVV :</Label>
                          <Input
                            type="number"
                            min="0"
                            autoComplete="off"
                            id="cvv"
                            className="form-control fw-bold"
                            required
                            placeholder="CVV"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-primary"
                          value="Add Card"
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

export default PricingAndPayment;
