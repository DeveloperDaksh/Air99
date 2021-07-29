import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

//Import Images
import client01 from "../../assets/images/client/01.jpg";
import client02 from "../../assets/images/client/02.jpg";
import client03 from "../../assets/images/client/03.jpg";
import client04 from "../../assets/images/client/04.jpg";
import client05 from "../../assets/images/client/05.jpg";
import client06 from "../../assets/images/client/06.jpg";

class Instructors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        { img: client05, name: "Krista John", post: "Professor" },
        { img: client06, name: "Jack John", post: "Professor" },
        { img: client01, name: "Roger Jackson", post: "Professor" },
        { img: client02, name: "Luchhi Cina", post: "Professor" },
        { img: client03, name: "Sophiya Cally", post: "Professor" },
        { img: client04, name: "Johnny English", post: "Professor" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* render Section title */}
          <SectionTitle
            title="Our Instructor"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            {this.state.instructors.map((instructor, key) => (
              <Col lg={4} md={6} xs={12} key={key} className="mt-4 pt-2">
                <div className="d-flex align-items-center">
                  <img
                    src={instructor.img}
                    className="avatar avatar-medium rounded-circle img-thumbnail"
                    alt="Landrick"
                  /> 
                  <div className="flex-1 content ms-3">
                    <h5 className="mb-0">
                      <Link to="#" className="text-dark">
                        {instructor.name}
                      </Link>
                    </h5>
                    <small className="position text-muted">
                      {instructor.post}
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

export default Instructors;
