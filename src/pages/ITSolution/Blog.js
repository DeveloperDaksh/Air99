// import react from "react";
import React, { Component } from "react";
import { Col, Card, CardBody, CardImg, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

// Blog Images
import blog1 from "../../assets/images/blog/01.jpg";
import blog2 from "../../assets/images/blog/02.jpg";
import blog3 from "../../assets/images/blog/03.jpg";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          image: blog1,
          title: "Design your apps in your own way",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 2,
          image: blog2,
          title: "How apps is changing the IT world",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 3,
          image: blog3,
          title: "Smartest Applications for Business",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center mb-4 pb-2">
            <Col lg={6}>
              <div className="section-title text-center text-lg-start">
                <h6 className="text-primary">Blog</h6>
                <h4 className="title mb-4 mb-lg-0">
                  Reads Our Latest <br /> News & Blog
                </h4>
              </div>
            </Col>

            <Col lg={6}>
              <div className="section-title text-center text-lg-start">
                <p className="text-muted mb-0 mx-auto para-desc">
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
            {this.state.blogs.map((blog, key) => (
              <Col lg="4" md="6" className="mt-4 pt-2" key={key} name="blog">
                <Card className="blog rounded border-0 shadow">
                  <div className="position-relative">
                    <CardImg
                      top
                      src={blog.image}
                      className="rounded-top"
                      alt=""
                    />
                    <div className="overlay rounded-top bg-dark"></div>
                  </div>
                  <CardBody className="content">
                    <h5>
                      <Link to="#" className="card-title title text-dark">
                        {blog.title}
                      </Link>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2  mb-0">
                          <Link to="#" className="text-muted like">
                            <i className="uil uil-heart me-1"></i>
                            {blog.like}
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="#" className="text-muted comments">
                            <i className="uil uil-comment me-1  "></i>
                            {blog.comment}
                          </Link>
                        </li>
                      </ul>
                      <Link
                        to="/page-blog-detail"
                        className="text-muted readmore"
                      >
                        Read More <i className="mdi mdi-chevron-right"></i>
                      </Link>
                    </div>
                  </CardBody>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> {blog.autor}
                    </small>
                    <small className="text-light date">
                      <i className="mdi mdi-calendar-check"></i> {blog.date}
                    </small>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
