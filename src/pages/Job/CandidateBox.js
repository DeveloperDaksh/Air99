import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class CandidateBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.candidates.map((candidate, key) => (
          <Col key={key} lg="3" md="6" className="mt-4 pt-2">
            <Card className="team text-center border-0">
              <CardBody>
                <div className="position-relative">
                  <img
                    src={candidate.image}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0">
                    {candidate.socialIds.map((socialId, key) => (
                      <li key={key} className="list-inline-item me-1">
                        <Link to={socialId.link} className="rounded">
                          <i>
                            <FeatherIcon
                              icon={socialId.icon}
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="content pt-3 pb-3">
                  <h5 className="mb-0">
                    <Link to={candidate.link} className="name text-dark">
                      {candidate.name}
                    </Link>
                  </h5>
                  <small className="designation text-muted">
                    {candidate.designation}
                  </small>
                  <h6 className="text-muted font-weight-normal">
                    $ {candidate.salary}
                  </h6>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default CandidateBox;
