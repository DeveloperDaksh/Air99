import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import FlightData from "./FlightData";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Amadeus from "amadeus";
import { CardGroup, Container } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Section from "..//Travel/Section";
import { Box, Typography } from "@material-ui/core";
import axios from "axios";
import { MobileView, BrowserView } from "react-device-detect";
import travelBg from "../../assets/images/travel/bg.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const Search = () => {
  const { search } = useLocation();
  const values = queryString.parse(search);
  const [flights, setFlights] = useState([]);
  const [flightsToDisplay, setFlightsToDisplay] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = React.useState(99);
  const [rate, setRate] = useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    // console.log(arr);
    axios
      .get(
        "https://free.currconv.com/api/v7/convert?q=USD_EUR,EUR_USD&compact=ultra&apiKey=e0f56b9529cbbe90fee3"//Api for conversion
      )
      .then((resp) => setRate(resp.data.EUR_USD));
  }, []);
  function compare(a, b) { return (parseInt(a.price.grandTotal) - parseInt(b.price.grandTotal)); }
  function compareS(b, a) { return (parseInt(a.price.grandTotal) - parseInt(b.price.grandTotal)); }

  useEffect(() => {

    console.log(value + "value");
    if (value == 99) setFlightsToDisplay(flights);
    else if (value == 0) {

      const arr = flights.filter((f) => f.itineraries[0].segments.length === 1);
      setFlightsToDisplay(arr);

      console.log(arr);

    } else if (value == 1) {
      const arr = flights.filter((f) => f.itineraries[0].segments.length === 2);
      setFlightsToDisplay(arr);
    }
    //Sorting the cards with Low to High
    else if (value == 4) {

      const LowtoHigh = flights.sort(compare);

      setFlightsToDisplay(LowtoHigh);
    }
    //Sorting the cards with High to Low
    else if (value == 5) {

      const HighToLow = flights.sort(compareS);

      setFlightsToDisplay(HighToLow);
    }
  }, [value]);

  useEffect(() => {
    setLoading(true);
    const flights = async () => {
      try {
        var amadeus = new Amadeus({
          clientId: `${process.env.REACT_APP_CLIENT_ID}`,
          clientSecret: `${process.env.REACT_APP_SECRET}`,
        });

        await amadeus.shopping.flightOffersSearch
          .get({
            originLocationCode: values.source,
            destinationLocationCode: values.destination,
            departureDate: values.checkin,
            adults: "2",
          })
          .then(function (response) {
            // console.log(response.data);
            setLoading(false);
            if (response.data.length === 0) {
              setError(true);
            } else {
              setFlightsToDisplay(response?.data?.slice(0, 30));
              setFlights(response?.data?.slice(0, 30));
            }
          })
          .catch(function (responseError) {
            setLoading(false);
            setError(true);
            console.log(responseError.code);
          });
      } catch (err) {
        setLoading(false);
        setError(true);
        console.log("error", err);
      }
    };
    flights();
  }, []);
  function LinearIndeterminate() {
    const classes = useStyles();

    return (
      <div style={{ flexBasis: "50%" }}>
        <LinearProgress />
      </div>
    );
  }
  // console.log(values);
  return (
    <div style={{
      background: `url(${travelBg})`,
      backgroundPosition: '80%',
      backgroundSize: 'cover',
      backgroundColor: '#5c6ea1',
      color: '#ffff',
      padding: '3rem'
    }}>
      <Section {...values} searchPage />
      {/* {loading && <LinearIndeterminate />} */}
      <BrowserView>
        {loading && (
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" className="center">
              {values.source} to {values.destination}
              <Box component="span" marginLeft={3}>
                <Typography component="span">
                  {" "}
                  {`${new Date(values.checkin).toDateString()} - ${new Date(
                    values.checkout
                  ).toDateString()}`}{" "}
                </Typography>
              </Box>
            </Typography>
            <img
              style={{ maxWidth: "320px", maxHeight: "500px" }}
              src="https://cdn.dribbble.com/users/754789/screenshots/2381650/gif-aviao.gif"
            />
          </div>
        )}
        {!loading && (
          <Box
            display="flex"
            padding="50px 30px 100px 32px"
            justifyContent="space-between"
          >
            <div style={{ border: "none" }}>
              <div
                className="card"
                style={{
                  padding: "10px",
                  margin: "67px 0 0 0",
                }}
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend">Filter By Stops</FormLabel>
                  <RadioGroup
                    aria-label="Stops"
                    name="stops"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      checked={value == 99 && true}
                      value="99"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="0 Stop"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="1 Stop"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="Low to high"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="High to Low"
                    />
                  </RadioGroup>
                </FormControl>
                Total Results : {flightsToDisplay.length}
              </div>
            </div>
            <div style={{ flexGrow: "1", textAlign: 'center' }}>
              {!loading && (
                <Box marginBottom={3}>
                  <Typography variant="h2">
                    {values.source} to {values.destination}
                    <Box component="span" marginLeft={3}>
                      <Typography component="span">
                        {" "}
                        {`${new Date(
                          values.checkin
                        ).toDateString()} - ${new Date(
                          values.checkout
                        ).toDateString()}`}{" "}
                      </Typography>
                    </Box>
                  </Typography>
                </Box>
              )}
              {flightsToDisplay?.length > 0 ? (
                <CardGroup
                  style={{ display: "block", justifyContent: "center" }}
                >
                  {flightsToDisplay.map((each) => (
                    <FlightData
                      details={each}
                      flightClass={values.flightClass}
                      rate={rate}
                    />
                  ))}
                </CardGroup>
              ) : null}
              {error ? (
                <CardGroup
                  style={{
                    display: "block",
                    justifyContent: "center",
                  }}
                >
                  <FlightData details={{}} error={true}></FlightData>
                </CardGroup>
              ) : null}
            </div>
          </Box>
        )}
      </BrowserView>
      <MobileView>
        {loading && (
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              className="center"
              style={{ padding: "5px" }}
            >
              {values.source} to {values.destination}
              <Box>
                <Typography component="span">
                  {" "}
                  {`${new Date(values.checkin).toDateString()} - ${new Date(
                    values.checkout
                  ).toDateString()}`}{" "}
                </Typography>
              </Box>
            </Typography>
            <img
              style={{ maxWidth: "320px", maxHeight: "500px" }}
              src="https://cdn.dribbble.com/users/754789/screenshots/2381650/gif-aviao.gif"
            />
          </div>
        )}
        {!loading && (
          <Box
            marginBottom={3}
            padding={2}
            marginTop={3}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" align="center">
              {values.source} to {values.destination}
              <Box>
                <Typography component="span">
                  {" "}
                  {`${new Date(values.checkin).toDateString()} - ${new Date(
                    values.checkout
                  ).toDateString()}`}{" "}
                </Typography>
              </Box>
            </Typography>
          </Box>
        )}
        {!loading && (
          <Box
            display="flex"
            flexDirection="column"
            padding="20px 20px"
            justifyContent="space-between"
          >
            <div style={{ flexBasis: "200px", border: "none" }}>
              <div
                className="card"
                style={{
                  padding: "10px",
                  marginBottom: "20px",
                }}
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend">Filter By Stops</FormLabel>
                  <RadioGroup
                    aria-label="Stops"
                    name="stops"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      checked={value == 99 && true}
                      value="99"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="0 Stop"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="1 Stop"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Low to high"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="High to Low"
                    />
                  </RadioGroup>
                </FormControl>
                Total Results : {flightsToDisplay.length}
              </div>
            </div>
            <div style={{ flexGrow: "0.4" }}>
              {flightsToDisplay?.length > 0 ? (
                <CardGroup
                  style={{ display: "block", justifyContent: "center" }}
                >
                  {flightsToDisplay.map((each) => (
                    <FlightData
                      details={each}
                      flightClass={values.flightClass}
                      rate={rate}
                    />
                  ))}
                </CardGroup>
              ) : null}
              {error ? (
                <CardGroup
                  style={{
                    display: "block",
                    justifyContent: "center",
                  }}
                >
                  <FlightData details={{}} error={true}></FlightData>
                </CardGroup>
              ) : null}
            </div>
          </Box>
        )}
      </MobileView>
    </div>
  );
};

export default Search;
