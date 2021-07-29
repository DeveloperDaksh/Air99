import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        { icon: "edit", title: "Designing", link: "#" },
        { icon: "feather", title: "Development", link: "#" },
        { icon: "music", title: "Music", link: "#" },
        { icon: "camera", title: "Photography", link: "#" },
        { icon: "shield", title: "Marketing", link: "#" },
        { icon: "monitor", title: "IT & Software", link: "#" },
        { icon: "bar-chart-2", title: "Business", link: "#" },
        { icon: "activity", title: "Health & Fitness", link: "#" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* render Section title */}
            <SectionTitle
              title="Get a choice of your course"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row>
              {this.state.courses.map((course, key) => (
                <Col lg={3} md={4} xs={12} key={key} className="mt-4 pt-2">
                  <Card className="explore-feature border-0 rounded text-center bg-white">
                    <CardBody className="py-5">
                      <div className="icon rounded-circle shadow-lg d-inline-block">
                        <i>
                          <FeatherIcon icon={course.icon} className="fea" />
                        </i>
                      </div>
                      <div className="content mt-3">
                        <h5>
                          <Link to={course.link} className="title text-dark">
                            {course.title}
                          </Link>
                        </h5>
                        <Link to={course.link} className="text-muted small">
                          Learn More
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}

              <Col xs={12}>
                <div className="text-center mt-4 pt-2">
                  <Link to="#" className="btn btn-primary">
                    See More Courses{" "}
                    <i className="uil uil-arrow-right align-middle"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Courses;
