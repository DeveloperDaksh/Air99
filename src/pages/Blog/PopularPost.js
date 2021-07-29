import React, { Component } from "react";

import BlogBox from "../../components/Shared/BlogBox";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Blog Images
import blog1 from "../../assets/images/blog/01.jpg";
import blog2 from "../../assets/images/blog/02.jpg";
import blog3 from "../../assets/images/blog/03.jpg";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default class PopularPost extends Component {
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
        <Container className="mt-4 mt-lg-0">
          <Row className="align-items-center mb-4 pb-2">
            <Col md={8}>
              <div className="section-title text-center text-md-start">
                <h4 className="mb-4">Popular post</h4>
                <p className="text-muted mb-0 para-desc">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>

            <Col md={4} className="mt-4 mt-sm-0">
              <div className="text-center text-md-end">
                <Link to="#" className="btn btn-soft-primary">
                  See More{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                  </i>
                </Link>
              </div>
            </Col>
          </Row>
          <div className="row">
            <BlogBox blogs={this.state.blogs} />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
