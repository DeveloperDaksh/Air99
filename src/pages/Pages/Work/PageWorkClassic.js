import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Fade in effect
import FadeIn from "react-fade-in";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

//Import Images
import work1 from "../../../assets/images/work/1.jpg";
import work2 from "../../../assets/images/work/2.jpg";
import work3 from "../../../assets/images/work/3.jpg";
import work4 from "../../../assets/images/work/4.jpg";
import work5 from "../../../assets/images/work/5.jpg";
import work6 from "../../../assets/images/work/6.jpg";
import work7 from "../../../assets/images/work/7.jpg";
import work8 from "../../../assets/images/work/8.jpg";
import work9 from "../../../assets/images/work/9.jpg";
import work10 from "../../../assets/images/work/10.jpg";
import work11 from "../../../assets/images/work/11.jpg";
import work12 from "../../../assets/images/work/12.jpg";

class PageWorkClassic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Pages", link: "#" },
        { id: 3, name: "Work", link: "#" },
        { id: 4, name: "Classic" },
      ],
      works: [
        {
          image: work1,
          title: "Iphone mockup",
          subtitle: "Branding",
          category: "Branding",
        },
        {
          image: work2,
          title: "Mockup Collection",
          subtitle: "Mockup",
          category: "Designing",
        },
        {
          image: work3,
          title: "Abstract images",
          subtitle: "Abstract",
          category: "Photography",
        },
        {
          image: work4,
          title: "Yellow bg with Books",
          subtitle: "Company V-card",
          category: "Development",
        },
        {
          image: work5,
          title: "Company V-card",
          subtitle: "V-card",
          category: "Branding",
        },
        {
          image: work6,
          title: "Mockup box with paints",
          subtitle: "Photography",
          category: "Branding",
        },
        {
          image: work7,
          title: "Coffee cup",
          subtitle: "Cups",
          category: "Designing",
        },
        {
          image: work8,
          title: "Pen and article",
          subtitle: "Article",
          category: "Development",
        },
        {
          image: work9,
          title: "White mockup box",
          subtitle: "Color",
          category: "Photography",
        },
        {
          image: work10,
          title: "Logo Vectors",
          subtitle: "Logos",
          category: "Photography",
        },
        {
          image: work11,
          title: "Black and white T-shirt",
          subtitle: "Clothes",
          category: "Branding",
        },
        {
          image: work12,
          title: "Yellow bg with cellphone",
          subtitle: "Cellphone",
          category: "Branding",
        },
      ],
      displayCategory: "All",
    };
    this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }
  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var topnav = document.getElementById("topnav");
    if (top > 80 && topnav) {
      topnav.classList.add("nav-sticky");
    } else if (topnav) {
      topnav.classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb title="Work Classic" pathItems={this.state.pathItems} />
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
            <Row className="justify-content-center">
              <div className="col-12 filters-group-wrap">
                <div className="filters-group">
                  <ul
                    className="container-filter list-inline mb-0 filter-options text-center"
                    id="filter"
                  >
                    <li onClick={() => this.setCategory("All")}
                        className={
                          this.state.displayCategory === "All"
                            ? "list-inline-item categories-name border text-dark rounded active"
                            : "list-inline-item categories-name border text-dark rounded"
                        }
                      >
                        All
                 
                    </li>{" "}
                    <li onClick={() => this.setCategory("Branding")}
                        className={
                          this.state.displayCategory === "Branding"
                            ? "list-inline-item categories-name border text-dark rounded active"
                            : "list-inline-item categories-name border text-dark rounded"
                        }
                      >
                        Branding
                 
                    </li>{" "}
                    <li onClick={() => this.setCategory("Designing")}
                        className={
                          this.state.displayCategory === "Designing"
                            ? "list-inline-item categories-name border text-dark rounded active"
                            : "list-inline-item categories-name border text-dark rounded"
                        }
                      >
                        Designing
                 
                    </li>{" "}
                    <li onClick={() => this.setCategory("Photography")}
                        className={
                          this.state.displayCategory === "Photography"
                            ? "list-inline-item categories-name border text-dark rounded active"
                            : "list-inline-item categories-name border text-dark rounded"
                        }
                      >
                        Photography
                 
                    </li>{" "}
                    <li onClick={() => this.setCategory("Development")}
                        className={
                          this.state.displayCategory === "Development"
                            ? "list-inline-item categories-name border text-dark rounded active"
                            : "list-inline-item categories-name border text-dark rounded"
                        }
                      >
                        Development
                    </li>
                  </ul>
                </div>
              </div>
            </Row>

            <Row className="projects-wrapper">
              {this.state.works
                .filter(
                  ({ category }) =>
                    this.state.displayCategory === category ||
                    this.state.displayCategory === "All"
                )
                .map(({ title, image, subtitle }, key) => (
                  <Col key={key} lg={4} md={6} xs={12} className="mt-4 pt-2">
                    <FadeIn delay={100}>
                      <Card className="border-0 work-container work-classic">
                        <CardBody className="p-0">
                          <Link to="page-work-detail">
                            <img
                              src={image}
                              className="img-fluid rounded work-image"
                              alt="Landrick"
                            />
                          </Link>
                          <div className="content pt-3">
                            <h5 className="mb-0">
                              <Link
                                to="page-work-detail"
                                className="text-dark title"
                              >
                                {title}
                              </Link>
                            </h5>
                            <h6 className="text-muted tag mb-0">{subtitle}</h6>
                          </div>
                        </CardBody>
                      </Card>
                    </FadeIn>
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageWorkClassic;
