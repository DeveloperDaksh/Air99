// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Progress, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Light Box
import Lightbox from "react-image-lightbox";
import "../../../node_modules/react-image-lightbox/style.css";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ProcessBox from "../../components/Shared/ProcessBox";

// import images
import personal01 from "../../assets/images/personal/1.jpg";
import personal02 from "../../assets/images/personal/2.jpg";
import personal03 from "../../assets/images/personal/3.jpg";
import personal04 from "../../assets/images/personal/4.jpg";
import personal05 from "../../assets/images/personal/5.jpg";
import personal06 from "../../assets/images/personal/6.jpg";

//creating array of images for image portfolio
const images = [
  personal01,
  personal02,
  personal03,
  personal04,
  personal05,
  personal06,
];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: personal01,
          title: "Shifting Perspective",
          subject: "Studio",
          author: "Thomas Brewer",
          date: "13th August, 2019",
        },
        {
          image: personal02,
          title: "Colors Magazine",
          subject: "Web Design",
          author: "Thomas Brewer",
          date: "13th August, 2019",
        },
        {
          image: personal03,
          title: "Spa Cosmetics",
          subject: "Developing",
          author: "Thomas Brewer",
          date: "13th August, 2019",
        },
        {
          image: personal04,
          title: "Riser Coffee",
          subject: "Branding",
          author: "Thomas Brewer",
          date: "13th August, 2019",
        },
        {
          image: personal05,
          title: "Dancing With My Self",
          subject: "Photography",
          author: "Thomas Brewer",
          date: "13th August, 2019",
        },
        {
          image: personal06,
          title: "New Trends in SEO",
          subject: "Business",
          author: "Thomas Brewer",
          date: "13th August, 2019",
        },
      ],
      processes: [
        {
          id: 1,
          title: "Discuss The Project",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          link: "#",
        },
        {
          id: 2,
          title: "Develop & Elaborate",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          link: "#",
        },
        {
          id: 3,
          title: "Final Approvement",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          link: "#",
        },
      ],
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col md="6">
                <div className="section-title">
                  <h4 className="title">About Me</h4>
                  <h6 className="text-primary mb-4">
                    I'm Passionate Web Designer
                  </h6>
                  <p className="text-muted mb-0">
                    Start working with landrick that can provide everything you
                    need to generate awareness, drive traffic, connect. Dummy
                    text is also used to demonstrate the appearance of different
                    typefaces and layouts, and in general the content of dummy
                    text is nonsensical. Due to its widespread use as filler
                    text for layouts, non-readability is of great importance:
                    human perception is tuned to recognize certain patterns and
                    repetitions in texts.
                  </p>
                  <div className="mt-4">
                    <Link to="#contact" className="btn btn-primary mouse-down">
                      <i className="uil uil-phone"></i> Contact Me
                    </Link>
                  </div>
                </div>
              </Col>

              <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ms-md-4">
                  <div className="progress-box">
                    <h6 className="title text-muted">WordPress</h6>
                    <Progress
                      value={84}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        84%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">PHP / MYSQL</h6>
                    <Progress
                      value={75}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        75%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">Angular / JavaScript</h6>
                    <Progress
                      value={79}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        79%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">HTML</h6>
                    <Progress
                      value={95}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        95%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">CSS</h6>
                    <Progress
                      value={93}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        93%
                      </div>
                    </Progress>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60" id="portfolio">
            {/* section title */}
            <SectionTitle
              isLeft={true}
              title="My Work & Portfolio"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {this.state.projects.map((project, key) => (
                <Col lg="4" md="6" key={key} className="mt-4 pt-2">
                  <Card className="border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                    <CardBody className="p-0">
                      <img
                        src={project.image}
                        className="img-fluid"
                        alt="work"
                      />
                      <div className="overlay-work bg-dark"></div>
                      <div className="content">
                        <h5 className="mb-0">
                          <Link
                            to="page-work-detail"
                            className="text-white title"
                          >
                            {project.title}
                          </Link>
                        </h5>
                        <h6 className="text-light tag mb-0">
                          {project.subject}
                        </h6>
                      </div>
                      <div className="icons text-center">
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({ isOpen: true, photoIndex: key })
                          }
                          className="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"
                        >
                          <i>
                            <FeatherIcon
                              icon="camera"
                              className="fea icon-sm"
                            />
                          </i>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
              <Col className="mt-4 pt-2">
                <Link to="page-work-modern" className="btn btn-outline-primary">
                  See More <i className="mdi mdi-chevron-right"></i>
                </Link>
              </Col>
            </Row>
            {/* lightbox for portfolio images */}
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                imagePadding={100}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </Container>

          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              isLeft={true}
              title="Work Process"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* process box */}
              <ProcessBox processes={this.state.processes} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
