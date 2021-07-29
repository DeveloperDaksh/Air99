import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

class PageBreadcrumb extends Component {
  render() {
    const length = this.props.pathItems.length;
    return (
      <React.Fragment>
        <section className="bg-half bg-light d-table w-100">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12" className="text-center">
                <div className="page-next-level">
                  {this.props.title ? (
                    <h4 className="title"> {this.props.title}</h4>
                  ) : null}
                  {this.props.children ? this.props.children : null}
                  <div className="page-next">
                    <nav className="d-inline-block">
                      <Breadcrumb
                        aria-label="breadcrumb"
                        listClassName="bg-white rounded shadow mb-0"
                      >
                        {this.props.pathItems.map((item, key) =>
                          item.id !== length ? (
                            <BreadcrumbItem key={key}>
                              <Link
                                to={item.link}
                                className="text-uppercase fw-bold text-dark me-1"
                              >
                                {item.name}
                              </Link>
                            </BreadcrumbItem>
                          ) : (
                            <BreadcrumbItem
                              key={key}
                              active
                              aria-current="page"
                            >
                              {item.name}
                            </BreadcrumbItem>
                          )
                        )}
                      </Breadcrumb>
                    </nav>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageBreadcrumb;
