import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { MobileView, BrowserView } from "react-device-detect";
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
import Button from '@material-ui/core/Button';
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
import { Dialog } from "@material-ui/core";

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
      CheckIn: new Date(props.checkin) || new Date(),
      CheckOut: new Date(props.checkout) || new Date(),
      source: "",
      destination: "",
      dropdownOpen: false,
      lastClicked: null,
      flightClass: props.flightClass || "Economy",
      coordinates: { lat: null, lng: null },
      address: "",
      open: false,
      adult: 1,
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
    this.handleClickOpenDropdown = this.handleClickOpenDropdown.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
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
    console.log("inside ");
    this.setState({ open: true });
  };
  handleClickOpenDropdown = () => {
    console.log("inside Dropdown");
    this.setState({ dropdownOpen: true });
  };
  handleClose = () => {
    console.log("inside ");
    this.setState({ open: false });
  };
  handleCloseDropdown = () => {
    console.log("inside Dropdown");
    this.setState({ dropdownOpen: false });
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
      checkin: new Date(
        this.state.CheckIn.getTime() -
        this.state.CheckIn.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0],
      checkout: new Date(
        this.state.CheckOut.getTime() -
        this.state.CheckOut.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0],
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
            `https://www.in.cheapflights.com/mv/marvel?f=j&where=${this.state.source}&s=72&lc_cc=IN&lc=en&v=v1&cv=5`
          );
          await this.setState({ sourceSuggestions: resp.data });
          console.log(this.state.sourceSuggestions);
          console.log(this.state.source);
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
            `https://www.in.cheapflights.com/mv/marvel?f=j&where=${this.state.destination}&s=72&lc_cc=IN&lc=en&v=v1&cv=5`
          );
          await this.setState({ destinationSuggestions: resp.data });
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
    const backgroundSearch = this.props.searchPage
      ? {
        paddingBottom: "0",
      }
      : {
        background: `url(${travelBg})`,
        backgroundPosition: '0% 60%',
        backgroundSize: 'cover',
        backgroundColor: '#5c6ea1'
      };
    return (
      <React.Fragment>
        <section className="bg-half-170 d-table w-100" style={backgroundSearch}>
          {!this.props.searchPage}
          <Row className="justify-content-center">
            <div className="col-md-6 col-sm-12" style={{
              maxWidth: "400px",
              padding: 'calc(1.25rem * 1.5) calc(1.25rem * 1.5) 1.25rem calc(1.25rem * 1.5)',
              backgroundColor: '#005ba9',
              borderRadius: '20px',
              boxShadow: '0 0 2px #005ba9'
            }}>
              <Row className="align-items-center justify-content-center">
                <Col lg={12} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <Card>
                    <CardBody style={{ padding: 0 }}>
                      <BrowserView>
                        <Form className="login-form" onSubmit={this.formSubmit
                        } style={{ fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;' }}>

                          <Col
                            style={{
                              width: "auto",
                              flexGrow: "2.5",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <div className="mb-3">
                              <Label className="form-label text-white" >From</Label>
                              <div className="form-icon position-relative">
                                <Autocomplete
                                  fullWidth
                                  style={{ maxWidth: "100vw", backgroundColor: 'white', borderRadius: '3px' }}
                                  onChange={(event, newValue) => {
                                    this.setState({
                                      source: newValue?.cityname || "",
                                      sourceCode: newValue?.apicode || "",
                                    });
                                  }}
                                  options={sourceSuggestions}
                                  onInputChange={searchSource}
                                  inputValue={this.state.source}
                                  getOptionLabel={(option) =>
                                    `${option?.displayname}`
                                  }
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      placeholder={this.props.source}
                                    // label="Where"
                                    // variant="outlined"
                                    />
                                  )}
                                />
                              </div>
                            </div>
                          </Col>

                          <Col
                            style={{
                              width: "auto",
                              flexGrow: "2.5",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <div className="mb-3">
                              <Label className="form-label text-white" >To</Label>
                              <div className="form-icon position-relative">
                                <Autocomplete
                                  fullWidth
                                  style={{ maxWidth: "100vw", backgroundColor: 'white', borderRadius: '3px' }}
                                  onChange={(event, newValue) => {
                                    this.setState({
                                      destination: newValue?.cityname || "",
                                      destinationCode: newValue?.apicode || "",
                                    });
                                  }}
                                  options={destinationSuggestions}
                                  onInputChange={searchDestination}
                                  inputValue={this.state.destination}
                                  getOptionLabel={(option) =>
                                    `${option?.displayname}`
                                  }
                                  renderInput={(params) => (
                                    <TextField
                                      placeholder={this.props.destination}
                                      {...params}
                                    // label="Where"
                                    // variant="outlined"
                                    />
                                  )}
                                />
                              </div>
                            </div>
                          </Col>
                          <div className="row my-2">
                            <Col
                              style={{
                                width: "auto",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                            >
                              <div className="mb-3" style={{ width: "auto" }}>
                                <Flatpickr
                                  value={this.state.CheckIn}
                                  className="flatpickr flatpickr-input form-control"
                                  placeholder="Check in date"
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
                            <Col
                              style={{
                                width: "auto",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                            >
                              <div className="mb-3" style={{ width: "auto" }}>

                                <Flatpickr
                                  value={this.state.CheckOut}
                                  className="flatpickr flatpickr-input form-control"
                                  placeholder="Check out date"
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
                          </div>
                          <div className="row my-2">
                            <Col
                              style={{
                                width: "auto",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div>
                                <Dropdown
                                  isOpen={this.state.open}
                                  toggle={() => {
                                    this.setState((prev) => ({
                                      open: !prev.open,
                                    }));
                                  }}
                                >
                                  <DropdownToggle caret style={{ width: '150px' }}
                                  >
                                    {this.state.flightClass}
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
                            <Col
                              style={{
                                width: "auto",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div>
                                <button
                                  type="button"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  class="dropdown-toggle btn btn-secondary"
                                  toggle={() => { }}
                                  onClick={this.handleClickOpenDropdown}
                                  style={{ width: '150px' }}
                                >
                                  Travellers
                                </button>

                                <Dialog
                                  open={this.state.dropdownOpen}
                                  onClose={this.handleCloseDropdown}
                                >
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
                                </Dialog>
                              </div>
                            </Col>
                          </div>

                          <button className="btn text-light mt-3" style={{ width: '100%', background: 'transparent linear-gradient(257deg, #f79c34 0%, #ff6c1d 100%) 0% 0% no-repeat padding-box' }}>
                            Search Now
                          </button>
                          <div className="col-md-12 text-white"
                            style={{
                              width: "auto",
                              flexBasis: "100%",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{ margin: "0 auto", marginTop: "10px" }}
                            >
                              {this.state.error && (
                                <p style={{ color: "red" }}>
                                  {this.state.error}
                                </p>
                              )}
                              <p style={{ margin: "0" }}>
                                {isValid() && (
                                  <span>
                                    {" "}
                                    Adults:{this.state.adult} Children:
                                    {this.state.children +
                                      this.state.infant +
                                      this.state.infantLap}
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex text-white mt-2" style={{ justifyContent: 'space-around' }}>
                            <span class="search-form__benefits-item">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                              </svg> Trusted Choice
                            </span>
                            <span class="search-form__benefits-item">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                              </svg>  Secure payments
                            </span>
                          </div>
                        </Form>
                      </BrowserView>
                      <MobileView>
                        <Form className="login-form" onSubmit={this.formSubmit}>
                          <Row
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-around",
                              alignContent: "center",
                            }}
                          >
                            <Col
                              style={{
                                flexGrow: "2.5",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                              md={12}
                            >
                              <div className="mb-3">
                                <Label className="form-label">From</Label>
                                <div className="form-icon position-relative">
                                  <Autocomplete
                                    fullWidth
                                    style={{ maxWidth: "100vw" }}
                                    onChange={(event, newValue) => {
                                      this.setState({
                                        source: newValue?.cityname || "",
                                        sourceCode: newValue?.apicode || "",
                                      });
                                    }}
                                    options={sourceSuggestions}
                                    onInputChange={searchSource}
                                    inputValue={this.state.source}
                                    getOptionLabel={(option) =>
                                      `${option?.displayname}`
                                    }
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        placeholder={this.props.source}
                                      // label="Where"
                                      // variant="outlined"
                                      />
                                    )}
                                  />
                                </div>
                              </div>
                            </Col>
                            <Col
                              style={{
                                flexGrow: "2.5",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                              md={12}
                            >
                              <div className="mb-3">
                                <Label className="form-label">To</Label>
                                <div className="form-icon position-relative">
                                  <Autocomplete
                                    fullWidth
                                    style={{ maxWidth: "100vw" }}
                                    onChange={(event, newValue) => {
                                      this.setState({
                                        destination: newValue?.cityname || "",
                                        destinationCode: newValue?.apicode || "",
                                      });
                                    }}
                                    options={destinationSuggestions}
                                    onInputChange={searchDestination}
                                    inputValue={this.state.destination}
                                    getOptionLabel={(option) =>
                                      `${option?.displayname}`
                                    }
                                    renderInput={(params) => (
                                      <TextField
                                        placeholder={this.props.destination}
                                        {...params}
                                      // label="Where"
                                      // variant="outlined"
                                      />
                                    )}
                                  />
                                </div>
                              </div>
                            </Col>
                            <Col
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                              md={6}
                            >
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
                            <Col
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                marginBottom: "20px",
                              }}
                              md={6}
                            >
                              <div className="mb-3">
                                <Label className="form-label">
                                  {" "}
                                  Check out :{" "}
                                </Label>
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
                            <Col
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "20px",
                              }}
                              md={12}
                            >
                              <div>
                                <Dropdown
                                  isOpen={this.state.open}
                                  toggle={() => {
                                    this.setState((prev) => ({
                                      open: !prev.open,
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
                            <Col
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "20px",
                              }}
                              md={12}
                            >
                              <div>
                                <button
                                  type="button"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  class="dropdown-toggle btn btn-secondary"
                                  toggle={() => { }}
                                  onClick={this.handleClickOpenDropdown}
                                >
                                  Travellers
                                </button>
                                <Dialog
                                  open={this.state.dropdownOpen}
                                  onClose={this.handleCloseDropdown}
                                >
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
                                </Dialog>
                              </div>
                            </Col>
                            <Col
                              style={{
                                flexBasis: "100%",
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "10px",
                              }}
                              md={12}
                            >
                              <div>
                                <button className="btn btn-block">
                                  Search Now
                                </button>
                              </div>
                            </Col>
                            <div className="col-md-12 text-light"
                              style={{
                                flexBasis: "100%",
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "10px",
                              }}
                            >
                              <div>
                                {this.state.error && (
                                  <p style={{ color: "red" }}>
                                    {this.state.error}
                                  </p>
                                )}
                                <p style={{
                                  margin: "0", textAlign: "center"
                                }}>
                                  {isValid() && (
                                    <span>
                                      {" "}
                                      Adults:{this.state.adult} Children:
                                      {this.state.children +
                                        this.state.infant +
                                        this.state.infantLap}
                                    </span>
                                  )}
                                </p>
                              </div>
                            </div>
                          </Row>
                        </Form>
                      </MobileView>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
            <div className="col-md-6 col-sm-12 justify-content-center">
              <div className="d-flex text-white text-center m-5 flex-column">
                <h1><span>Search & Book Flights</span><br />
                  <span><strong>cancellation protection</strong> available</span>
                </h1>
                <button className="btn mx-auto text-white" style={{ maxWidth: '200px', backgroundColor: '#2990e6' }}>More info</button>
              </div>
            </div>
          </Row>
        </section>
        {!this.props.searchPage && (
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
        )}
      </React.Fragment>
    );
  }
}
