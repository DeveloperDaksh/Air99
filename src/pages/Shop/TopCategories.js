import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import fashion from "../../assets/images/shop/categories/fashion.jpg";
import sports from "../../assets/images/shop/categories/sports.jpg";
import music from "../../assets/images/shop/categories/music.jpg";
import furniture from "../../assets/images/shop/categories/furniture.jpg";
import electronics from "../../assets/images/shop/categories/electronics.jpg";
import mobile from "../../assets/images/shop/categories/mobile.jpg";

class TopCategories extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row>
            <Col xs={12}>
              <h5 className="mb-0">Top Categories</h5>
            </Col>
          </Row>

          <Row>
            <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
              <Card className="explore-feature border-0 rounded text-center bg-white">
                <CardBody>
                  <div className="icon rounded-circle shadow-lg d-inline-block h2">
                    <img
                      src={fashion}
                      className="avatar avatar-small rounded-circle shadow-md"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <h6 className="mb-0">
                      <Link to="#" className="title text-dark">
                        Fashion
                      </Link>
                    </h6>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
              <Card className="explore-feature border-0 rounded text-center bg-white">
                <CardBody>
                  <div className="icon rounded-circle shadow-lg d-inline-block h2">
                    <img
                      src={sports}
                      className="avatar avatar-small rounded-circle shadow-md"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <h6 className="mb-0">
                      <Link to="#" className="title text-dark">
                        Sports
                      </Link>
                    </h6>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
              <Card className="explore-feature border-0 rounded text-center bg-white">
                <CardBody>
                  <div className="icon rounded-circle shadow-lg d-inline-block h2">
                    <img
                      src={music}
                      className="avatar avatar-small rounded-circle shadow-md"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <h6 className="mb-0">
                      <Link to="#" className="title text-dark">
                        Music
                      </Link>
                    </h6>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
              <Card className="explore-feature border-0 rounded text-center bg-white">
                <CardBody>
                  <div className="icon rounded-circle shadow-lg d-inline-block h2">
                    <img
                      src={furniture}
                      className="avatar avatar-small rounded-circle shadow-md"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <h6 className="mb-0">
                      <Link to="#" className="title text-dark">
                        Furniture
                      </Link>
                    </h6>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
              <Card className="explore-feature border-0 rounded text-center bg-white">
                <CardBody>
                  <div className="icon rounded-circle shadow-lg d-inline-block h2">
                    <img
                      src={electronics}
                      className="avatar avatar-small rounded-circle shadow-md"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <h6 className="mb-0">
                      <Link to="#" className="title text-dark">
                        Electronics
                      </Link>
                    </h6>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
              <Card className="explore-feature border-0 rounded text-center bg-white">
                <CardBody>
                  <div className="icon rounded-circle shadow-lg d-inline-block h2">
                    <img
                      src={mobile}
                      className="avatar avatar-small rounded-circle shadow-md"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <h6 className="mb-0">
                      <Link to="#" className="title text-dark">
                        Motors
                      </Link>
                    </h6>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default TopCategories;
