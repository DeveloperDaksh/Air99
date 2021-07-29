import React, { Component } from "react";
import { Col, Card, CardBody, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

class BlogBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.blogs.map((blog, key) => (
          <Col lg="4" md="6" className="mt-4 pt-2" key={key} name="blog">
            <Card className="blog rounded border-0 shadow">
              <div className="position-relative">
                <CardImg top src={blog.image} className="rounded-top" alt="" />
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
                        <i className="uil uil-comment me-1"></i>
                        {blog.comment}
                      </Link>
                    </li>
                  </ul>
                  <Link to="/page-blog-detail" className="text-muted readmore">
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
      </React.Fragment>
    );
  }
}

export default BlogBox;
