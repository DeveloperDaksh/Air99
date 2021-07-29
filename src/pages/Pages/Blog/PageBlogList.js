import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

// import images
import blog13 from "../../../assets/images/work/13.jpg";
import blog14 from "../../../assets/images/work/14.jpg";
import blog15 from "../../../assets/images/work/15.jpg";
import blog16 from "../../../assets/images/work/16.jpg";
import blog17 from "../../../assets/images/work/17.jpg";
import blog18 from "../../../assets/images/work/18.jpg";
import blog19 from "../../../assets/images/work/19.jpg";

class PageBlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Page", link: "#" },
        { id: 3, name: "Blog", link: "#" },
        { id: 4, name: "Blog List" },
      ],
      blogs: [
        {
          id: 1,
          image: blog14,
          title: "Design your apps in your own way",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 2,
          image: blog15,
          title: "Design your apps in your own way",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 3,
          image: blog16,
          title: "Design your apps in your own way",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 4,
          image: blog17,
          title: "Design your apps in your own way",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 5,
          image: blog18,
          title: "Design your apps in your own way",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 6,
          image: blog19,
          title: "Design your apps in your own way",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 7,
          image: blog13,
          title: "Design your apps in your own way",
          desc:
            "Due to its widespread use as filler text for layouts, non-readability",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
      ],
    };
  }

  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb title="Blog Listing" pathItems={this.state.pathItems} />

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

        <section className="section">
          <Container>
            <Row>
              {this.state.blogs.map((blog, key) =>
                key % 2 === 0 ? (
                  <Col lg={6} xs={12} key={key} className="mb-4 pb-2">
                    <Card className="blog rounded border-0 shadow overflow-hidden">
                      <Row className="align-items-center g-0">
                        <Col md={6}>
                          <img
                            src={blog.image}
                            className="img-fluid"
                            alt="Landrick"
                          />
                          <div className="overlay bg-dark"></div>
                          <div className="author">
                            <small className="text-light user d-block">
                              <i className="uil uil-user"></i> {blog.autor}
                            </small>
                            <small className="text-light date">
                              <i className="uil uil-calendar-alt"></i>{" "}
                              {blog.date}
                            </small>
                          </div>
                        </Col>

                        <Col md={6}>
                          <CardBody className="content">
                            <h5>
                              <Link
                                to="#"
                                className="card-title title text-dark"
                              >
                                {blog.title}
                              </Link>
                            </h5>
                            <p className="text-muted mb-0">{blog.desc}</p>
                            <div className="post-meta d-flex justify-content-between mt-3">
                              <ul className="list-unstyled mb-0">
                                <li className="list-inline-item me-2 mb-0">
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
                              <Link
                                to="page-blog-detail"
                                className="text-muted readmore"
                              >
                                Read More{" "}
                                <i className="uil uil-angle-right-b align-middle"></i>
                              </Link>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ) : (
                  <Col lg={6} xs={12} key={key} className="mb-4 pb-2">
                    <Card className="blog rounded border-0 shadow overflow-hidden">
                      <Row className="align-items-center g-0">
                        <Col md={{ size: 6, order: 1 }} xs={{ order: 2 }}>
                          <CardBody className="content">
                            <h5>
                              <Link
                                to="#"
                                className="card-title title text-dark"
                              >
                                {blog.title}
                              </Link>
                            </h5>
                            <p className="text-muted mb-0">{blog.desc}</p>
                            <div className="post-meta d-flex justify-content-between mt-3">
                              <ul className="list-unstyled mb-0">
                                <li className="list-inline-item me-2 mb-0">
                                  <Link to="#" className="text-muted like">
                                    <i className="mdi mdi-heart-outline me-1"></i>
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
                              <Link
                                to="page-blog-detail"
                                className="text-muted readmore"
                              >
                                Read More{" "}
                                <i className="uil uil-angle-right-b align-middle"></i>
                              </Link>
                            </div>
                          </CardBody>
                        </Col>

                        <Col md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                          <img
                            src={blog.image}
                            className="img-fluid"
                            alt="Landrick"
                          />
                          <div className="overlay bg-dark"></div>
                          <div className="author">
                            <small className="text-light user d-block">
                              <i className="uil uil-user"></i> {blog.autor}
                            </small>
                            <small className="text-light date">
                              <i className="uil uil-calendar-alt"></i>{" "}
                              {blog.date}
                            </small>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                )
              )}

              <Col xs={12}>
                <Pagination listClassName="justify-content-center mb-0">
                  <PaginationItem>
                    <PaginationLink href="#" aria-label="Previous">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" aria-label="Next">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageBlogList;
