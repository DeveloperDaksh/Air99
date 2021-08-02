import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import {
  Card,
  CardBody,
  Col,
  UncontrolledCollapse,
  Container,
  Form,
  Input,
  Label,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
//Import Icons
import FeatherIcon from "feather-icons-react";
import DialogContent from "@material-ui/core/DialogContent";

//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

import travelBg from "../../assets/images/travel/bg.jpg";
import axios from "axios";

export default class Section extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     CheckIn: new Date(),
  //     CheckOut: new Date(),
  //     source: '',
  //     destination: '',
  //     dropdownOpen: false,
  //     lastClicked: null,
  //     flightClass: '',

  //   };
  //   // this.toggleIt.bind(this)
  //   // this.setLastClicked.bind(this)
  //   this.formSubmit = this.formSubmit.bind(this);

  //   // this.findAcc = this.findAcc.bind(this)
  // }

  constructor(props) {
    super(props);
    this.state = {
      CheckIn: new Date(),
      CheckOut: new Date(),
      source: "",
      destination: "",
      dropdownOpen: false,
      lastClicked: null,
      flightClass: "",
      coordinates: { lat: null, lng: null },
      address: "",
      open: false,
      adult: 0,
      children: 0,
      infant: 0,
      infantLap: 0,
      error: "",
      AuthToken: "",
      sourceSuggestions: [],
      destinationSuggestions: [],
      sourceCode: "",
      destinationCode: "",
    };
    // this.toggleIt.bind(this)
    // this.setLastClicked.bind(this)
    this.formSubmit = this.formSubmit.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTravellerCounter = this.handleTravellerCounter.bind(this);
    this.getToken = this.getToken.bind(this);
    // this.findAcc = this.findAcc.bind(this)
  }
  handleTravellerCounter(event) {
    console.log(event.target);
    this.setState((prev) => ({
      [event.target.name]: Math.max(
        0,
        prev[event.target.name] + parseInt(event.target.value)
      ),
    }));
    console.log(this.state);
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  // findAcc (){
  //   var curr  = new Date()
  //   if(this.state.checkin.getTime())
  // }
  async formSubmit(event) {
    this.setState({ error: "" });
    event.preventDefault();
    if (!!!this.state.adult) {
      setTimeout(() => {
        this.setState({ error: "Minimum One Adult is Required" });
      }, 500);
      return;
    }
    this.setState({ error: "" });
    const qs = queryString.stringify({
      source: this.state.sourceCode,
      destination: this.state.destinationCode,
      checkin:new Date(this.state.CheckIn.getTime() - (this.state.CheckIn.getTimezoneOffset() * 60000 )).toISOString().split("T")[0],
      flightClass: this.state.flightClass,
      // checkout : this.state.CheckOut.toISOString().slice(0,10)
    });
    // http://localhost:3000/
    // console.log(this.state.CheckIn , qs);
    window.location.href = `search-result?${qs}`;

    return;
    // console.log(this.state);
  }
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggle = () => setDropdownOpen(prevState => !prevState);

  async getToken() {
    try {
      let resp = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: `${process.env.REACT_APP_CLIENT_ID}`,
          client_secret: `${process.env.REACT_APP_SECRET}`,
        })
      );
      if (!resp.data.access_token) throw resp;
      this.setState({ AuthToken: resp.data.access_token });
    } catch (error) {
      console.log(error);
    }
  }
  componentWillMount() {
    this.getToken();
  }
  render() {
    const searchSource = async (e, newValue) => {
      await this.setState({ source: e?.target?.value });
      let resp;
      if (this.state.source !== "")
        try {
          resp = await axios.get(
            `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=${this.state.source}`,
            {
              headers: {
                Authorization: "Bearer " + this.state.AuthToken,
              },
            }
          );
          await this.setState({ sourceSuggestions: resp.data.data });
        } catch (error) {
          console.log(error);
        }
      else {
        this.setState({ sourceSuggestions: [] });
      }
    };
    const searchDestination = async (e) => {
      await this.setState({ destination: e?.target?.value });
      let resp;
      if (this.state.destination !== "")
        try {
          resp = await axios.get(
            `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=${this.state.destination}`,
            {
              headers: {
                Authorization: "Bearer " + this.state.AuthToken,
              },
            }
          );
          await this.setState({ destinationSuggestions: resp.data.data });
        } catch (error) {
          console.log(error);
        }
      else {
        this.setState({ destinationSuggestions: [] });
      }
    };

    const isValid = () => {
      return !!this.state.adult;
    };

    const cDate = () => {
      let d = new Date();
      d.setHours(0);
      d.setMilliseconds(0);
      d.setMinutes(0);
      d.setSeconds(0);
      return d;
    };
    const sourceSuggestions = this.state.sourceSuggestions;
    const destinationSuggestions = this.state.destinationSuggestions;
    return (
      <React.Fragment>
        <section
          className="bg-half-170 d-table w-100"
          style={{ background: `url(${travelBg}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg={12} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <Card className="shadow rounded border-0 ms-lg-5">
                  <CardBody>
                    <h5 className="card-title">You can start search here</h5>

                    <Form className="login-form" onSubmit={this.formSubmit}>
                      <Row>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">From</Label>
                            <div className="form-icon position-relative">
                              <Autocomplete
                                fullWidth
                                onChange={(event, newValue) => {
                                  this.setState({
                                    source: newValue?.address?.cityName || "",
                                    sourceCode: newValue?.iataCode || "",
                                  });
                                }}
                                options={sourceSuggestions}
                                onInputChange={searchSource}
                                inputValue={this.state.source}
                                getOptionLabel={(option) =>
                                  `${option?.name} ${option?.subType}, ${option?.address?.cityName}`
                                }
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    // label="Where"
                                    // variant="outlined"
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">To</Label>
                            <div className="form-icon position-relative">
                              <Autocomplete
                                fullWidth
                                onChange={(event, newValue) => {
                                  this.setState({
                                    destination:
                                      newValue?.address?.cityName || "",
                                    destinationCode: newValue?.iataCode || "",
                                  });
                                }}
                                options={destinationSuggestions}
                                onInputChange={searchDestination}
                                inputValue={this.state.destination}
                                getOptionLabel={(option) =>
                                  `${option?.name} ${option?.subType}, ${option?.address?.cityName}`
                                }
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    // label="Where"
                                    // variant="outlined"
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label className="form-label"> Check in : </Label>
                            <Flatpickr
                              value={this.state.CheckIn}
                              className="flatpickr flatpickr-input form-control"
                              placeholder="Pick a date"
                              options={{
                                minDate: cDate(),
                                altInput: true,
                                // altFormat: "F j, Y",
                                dateFormat: "Y-m-d",
                              }}
                              onChange={(date) => {
                                console.log(date[0]);
                                this.setState({ CheckIn: date[0] });
                              }}
                            />
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="mb-3">
                            <Label className="form-label"> Check out : </Label>
                            <Flatpickr
                              value={this.state.CheckOut}
                              className="flatpickr flatpickr-input form-control"
                              placeholder="Pick a date"
                              options={{
                                minDate: this.state.CheckIn,
                                altInput: true,
                                dateFormat: "Y-m-d",
                              }}
                              onChange={(date) => {
                                this.setState({ CheckOut: date[0] });
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div>
                            <Dropdown
                              isOpen={this.state.dropdownOpen}
                              toggle={() => {
                                this.setState((prev) => ({
                                  dropdownOpen: !prev.dropdownOpen,
                                }));
                              }}
                            >
                              <DropdownToggle caret>
                                {this.state.flightClass === ""
                                  ? "Class"
                                  : this.state.flightClass}
                              </DropdownToggle>
                              <DropdownMenu container="body">
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({ flightClass: "Economy" })
                                  }
                                >
                                  Economy
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({ flightClass: "Business" })
                                  }
                                >
                                  Business
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({ flightClass: "First" })
                                  }
                                >
                                  First
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div>
                            <button
                              type="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                              class="dropdown-toggle btn btn-secondary"
                              id="toggler"
                              toggle={() => {}}
                              onClick={this.handleClickOpen}
                            >
                              Travellers
                            </button>
                            {isValid() && (
                              <span>
                                {" "}
                                Adults:{this.state.adult} Children:
                                {this.state.children +
                                  this.state.infant +
                                  this.state.infantLap}
                              </span>
                            )}
                            {this.state.error && (
                              <p style={{ color: "red" }}>{this.state.error}</p>
                            )}
                            <UncontrolledCollapse toggler="#toggler">
                              <DialogContent>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignContent: "center",
                                  }}
                                >
                                  <h5>Adult : </h5>
                                  <div>
                                    <button
                                      style={{
                                        padding: "5px",
                                        marginRight: "5px",
                                      }}
                                      name="adult"
                                      type="button"
                                      value={-1}
                                      onClick={this.handleTravellerCounter}
                                    >
                                      -
                                    </button>
                                    {this.state.adult}
                                    <button
                                      style={{
                                        padding: "5px",
                                        marginLeft: "5px",
                                      }}
                                      name="adult"
                                      type="button"
                                      value={1}
                                      onClick={this.handleTravellerCounter}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignContent: "center",
                                  }}
                                >
                                  <h5>Children : </h5>
                                  <div>
                                    {" "}
                                    <button
                                      style={{
                                        padding: "5px",
                                        marginRight: "5px",
                                      }}
                                      name="children"
                                      type="button"
                                      value={-1}
                                      onClick={this.handleTravellerCounter}
                                    >
                                      -
                                    </button>
                                    {this.state.children}
                                    <button
                                      style={{
                                        padding: "5px",
                                        marginLeft: "5px",
                                      }}
                                      name="children"
                                      type="button"
                                      value={1}
                                      onClick={this.handleTravellerCounter}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignContent: "center",
                                  }}
                                >
                                  <h5>Infant(Below 2) : </h5>
                                  <div>
                                    <button
                                      style={{
                                        padding: "5px",
                                        marginRight: "5px",
                                      }}
                                      name="infant"
                                      type="button"
                                      value={-1}
                                      onClick={this.handleTravellerCounter}
                                    >
                                      -
                                    </button>
                                    {this.state.infant}
                                    <button
                                      style={{
                                        padding: "5px",
                                        marginLeft: "5px",
                                      }}
                                      name="infant"
                                      type="button"
                                      value={1}
                                      onClick={this.handleTravellerCounter}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignContent: "center",
                                  }}
                                >
                                  <h5>Infant (Lap) : </h5>
                                  <div>
                                    {" "}
                                    <button
                                      style={{
                                        padding: "5px",
                                        marginRight: "5px",
                                      }}
                                      name="infantLap"
                                      type="button"
                                      value={-1}
                                      onClick={this.handleTravellerCounter}
                                    >
                                      -
                                    </button>
                                    {this.state.infantLap}
                                    <button
                                      style={{
                                        padding: "5px",
                                        marginLeft: "5px",
                                      }}
                                      name="infantLap"
                                      type="button"
                                      value={1}
                                      onClick={this.handleTravellerCounter}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </DialogContent>
                            </UncontrolledCollapse>
                          </div>
                        </Col>

                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">Your Email</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                              <input
                                type="email"
                                className="form-control ps-5"
                                placeholder="Email"
                                name="email"
                                required
                              />
                            </div>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheck1"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck1"
                              >
                                I Accept{" "}
                                <Link to="#" className="text-primary">
                                  Terms And Condition
                                </Link>
                              </label>
                            </div>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="d-grid">
                            <button className="btn btn-primary">
                              Search Now
                            </button>
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
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
