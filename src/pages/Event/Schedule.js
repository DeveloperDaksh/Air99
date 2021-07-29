// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import classnames from "classnames";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstday: [
        {
          id: 1,
          title: "Digital Conference Event Intro",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "10:30AM to 11:15AM",
          day: "11",
          month: "OCT",
        },
        {
          id: 2,
          title: "Conference On User Interface",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "11:15AM to 12:30PM",
          day: "11",
          month: "OCT",
        },
        {
          id: 3,
          title: "Business World Event Intro",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "12:30PM to 01:00PM",
          day: "11",
          month: "OCT",
        },
        {
          id: 4,
          title: "Business Conference for professional",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "01:00PM to 02:15PM",
          day: "11",
          month: "OCT",
        },
      ],
      secondday: [
        {
          id: 1,
          title: "Digital Conference Event Intro",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "10:30AM to 11:15AM",
          day: "12",
          month: "OCT",
        },
        {
          id: 2,
          title: "Conference On User Interface",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "11:15AM to 12:30PM",
          day: "12",
          month: "OCT",
        },
      ],
      thirdday: [
        {
          id: 1,
          title: "Digital Conference Event Intro",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "10:30AM to 11:15AM",
          day: "13",
          month: "OCT",
        },
        {
          id: 2,
          title: "Conference On User Interface",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "11:15AM to 12:30PM",
          day: "13",
          month: "OCT",
        },
        {
          id: 3,
          title: "Business World Event Intro",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "12:30PM to 01:00PM",
          day: "13",
          month: "OCT",
        },
      ],
      activeTab: "1",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Event Schedules"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row className="mt-4 pt-2 justify-content-center">
              <Col lg={8} md={12} className="text-center">
                <Nav
                  pills
                  className="rounded nav-justified flex-column flex-sm-row"
                >
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "1" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      <div
                        className="text-center pt-1 pb-1"
                        style={{ minWidth: "200px" }}
                      >
                        <h6 className="title font-weight-normal mb-0">
                          First Day
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "2" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      <div
                        className="text-center pt-1 pb-1"
                        style={{ minWidth: "200px" }}
                      >
                        <h6 className="title font-weight-normal mb-0">
                          Second Day
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "3" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("3");
                      }}
                    >
                      <div
                        className="text-center pt-1 pb-1"
                        style={{ minWidth: "200px" }}
                      >
                        <h6 className="title font-weight-normal mb-0">
                          Third Day
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>

            <Row>
              <Col xs="12">
                <div className="tab-content" id="pills-tabContent">
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <Row>
                        {this.state.firstday.map((show, key) => (
                          <Col lg={6} key={key} className="mt-4 pt-2">
                            <Card className="event-schedule rounded border">
                              <CardBody>
                                <div className="d-flex">
                                  <ul className="date text-center text-primary me-3 mb-0 list-unstyled">
                                    <li className="day fw-bold mb-2">
                                      {show.day}
                                    </li>
                                    <li className="month fw-bold">
                                      {show.month}
                                    </li>
                                  </ul>
                                  <div className="flex-1 content">
                                    <h4>
                                      <Link to="#" className="text-dark title">
                                        {show.title}
                                      </Link>
                                    </h4>
                                    <p className="text-muted location-time">
                                      <span className="text-dark h6">
                                        Address:
                                      </span>{" "}
                                      {show.address}{" "}
                                      <span className="text-danger">
                                        {show.country}
                                      </span>{" "}
                                      <br />{" "}
                                      <span className="text-dark h6">
                                        Time:
                                      </span>{" "}
                                      {show.time}
                                    </p>
                                    <Link
                                      to="#tickets"
                                      className="btn btn-sm btn-outline-primary mouse-down"
                                    >
                                      Buy Ticket
                                    </Link>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        {this.state.secondday.map((show, key) => (
                          <Col lg={6} key={key} className="mt-4 pt-2">
                            <Card className="event-schedule rounded border">
                              <CardBody>
                                <div className="d-flex">
                                  <ul className="date text-center text-primary me-3 mb-0 list-unstyled">
                                    <li className="day fw-bold mb-2">
                                      {show.day}
                                    </li>
                                    <li className="month fw-bold">
                                      {show.month}
                                    </li>
                                  </ul>
                                  <div className="flex-1 content">
                                    <h4>
                                      <Link to="#" className="text-dark title">
                                        {show.title}
                                      </Link>
                                    </h4>
                                    <p className="text-muted location-time">
                                      <span className="text-dark h6">
                                        Address:
                                      </span>{" "}
                                      {show.address}{" "}
                                      <span className="text-danger">
                                        {show.country}
                                      </span>{" "}
                                      <br />{" "}
                                      <span className="text-dark h6">
                                        Time:
                                      </span>{" "}
                                      {show.time}
                                    </p>
                                    <Link
                                      to="#tickets"
                                      className="btn btn-sm btn-outline-primary mouse-down"
                                    >
                                      Buy Ticket
                                    </Link>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        {this.state.thirdday.map((show, key) => (
                          <Col lg={6} key={key} className="mt-4 pt-2">
                            <Card className="event-schedule rounded border">
                              <CardBody>
                                <div className="d-flex">
                                  <ul className="date text-center text-primary me-3 mb-0 list-unstyled">
                                    <li className="day fw-bold mb-2">
                                      {show.day}
                                    </li>
                                    <li className="month fw-bold">
                                      {show.month}
                                    </li>
                                  </ul>
                                  <div className="flex-1 content">
                                    <h4>
                                      <Link to="#" className="text-dark title">
                                        {show.title}
                                      </Link>
                                    </h4>
                                    <p className="text-muted location-time">
                                      <span className="text-dark h6">
                                        Address:
                                      </span>{" "}
                                      {show.address}{" "}
                                      <span className="text-danger">
                                        {show.country}
                                      </span>{" "}
                                      <br />{" "}
                                      <span className="text-dark h6">
                                        Time:
                                      </span>{" "}
                                      {show.time}
                                    </p>
                                    <Link
                                      to="#tickets"
                                      className="btn btn-sm btn-outline-primary mouse-down"
                                    >
                                      Buy Ticket
                                    </Link>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                  </TabContent>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Schedule;
