// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Card,
  CardImg,
  CardBody,
} from "reactstrap";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";
import PageSearchSidebar from "../../../components/Shared/PageSearchSidebar";

// import images
import blog01 from "../../../assets/images/blog/01.jpg";
import blog02 from "../../../assets/images/blog/02.jpg";
import blog03 from "../../../assets/images/blog/03.jpg";
import blog04 from "../../../assets/images/blog/04.jpg";
import blog05 from "../../../assets/images/blog/05.jpg";
import blog06 from "../../../assets/images/blog/06.jpg";
import blog07 from "../../../assets/images/blog/07.jpg";
import blog08 from "../../../assets/images/blog/08.jpg";

class PageBlogSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Pages", link: "#" },
        { id: 3, name: "Blog", link: "#" },
        { id: 4, name: "Blog with Sidebar" },
      ],
      blogs: [
        {
          id: 1,
          image: blog01,
          title: "Design your apps in your own way",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 2,
          image: blog02,
          title: "How apps is changing the IT world",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 3,
          image: blog03,
          title: "Smartest Applications for Business",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 4,
          image: blog04,
          title: "Design your apps in your own way",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 5,
          image: blog05,
          title: "How apps is changing the IT world",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 6,
          image: blog06,
          title: "Smartest Applications for Business",
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
        <PageBreadcrumb title="Blog" pathItems={this.state.pathItems} />
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
              <Col lg={8} md={6}>
                <Row>
                  {this.state.blogs.map((blog, key) => (
                    <Col lg={6} md={12} key={key} className="mb-4 pb-2">
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
                                  <i className="uil uil-comment me-1"></i>
                                  {blog.comment}
                                </Link>
                              </li>
                            </ul>
                            <Link
                              to="/page-blog-detail"
                              className="text-muted readmore"
                            >
                              Read More{" "}
                              <i className="uil uil-angle-right-b align-middle"></i>
                            </Link>
                          </div>
                        </CardBody>
                        <div className="author">
                          <small className="text-light user d-block">
                            <i className="uil uil-user"></i> {blog.autor}
                          </small>
                          <small className="text-light date">
                            <i className="uil uil-calendar-alt"></i>{" "}
                            {blog.date}
                          </small>
                        </div>
                      </Card>
                    </Col>
                  ))}
                  <Col xs="12">
                    <Pagination listClassName="justify-content-center mb-0">
                      <PaginationItem>
                        <PaginationLink to="#">
                          Prev
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink to="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink to="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink to="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink to="#">
                          Next
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </Col>
                </Row>
              </Col>

              {/* sidebar */}
              <Col lg={4} xs={12} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <PageSearchSidebar
                  blog01={blog01}
                  blog07={blog07}
                  blog08={blog08}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageBlogSidebar;
