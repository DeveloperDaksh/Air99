import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//import images
import team1 from "../../assets/images/construction/t1.jpg";
import team3 from "../../assets/images/construction/t3.jpg";
import team2 from "../../assets/images/construction/t2.jpg";
import team4 from "../../assets/images/construction/t4.jpg";

export default class TeamMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        {
          id: 1,
          img: team1,
          name: "Ronny Jofra",
          position: "Architecture",
        },
        {
          id: 2,
          img: team3,
          name: "Micheal Carlo",
          position: "Project Manager",
        },
        {
          id: 3,
          img: team2,
          name: "Aliana Rosy",
          position: "Builder Advisor",
        },
        {
          id: 4,
          img: team4,
          name: "Sofia Razaq",
          position: "HR Manager",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Container className=" mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-4">Expert Team Members</h4>
                <p className="text-muted mx-auto para-desc mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {this.state.members.map((members, key) => (
              <Col lg={3} md={6} className="mt-4 pt-2" key={key}>
                <div className="card team text-center border-0">
                  <div className="position-relative">
                    <img src={members.img} className="img-fluid" alt="" />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item ms-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="facebook"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="instagram"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="twitter"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item ms-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body py-3 px-0 content">
                    <h5 className="mb-0">
                      <Link to="#" className="name text-dark">
                        {members.name}
                      </Link>
                    </h5>
                    <small className="designation text-muted">
                      {members.position}
                    </small>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
