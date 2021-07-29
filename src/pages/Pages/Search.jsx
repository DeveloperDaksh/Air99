import React, { useEffect, useState } from 'react'
import queryString from "query-string"
import axios from 'axios'
import { useLocation } from 'react-router'
import FlightData from './FlightData'
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';
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
    console.log(process.env)
    const {search} = useLocation()
    const values = queryString.parse(search)
    const [flights,setFlights] = useState([])
    const [error, setError] = useState(false)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        console.log(search);
        const flights = async ()=>{
          setLoading(true)
            let resp;
  try{
    resp = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', new URLSearchParams({
    grant_type: 'client_credentials',  
    client_id: `${process.env.REACT_APP_CLIENT_ID}`,
      client_secret: `${process.env.REACT_APP_SECRET}`
    }))
    // console.log(resp);
    if(! resp.data.access_token) throw resp;
    const AuthToken = resp.data.access_token
    resp = await axios.get('https://test.api.amadeus.com/v1//reference-data/locations',{
      params:{
        subType: "CITY",
      keyword: values.source
      },
      headers:{
        Authorization : "Bearer "+AuthToken
      }
    })
    if(! resp.data.data[0].iataCode) throw resp;
    const sourceCode = resp.data.data[0].iataCode
    resp = await axios.get('https://test.api.amadeus.com/v1//reference-data/locations',{
      params:{
        subType: "CITY",
      keyword: values.destination
      },
      headers:{
        Authorization : "Bearer "+AuthToken
      }
    })
    if(! resp.data.data[0].iataCode) throw resp;
    const destinationCode = resp.data.data[0].iataCode
    console.log(sourceCode ,destinationCode)
    resp = await axios.post('https://test.api.amadeus.com/v1/shopping/availability/flight-availabilities', {
      "originDestinations": [
        {
          "id": "1",
          "originLocationCode": sourceCode,
          "destinationLocationCode": destinationCode,
          "departureDateTime": {
            "date": values.checkin,
            "time": "21:15:00"
          }
        }
      ],
      "travelers": [
        {
          "id": "1",
          "travelerType": "ADULT"
        }
      ],
      "sources": [
        "GDS"
      ]
    },{
      headers:{
        'Content-Type': 'application/vnd.amadeus+json',
        Authorization : "Bearer "+AuthToken
      }
    })
    // this.props.setSearchResults(resp.data)
    setLoading(false)
    setFlights(resp.data.data)
  } catch(err){
    setLoading(false)
    setError(true)
    console.log("error",err);
  }

}
flights()
    },[])
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
            {flights.length > 0 ? <CardGroup style={{marginTop:"100px",justifyContent:'center'}}>{flights.map(each=><FlightData details={each}/>)}</CardGroup> : null}
            {error ? <CardGroup style={{marginTop:"150px",marginBottom:"100px",justifyContent:'center'}}><FlightData details={{}} error = {true}></FlightData></CardGroup> : null}
        </div>
    )
}

export default Search
