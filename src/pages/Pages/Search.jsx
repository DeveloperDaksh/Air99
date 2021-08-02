import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";
import { useLocation } from "react-router";
import FlightData from "./FlightData";
import Amadeus from "amadeus";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
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
  useEffect(() => {
    setLoading(true)
    const flights = async () => {
      let resp;
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
      <div className={classes.root} style={{margin:"100px"}}>
        <LinearProgress />
      </div>
    );
  }
  return (
    <div>
      {loading && <LinearIndeterminate />}
      {flights?.length > 0 ? (
        <CardGroup style={{ marginTop: "100px", justifyContent: "center" }}>
          {flights.map((each) => (
            <FlightData details={each} flightClass={values.flightClass} />
          ))}
        </CardGroup>
      ) : null}
      {error ? (
        <CardGroup
          style={{
            marginTop: "150px",
            marginBottom: "100px",
            justifyContent: "center",
          }}
        >
          <FlightData details={{}} error={true}></FlightData>
        </CardGroup>
      ) : null}
    </div>
  );
};

export default Search;
