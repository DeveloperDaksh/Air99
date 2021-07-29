import React, { useState, useEffect } from 'react';
import airlines from 'airline-codes';
import { parse } from 'iso8601-duration';
import axios from 'axios';
import {
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
import {
  Input,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import Amadeus from 'amadeus';
import UserDataForm from './userDataForm';
const FlightData = (props) => {
  const [details, setDetails] = useState(false);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [arr, setArr] = useState([<UserDataForm />]);
  if (props.error === true) {
    return (
      <div style={{ textAlign: 'center' }}>
        <Card style={{ width: '85vw' }}>
          <CardBody>
            <h3>Unable to Find Flights for the Given Place</h3>
            <p>Check the Places or Try Again Later!</p>
          </CardBody>
        </Card>
      </div>
    );
  }

  const segs = props.details.segments?.length;
  const dur = parse(props.details.itineraries[0].duration);
  return (
    <div style={{ textAlign: 'center' }}>
      <Card style={{ width: '85vw', marginBottom: '75px' }}>
        <CardBody>
          <CardText style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <h4>
                {' '}
                <strong>
                  {/* {airlines
                    .findWhere({
                      iata: props.details.itineraries[0].segments[0].aircraft
                        .code,
                    })
                    .get('name')} */}
                </strong>{' '}
              </h4>
              <h4>&#128337; : {`${dur.hours} Hours ${dur.minutes} Minutes`}</h4>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div>
                From :{' '}
                <h3>
                  {props.details.itineraries[0].segments[0].departure.iataCode}{' '}
                </h3>
              </div>
              <div>
                <h6>
                  <strong>
                    <em>
                      Departure :{' '}
                      {new Date(
                        props.details.itineraries[0].segments[0].departure.at,
                      ).toString()}
                    </em>
                  </strong>
                </h6>
              </div>
              <h6>
                <strong>
                  <em>
                    Landing :{' '}
                    {new Date(
                      props.details.itineraries[0].segments[0].arrival.at,
                    ).toString()}
                  </em>
                </strong>{' '}
              </h6>
              <div>
                At :{' '}
                <h3>
                  {props.details.itineraries[0].segments[0].arrival.iataCode}
                </h3>
              </div>
            </div>
            <div>
              <div>
                <h5>
                  Layovers : {props.details.itineraries[0].segments.length}
                </h5>
              </div>
              <Button onClick={() => setDetails((prev) => !prev)}>
                {details ? 'Hide Details' : 'More Details'}
              </Button>
              {details ? (
                <h2>
                  Price:{props.details.price.total}{' '}
                  {props.details.price.currency}
                </h2>
              ) : (
                <>
                  <br />
                  <br />
                  <br />
                </>
              )}
              <Button onClick={handleClickOpen}>Book Now</Button>
            </div>
          </CardText>
        </CardBody>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          scroll="body"
        >
          {arr}
          <Button
            style={{ textAlign: 'center' }}
            onClick={() => setArr((arr) => [...arr, <UserDataForm />])}
            color="secondary"
          >
            Add Another Member
          </Button>
        </Dialog>
        {details && (
          <div style={{ backgroundColor: '#ddd' }}>
            <p>
              Number of Seats Available:{props.details.numberOfBookableSeats}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default FlightData;
