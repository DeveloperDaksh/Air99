import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container , Row} from "reactstrap";

//import images
import bigLaunch from "../../assets/images/illustrator/big-launch.svg";
import maintenance from "../../assets/images/illustrator/maintenance.svg";

export default class Feature extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col md={6}>
              <div className="me-lg-5">
                <img src={bigLaunch} className="img-fluid" alt="" />
              </div>
            </Col>

            <Col md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title">
                <h4 className="title mb-4">
                  We help you increase <br /> sales by improving SEO
                </h4>
                <p className="text-muted">
                  You can combine all the Landrick templates into a single one,
                  you can take a component from the Application theme and use it
                  in the Website.
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Create your own skin to match your brand
                  </li>
                </ul>
                <Link to="#" className="mt-3 h6 text-primary">
                  See more solutions <i className="mdi mdi-chevron-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col md={6} className="order-1 order-md-2">
              <div className="ms-lg-5">
                <img src={maintenance} className="img-fluid" alt="" />
              </div>
            </Col>

            <Col md={6}  className="order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title">
                <h4 className="title mb-4">
                  Advantages of SEO & <br /> Marketing strategy
                </h4>
                <p className="text-muted">
                  You can combine all the Landrick templates into a single one,
                  you can take a component from the Application theme and use it
                  in the Website.
                </p>
                <p className="text-muted">
                  Using Landrick to build your site means never worrying about
                  designing another page or cross browser compatibility. Our
                  ever-growing library of components and pre-designed layouts
                  will make your life easier.
                </p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-pills btn-soft-primary">
                    Know more
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
