import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { useLocation } from 'react-router';
import FlightData from './FlightData';
import Amadeus from 'amadeus';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
const Search = () => {
  const { search } = useLocation();
  const values = queryString.parse(search);
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const flights = async () => {
      let resp;
      try {
        resp = await axios.post(
          'https://test.api.amadeus.com/v1/security/oauth2/token',
          new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: `${process.env.REACT_APP_CLIENT_ID}`,
            client_secret: `${process.env.REACT_APP_SECRET}`,
          }),
        );
        // console.log(resp);
        if (!resp.data.access_token) throw resp;
        const AuthToken = resp.data.access_token;
        resp = await axios.get(
          'https://test.api.amadeus.com/v1//reference-data/locations',
          {
            params: {
              subType: 'CITY',
              keyword: values.source,
            },
            headers: {
              Authorization: 'Bearer ' + AuthToken,
            },
          },
        );
        if (!resp.data.data[0].iataCode) throw resp;
        const sourceCode = resp.data.data[0].iataCode;
        resp = await axios.get(
          'https://test.api.amadeus.com/v1//reference-data/locations',
          {
            params: {
              subType: 'CITY',
              keyword: values.destination,
            },
            headers: {
              Authorization: 'Bearer ' + AuthToken,
            },
          },
        );
        if (!resp.data.data[0].iataCode) throw resp;
        const destinationCode = resp.data.data[0].iataCode;
        try {
          var amadeus = new Amadeus({
            clientId: 'rYzGzAU2CQ1zyTGDHWNwO5Lb4li0oSWp',
            clientSecret: 'vT1YPlsuQ8eqLJPu',
          });

          await amadeus.shopping.flightOffersSearch
            .get({
              originLocationCode: sourceCode,
              destinationLocationCode: destinationCode,
              departureDate: values.checkin,
              adults: '2',
            })
            .then(function (response) {
              console.log(response.data);
              setFlights(response.data.slice(0, 20));
            })
            .catch(function (responseError) {
              console.log(responseError.code);
            });
        } catch (error) {
          console.log(error);
        }
      } catch (err) {
        setError(true);
        console.log('error', err);
      }
    };
    flights();
  }, []);
  // console.log(flights);
  return (
    <div>
      {flights?.length > 0 ? (
        <CardGroup style={{ marginTop: '100px', justifyContent: 'center' }}>
          {flights.map((each) => (
            <FlightData details={each} flightClass={values.flightClass} />
          ))}
        </CardGroup>
      ) : null}
      {error ? (
        <CardGroup
          style={{
            marginTop: '150px',
            marginBottom: '100px',
            justifyContent: 'center',
          }}
        >
          <FlightData details={{}} error={true}></FlightData>
        </CardGroup>
      ) : null}
    </div>
  );
};

export default Search;
