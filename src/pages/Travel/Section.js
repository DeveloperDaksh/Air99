import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-autocomplete-places';
import PlacesAutocomplete from 'react-autocomplete-places';
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Flatepicker
import 'flatpickr/dist/themes/material_blue.css';
import Flatpickr from 'react-flatpickr';

import travelBg from '../../assets/images/travel/bg.jpg';

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CheckIn: new Date(),
      CheckOut: new Date(),
      source: '',
      destination: '',
      dropdownOpen: false,
      lastClicked: null,
      flightClass: '',
      coordinates: { lat: null, lng: null },
      address: '',
    };
    // this.toggleIt.bind(this)
    // this.setLastClicked.bind(this)
    this.formSubmit = this.formSubmit.bind(this);

    // this.findAcc = this.findAcc.bind(this)
  }

  // findAcc (){
  //   var curr  = new Date()
  //   if(this.state.checkin.getTime())
  // }
  async formSubmit(event) {
    const qs = queryString.stringify({
      source: this.state.source,
      destination: this.state.destination,
      checkin: this.state.CheckIn.toISOString().slice(0, 10),
      flightClass: this.state.flightClass,
      // checkout : this.state.CheckOut.toISOString().slice(0,10)
    });
    // http://localhost:3000/
    console.log(qs);
    window.location.href = `search-result?${qs}`;

    event.preventDefault();
    return;
    // console.log(this.state);
  }
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggle = () => setDropdownOpen(prevState => !prevState);

  render() {
    let { address, coordinates } = this.state;
    const handleSelect = async (value) => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      this.state.setAddress(value);
      this.state.setCoordinates(latLng);
    };
    return (
      <React.Fragment>
        <section
          className="bg-half-170 d-table w-100"
          style={{ background: `url(${travelBg}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={6}>
                <div className="title-heading mt-4">
                  <h1 className="display-4 fw-bold text-white title-dark mb-3">
                    Booking tour <br /> made easy
                  </h1>
                  <p className="para-desc text-white-50">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="#"
                      className="btn btn-icon btn-pills btn-lg btn-light"
                    >
                      <i>
                        <FeatherIcon icon="arrow-down" className="icons" />
                      </i>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={5} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <Card className="shadow rounded border-0 ms-lg-5">
                  <CardBody>
                    <h5 className="card-title">You can start search here</h5>

                    <Form className="login-form" onSubmit={this.formSubmit}>
                      <Row>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">From</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="map-pin"
                                  className="fea icon-sm icons"
                                />
                              </i>
                              {/* <Input
                                type="text"
                                className="form-control ps-5"
                                placeholder="Where"
                                name="s"
                                required
                                onChange={(place) => {
                                  this.setState({ source: place.target.value });
                                }}
                              /> */}
                              <PlacesAutocomplete
                                value={address}
                                onChange={(place) => {
                                  this.setState({
                                    address: place,
                                  });
                                }}
                                onSelect={handleSelect}
                              >
                                {({
                                  getInputProps,
                                  suggestions,
                                  getSuggestionItemProps,
                                  loading,
                                }) => (
                                  <div>
                                    <p>Latitude: {coordinates.lat}</p>
                                    <p>Longitude: {coordinates.lng}</p>

                                    <input
                                      {...getInputProps({
                                        placeholder: 'Type address',
                                      })}
                                    />

                                    <div>
                                      {loading ? <div>...loading</div> : null}

                                      {suggestions.map((suggestion) => {
                                        const style = {
                                          backgroundColor: suggestion.active
                                            ? '#41b6e6'
                                            : '#fff',
                                        };

                                        return (
                                          <div
                                            {...getSuggestionItemProps(
                                              suggestion,
                                              { style },
                                            )}
                                          >
                                            {suggestion.description}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </PlacesAutocomplete>
                            </div>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label className="form-label">To</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="map-pin"
                                  className="fea icon-sm icons"
                                />
                              </i>
                              <Input
                                type="text"
                                className="form-control ps-5"
                                placeholder="Where"
                                name="s"
                                required
                                onChange={(place) => {
                                  this.setState({
                                    destination: place.target.value,
                                  });
                                }}
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
                                minDate: new Date(),
                                altInput: true,
                                // altFormat: "F j, Y",
                                dateFormat: 'Y-m-d',
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
                                dateFormat: 'Y-m-d',
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
                                {this.state.flightClass === ''
                                  ? 'Class'
                                  : this.state.flightClass}
                              </DropdownToggle>
                              <DropdownMenu container="body">
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({ flightClass: 'Economy' })
                                  }
                                >
                                  Economy
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({ flightClass: 'Business' })
                                  }
                                >
                                  Business
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({ flightClass: 'First' })
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
                            <Dropdown isOpen={false}>
                              <DropdownToggle caret>Traveller</DropdownToggle>
                              <DropdownMenu container="body" toggle={() => {}}>
                                <DropdownItem toggle={false}>
                                  <div
                                    style={{
                                      width: '100%',
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                    }}
                                  >
                                    <div>Adult : </div>
                                    <div>
                                      <button>+</button>
                                      <div
                                        style={{
                                          display: 'inline-block',
                                          width: '20px',
                                          textAlign: 'center',
                                          backgroundColor: '#bdb9b9',
                                        }}
                                      >
                                        {3}
                                      </div>
                                      <button>-</button>
                                    </div>
                                  </div>
                                </DropdownItem>
                                <DropdownItem toggle={false}>
                                  <div
                                    style={{
                                      width: '100%',
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                    }}
                                  >
                                    <div>Children (Below-18): </div>
                                    <div>
                                      <button>+</button>
                                      <div
                                        style={{
                                          display: 'inline-block',
                                          width: '20px',
                                          textAlign: 'center',
                                          backgroundColor: '#bdb9b9',
                                        }}
                                      >
                                        {3}
                                      </div>
                                      <button>-</button>
                                    </div>
                                  </div>
                                </DropdownItem>
                                <DropdownItem toggle={false}>
                                  <div
                                    style={{
                                      width: '100%',
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                    }}
                                  >
                                    <div>Infant (Below-2): </div>
                                    <div>
                                      <button>+</button>
                                      <div
                                        style={{
                                          display: 'inline-block',
                                          width: '20px',
                                          textAlign: 'center',
                                          backgroundColor: '#bdb9b9',
                                        }}
                                      >
                                        {3}
                                      </div>
                                      <button>-</button>
                                    </div>
                                  </div>
                                </DropdownItem>
                                <DropdownItem onClick={() => {}} toggle={false}>
                                  <div
                                    style={{
                                      width: '100%',
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                    }}
                                  >
                                    <div>Infant-Lap (Below-2) : </div>
                                    <div>
                                      <button>+</button>
                                      <div
                                        style={{
                                          display: 'inline-block',
                                          width: '20px',
                                          textAlign: 'center',
                                          backgroundColor: '#bdb9b9',
                                        }}
                                      >
                                        {3}
                                      </div>
                                      <button>-</button>
                                    </div>
                                  </div>
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
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
                                I Accept{' '}
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
