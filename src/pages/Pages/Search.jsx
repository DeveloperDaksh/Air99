import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import FlightData from "./FlightData";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Amadeus from "amadeus";
import {
  CardGroup,
} from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Section from "..//Travel/Section"
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const Search = () => {
  const { search } = useLocation();
  const values = queryString.parse(search);
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(false);
  const [loading,setLoading] = useState(false)
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    setLoading(true)
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
            console.log(response.data);
            setLoading(false)
            if(response.data.length === 0){
              setError(true)
            }
            else setFlights(response.data.slice(0, 20));
          })
          .catch(function (responseError) {
            setLoading(false)
            setError(true);
            console.log(responseError.code);
          });
          
      } catch (err) {
        setLoading(false)
        setError(true);
        console.log("error", err);
      }
    };
    flights();
  }, []);
  function LinearIndeterminate() {
    const classes = useStyles();
  
    return (
      <div style ={{flexBasis:"50%"}}>
        <LinearProgress />
      </div>
    );
  }
  return (
    <div>
      <Section {...values} />
      <Box display="flex" padding="100px" justifyContent="space-between">
          <div  style={{flexBasis:"200px",border:"none"}}>
            <div className="card" style={{
              padding:"10px"
            }}>
            <FormControl component="fieldset">
      <FormLabel component="legend">Filter By Stops</FormLabel>
      <RadioGroup aria-label="Stops" name="stops" value={value} onChange={handleChange}>
        <FormControlLabel value="0" control={<Radio />} label="0 Stops" />
        <FormControlLabel value="1" control={<Radio />} label="1 Stops" />
      </RadioGroup>
    </FormControl>
            </div>
          </div>
          <div style={{flexGrow:"0.4"}}>
          {loading && <LinearIndeterminate />}
          {flights?.length > 0 ? (
        <CardGroup style={{ display:"block", justifyContent: "center" }}>
          {flights.map((each) => (
            <FlightData details={each} flightClass={values.flightClass} />
          ))}
        </CardGroup>
      ) : null}
        {error ? (
        <CardGroup
          style={{
            display:"block",
            justifyContent: "center",
          }}
        >
          <FlightData details={{}} error={true}></FlightData>
        </CardGroup>
      ) : null}
          </div>
      </Box>
    </div>
  );
};

export default Search;
