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
import rating from '../../assets/review-stars.svg';
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
        background: `url(${travelBg})`,
        backgroundPosition: '0% 60%',
        backgroundSize: 'cover',
        backgroundColor: '#5c6ea1',
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

        {!this.props.searchPage && (
          <>
            <section className="bg-half-170 d-table w-100" style={backgroundSearch}>
              <Row className="justify-content-center">
                <div className="col-md-12 col-sm-6 col-lg-6" style={{
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
                                <div className="row">
                                  <div className="col-md-6"
                                  >
                                    <div style={{ width: '155px' }}>
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
                                  </div>
                                  <div
                                    className="col-md-6"
                                  >
                                    <div style={{ width: '155px' }}>
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
                                  </div>
                                </div>
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
                <div className="col-md-12 col-sm-6 col-lg-6 justify-content-center">
                  <div className="d-flex text-white text-center m-5 flex-column">
                    <h1><span>Search & Book Flights</span><br />
                      <span><strong>cancellation protection</strong> available</span>
                    </h1>
                    <button className="btn mx-auto text-white" style={{ maxWidth: '200px', backgroundColor: '#2990e6' }}>More info</button>
                  </div>
                  <div className="d-flex text-center mx-auto text-white mt-3" >

                    <div style={{
                      borderRadius: '20px', margin: 'auto', padding: '1.25rem', backgroundColor: '#005ba9', boxShadow: '0 0 2px #005ba9', '&:before': {
                        top: '-20px', border: '2px solid blue'
                      }
                    }}>
                      <p className="d-flex align-items-center " style={{ whiteSpace: 'nowrap', fontSize: '1rem' }}>Average Customer Rating: &nbsp;<img alt="4 and a half stars average review" src={rating}></img>&nbsp;  4.4/5</p>
                      <p>Based on 3,600 verified reviews over the past year.</p>
                    </div>
                  </div>
                </div>
              </Row>
              <section style={{ position: 'absolute', left: 0, right: 0, bottom: 0, margin: '0 auto' }} >
                <div className="d-flex container-fluid justify-content-center">
                  <span className="m-3"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 125.374 80.765">
                    <g id="Group_2" data-name="Group 2" transform="translate(-209.766 -364.337)">
                      <path id="Path_67" data-name="Path 67" d="M227.588,445.1l5.093-25.665h8.351L235.94,445.1Zm25.157-8.351h5.3l-1.426-9.471ZM241.033,445.1l12.629-25.665h8.249L267,445.1h-7.638l-.509-3.054h-8.147l-1.324,3.054Zm33.609,0,2.954-19.248h-7.332l1.222-6.518h22.4l-1.221,6.518h-6.926L282.892,445.1Zm28.008-8.351h5.3l-1.323-9.471ZM291.041,445.1l12.526-25.665h8.249L317.01,445.1h-7.844l-.3-3.054h-8.249L299.29,445.1Zm44.1-54.692H296.029c-1.425,7.232-6.415,13.242-16.395,17.416a10.072,10.072,0,0,0,8.961,6.62h21.286c3.259,0,5.806-2.749,6.825-4.991H295.112c-1.322-.2-1.322-1.221-.1-1.425H316.3c2.749,0,5.194-2.343,6.619-4.888H298.271c-1.325-.2-1.325-1.223,0-1.426h24.85c2.547,0,4.787-2.955,5.7-4.89h-27.3c-1.323-.2-1.323-1.425,0-1.527h27.805C331.576,395.3,333.611,392.956,335.14,390.41Zm-125.374,0h39.109c1.425,7.232,6.416,13.242,16.4,17.416a10.074,10.074,0,0,1-8.962,6.62H235.024c-3.259,0-5.805-2.749-6.823-4.991h21.591c1.324-.2,1.324-1.221.1-1.425H228.608c-2.749,0-5.194-2.343-6.619-4.888h24.647c1.323-.2,1.323-1.223,0-1.426H221.784c-2.546,0-4.786-2.955-5.7-4.89h27.294c1.324-.2,1.324-1.425,0-1.527h-27.8C213.331,395.3,211.294,392.956,209.766,390.41Zm50.008-21.591a18.241,18.241,0,0,0,4.786,3.055,25.218,25.218,0,0,1,5.907-7.538A19.694,19.694,0,0,0,259.774,368.819Zm-6.926,14.359h8.758a26.1,26.1,0,0,1,2.343-10.082,21.859,21.859,0,0,1-5.3-3.259A19.81,19.81,0,0,0,252.848,383.179Zm18.943-8.248v8.248h-8.759a24.4,24.4,0,0,1,2.241-9.573A20.089,20.089,0,0,0,271.791,374.931Zm13.341-6.111a18.252,18.252,0,0,1-4.786,3.055,26.526,26.526,0,0,0-5.907-7.538A19.691,19.691,0,0,1,285.132,368.819Zm6.926,14.359H283.3A28.522,28.522,0,0,0,281.06,373.1a23.371,23.371,0,0,0,5.191-3.259A19.947,19.947,0,0,1,292.059,383.179Zm-18.842-8.248v8.248h8.657a22.36,22.36,0,0,0-2.241-9.573A20.045,20.045,0,0,1,273.217,374.931Zm-13.443,23.933a17.875,17.875,0,0,1,4.786-2.954,25.2,25.2,0,0,0,5.907,7.537A19.818,19.818,0,0,1,259.774,398.864ZM252.848,384.6h8.758a26.984,26.984,0,0,0,2.343,10.083,21.864,21.864,0,0,0-5.3,3.26A20.29,20.29,0,0,1,252.848,384.6Zm18.943,8.251v-8.25h-8.759a23.126,23.126,0,0,0,2.241,9.472A19.977,19.977,0,0,1,271.791,392.855Zm13.341,6.008a18.888,18.888,0,0,0-4.786-2.954,25.192,25.192,0,0,1-5.907,7.537A19.816,19.816,0,0,0,285.132,398.864Zm6.926-14.259H283.3a26.488,26.488,0,0,1-2.241,10.083,23.376,23.376,0,0,1,5.191,3.26A20.5,20.5,0,0,0,292.059,384.6Zm-18.842,8.251v-8.25h8.657a21.923,21.923,0,0,1-2.241,9.472A19.377,19.377,0,0,0,273.217,392.855Zm-1.426-27.7a22.741,22.741,0,0,0-5.907,7.231,19.59,19.59,0,0,0,5.907,1.12Zm1.426,0a23.905,23.905,0,0,1,5.806,7.231,16.782,16.782,0,0,1-5.806,1.12Zm-1.426,37.48a22.767,22.767,0,0,1-5.907-7.232,16.876,16.876,0,0,1,5.907-1.119Zm1.426.1a25.707,25.707,0,0,0,5.806-7.333,19.568,19.568,0,0,0-5.806-1.119Z" fill="#fff" />
                    </g>
                  </svg></span>

                  <span className="m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 262.16 60.928">
                      <g id="Group_26" data-name="Group 26" transform="translate(-1010.06 -801.572)">
                        <g id="Group_19" data-name="Group 19">
                          <g id="Group_14" data-name="Group 14" opacity="0.79">
                            <path id="Path_172" data-name="Path 172" d="M1059.289,819.132a9.379,9.379,0,0,0-2.7-2.08h0c-.057.361-.12.729-.194,1.108-2.5,12.822-11.041,17.255-21.953,17.255h-5.557a2.7,2.7,0,0,0-2.666,2.287l.091-.584-2.937,18.622-.807,5.117a1.422,1.422,0,0,0,1.405,1.643h9.854a2.371,2.371,0,0,0,2.341-2l.1-.5,1.856-11.771.12-.65a2.369,2.369,0,0,1,2.341-2h1.474c9.546,0,17.021-3.878,19.2-15.094C1062.175,825.795,1061.7,821.883,1059.289,819.132Z" fill="#fff" />
                          </g>
                          <g id="Group_15" data-name="Group 15">
                            <path id="Path_173" data-name="Path 173" d="M1020.642,801.572a2.735,2.735,0,0,0-.49.044,2.735,2.735,0,0,1,.49-.044Z" fill="#fff" />
                          </g>
                          <g id="Group_16" data-name="Group 16">
                            <path id="Path_174" data-name="Path 174" d="M1018.881,802.222a2.728,2.728,0,0,1,.809-.478A2.728,2.728,0,0,0,1018.881,802.222Z" fill="#fff" />
                          </g>
                          <g id="Group_17" data-name="Group 17" opacity="0.93">
                            <path id="Path_175" data-name="Path 175" d="M1053.978,816.01q-.57-.168-1.178-.3t-1.25-.238a31.021,31.021,0,0,0-4.9-.356h-14.844a2.369,2.369,0,0,0-2.341,2l-3.155,20-.091.584a2.7,2.7,0,0,1,2.666-2.287h5.557c10.912,0,19.457-4.433,21.953-17.255.074-.379.137-.747.194-1.108h0a13.284,13.284,0,0,0-2.052-.867C1054.356,816.124,1054.169,816.065,1053.978,816.01Z" fill="#fff" />
                          </g>
                          <g id="Group_18" data-name="Group 18">
                            <path id="Path_176" data-name="Path 176" d="M1029.468,817.115a2.369,2.369,0,0,1,2.341-2h14.844a31.021,31.021,0,0,1,4.9.356q.642.1,1.25.238t1.178.3c.191.055.378.114.562.175a13.284,13.284,0,0,1,2.052.867c.743-4.74-.005-7.965-2.569-10.886-2.822-3.216-7.921-4.594-14.445-4.594h-18.936a2.735,2.735,0,0,0-.49.044,2.672,2.672,0,0,0-.462.128,2.728,2.728,0,0,0-.809.478,2.7,2.7,0,0,0-.915,1.637l-7.886,50a1.626,1.626,0,0,0,1.606,1.879h11.69l2.937-18.622Z" fill="#fff" />
                          </g>
                        </g>
                        <g id="Group_20" data-name="Group 20">
                          <path id="Path_177" data-name="Path 177" d="M1210.438,824.243c-.83,5.455-5,5.455-9.026,5.455h-2.292l1.608-10.184a1.266,1.266,0,0,1,1.251-1.069h1.051c2.743,0,5.334,0,6.669,1.562.8.936,1.042,2.321.739,4.236Zm-1.753-14.231h-15.2a2.111,2.111,0,0,0-2.085,1.783l-6.145,38.964a1.267,1.267,0,0,0,1.251,1.465h7.8a1.48,1.48,0,0,0,1.46-1.248l1.742-11.047a2.112,2.112,0,0,1,2.086-1.782h4.808c10.01,0,15.787-4.844,17.3-14.445.68-4.2.027-7.5-1.939-9.808-2.161-2.539-5.991-3.882-11.075-3.882Z" fill="#fff" />
                        </g>
                        <g id="Group_21" data-name="Group 21">
                          <path id="Path_178" data-name="Path 178" d="M1102.052,824.243c-.831,5.455-5,5.455-9.026,5.455h-2.293l1.608-10.184a1.266,1.266,0,0,1,1.251-1.069h1.051c2.743,0,5.334,0,6.67,1.562.8.936,1.041,2.321.739,4.236Zm-1.754-14.231h-15.2a2.111,2.111,0,0,0-2.085,1.783l-6.145,38.964a1.268,1.268,0,0,0,1.251,1.465h7.256a2.112,2.112,0,0,0,2.086-1.783l1.658-10.512a2.111,2.111,0,0,1,2.085-1.782h4.809c10.009,0,15.786-4.844,17.3-14.445.68-4.2.028-7.5-1.938-9.808-2.162-2.539-5.992-3.882-11.076-3.882Z" fill="#fff" />
                        </g>
                        <g id="Group_22" data-name="Group 22">
                          <path id="Path_179" data-name="Path 179" d="M1135.577,838.232a8.113,8.113,0,0,1-8.213,6.949,5.638,5.638,0,0,1-6.026-7.076,8.143,8.143,0,0,1,8.155-7,6.131,6.131,0,0,1,4.851,1.982,6.263,6.263,0,0,1,1.233,5.146Zm10.142-14.163h-7.277a1.266,1.266,0,0,0-1.251,1.069l-.32,2.035-.509-.737c-1.576-2.288-5.088-3.052-8.6-3.052-8.039,0-14.907,6.092-16.243,14.636a13.735,13.735,0,0,0,2.709,11.179c2.22,2.613,5.389,3.7,9.164,3.7a13.932,13.932,0,0,0,10.074-4.163l-.325,2.023a1.268,1.268,0,0,0,1.252,1.465h6.553a2.111,2.111,0,0,0,2.085-1.782l3.934-24.909a1.267,1.267,0,0,0-1.251-1.464Z" fill="#fff" />
                        </g>
                        <g id="Group_23" data-name="Group 23">
                          <path id="Path_180" data-name="Path 180" d="M1243.964,838.232a8.113,8.113,0,0,1-8.213,6.949,5.638,5.638,0,0,1-6.026-7.076,8.142,8.142,0,0,1,8.154-7,6.131,6.131,0,0,1,4.852,1.982,6.266,6.266,0,0,1,1.233,5.146Zm10.141-14.163h-7.276a1.265,1.265,0,0,0-1.251,1.069l-.321,2.035-.508-.737c-1.576-2.288-5.088-3.052-8.595-3.052-8.039,0-14.907,6.092-16.244,14.636a13.738,13.738,0,0,0,2.709,11.179c2.221,2.613,5.39,3.7,9.165,3.7a13.932,13.932,0,0,0,10.074-4.163l-.325,2.023a1.267,1.267,0,0,0,1.251,1.465h6.553a2.112,2.112,0,0,0,2.086-1.782l3.934-24.909a1.267,1.267,0,0,0-1.252-1.464Z" fill="#fff" />
                        </g>
                        <g id="Group_24" data-name="Group 24">
                          <path id="Path_181" data-name="Path 181" d="M1184.475,824.069h-7.314a2.112,2.112,0,0,0-1.747.926l-10.089,14.859-4.276-14.279a2.112,2.112,0,0,0-2.023-1.506h-7.189a1.267,1.267,0,0,0-1.2,1.676l8.053,23.638-7.575,10.688a1.267,1.267,0,0,0,1.034,2h7.307a2.109,2.109,0,0,0,1.735-.909l24.324-35.1a1.267,1.267,0,0,0-1.041-1.989Z" fill="#fff" />
                        </g>
                        <g id="Group_25" data-name="Group 25">
                          <path id="Path_182" data-name="Path 182" d="M1262.682,811.082l-6.237,39.678a1.267,1.267,0,0,0,1.251,1.464h6.273a2.112,2.112,0,0,0,2.086-1.783l6.149-38.964a1.267,1.267,0,0,0-1.251-1.465h-7.02a1.267,1.267,0,0,0-1.251,1.07Z" fill="#fff" />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" id="klarna-logo" width="80" height="80" viewBox="0 0 212.455 47.426">
                      <path id="Path_59" data-name="Path 59" d="M50.978,0H40.517A26.773,26.773,0,0,1,29.728,21.579l-4.128,3.1,16.043,21.86H54.825L40.048,26.41A36.985,36.985,0,0,0,50.978,0Z" transform="translate(-13.591)" fill="#fff" />
                      <rect id="Rectangle_4" data-name="Rectangle 4" width="10.695" height="46.535" fill="#fff" />
                      <rect id="Rectangle_5" data-name="Rectangle 5" width="10.086" height="46.535" transform="translate(44.33)" fill="#fff" />
                      <path id="Path_60" data-name="Path 60" d="M282.515,28.7c-3.847,0-7.506,1.173-9.945,4.5V29.591H263v32.18h9.71V44.884c0-4.879,3.284-7.271,7.224-7.271,4.222,0,6.661,2.533,6.661,7.224V61.818h9.617v-20.5C296.212,33.813,290.255,28.7,282.515,28.7Z" transform="translate(-139.627 -15.237)" fill="#fff" />
                      <path id="Path_61" data-name="Path 61" d="M150.951,29.591v2.064a16.752,16.752,0,0,0-9.57-2.955,16.981,16.981,0,0,0,0,33.963,16.752,16.752,0,0,0,9.57-2.955v2.064h9.617V29.591Zm-8.772,24.346a8.5,8.5,0,0,1-8.725-8.256,8.739,8.739,0,0,1,17.45,0A8.5,8.5,0,0,1,142.179,53.938Z" transform="translate(-66.044 -15.237)" fill="#fff" />
                      <path id="Path_62" data-name="Path 62" d="M222.151,34.775V30.6H212.3V62.78h9.9V47.769c0-5.066,5.488-7.787,9.288-7.787h.094V30.6A12.083,12.083,0,0,0,222.151,34.775Z" transform="translate(-112.71 -16.246)" fill="#fff" />
                      <path id="Path_63" data-name="Path 63" d="M367.551,29.591v2.064a16.752,16.752,0,0,0-9.57-2.955,16.981,16.981,0,1,0,0,33.963,16.752,16.752,0,0,0,9.57-2.955v2.064h9.617V29.591Zm-8.772,24.346a8.5,8.5,0,0,1-8.725-8.256,8.739,8.739,0,0,1,17.451,0C367.551,50.232,363.611,53.938,358.779,53.938Z" transform="translate(-181.037 -15.237)" fill="#fff" />
                      <g id="Group_1" data-name="Group 1" transform="translate(200.305 13.51)">
                        <path id="Path_64" data-name="Path 64" d="M432.036,31.751a.743.743,0,0,0-.844-.751H430.3v2.439h.422v-.891h.469l.375.891h.469l-.422-.985A.728.728,0,0,0,432.036,31.751Zm-.844.375h-.469v-.751h.469c.281,0,.422.141.422.375S431.52,32.126,431.191,32.126Z" transform="translate(-428.752 -29.968)" fill="#fff" />
                        <path id="Path_65" data-name="Path 65" d="M429.3,28.8a2.3,2.3,0,0,0-2.3,2.3,2.333,2.333,0,0,0,2.3,2.3,2.3,2.3,0,0,0,0-4.6Zm0,4.175a1.842,1.842,0,0,1-1.829-1.876,1.873,1.873,0,0,1,1.829-1.876,1.842,1.842,0,0,1,1.829,1.876A1.873,1.873,0,0,1,429.3,32.975Z" transform="translate(-427 -28.8)" fill="#fff" />
                      </g>
                      <path id="Path_66" data-name="Path 66" d="M433.151,74.9a6.051,6.051,0,1,0,6.051,6.051A6.066,6.066,0,0,0,433.151,74.9Z" transform="translate(-226.748 -39.764)" fill="#fff" />
                    </svg>
                  </span>
                  <span className="m-3"><svg xmlns="http://www.w3.org/2000/svg" id="_600_Airlines" data-name="600 Airlines" width="80" height="80" viewBox="0 0 134.591 64.19">
                    <g id="Layer_1" data-name="Layer 1">
                      <path id="Path_22" data-name="Path 22" d="M19.5,1.08V6.32h-.78a12.53,12.53,0,0,0-8.5,2.92,12.21,12.21,0,0,0-3.78,8,10.3,10.3,0,0,1,7.79-3.2,9.72,9.72,0,0,1,7.94,3.54,14,14,0,0,1,2.91,9.15,13,13,0,0,1-3.41,9.37,11.72,11.72,0,0,1-8.92,3.59,11.48,11.48,0,0,1-9.22-4.2Q0,31.34,0,24.54V22.38q0-10,4.86-15.64t14-5.66ZM12.69,19.2a6.64,6.64,0,0,0-3.81,1.17A6.82,6.82,0,0,0,6.33,23.5v1.93a11.31,11.31,0,0,0,1.78,6.71,5.4,5.4,0,0,0,4.58,2.49,5.36,5.36,0,0,0,4.46-2.11A8.78,8.78,0,0,0,18.79,27a8.92,8.92,0,0,0-1.66-5.6,5.34,5.34,0,0,0-4.44-2.2Z" fill="#fff" />
                      <path id="Path_23" data-name="Path 23" d="M54.87,23.24q0,8.18-3.06,12.34t-9.32,4.16q-6.15,0-9.27-4.06T30,23.68V17.11q0-8.19,3.06-12.28T42.44.74q6.23,0,9.29,4t3.14,11.94Zm-6.33-7.09q0-5.35-1.46-7.84a5,5,0,0,0-4.64-2.49,5,5,0,0,0-4.56,2.36c-1,1.58-1.49,4-1.54,7.37v8.6c0,3.54.49,6.19,1.48,7.92a5,5,0,0,0,4.67,2.61A4.9,4.9,0,0,0,47,32.27c1-1.61,1.48-4.12,1.54-7.55Z" fill="#fff" />
                      <path id="Path_24" data-name="Path 24" d="M85.21,23.24q0,8.18-3.06,12.34t-9.32,4.16q-6.15,0-9.26-4.06t-3.2-12V17.11q0-8.19,3.06-12.28T72.78.74q6.23,0,9.29,4t3.14,11.94Zm-6.33-7.09q0-5.35-1.46-7.84a5.58,5.58,0,0,0-9.2-.13c-1,1.58-1.49,4-1.54,7.37v8.6c0,3.54.5,6.19,1.49,7.92a5,5,0,0,0,4.66,2.61,4.89,4.89,0,0,0,4.51-2.41c1-1.61,1.49-4.12,1.54-7.55Z" fill="#fff" />
                      <path id="Path_25" data-name="Path 25" d="M12.65,59.76H5.94L4.44,64H2.26L8.37,48h1.85l6.13,16H14.18ZM6.58,58H12L9.3,50.55Z" fill="#fff" />
                      <path id="Path_26" data-name="Path 26" d="M26.25,64H24.13V48h2.12Z" fill="#fff" />
                      <path id="Path_27" data-name="Path 27" d="M41.46,57.48H37.69V64H35.57V48h5.3A6.31,6.31,0,0,1,45,49.17a4.44,4.44,0,0,1,1.45,3.59,4.33,4.33,0,0,1-.81,2.61A4.76,4.76,0,0,1,43.43,57l3.77,6.79V64H44.93Zm-3.77-1.73h3.25a3.62,3.62,0,0,0,2.5-.82,2.75,2.75,0,0,0,.93-2.18,2.91,2.91,0,0,0-.89-2.28,3.69,3.69,0,0,0-2.55-.8H37.69Z" fill="#fff" />
                      <path id="Path_28" data-name="Path 28" d="M57.05,62.23h7.59V64H54.93V48h2.12Z" fill="#fff" />
                      <path id="Path_29" data-name="Path 29" d="M74.79,64H72.68V48h2.11Z" fill="#fff" />
                      <path id="Path_30" data-name="Path 30" d="M96.43,64H94.31L86.25,51.61V64H84.12V48h2.13l8.08,12.4V47.94h2.1Z" fill="#fff" />
                      <path id="Path_31" data-name="Path 31" d="M114.71,56.55h-6.94v5.68h8.06V64H105.66V48h10.06v1.73h-8v5.16h6.94Z" fill="#fff" />
                      <path id="Path_32" data-name="Path 32" d="M128.66,56.82a9.91,9.91,0,0,1-4-1.92,3.69,3.69,0,0,1-1.24-2.81A3.87,3.87,0,0,1,125,49a6,6,0,0,1,3.93-1.24,6.48,6.48,0,0,1,2.94.64,4.77,4.77,0,0,1,2,1.76,4.43,4.43,0,0,1,.71,2.45h-2.12a2.93,2.93,0,0,0-.93-2.29,3.71,3.71,0,0,0-2.6-.83,3.85,3.85,0,0,0-2.44.69,2.28,2.28,0,0,0-.87,1.91,2.07,2.07,0,0,0,.83,1.66,8.21,8.21,0,0,0,2.8,1.25,12.87,12.87,0,0,1,3.13,1.23,4.82,4.82,0,0,1,1.67,1.58,4.06,4.06,0,0,1,.54,2.13A3.73,3.73,0,0,1,133.08,63,6.43,6.43,0,0,1,129,64.18a7.55,7.55,0,0,1-3.08-.64,5.18,5.18,0,0,1-2.21-1.73,4.26,4.26,0,0,1-.77-2.5h2.12a2.78,2.78,0,0,0,1.07,2.3,4.54,4.54,0,0,0,2.87.84,4.17,4.17,0,0,0,2.56-.68,2.24,2.24,0,0,0,.89-1.86,2.16,2.16,0,0,0-.82-1.82A9.57,9.57,0,0,0,128.66,56.82Z" fill="#fff" />
                      <path id="Path_33" data-name="Path 33" d="M97.32,5.53h5.2v3h-5.2v5.91H94.1V8.57H88.88v-3H94.1V0h3.22Z" fill="#fff" />
                      <g id="Mask_Group_119" data-name="Mask Group 119">
                        <g id="Your_upcoming_flights" data-name="Your upcoming flights">
                          <g id="Path_1074-2" data-name="Path 1074-2">
                            <path id="Path_34" data-name="Path 34" d="M124.93,13.05a5.24,5.24,0,0,0,1.18-2.74,1.08,1.08,0,0,0-.14-.56l-.08-.1-.1-.08a1,1,0,0,0-.57-.14,5.09,5.09,0,0,0-2.74,1.18,24.37,24.37,0,0,0-2.69,2.59l-.59.62-2.13-.64h0a.48.48,0,0,0,0-.68l-.39-.38a.48.48,0,0,0-.34-.14.43.43,0,0,0-.33.14l-.58.57-.31-.09a.47.47,0,0,0,0-.63l-.38-.39a.49.49,0,0,0-.34-.14.48.48,0,0,0-.34.14l-.53.53-2.17-.65h-.15a.59.59,0,0,0-.4.16l-.76.77a.41.41,0,0,0-.14.31.43.43,0,0,0,.23.39l4.57,2.56.11.08,1.3,1.3c-1.22,1.28-2.3,2.52-3.15,3.6l-.23.3-3.53-.32h0a.65.65,0,0,0-.44.18l-.36.36a.5.5,0,0,0-.14.31.44.44,0,0,0,.26.4l2.4,1.14.1.06.2.2a1.65,1.65,0,0,0-.1.48.61.61,0,0,0,.18.46h0a.66.66,0,0,0,.46.17,1.65,1.65,0,0,0,.48-.1l.21.21.06.09,1.18,2.48a.43.43,0,0,0,.4.26h0a.44.44,0,0,0,.31-.13l.37-.37a.61.61,0,0,0,.17-.43v-.05l-.33-3.53.3-.23c1.08-.85,2.32-1.93,3.6-3.15l1.3,1.3a.76.76,0,0,1,.08.11l2.55,4.57a.45.45,0,0,0,.6.18l.11-.08.77-.77a.59.59,0,0,0,.16-.4.771.771,0,0,0,0-.15L123.42,22l.52-.53a.48.48,0,0,0,0-.68l-.38-.39a.49.49,0,0,0-.64,0l-.09-.3.58-.58a.49.49,0,0,0,.14-.34.48.48,0,0,0-.14-.34l-.38-.39a.5.5,0,0,0-.68,0h0l-.64-2.13.63-.6a22.609,22.609,0,0,0,2.59-2.68Z" fill="#fff" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg></span>
                  <span className="m-3"><svg xmlns="http://www.w3.org/2000/svg" id="_160Currencies" data-name="160Currencies" width="80" height="80" viewBox="0 0 147.821 65.118">
                    <g id="Layer_1" data-name="Layer 1">
                      <path id="Path_1" data-name="Path 1" d="M131.12,12c-6.55,0-11.5-2.58-11.5-6s4.95-6,11.5-6,11.5,2.58,11.5,6S137.68,12,131.12,12Zm0-10c-5.6,0-9.5,2.11-9.5,4s3.9,4,9.5,4,9.5-2.11,9.5-4S136.72,2,131.12,2Z" fill="#fff" />
                      <path id="Path_2" data-name="Path 2" d="M131.12,19c-6.55,0-11.5-2.58-11.5-6h2c0,1.89,3.9,4,9.5,4s9.5-2.11,9.5-4h2C142.62,16.42,137.68,19,131.12,19Z" fill="#fff" />
                      <path id="Path_3" data-name="Path 3" d="M131.12,26c-6.55,0-11.5-2.58-11.5-6h2c0,1.89,3.9,4,9.5,4s9.5-2.11,9.5-4h2C142.62,23.42,137.68,26,131.12,26Z" fill="#fff" />
                      <path id="Path_4" data-name="Path 4" d="M131.12,33c-6.55,0-11.5-2.58-11.5-6V6h2V27c0,1.89,3.9,4,9.5,4s9.5-2.11,9.5-4V6h2V27C142.62,30.42,137.68,33,131.12,33Z" fill="#fff" />
                      <path id="Path_5" data-name="Path 5" d="M110.12,27c-6.55,0-11.5-2.58-11.5-6s4.95-6,11.5-6,11.5,2.58,11.5,6S116.68,27,110.12,27Zm0-10c-5.6,0-9.5,2.11-9.5,4s3.9,4,9.5,4,9.5-2.11,9.5-4S115.72,17,110.12,17Z" fill="#fff" />
                      <path id="Path_6" data-name="Path 6" d="M110.12,34c-6.55,0-11.5-2.58-11.5-6h2c0,1.89,3.9,4,9.5,4s9.5-2.11,9.5-4h2C121.62,31.42,116.68,34,110.12,34Z" fill="#fff" />
                      <path id="Path_7" data-name="Path 7" d="M110.12,41c-6.55,0-11.5-2.58-11.5-6h2c0,1.89,3.9,4,9.5,4s9.5-2.11,9.5-4h2C121.62,38.42,116.68,41,110.12,41Z" fill="#fff" />
                      <rect id="Rectangle_2" data-name="Rectangle 2" width="2" height="14" transform="translate(98.62 21)" fill="#fff" />
                      <rect id="Rectangle_3" data-name="Rectangle 3" width="2" height="15" transform="translate(119.62 20)" fill="#fff" />
                      <path id="Path_8" data-name="Path 8" d="M15.61,40.15H9.31V9.66L0,12.84V7.52L14.81,2.07h.8Z" fill="#fff" />
                      <path id="Path_9" data-name="Path 9" d="M48.51,2V7.26h-.78a12.53,12.53,0,0,0-8.5,2.92,12.21,12.21,0,0,0-3.78,8.05,10.27,10.27,0,0,1,7.8-3.2,9.7,9.7,0,0,1,7.93,3.54,13.94,13.94,0,0,1,2.91,9.15,13,13,0,0,1-3.4,9.37,11.76,11.76,0,0,1-8.93,3.59,11.48,11.48,0,0,1-9.22-4.2Q29,32.28,29,25.48V23.31q0-10,4.86-15.64T47.86,2Zm-6.8,18.11a6.68,6.68,0,0,0-3.82,1.18,6.8,6.8,0,0,0-2.54,3.13v1.93a11.38,11.38,0,0,0,1.77,6.71,5.61,5.61,0,0,0,9.05.38,8.84,8.84,0,0,0,1.64-5.56,8.92,8.92,0,0,0-1.67-5.6,5.33,5.33,0,0,0-4.43-2.15Z" fill="#fff" />
                      <path id="Path_10" data-name="Path 10" d="M83.88,24.17q0,8.19-3.06,12.35T71.5,40.68q-6.15,0-9.26-4.06t-3.2-12V18.05q0-8.19,3.07-12.28t9.34-4.09q6.22,0,9.29,4t3.14,11.94Zm-6.33-7.09q0-5.34-1.46-7.83a5.58,5.58,0,0,0-9.2-.13c-1,1.57-1.49,4-1.54,7.37v8.6q0,5.31,1.49,7.92a5,5,0,0,0,4.66,2.61A4.89,4.89,0,0,0,76,33.21q1.47-2.41,1.54-7.55Z" fill="#fff" />
                      <path id="Path_11" data-name="Path 11" d="M14.26,59.81a5.89,5.89,0,0,1-1.87,3.92,6.18,6.18,0,0,1-4.2,1.38,5.64,5.64,0,0,1-4.55-2,8.2,8.2,0,0,1-1.71-5.45V56.09a9.15,9.15,0,0,1,.8-3.92A5.88,5.88,0,0,1,5,49.57a6.23,6.23,0,0,1,3.39-.91,5.79,5.79,0,0,1,4.09,1.42,6,6,0,0,1,1.79,4H12.14a4.53,4.53,0,0,0-1.2-2.78,3.56,3.56,0,0,0-2.56-.86A3.78,3.78,0,0,0,5.2,51.88a6.92,6.92,0,0,0-1.15,4.26V57.7a7.11,7.11,0,0,0,1.09,4.15,3.54,3.54,0,0,0,3.05,1.54,4.08,4.08,0,0,0,2.7-.8,4.44,4.44,0,0,0,1.25-2.78Z" fill="#fff" />
                      <path id="Path_12" data-name="Path 12" d="M30.11,48.88V59.77a5.16,5.16,0,0,1-1.43,3.71,5.7,5.7,0,0,1-3.83,1.61h-.56A6,6,0,0,1,20.1,63.7a5.12,5.12,0,0,1-1.59-3.91V48.88H20.6V59.72a3.35,3.35,0,0,0,3.69,3.67,3.69,3.69,0,0,0,2.74-1A3.64,3.64,0,0,0,28,59.74V48.88Z" fill="#fff" />
                      <path id="Path_13" data-name="Path 13" d="M41,58.42H37.24v6.47H35.12v-16h5.3a6.26,6.26,0,0,1,4.16,1.23A4.41,4.41,0,0,1,46,53.7a4.3,4.3,0,0,1-.81,2.6A4.7,4.7,0,0,1,43,58l3.77,6.8v.13H44.48Zm-3.76-1.73h3.25a3.62,3.62,0,0,0,2.5-.82,2.75,2.75,0,0,0,.93-2.18A2.91,2.91,0,0,0,43,51.41a3.69,3.69,0,0,0-2.55-.8H37.24Z" fill="#fff" />
                      <path id="Path_14" data-name="Path 14" d="M56.57,58.42H52.8v6.47H50.68v-16H56a6.31,6.31,0,0,1,4.17,1.23A4.44,4.44,0,0,1,61.6,53.7a4.3,4.3,0,0,1-.81,2.6A4.7,4.7,0,0,1,58.54,58l3.77,6.8v.13H60ZM52.8,56.69h3.25a3.62,3.62,0,0,0,2.5-.82,2.75,2.75,0,0,0,.93-2.18,2.91,2.91,0,0,0-.89-2.28,3.69,3.69,0,0,0-2.55-.8H52.8Z" fill="#fff" />
                      <path id="Path_15" data-name="Path 15" d="M75.3,57.49H68.36v5.68h8.07v1.72H66.25v-16H76.32v1.73h-8v5.15H75.3Z" fill="#fff" />
                      <path id="Path_16" data-name="Path 16" d="M93.05,64.89H90.93L82.87,52.55V64.89H80.75v-16h2.12L91,61.28V48.88h2.1Z" fill="#fff" />
                      <path id="Path_17" data-name="Path 17" d="M110.28,59.81a5.9,5.9,0,0,1-1.88,3.92,6.14,6.14,0,0,1-4.2,1.38,5.62,5.62,0,0,1-4.54-2,8.15,8.15,0,0,1-1.72-5.45V56.09a9.15,9.15,0,0,1,.8-3.92,5.94,5.94,0,0,1,2.26-2.6,6.28,6.28,0,0,1,3.39-.91,5.77,5.77,0,0,1,4.09,1.42,6,6,0,0,1,1.8,4h-2.13A4.58,4.58,0,0,0,107,51.25a3.58,3.58,0,0,0-2.57-.86,3.75,3.75,0,0,0-3.17,1.49,6.86,6.86,0,0,0-1.15,4.26V57.7a7,7,0,0,0,1.09,4.15,3.52,3.52,0,0,0,3,1.54,4,4,0,0,0,2.7-.8,4.39,4.39,0,0,0,1.25-2.78Z" fill="#fff" />
                      <path id="Path_18" data-name="Path 18" d="M117.11,64.89H115v-16h2.11Z" fill="#fff" />
                      <path id="Path_19" data-name="Path 19" d="M131.72,57.49h-6.94v5.68h8.06v1.72H122.66v-16h10.07v1.73h-7.95v5.15h6.94Z" fill="#fff" />
                      <path id="Path_20" data-name="Path 20" d="M141.88,57.76a10,10,0,0,1-4-1.92,3.69,3.69,0,0,1-1.2-2.84,3.86,3.86,0,0,1,1.52-3.13,6,6,0,0,1,3.93-1.24,6.48,6.48,0,0,1,2.94.64,4.77,4.77,0,0,1,2,1.76,4.41,4.41,0,0,1,.71,2.45h-2.12a2.94,2.94,0,0,0-.92-2.29,3.75,3.75,0,0,0-2.61-.83,3.93,3.93,0,0,0-2.44.68,2.31,2.31,0,0,0-.87,1.92,2,2,0,0,0,.83,1.65,7.82,7.82,0,0,0,2.83,1.24,13.33,13.33,0,0,1,3.12,1.24,4.73,4.73,0,0,1,1.67,1.58,4.05,4.05,0,0,1,.55,2.12,3.75,3.75,0,0,1-1.52,3.12,6.49,6.49,0,0,1-4.06,1.17,7.54,7.54,0,0,1-3.08-.63,5.24,5.24,0,0,1-2.16-1.7,4.28,4.28,0,0,1-.77-2.5h2.12a2.78,2.78,0,0,0,1.07,2.3,4.54,4.54,0,0,0,2.87.84,4.17,4.17,0,0,0,2.56-.68,2.21,2.21,0,0,0,.89-1.86,2.16,2.16,0,0,0-.82-1.82A9.34,9.34,0,0,0,141.88,57.76Z" fill="#fff" />
                      <path id="Path_21" data-name="Path 21" d="M96,6.47h5.19v3H96v5.91H92.77V9.51H87.55v-3h5.22V.94H96Z" fill="#fff" />
                    </g>
                  </svg></span>
                  <span className="m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 167.338 67.056">
                      <g id="feefo_logo" data-name="feefo logo" transform="translate(-1318.001 -801.5)">
                        <g id="Layer_1-4" data-name="Layer 1-4">
                          <g id="Path_47" data-name="Path 47">
                            <path id="Path_131" data-name="Path 131" d="M1354.528,822.55h-13.277c.583-2.692,3.061-4.484,6.542-4.484,3.326,0,5.7,1.586,6.7,4.484m8.386,5.9v-.885c0-10.555-6.173-17.045-15.194-17.045a14.812,14.812,0,0,0-10.451,4.425,14.531,14.531,0,0,0-4.322,10.4,14.921,14.921,0,0,0,4.234,10.5,14.017,14.017,0,0,0,10.711,4.539c6.336,0,11.064-3,13.77-8.917h-9.22a6.145,6.145,0,0,1-4.322,1.586c-3.644,0-5.8-1.586-6.542-4.588Z" fill="#fff" />
                          </g>
                          <g id="Path_48" data-name="Path 48">
                            <path id="Path_132" data-name="Path 132" d="M1386.074,822.55H1372.8c.583-2.692,3.061-4.484,6.542-4.484,3.326,0,5.7,1.586,6.7,4.484m8.394,5.9v-.885c0-10.554-6.176-17.045-15.2-17.045a14.831,14.831,0,0,0-10.451,4.425,14.531,14.531,0,0,0-4.322,10.4,14.923,14.923,0,0,0,4.167,10.5,14.012,14.012,0,0,0,10.71,4.536c6.336,0,11.064-3,13.778-8.917h-9.151a6.171,6.171,0,0,1-4.33,1.586c-3.636,0-5.8-1.586-6.542-4.588Z" fill="#fff" />
                          </g>
                          <g id="Path_49" data-name="Path 49">
                            <path id="Path_133" data-name="Path 133" d="M1321.13,817.727V839.7h8.18V817.727h3.319v-6.358h-3.319v-.686c0-2.589.575-3.43,3.113-3.43h.207v-5.7c-.473,0-.891-.052-1.314-.052-6.97,0-10.238,2.744-10.238,8.851,0,.317.052.686.052,1.055h-3.061v6.321Z" fill="#fff" />
                          </g>
                          <g id="Path_50" data-name="Path 50">
                            <path id="Path_134" data-name="Path 134" d="M1397.631,817.727V839.7h8.18V817.727h3.319v-6.358h-3.319v-.686c0-2.589.575-3.43,3.113-3.43h.207v-5.7c-.435,0-.892-.052-1.32-.052-6.963,0-10.23,2.744-10.23,8.851,0,.317.052.686.052,1.055h-3.063v6.321Z" fill="#fff" />
                          </g>
                          <g id="Path_51" data-name="Path 51">
                            <path id="Path_135" data-name="Path 135" d="M1430.756,825.56a6.7,6.7,0,0,1-13.4.012v-.012a6.7,6.7,0,0,1,13.4-.012v.012m8.283-.207a14.973,14.973,0,0,0-25.6-10.326,14.539,14.539,0,0,0-4.322,10.4,14.8,14.8,0,0,0,4.167,10.444,14.012,14.012,0,0,0,10.71,4.543,14.75,14.75,0,0,0,10.769-4.425,14.456,14.456,0,0,0,4.276-10.658" fill="#fff" />
                          </g>
                          <g id="Path_52" data-name="Path 52">
                            <path id="Path_136" data-name="Path 136" d="M1451.832,820.751a7.979,7.979,0,0,1-7.464-7.449h17.554v-.192c0-6.9-4.425-11.491-10.5-11.491a10.4,10.4,0,0,0-10.8,9.984q-.016.408,0,.816A10.755,10.755,0,0,0,1451.25,823.3h.052c4.484,0,8.047-2.493,9.965-7.088h-1.778a7.957,7.957,0,0,1-7.191,4.558h-.466" fill="#fff" />
                          </g>
                          <g id="Path_53" data-name="Path 53">
                            <path id="Path_137" data-name="Path 137" d="M1474.125,820.75a7.981,7.981,0,0,0,7.464-7.449h-17.576v-.192c0-6.933,4.425-11.528,10.518-11.528a10.442,10.442,0,0,1,10.8,10.07q.013.383,0,.765a10.753,10.753,0,0,1-10.628,10.878h-.059c-4.477,0-8.04-2.493-9.957-7.088h1.778a7.943,7.943,0,0,0,7.191,4.558h.472" fill="#fff" />
                          </g>
                          <g id="Path_54" data-name="Path 54">
                            <path id="Path_138" data-name="Path 138" d="M1338.293,856.258l-7.044-.229a.28.28,0,0,1-.243-.177l-2.471-6.719a.266.266,0,0,0-.5,0l-2.471,6.719a.281.281,0,0,1-.243.177l-7.067.229a.266.266,0,0,0-.155.472l5.753,4.425a.26.26,0,0,1,.089.288l-2.11,6.763a.266.266,0,0,0,.406.3l5.9-4.079a.3.3,0,0,1,.31,0l5.9,4.079a.266.266,0,0,0,.406-.3l-2.089-6.763a.258.258,0,0,1,.089-.288l5.753-4.425a.266.266,0,0,0-.214-.472Z" fill="#fff" />
                          </g>
                          <g id="Path_55" data-name="Path 55">
                            <path id="Path_139" data-name="Path 139" d="M1363.416,856.258l-7.088-.229a.28.28,0,0,1-.243-.177l-2.471-6.719a.266.266,0,0,0-.5,0l-2.478,6.719a.273.273,0,0,1-.236.177l-7.066.229a.266.266,0,0,0-.155.472l5.753,4.425a.259.259,0,0,1,.089.288l-2.09,6.763a.266.266,0,0,0,.406.3l5.9-4.079a.3.3,0,0,1,.31,0l5.9,4.079a.266.266,0,0,0,.406-.3l-2.124-6.764a.258.258,0,0,1,.089-.288l5.753-4.425a.266.266,0,0,0-.155-.472Z" fill="#fff" />
                          </g>
                          <g id="Path_56" data-name="Path 56">
                            <path id="Path_140" data-name="Path 140" d="M1388.537,856.258l-7.066-.229a.28.28,0,0,1-.243-.177l-2.471-6.719a.266.266,0,0,0-.5,0l-2.478,6.719a.273.273,0,0,1-.236.177l-7.066.229a.266.266,0,0,0-.155.472l5.753,4.425a.259.259,0,0,1,.089.288l-2.09,6.763a.266.266,0,0,0,.406.3l5.9-4.079a.3.3,0,0,1,.31,0l5.9,4.079a.266.266,0,0,0,.406-.3l-2.117-6.764a.258.258,0,0,1,.089-.288l5.753-4.425a.266.266,0,0,0-.184-.472Z" fill="#fff" />
                          </g>
                          <g id="Path_57" data-name="Path 57">
                            <path id="Path_141" data-name="Path 141" d="M1413.657,856.258l-7.066-.229a.28.28,0,0,1-.243-.177l-2.471-6.719a.266.266,0,0,0-.5,0l-2.478,6.719a.273.273,0,0,1-.236.177l-7.066.229a.266.266,0,0,0-.155.472l5.753,4.425a.26.26,0,0,1,.089.288l-2.087,6.764a.266.266,0,0,0,.406.3l5.9-4.079a.3.3,0,0,1,.31,0l5.9,4.079a.266.266,0,0,0,.406-.3l-2.162-6.764a.258.258,0,0,1,.089-.288l5.753-4.425a.266.266,0,0,0-.14-.472Z" fill="#fff" />
                          </g>
                          <g id="Path_58" data-name="Path 58">
                            <path id="Path_142" data-name="Path 142" d="M1438.781,856.258l-7.066-.229a.281.281,0,0,1-.243-.177L1429,849.133a.266.266,0,0,0-.5,0l-2.482,6.719a.273.273,0,0,1-.236.177l-7.066.229a.266.266,0,0,0-.155.472l5.753,4.425a.258.258,0,0,1,.089.288l-2.085,6.763a.266.266,0,0,0,.406.3l5.9-4.079a.281.281,0,0,1,.3,0l5.9,4.079a.266.266,0,0,0,.406-.3l-2.087-6.764a.258.258,0,0,1,.089-.288l5.753-4.425a.266.266,0,0,0-.206-.472Z" fill="#fff" />
                          </g>
                          <g id="Trusted_Service_Awards" data-name="Trusted Service Awards">
                            <g id="Group_7" data-name="Group 7">
                              <path id="Path_143" data-name="Path 143" d="M1450.305,831.4h-2.742v7.612h-1.12V831.4h-2.736v-.919h6.6Z" fill="#fff" />
                            </g>
                            <g id="Group_8" data-name="Group 8">
                              <path id="Path_144" data-name="Path 144" d="M1453.984,833.642a3.169,3.169,0,0,0-.533-.041,1.427,1.427,0,0,0-1.447.908v4.5h-1.084v-6.34h1.055l.017.732a1.69,1.69,0,0,1,1.512-.849,1.1,1.1,0,0,1,.48.082Z" fill="#fff" />
                              <path id="Path_145" data-name="Path 145" d="M1458.9,838.382a2.3,2.3,0,0,1-1.858.744,1.968,1.968,0,0,1-1.543-.589,2.551,2.551,0,0,1-.537-1.743v-4.125h1.084v4.1q0,1.441,1.172,1.441a1.622,1.622,0,0,0,1.652-.926v-4.611h1.084v6.34h-1.031Z" fill="#fff" />
                              <path id="Path_146" data-name="Path 146" d="M1465.287,837.327a.8.8,0,0,0-.33-.682,3.165,3.165,0,0,0-1.154-.419,5.5,5.5,0,0,1-1.307-.422,1.872,1.872,0,0,1-.715-.586,1.4,1.4,0,0,1-.232-.809,1.646,1.646,0,0,1,.66-1.318,2.568,2.568,0,0,1,1.684-.539,2.655,2.655,0,0,1,1.75.556,1.768,1.768,0,0,1,.67,1.424h-1.09a.975.975,0,0,0-.377-.767,1.419,1.419,0,0,0-.953-.323,1.479,1.479,0,0,0-.926.258.811.811,0,0,0-.334.674.657.657,0,0,0,.31.592,3.82,3.82,0,0,0,1.123.381,5.838,5.838,0,0,1,1.315.433,1.916,1.916,0,0,1,.748.607,1.489,1.489,0,0,1,.242.864,1.621,1.621,0,0,1-.68,1.362,2.849,2.849,0,0,1-1.763.513,3.19,3.19,0,0,1-1.348-.27,2.184,2.184,0,0,1-.916-.752,1.816,1.816,0,0,1-.332-1.046h1.084a1.124,1.124,0,0,0,.438.864,1.687,1.687,0,0,0,1.074.319,1.751,1.751,0,0,0,.988-.249A.765.765,0,0,0,1465.287,837.327Z" fill="#fff" />
                              <path id="Path_147" data-name="Path 147" d="M1469.254,831.134v1.535h1.184v.838h-1.184v3.936a.886.886,0,0,0,.158.573.666.666,0,0,0,.539.19,2.615,2.615,0,0,0,.516-.07v.874a3.19,3.19,0,0,1-.832.116,1.353,1.353,0,0,1-1.1-.439,1.89,1.89,0,0,1-.369-1.249v-3.931h-1.154v-.838h1.154v-1.535Z" fill="#fff" />
                              <path id="Path_148" data-name="Path 148" d="M1474.334,839.126a2.77,2.77,0,0,1-2.1-.847,3.141,3.141,0,0,1-.808-2.264v-.2a3.808,3.808,0,0,1,.361-1.684,2.807,2.807,0,0,1,1.008-1.16,2.524,2.524,0,0,1,1.4-.419,2.374,2.374,0,0,1,1.922.814,3.527,3.527,0,0,1,.686,2.332v.451h-4.3a2.251,2.251,0,0,0,.549,1.515,1.718,1.718,0,0,0,1.332.577,1.888,1.888,0,0,0,.972-.234,2.445,2.445,0,0,0,.7-.621l.662.515A2.663,2.663,0,0,1,1474.334,839.126Zm-.135-5.684a1.447,1.447,0,0,0-1.1.478,2.318,2.318,0,0,0-.551,1.339h3.176v-.082a2.069,2.069,0,0,0-.446-1.281A1.363,1.363,0,0,0,1474.2,833.442Z" fill="#fff" />
                              <path id="Path_149" data-name="Path 149" d="M1477.8,835.786a3.714,3.714,0,0,1,.691-2.347,2.355,2.355,0,0,1,3.575-.126v-3.3h1.083v9h-1l-.052-.68a2.209,2.209,0,0,1-1.811.8,2.166,2.166,0,0,1-1.8-.9,3.758,3.758,0,0,1-.695-2.356Zm1.084.123a2.814,2.814,0,0,0,.445,1.688,1.44,1.44,0,0,0,1.231.609,1.583,1.583,0,0,0,1.506-.926v-2.912a1.6,1.6,0,0,0-1.495-.9,1.447,1.447,0,0,0-1.242.615A3.094,3.094,0,0,0,1478.881,835.909Z" fill="#fff" />
                            </g>
                            <g id="Group_9" data-name="Group 9">
                              <path id="Path_150" data-name="Path 150" d="M1446.924,849.206a5.294,5.294,0,0,1-2.107-1.022,1.957,1.957,0,0,1-.659-1.5,2.063,2.063,0,0,1,.806-1.667,3.2,3.2,0,0,1,2.095-.66,3.5,3.5,0,0,1,1.567.34,2.577,2.577,0,0,1,1.066.938,2.4,2.4,0,0,1,.378,1.306h-1.131a1.558,1.558,0,0,0-.492-1.219,2,2,0,0,0-1.388-.445,2.046,2.046,0,0,0-1.3.367,1.224,1.224,0,0,0-.466,1.019,1.1,1.1,0,0,0,.442.883,4.324,4.324,0,0,0,1.506.66,7.007,7.007,0,0,1,1.664.66,2.527,2.527,0,0,1,.891.841,2.148,2.148,0,0,1,.29,1.131,1.994,1.994,0,0,1-.809,1.661,3.446,3.446,0,0,1-2.162.624,4,4,0,0,1-1.64-.337,2.758,2.758,0,0,1-1.175-.923,2.247,2.247,0,0,1-.413-1.33h1.131a1.469,1.469,0,0,0,.571,1.222,2.4,2.4,0,0,0,1.526.448,2.211,2.211,0,0,0,1.365-.363,1.178,1.178,0,0,0,.475-.99,1.158,1.158,0,0,0-.439-.97A5.07,5.07,0,0,0,1446.924,849.206Z" fill="#fff" />
                              <path id="Path_151" data-name="Path 151" d="M1453.99,853.126a2.767,2.767,0,0,1-2.1-.847,3.141,3.141,0,0,1-.809-2.264v-.2a3.808,3.808,0,0,1,.36-1.684,2.821,2.821,0,0,1,1.008-1.16,2.53,2.53,0,0,1,1.4-.419,2.373,2.373,0,0,1,1.922.814,3.527,3.527,0,0,1,.686,2.332v.451h-4.3a2.255,2.255,0,0,0,.548,1.515,1.72,1.72,0,0,0,1.333.577,1.886,1.886,0,0,0,.972-.234,2.432,2.432,0,0,0,.7-.621l.662.515A2.661,2.661,0,0,1,1453.99,853.126Zm-.135-5.684a1.447,1.447,0,0,0-1.1.478,2.318,2.318,0,0,0-.551,1.339h3.176v-.082a2.069,2.069,0,0,0-.445-1.281A1.365,1.365,0,0,0,1453.855,847.442Z" fill="#fff" />
                            </g>
                            <g id="Group_10" data-name="Group 10">
                              <path id="Path_152" data-name="Path 152" d="M1460.781,847.642a3.177,3.177,0,0,0-.533-.041,1.427,1.427,0,0,0-1.447.908v4.5h-1.084v-6.34h1.054l.018.732a1.689,1.689,0,0,1,1.512-.849,1.1,1.1,0,0,1,.48.082Z" fill="#fff" />
                            </g>
                            <g id="Group_11" data-name="Group 11">
                              <path id="Path_153" data-name="Path 153" d="M1463.989,851.538l1.571-4.869h1.107l-2.273,6.34h-.827l-2.3-6.34h1.107Z" fill="#fff" />
                              <path id="Path_154" data-name="Path 154" d="M1467.716,844.987a.65.65,0,0,1,.161-.445.605.605,0,0,1,.477-.182.616.616,0,0,1,.481.182.642.642,0,0,1,.164.445.671.671,0,0,1-1.122.44A.628.628,0,0,1,1467.716,844.987Zm1.172,8.022H1467.8v-6.34h1.084Z" fill="#fff" />
                              <path id="Path_155" data-name="Path 155" d="M1473.165,852.241a1.563,1.563,0,0,0,1.014-.351,1.238,1.238,0,0,0,.48-.879h1.026a1.974,1.974,0,0,1-.375,1.037,2.479,2.479,0,0,1-.923.785,2.668,2.668,0,0,1-1.222.293,2.614,2.614,0,0,1-2.06-.864,3.448,3.448,0,0,1-.764-2.365v-.181a3.815,3.815,0,0,1,.34-1.647,2.587,2.587,0,0,1,.975-1.119,2.777,2.777,0,0,1,1.5-.4,2.547,2.547,0,0,1,1.773.638,2.29,2.29,0,0,1,.753,1.659h-1.026a1.489,1.489,0,0,0-.466-1.011,1.447,1.447,0,0,0-1.034-.4,1.518,1.518,0,0,0-1.28.595,2.794,2.794,0,0,0-.454,1.72v.2a2.734,2.734,0,0,0,.451,1.687A1.523,1.523,0,0,0,1473.165,852.241Z" fill="#fff" />
                              <path id="Path_156" data-name="Path 156" d="M1479.534,853.126a2.767,2.767,0,0,1-2.1-.847,3.137,3.137,0,0,1-.809-2.264v-.2a3.808,3.808,0,0,1,.36-1.684,2.813,2.813,0,0,1,1.008-1.16,2.53,2.53,0,0,1,1.4-.419,2.373,2.373,0,0,1,1.922.814,3.528,3.528,0,0,1,.686,2.332v.451h-4.295a2.255,2.255,0,0,0,.548,1.515,1.72,1.72,0,0,0,1.333.577,1.885,1.885,0,0,0,.972-.234,2.443,2.443,0,0,0,.7-.621l.662.515A2.661,2.661,0,0,1,1479.534,853.126Zm-.135-5.684a1.447,1.447,0,0,0-1.1.478,2.319,2.319,0,0,0-.551,1.339h3.176v-.082a2.069,2.069,0,0,0-.445-1.281A1.365,1.365,0,0,0,1479.4,847.442Z" fill="#fff" />
                            </g>
                            <g id="Group_12" data-name="Group 12">
                              <path id="Path_157" data-name="Path 157" d="M1449.121,864.776h-3.574l-.8,2.233h-1.16l3.258-8.531h.984l3.264,8.531h-1.154Zm-3.234-.92h2.9l-1.453-3.99Z" fill="#fff" />
                            </g>
                            <g id="Group_13" data-name="Group 13">
                              <path id="Path_158" data-name="Path 158" d="M1457.441,865.515l1.219-4.846h1.084l-1.846,6.34h-.878l-1.541-4.8-1.5,4.8h-.879l-1.84-6.34h1.078l1.248,4.746,1.477-4.746h.873Z" fill="#fff" />
                              <path id="Path_159" data-name="Path 159" d="M1464.76,867.009a2.255,2.255,0,0,1-.153-.668,2.418,2.418,0,0,1-1.8.785,2.239,2.239,0,0,1-1.538-.53,1.715,1.715,0,0,1-.6-1.345,1.792,1.792,0,0,1,.753-1.538,3.551,3.551,0,0,1,2.118-.548h1.055v-.5a1.214,1.214,0,0,0-.34-.9,1.366,1.366,0,0,0-1-.337,1.577,1.577,0,0,0-.973.293.863.863,0,0,0-.392.709h-1.09a1.493,1.493,0,0,1,.337-.917,2.285,2.285,0,0,1,.914-.7,3.076,3.076,0,0,1,1.269-.258,2.5,2.5,0,0,1,1.716.548,1.977,1.977,0,0,1,.645,1.508v2.918a3.581,3.581,0,0,0,.222,1.389v.094Zm-1.8-.826a1.9,1.9,0,0,0,.967-.264,1.6,1.6,0,0,0,.662-.686v-1.3h-.85q-1.992,0-1.992,1.166a.988.988,0,0,0,.34.8A1.306,1.306,0,0,0,1462.961,866.183Z" fill="#fff" />
                              <path id="Path_160" data-name="Path 160" d="M1470.438,861.642a3.189,3.189,0,0,0-.534-.041,1.427,1.427,0,0,0-1.447.908v4.5h-1.084v-6.34h1.055l.017.732a1.69,1.69,0,0,1,1.512-.849,1.107,1.107,0,0,1,.481.082Z" fill="#fff" />
                              <path id="Path_161" data-name="Path 161" d="M1471.17,863.786a3.714,3.714,0,0,1,.691-2.347,2.355,2.355,0,0,1,3.575-.126v-3.3h1.084v9h-1l-.052-.68a2.209,2.209,0,0,1-1.811.8,2.167,2.167,0,0,1-1.8-.9,3.757,3.757,0,0,1-.694-2.356Zm1.084.123a2.814,2.814,0,0,0,.445,1.688,1.44,1.44,0,0,0,1.231.609,1.583,1.583,0,0,0,1.506-.926v-2.912a1.6,1.6,0,0,0-1.495-.9,1.447,1.447,0,0,0-1.242.615A3.094,3.094,0,0,0,1472.254,863.909Z" fill="#fff" />
                              <path id="Path_162" data-name="Path 162" d="M1481.893,865.327a.8.8,0,0,0-.331-.682,3.172,3.172,0,0,0-1.155-.419,5.487,5.487,0,0,1-1.306-.422,1.857,1.857,0,0,1-.715-.586,1.4,1.4,0,0,1-.232-.809,1.645,1.645,0,0,1,.659-1.318,2.573,2.573,0,0,1,1.685-.539,2.648,2.648,0,0,1,1.749.556,1.769,1.769,0,0,1,.671,1.424h-1.09a.976.976,0,0,0-.378-.767,1.415,1.415,0,0,0-.952-.323,1.484,1.484,0,0,0-.926.258.814.814,0,0,0-.334.674.658.658,0,0,0,.311.592,3.811,3.811,0,0,0,1.122.381,5.838,5.838,0,0,1,1.315.433,1.912,1.912,0,0,1,.747.607,1.483,1.483,0,0,1,.244.864,1.623,1.623,0,0,1-.68,1.362,2.85,2.85,0,0,1-1.764.513,3.182,3.182,0,0,1-1.347-.27,2.18,2.18,0,0,1-.917-.752,1.814,1.814,0,0,1-.331-1.046h1.083a1.126,1.126,0,0,0,.437.864,1.692,1.692,0,0,0,1.075.319,1.753,1.753,0,0,0,.988-.249A.765.765,0,0,0,1481.893,865.327Z" fill="#fff" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 266.926 71.076">
                      <g id="TRUST_SECURE_LOGO_-_HP-02" data-name="TRUST SECURE LOGO - HP-02" transform="translate(-686 -793.724)">
                        <g id="Safe_Secure" data-name="Safe Secure">
                          <g id="Group_4" data-name="Group 4">
                            <path id="Path_114" data-name="Path 114" d="M761.964,809.339a15.525,15.525,0,0,1-6.182-3,5.734,5.734,0,0,1-1.935-4.394,6.058,6.058,0,0,1,2.364-4.892,9.4,9.4,0,0,1,6.149-1.935,10.255,10.255,0,0,1,4.6,1,7.559,7.559,0,0,1,3.13,2.752A7.037,7.037,0,0,1,771.2,802.7H767.88a4.58,4.58,0,0,0-1.444-3.581,5.875,5.875,0,0,0-4.076-1.3,6.016,6.016,0,0,0-3.81,1.078,3.59,3.59,0,0,0-1.367,2.989,3.231,3.231,0,0,0,1.3,2.593,12.735,12.735,0,0,0,4.419,1.938,20.539,20.539,0,0,1,4.885,1.937,7.412,7.412,0,0,1,2.613,2.467,6.293,6.293,0,0,1,.851,3.319,5.853,5.853,0,0,1-2.373,4.876,10.123,10.123,0,0,1-6.345,1.831,11.761,11.761,0,0,1-4.816-.989,8.1,8.1,0,0,1-3.447-2.709,6.6,6.6,0,0,1-1.213-3.9h3.319a4.312,4.312,0,0,0,1.677,3.585,7.059,7.059,0,0,0,4.48,1.316,6.491,6.491,0,0,0,4.007-1.066,3.466,3.466,0,0,0,1.393-2.906,3.4,3.4,0,0,0-1.29-2.847A14.852,14.852,0,0,0,761.964,809.339Z" fill="#fff" />
                            <path id="Path_115" data-name="Path 115" d="M785.449,820.5a6.679,6.679,0,0,1-.448-1.961,7.1,7.1,0,0,1-5.3,2.3,6.569,6.569,0,0,1-4.515-1.557,5.032,5.032,0,0,1-1.762-3.946,5.259,5.259,0,0,1,2.21-4.515,10.423,10.423,0,0,1,6.216-1.607h3.1v-1.462a3.577,3.577,0,0,0-1-2.657,4.007,4.007,0,0,0-2.941-.989,4.633,4.633,0,0,0-2.855.86,2.534,2.534,0,0,0-1.152,2.081h-3.2a4.4,4.4,0,0,1,.989-2.692,6.742,6.742,0,0,1,2.683-2.054,9.014,9.014,0,0,1,3.723-.757,7.362,7.362,0,0,1,5.039,1.607,5.8,5.8,0,0,1,1.891,4.429v8.564a10.466,10.466,0,0,0,.654,4.076v.275Zm-5.28-2.425a5.6,5.6,0,0,0,2.838-.773,4.7,4.7,0,0,0,1.943-2.013v-3.817h-2.494q-5.847,0-5.847,3.422a2.892,2.892,0,0,0,1,2.338A3.833,3.833,0,0,0,780.169,818.075Z" fill="#fff" />
                            <path id="Path_116" data-name="Path 116" d="M793.663,820.5V804.352h-2.941v-2.459h2.941v-1.91a6.339,6.339,0,0,1,1.6-4.626,6.044,6.044,0,0,1,4.523-1.633,8.386,8.386,0,0,1,2.184.291l-.172,2.563a9.241,9.241,0,0,0-1.72-.154,3.1,3.1,0,0,0-2.39.906,3.672,3.672,0,0,0-.843,2.6v1.967h3.972v2.459h-3.972V820.5Z" fill="#fff" />
                            <path id="Path_117" data-name="Path 117" d="M811.025,820.844a8.129,8.129,0,0,1-6.157-2.485,9.224,9.224,0,0,1-2.373-6.647v-.584a11.164,11.164,0,0,1,1.057-4.944,8.263,8.263,0,0,1,2.958-3.406,7.443,7.443,0,0,1,4.119-1.229,6.971,6.971,0,0,1,5.641,2.39q2.012,2.391,2.012,6.844v1.324H805.676a6.619,6.619,0,0,0,1.608,4.447,5.056,5.056,0,0,0,3.913,1.693,5.547,5.547,0,0,0,2.854-.687,7.18,7.18,0,0,0,2.047-1.824l1.943,1.514A7.813,7.813,0,0,1,811.025,820.844Zm-.4-16.682a4.245,4.245,0,0,0-3.233,1.4,6.817,6.817,0,0,0-1.617,3.93H815.1v-.241a6.063,6.063,0,0,0-1.308-3.758A4,4,0,0,0,810.629,804.162Z" fill="#fff" />
                          </g>
                          <g id="Group_5" data-name="Group 5">
                            <path id="Path_118" data-name="Path 118" d="M827.595,814.538a5.2,5.2,0,0,1,.892-2.943,13.591,13.591,0,0,1,3.408-3.126,14.674,14.674,0,0,1-1.982-2.9,5.618,5.618,0,0,1,.991-6.145,5.617,5.617,0,0,1,4.056-1.434,5.469,5.469,0,0,1,3.782,1.335,4.316,4.316,0,0,1,1.494,3.362,4.746,4.746,0,0,1-.678,2.478,8.83,8.83,0,0,1-2.371,2.387l-1.632,1.2,4.941,5.9a9.36,9.36,0,0,0,1.036-4.406h2.547a10.634,10.634,0,0,1-1.875,6.45l3.171,3.8H841.99l-1.479-1.754a7.748,7.748,0,0,1-2.646,1.533,9.356,9.356,0,0,1-3.088.526,7.635,7.635,0,0,1-5.215-1.723A5.743,5.743,0,0,1,827.595,814.538Zm7.182,3.964a5.935,5.935,0,0,0,4.1-1.707l-5.413-6.482-.5.367q-2.545,1.875-2.546,3.858a3.744,3.744,0,0,0,1.167,2.882A4.509,4.509,0,0,0,834.777,818.5Zm-2.547-15.2a6.405,6.405,0,0,0,1.8,3.66l1.8-1.266a4.8,4.8,0,0,0,1.419-1.4,3.2,3.2,0,0,0,.381-1.609,2.178,2.178,0,0,0-.763-1.7,2.784,2.784,0,0,0-1.921-.678,2.491,2.491,0,0,0-1.983.845A3.168,3.168,0,0,0,832.23,803.3Z" fill="#fff" />
                          </g>
                          <g id="Group_6" data-name="Group 6">
                            <path id="Path_119" data-name="Path 119" d="M861.608,809.339a15.525,15.525,0,0,1-6.182-3,5.733,5.733,0,0,1-1.935-4.394,6.058,6.058,0,0,1,2.364-4.892A9.4,9.4,0,0,1,862,795.117a10.255,10.255,0,0,1,4.6,1,7.559,7.559,0,0,1,3.13,2.752,7.037,7.037,0,0,1,1.109,3.835h-3.319a4.58,4.58,0,0,0-1.444-3.581,5.875,5.875,0,0,0-4.076-1.3,6.016,6.016,0,0,0-3.81,1.078,3.59,3.59,0,0,0-1.367,2.989,3.231,3.231,0,0,0,1.3,2.593,12.736,12.736,0,0,0,4.419,1.938,20.538,20.538,0,0,1,4.885,1.937,7.412,7.412,0,0,1,2.613,2.467,6.293,6.293,0,0,1,.852,3.319,5.851,5.851,0,0,1-2.374,4.876,10.123,10.123,0,0,1-6.345,1.831,11.761,11.761,0,0,1-4.816-.989,8.1,8.1,0,0,1-3.447-2.709,6.6,6.6,0,0,1-1.213-3.9h3.319a4.312,4.312,0,0,0,1.677,3.585,7.059,7.059,0,0,0,4.48,1.316,6.491,6.491,0,0,0,4.007-1.066,3.465,3.465,0,0,0,1.393-2.906,3.4,3.4,0,0,0-1.29-2.847A14.851,14.851,0,0,0,861.608,809.339Z" fill="#fff" />
                            <path id="Path_120" data-name="Path 120" d="M881.327,820.844a8.129,8.129,0,0,1-6.157-2.485,9.225,9.225,0,0,1-2.374-6.647v-.584a11.164,11.164,0,0,1,1.058-4.944,8.256,8.256,0,0,1,2.958-3.406,7.443,7.443,0,0,1,4.119-1.229,6.972,6.972,0,0,1,5.641,2.39q2.012,2.391,2.011,6.844v1.324h-12.6a6.619,6.619,0,0,0,1.608,4.447,5.056,5.056,0,0,0,3.913,1.693,5.547,5.547,0,0,0,2.854-.687,7.162,7.162,0,0,0,2.046-1.824l1.944,1.514A7.813,7.813,0,0,1,881.327,820.844Zm-.4-16.682a4.245,4.245,0,0,0-3.233,1.4,6.817,6.817,0,0,0-1.617,3.93H885.4v-.241a6.056,6.056,0,0,0-1.307-3.758A4,4,0,0,0,880.931,804.162Z" fill="#fff" />
                            <path id="Path_121" data-name="Path 121" d="M898.706,818.247a4.581,4.581,0,0,0,2.975-1.032,3.624,3.624,0,0,0,1.41-2.579h3.01a5.771,5.771,0,0,1-1.1,3.044,7.243,7.243,0,0,1-2.708,2.3,7.807,7.807,0,0,1-3.586.86,7.666,7.666,0,0,1-6.045-2.536,10.106,10.106,0,0,1-2.244-6.94v-.533a11.2,11.2,0,0,1,1-4.832,7.594,7.594,0,0,1,2.863-3.285,8.129,8.129,0,0,1,4.411-1.169,7.467,7.467,0,0,1,5.2,1.874,6.7,6.7,0,0,1,2.21,4.867h-3.01a4.383,4.383,0,0,0-1.367-2.967,4.256,4.256,0,0,0-3.035-1.161,4.453,4.453,0,0,0-3.758,1.746,8.2,8.2,0,0,0-1.332,5.047v.6a8.03,8.03,0,0,0,1.324,4.952A4.473,4.473,0,0,0,898.706,818.247Z" fill="#fff" />
                            <path id="Path_122" data-name="Path 122" d="M920.145,818.66a6.76,6.76,0,0,1-5.452,2.184,5.779,5.779,0,0,1-4.531-1.729A7.473,7.473,0,0,1,908.588,814V801.893h3.182v12.02q0,4.23,3.439,4.231,3.645,0,4.85-2.717V801.893h3.181V820.5h-3.027Z" fill="#fff" />
                            <path id="Path_123" data-name="Path 123" d="M936.045,804.747a9.555,9.555,0,0,0-1.565-.12,4.2,4.2,0,0,0-4.248,2.666V820.5h-3.181V801.893h3.095l.052,2.149a4.955,4.955,0,0,1,4.437-2.493,3.256,3.256,0,0,1,1.41.24Z" fill="#fff" />
                            <path id="Path_124" data-name="Path 124" d="M945.67,820.844a8.127,8.127,0,0,1-6.157-2.485,9.225,9.225,0,0,1-2.374-6.647v-.584a11.164,11.164,0,0,1,1.058-4.944,8.26,8.26,0,0,1,2.957-3.406,7.448,7.448,0,0,1,4.119-1.229,6.97,6.97,0,0,1,5.641,2.39q2.013,2.391,2.012,6.844v1.324H940.32a6.62,6.62,0,0,0,1.609,4.447,5.056,5.056,0,0,0,3.913,1.693,5.54,5.54,0,0,0,2.853-.687,7.152,7.152,0,0,0,2.047-1.824l1.944,1.514A7.814,7.814,0,0,1,945.67,820.844Zm-.4-16.682a4.244,4.244,0,0,0-3.232,1.4,6.816,6.816,0,0,0-1.617,3.93h9.321v-.241a6.063,6.063,0,0,0-1.308-3.758A3.994,3.994,0,0,0,945.273,804.162Z" fill="#fff" />
                          </g>
                        </g>
                        <g id="Path_41" data-name="Path 41">
                          <path id="Path_125" data-name="Path 125" d="M738.09,829.57a4.53,4.53,0,0,0-4.52-4.52h-5.23V818.2c.08-1.13.49-9.1-4.66-14.28-2.86-2.87-6.81-4.33-11.73-4.33s-8.86,1.46-11.73,4.33c-5.15,5.18-4.74,13.15-4.65,14.28v6.86h-5.06a4.51,4.51,0,0,0-4.51,4.51h0v30.71a4.521,4.521,0,0,0,4.51,4.52h43.08a4.529,4.529,0,0,0,4.52-4.52Zm-28.14,22.91-1.86,1.85-2.16-3.82-4-2.35,1.86-1.86,2.34,1.36,3.83-3.83-4.94-4.94,1.85-1.85,5.94,3.95,2.09-2.1a1.75,1.75,0,1,1,2.625,2.315,1.622,1.622,0,0,1-.155.155l-2.09,2.1,3.95,5.93-1.85,1.85-4.94-4.94-3.81,3.81Zm-9-34.58c0-.07-.54-6.8,3.24-10.6,1.82-1.83,4.35-2.72,7.73-2.72s5.9.88,7.72,2.7c3.83,3.83,3.26,10.56,3.26,10.62v7.16H700.99V817.9Z" fill="#fff" />
                        </g>
                        <g id="Path_42" data-name="Path 42">
                          <path id="Path_126" data-name="Path 126" d="M767.51,834.36l4.83,9.79,10.8,1.57-7.81,7.62,1.84,10.76-9.66-5.08-9.66,5.08,1.84-10.76-7.81-7.62,10.8-1.57Z" fill="#fff" />
                        </g>
                        <g id="Path_43" data-name="Path 43">
                          <path id="Path_127" data-name="Path 127" d="M808.51,834.36l4.83,9.79,10.8,1.57-7.81,7.62,1.84,10.76-9.66-5.08-9.66,5.08,1.84-10.76-7.81-7.62,10.8-1.57Z" fill="#fff" />
                        </g>
                        <g id="Path_44" data-name="Path 44">
                          <path id="Path_128" data-name="Path 128" d="M849.51,834.36l4.83,9.79,10.8,1.57-7.81,7.62,1.84,10.76-9.66-5.08-9.66,5.08,1.84-10.76-7.81-7.62,10.8-1.57Z" fill="#fff" />
                        </g>
                        <g id="Path_45" data-name="Path 45">
                          <path id="Path_129" data-name="Path 129" d="M890.51,834.36l4.83,9.79,10.8,1.57-7.81,7.62,1.84,10.76-9.66-5.08-9.66,5.08,1.84-10.76-7.81-7.62,10.8-1.57Z" fill="#fff" />
                        </g>
                        <g id="Path_46" data-name="Path 46">
                          <path id="Path_130" data-name="Path 130" d="M931.51,834.36l4.83,9.79,10.8,1.57-7.81,7.62,1.84,10.76-9.66-5.08-9.66,5.08,1.84-10.76-7.81-7.62,10.8-1.57Z" fill="#fff" />
                        </g>
                      </g>
                    </svg>
                  </span>
                </div>
              </section>
            </section>
          </>)}


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
