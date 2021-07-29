import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Label,
  Input,
  Form,
  FormGroup,
} from "reactstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      Contactvisible: false,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  handleStart = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleEnd = (date) => {
    this.setState({
      endDate: date,
    });
  };
  render() {
    return (
      <React.Fragment>
        <section className="section-two bg-light" id="bookroom">
          <Container>
            <Row className="justify-content-center">
              <Col lg={12}>
                <Alert
                  color="primary"
                  isOpen={this.state.Contactvisible}
                  toggle={() => {
                    this.setState({
                      Contactvisible: !this.state.Contactvisible,
                    });
                  }}
                >
                  Registration Done Successfully.
                </Alert>
                <Form
                  onSubmit={this.handleSubmit}
                  className="p-4 shadow bg-white rounded"
                >
                  <h4 className="mb-3">Book Now !</h4>
                  <Row className="text-start">
                    <Col lg="3" md="6">
                      <FormGroup>
                        <Label className="form-label"> Check in : </Label> <br />
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleStart}
                          className="form-control"
                        />
                        {/* <Input name="date" type="text" className="flatpickr flatpickr-input form-control" id="checkin-date" /> */}
                      </FormGroup>
                    </Col>

                    <Col lg="3" md="6">
                      <FormGroup>
                        <Label className="form-label"> Check out : </Label>
                        <DatePicker
                          selected={this.state.endDate}
                          onChange={this.handleEnd}
                          className="form-control"
                        />
                        {/* <Input name="date" type="text" className="flatpickr flatpickr-input form-control" id="checkout-date" /> */}
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <Row className="align-items-center">
                        <Col md="4">
                          <FormGroup>
                            <Label className="form-label">Adults : </Label>
                            <Input
                              type="number"
                              min="0"
                              autoComplete="off"
                              id="adult"
                              required
                              className="form-control"
                              placeholder="Adults :"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup>
                            <Label className="form-label">Children : </Label>
                            <Input
                              type="number"
                              min="0"
                              autoComplete="off"
                              id="children"
                              className="form-control"
                              placeholder="Children :"
                              required
                            />
                          </FormGroup>
                        </Col>

                        <Col md="4" className="mt-2">
                          <Input
                            type="submit"
                            id="search"
                            name="search"
                            className="searchbtn btn btn-primary w-100 p"
                            value="Search"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default SearchBar;
