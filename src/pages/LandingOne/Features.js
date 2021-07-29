import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SectionTitle from "../../components/Shared/SectionTitle";

//Import Icons
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

export default class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          icon: "monitor",
          title: "Fully Responsive",
        },
        {
          id: 2,
          icon: "heart",
          title: "Browser Compatibility",
        },
        {
          id: 3,
          icon: "eye",
          title: "Retina Ready",
        },
        {
          id: 4,
          icon: "bold",
          title: "Based On Bootstrap 5",
        },
        {
          id: 5,
          icon: "feather",
          title: "Feather Icons",
        },
        {
          id: 6,
          icon: "code",
          title: "Built With SASS",
        },
        {
          id: 7,
          icon: "user-check",
          title: "W3c Valid Code",
        },
        {
          id: 8,
          icon: "git-merge",
          title: "Flaticon Icons",
        },
        {
          id: 9,
          icon: "settings",
          title: "Easy to customize",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
          <Container>
            <SectionTitle
              title="Solutions made for you"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />
            <Row>
              {this.state.features.map((features, key) => (
                <Col lg={4} md={6} className="mt-4 pt-2" key={key}>
                  <div className="d-flex key-feature align-items-center p-3 rounded-md shadow">
                    <div className="icon text-center rounded-circle me-3">
                      <i>
                        <FeatherIcon
                          icon={features.icon}
                          className="fea icon-ex-md text-primary"
                        />
                      </i>
                    </div>
                    <div className="flex-1">
                      <h4 className="title mb-0">{features.title}</h4>
                    </div>
                  </div>
                </Col>
              ))}
              <Col xs={12} className="mt-4 pt-2 text-center">
                <Link to="#" className="btn btn-primary">
                  See More <i className="mdi mdi-arrow-right"></i>
                </Link>
              </Col>
            </Row>
          </Container>
      </React.Fragment>
    );
  }
}
