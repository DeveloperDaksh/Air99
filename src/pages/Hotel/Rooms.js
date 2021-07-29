// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

//import images
import hotel01 from "../../assets/images/hotel/01.jpg";
import hotel02 from "../../assets/images/hotel/02.jpg";
import hotel03 from "../../assets/images/hotel/03.jpg";
import hotel04 from "../../assets/images/hotel/04.jpg";
import hotel05 from "../../assets/images/hotel/05.jpg";
import hotel06 from "../../assets/images/hotel/06.jpg";
import hotel07 from "../../assets/images/hotel/07.jpg";
import hotel08 from "../../assets/images/hotel/08.jpg";
import hotel09 from "../../assets/images/hotel/09.jpg";

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        {
          imageUrl: hotel01,
          title: "Regular Room",
          bed: "1",
          bathrooms: "1",
          rent: "350",
          type: "Night",
        },
        {
          imageUrl: hotel02,
          title: "Regular Big Room",
          bed: "1",
          bathrooms: "1",
          rent: "450",
          type: "Night",
        },
        {
          imageUrl: hotel03,
          title: "Deluxe Room",
          bed: "1",
          bathrooms: "1",
          rent: "550",
          type: "Night",
        },
        {
          imageUrl: hotel04,
          title: "Super Deluxe Room",
          bed: "1",
          bathrooms: "1",
          rent: "1150",
          type: "Night",
        },
        {
          imageUrl: hotel05,
          title: "Deluxe Big Room",
          bed: "1",
          bathrooms: "1",
          rent: "1250",
          type: "Night",
        },
        {
          imageUrl: hotel06,
          title: "Family Room",
          bed: "1",
          bathrooms: "1",
          rent: "2000",
          type: "Night",
        },
        {
          imageUrl: hotel07,
          title: "Premium Room",
          bed: "1",
          bathrooms: "1",
          rent: "2500",
          type: "Night",
        },
        {
          imageUrl: hotel08,
          title: "Super Premium Room",
          bed: "1",
          bathrooms: "1",
          rent: "750",
          type: "Night",
        },
        {
          imageUrl: hotel09,
          title: "Premium Big Room",
          bed: "1",
          bathrooms: "1",
          rent: "800",
          type: "Night",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Rooms & Suits"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row>
              {this.state.rooms.map((room, key) => (
                <Col lg="4" md="6" key={key} className="mt-4 pt-2">
                  <Card className="work-container work-modern rounded border-0 overflow-hidden">
                    <CardBody className="p-0">
                      <img
                        src={room.imageUrl}
                        className="img-fluid rounded"
                        alt="work"
                      />
                      <div className="overlay-work"></div>
                      <div className="content">
                        <Link
                          to="#"
                          className="title text-white pb-2 border-bottom"
                        >
                          {room.title}
                        </Link>
                        <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                          <li className="list-inline-item me-3">
                            <i className="mdi mdi-bed-empty mdi-24px me-2"></i>
                            {room.bed} Bed
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-scale-bathroom mdi-24px me-2"></i>
                            {room.bathrooms} Bathrooms
                          </li>
                        </ul>
                        <p className="text-white d-block mb-0">
                          Rent{" "}
                          <span className="text-success">${room.rent}</span> /
                          {room.type}
                        </p>
                      </div>
                      <div className="read_more bg-primary text-center rounded-circle">
                        <Link to="#" className="text-light d-block">
                          <i>
                            <FeatherIcon
                              icon="chevron-right"
                              className="fea icon-sm title-dark"
                            />
                          </i>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>

            <Row className="justify-content-center">
              <Col xs="12" className="text-center mt-4 pt-2">
                <Link to="#" className="btn btn-primary">
                  See More <i className="mdi mdi-chevron-right"></i>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Rooms;
