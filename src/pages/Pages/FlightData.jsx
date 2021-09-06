import React, { useState, useEffect } from "react";
import { parse } from "iso8601-duration";
import { Button, Card, CardText, CardBody } from "reactstrap";
import { Dialog } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import Amadeus from "amadeus";
import UserDataForm from "./userDataForm";

const FlightData = (props) => {
  const [details, setDetails] = useState(false);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setArr([<UserDataForm />]);
  };

  // useEffect(() => {
  //   // convertCurrency(1, "USD", "BRL").then((response) => console.log(response));
  //   const data = getCurrencyRate("USD", "EUR");
  //   console.log(data);
  // }, []);

  const [arr, setArr] = useState([<UserDataForm />]);
  if (props.error === true) {
    return (
      <div style={{ textAlign: "center" }}>
        <Card style={{ width: "auto%" }}>
          <CardBody>
            <h3>Unable to Find Flights for the Given Place</h3>
            <p>Check the Places or Try Again Later!</p>
          </CardBody>
        </Card>
      </div>
    );
  }
  const cardStyle = isMobile
    ? {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }
    : { display: "flex", justifyContent: "space-around" };
  const segs = props.details.itineraries[0].segments.length;
  const dur = parse(props.details.itineraries[0].duration);
  return (
    <div style={{ textAlign: "center" }}>
      <Card style={{ width: "auto", marginBottom: "75px" }}>
        <CardBody>
          <CardText style={cardStyle}>
            <div>
              <h4>
                {" "}
                <strong>
                  {/* {airlines
                    .findWhere({
                      iata: props.details.itineraries[0].segments[0].aircraft
                        .code,
                    })
                    .get('name')} */}
                </strong>{" "}
              </h4>
              <h4>&#128337; : {`${dur.hours} Hours ${dur.minutes} Minutes`}</h4>
            </div>
            <div style={{ textAlign: "left" }}>
              <div>
                From :{" "}
                <h3>
                  {props.details.itineraries[0].segments[0].departure.iataCode}{" "}
                </h3>
              </div>
              <div>
                <h6>
                  <strong>
                    <em>
                      Departure :{" "}
                      {new Date(
                        props.details.itineraries[0].segments[0].departure.at
                      ).toString()}
                    </em>
                  </strong>
                </h6>
              </div>
              <h6>
                <strong>
                  <em>
                    Landing :{" "}
                    {new Date(
                      props.details.itineraries[0].segments[0].arrival.at
                    ).toString()}
                  </em>
                </strong>{" "}
              </h6>
              <div>
                At :{" "}
                <h3>
                  {
                    props.details.itineraries[0].segments[segs - 1].arrival
                      .iataCode
                  }
                </h3>
              </div>
            </div>
            <div>
              <div>
                <h5>
                  Layovers : {props.details.itineraries[0].segments.length - 1}
                </h5>
              </div>
              <p>
                Price:{" "}
                <strong style={{ color: "#36d636" }}>
                  {(props.details.price.total * props.rate).toFixed(2)} USD
                </strong>
              </p>
              <Button onClick={() => window.location.href="/payments"}>Book Now</Button>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{ textAlign: "center", margin: "auto" }}
              onClick={() => setArr((arr) => [...arr, <UserDataForm />])}
              color="secondary"
            >
              Add Another Member
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "15px 0",
            }}
          >
            <Button style={{ textAlign: "center" }}>Call Now</Button>
            <Button style={{ textAlign: "center" }}>Contact Us</Button>
          </div>
        </Dialog>
        {details && (
          <div style={{ backgroundColor: "#ddd" }}>
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
