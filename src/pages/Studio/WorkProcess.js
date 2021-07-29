// React Basic and Bootstrap
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Button,
  Input,
  Form,
  FormGroup
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ProcessBox from "../../components/Shared/ProcessBox";

// Import images
import img1 from "../../assets/images/work/1.jpg";
import img2 from "../../assets/images/work/2.jpg";
import img3 from "../../assets/images/work/3.jpg";
import img4 from "../../assets/images/work/4.jpg";
import img5 from "../../assets/images/work/5.jpg";
import img6 from "../../assets/images/work/6.jpg";

class WorkProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      works: [
        { imageUrl: img1, title: "Iphone mockup", subtitle: "Branding" },
        { imageUrl: img2, title: "Mockup Collection", subtitle: "Mockup" },
        { imageUrl: img3, title: "Abstract images", subtitle: "Abstract" },
        { imageUrl: img4, title: "Yellow bg with Books", subtitle: "Books" },
        { imageUrl: img5, title: "Company V-card", subtitle: "V-card" },
        {
          imageUrl: img6,
          title: "Mockup box with paints",
          subtitle: "Photography",
        },
      ],
      isOpen: false,
    };
    this.openModal.bind(this);
  }

  openModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Work Process"
              desc="that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row>
              {/* process box */}
              <ProcessBox processes={this.state.processes} />
            </Row>
          </Container>

          <Container className="mt-100 pt-50">
            {/* section title */}
            <SectionTitle
              title="Our Latest Projects"
              desc="that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row>
              {this.state.works.map((work, key) => (
                <Col lg="6" md="6" key={key} className="mt-4 pt-2">
                  <Card className="border-0 work-container work-classic">
                    <CardBody className="p-0">
                      <Link to="page-work-detail">
                        <img
                          src={work.imageUrl}
                          className="img-fluid rounded work-image"
                          alt="work"
                        />
                      </Link>
                      <div className="content pt-3">
                        <h5 className="mb-0">
                          <Link
                            to="page-work-detail"
                            className="text-dark title"
                          >
                            {work.title}
                          </Link>
                        </h5>
                        <h6 className="text-muted tag mb-0">{work.subtitle}</h6>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>

            <Row className="justify-content-center">
              <Col xs="12" className="text-center mt-4 pt-2">
                <Link to="page-work-modern" className="btn btn-primary">
                  See More <i className="mdi mdi-arrow-right"></i>
                </Link>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs="12" className="text-center">
                <div className="section-title">
                  <h4 className="title mb-4">
                    See everything about your workplace
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>

                  <div className="mt-3">
                    <a
                      href="https://1.envato.market/landrickreactjs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-2 me-2"
                    >
                      Buy Now{" "}
                      <span className="badge rounded-pill bg-danger ms-2">v3.1</span>
                    </a>
                    <Link
                      to="#"
                      className="btn btn-outline-primary mt-2 ms-1"
                      onClick={this.openModal}
                    >
                      <i className="mdi mdi-account-check-outline"></i> Free
                      Trial
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Modal isOpen={this.state.isOpen} role="dialog" centered>
          <ModalHeader toggle={this.openModal}>15 Days Free Trail</ModalHeader>
          <ModalBody>
            <div className="bg-white p-3 rounded box-shadow">
              <Form>
                <Row>
                  <Col lg={12}>
                    <FormGroup className="position-relative">
                      <Label className="form-label">
                        Name : <span className="text-danger">*</span>
                      </Label>
                      <i>
                        <FeatherIcon
                          icon="user"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        type="text"
                        className="form-control ps-5"
                        placeholder="Name"
                        name="name"
                        required=""
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={12}>
                    <FormGroup className="position-relative">
                      <Label className="form-label">
                        Email : <span className="text-danger">*</span>
                      </Label>
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        type="email"
                        className="form-control ps-5"
                        placeholder="Email"
                        name="email"
                        required=""
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={12}>
                    <FormGroup className="position-relative">
                      <Label className="form-label">
                        Password : <span className="text-danger">*</span>
                      </Label>
                      <i>
                        <FeatherIcon
                          icon="lock"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        type="password"
                        className="form-control ps-5"
                        placeholder="Password"
                        required=""
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={12} className="mt-2 mb-0">
                    <Button color="primary" block>
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default WorkProcess;
