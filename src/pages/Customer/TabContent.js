import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
class TabContents extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="align-items-center">
          <Col md="6">
            <img
              src={this.props.img}
              data-aos="fade-up"
              data-aos-duration="1400"
              className="img-fluid mx-auto d-block shadow rounded"
              alt=""
            />
          </Col>

          <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ms-md-4">
              <h4
                className="title mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {this.props.title}
              </h4>
              <p
                className="text-muted"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                {this.props.desc}
              </p>
              <div className="mt-4" data-aos="fade-up" data-aos-duration="1800">
                <Link
                  to={this.props.readMoreLink}
                  className="text-primary p-1 px-2 shadow rounded me-3"
                >
                  Read More <i className="mdi mdi-chevron-right"></i>
                </Link>
                <Link
                  to={this.props.blogLink}
                  className="text-warning p-1 px-2 shadow rounded"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TabContents;
