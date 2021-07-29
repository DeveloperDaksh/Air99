import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

//Import Images
import course1 from "../../assets/images/course/1.jpg";
import course2 from "../../assets/images/course/2.jpg";
import course3 from "../../assets/images/course/3.jpg";
import course4 from "../../assets/images/course/4.jpg";
import course5 from "../../assets/images/course/5.jpg";
import course6 from "../../assets/images/course/6.jpg";

import client01 from "../../assets/images/client/01.jpg";
import client02 from "../../assets/images/client/01.jpg";
import client03 from "../../assets/images/client/01.jpg";
import client04 from "../../assets/images/client/01.jpg";
import client05 from "../../assets/images/client/01.jpg";
import client06 from "../../assets/images/client/01.jpg";

class PopularCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          img: course1,
          topic: "Design",
          title: "Program for Missionaries",
          desc:
            "The most well-known dummy text is the have originated in the 16th century.",
          lec: "25",
          time: "1h 30m",
          views: "3012",
          profImg: client01,
          name: "Dung Lewis",
          post: "Professor",
          price: "$11",
        },
        {
          id: 1,
          img: course2,
          topic: "Development",
          title: "Access to Higher Education",
          desc:
            "The most well-known dummy text is the have originated in the 16th century.",
          lec: "25",
          time: "1h 30m",
          views: "3012",
          profImg: client02,
          name: "Dung Lewis",
          post: "Professor",
          price: "$15",
        },
        {
          id: 1,
          img: course3,
          topic: "Software",
          title: "Educational Communication",
          desc:
            "The most well-known dummy text is the have originated in the 16th century.",
          lec: "25",
          time: "1h 30m",
          views: "3012",
          profImg: client03,
          name: "Dung Lewis",
          post: "Professor",
          price: "$19",
        },
        {
          id: 1,
          img: course4,
          topic: "Music",
          title: "Introduction to Epidemiology",
          desc:
            "The most well-known dummy text is the have originated in the 16th century.",
          lec: "25",
          time: "1h 30m",
          views: "3012",
          profImg: client04,
          name: "Dung Lewis",
          post: "Professor",
          price: "$9",
        },
        {
          id: 1,
          img: course5,
          topic: "Art & Fashion",
          title: "Good Clinical Practice",
          desc:
            "The most well-known dummy text is the have originated in the 16th century.",
          lec: "25",
          time: "1h 30m",
          views: "3012",
          profImg: client05,
          name: "Dung Lewis",
          post: "Professor",
          price: "$24",
        },
        {
          id: 1,
          img: course6,
          topic: "Programmer",
          title: "Social Computing",
          desc:
            "The most well-known dummy text is the have originated in the 16th century.",
          lec: "25",
          time: "1h 30m",
          views: "3012",
          profImg: client06,
          name: "Dung Lewis",
          post: "Professor",
          price: "$21",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* render Section title */}
          <SectionTitle
            title="Popular Courses"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            {this.state.courses.map((course, key) => (
              <Col lg={4} md={6} xs={12} key={key} className="mt-4 pt-2">
                <Card className="blog rounded border-0 shadow overflow-hidden">
                  <div className="position-relative">
                    <CardImg top src={course.img} alt="..." />
                    <div className="overlay bg-dark"></div>
                    <div className="teacher d-flex align-items-center">
                      <img
                        src={course.profImg}
                        className="avatar avatar-md-sm rounded-circle shadow"
                        alt="Landrick"
                      />
                      <div className="ms-2">
                        <h6 className="mb-0">
                          <Link to="#" className="text-light user">
                            {course.name}
                          </Link>
                        </h6>
                        <p className="text-light small my-0">{course.post}</p>
                      </div>
                    </div>
                    <div className="course-fee bg-white text-center shadow-lg rounded-circle">
                      <h6 className="text-primary fw-bold fee">
                        {course.price}
                      </h6>
                    </div>
                  </div>
                  <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                      <svg
                        viewBox="0 0 2880 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <CardBody className="content">
                    <small>
                      <Link to="#" className="text-primary h6">
                        {course.topic}
                      </Link>
                    </small>
                    <h5 className="mt-2">
                      <Link to="#" className="title text-dark">
                        {course.title}
                      </Link>
                    </h5>
                    <p className="text-muted">{course.desc}</p>
                    <Link to="#" className="text-primary">
                      Read More{" "}
                      <i>
                        <FeatherIcon
                          icon="chevron-right"
                          className="fea icon-sm"
                        />
                      </i>
                    </Link>
                    <ul className="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
                      <li className="text-muted small">
                        <i className="uil uil-book-open text-info"></i>
                        {course.lec} Lectures
                      </li>
                      <li className="text-muted small ms-3">
                        <i className="uil uil-clock text-warning"></i>
                        {course.time}
                      </li>
                      <li className="text-muted small ms-3">
                        <i className="uil uil-eye text-primary"></i>
                        {course.views}
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default PopularCourses;
