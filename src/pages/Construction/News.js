import React, { Component } from "react";
import { Card, Col, Container, Row } from "reactstrap";

import news1 from "../../assets/images/construction/o1.jpg";
import new2 from "../../assets/images/construction/b1.jpg";
import news3 from "../../assets/images/construction/r1.jpg";
import { Link } from "react-router-dom";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          id: 1,
          img: news1,
          title: "High quality work for demand our customer.",
        },
        {
          id: 2,
          img: new2,
          title: "Building public support for a severige work bond",
        },
        {
          id: 3,
          img: news3,
          title: "Satisfection for the customer our first parity.",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title mb-4 pb-2 text-center">
                  <span className="badge badge-pill badge-soft-primary">
                    Blogs & News
                  </span>
                  <h4 className="title mt-3 mb-4">Latest News & Articals</h4>
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
              {this.state.news.map((items , key) => (
                <Col lg={4} md={6} className="mt-4 pt-2" key={key}>
                  <Card className="blog rounded border-0 shadow">
                    <div className="position-relative">
                      <img
                        src={items.img}
                        className="card-img-top rounded-top"
                        alt="..."
                      />
                      <div className="overlay rounded-top bg-dark"></div>
                    </div>
                    <div className="card-body content">
                      <h5>
                        <Link
                          to="#"
                          className="card-title title text-dark"
                        >
                          {items.title}
                        </Link>
                      </h5>
                      <div className="post-meta d-flex justify-content-between mt-3">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item me-2 mb-0">
                            <Link
                          to="#"
                              className="text-muted like"
                            >
                              <i className="mdi mdi-heart-outline me-1"></i>33
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                          to="#"
                              className="text-muted comments"
                            >
                              <i className="uil uil-comment me-1"></i>08
                            </Link>
                          </li>
                        </ul>
                        <Link
                          to="page-blog-detail.html"
                          className="text-muted readmore"
                        >
                          Read More <i className="mdi mdi-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="author">
                      <small className="text-light user d-block">
                        <i className="mdi mdi-account"></i> Calvin Carlo
                      </small>
                      <small className="text-light date">
                        <i className="mdi mdi-calendar-check"></i> 13th August,
                        2019
                      </small>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
