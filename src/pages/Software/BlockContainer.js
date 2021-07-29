import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

class BlockContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Card className="rounded bg-light shadow border-0">
            <CardBody>
              <Row className="align-items-center">
                <Col sm="7">
                  <div className="text-sm-start">
                    <h5 className="mb-0">
                      Start building beautiful block-based websites.
                    </h5>
                  </div>
                </Col>

                <Col sm="5" className="mt-4 mt-sm-0">
                  <div className="text-sm-end">
                    <Link to="" className="btn btn-outline-primary">
                      <i className="mdi mdi-file-document-outline"></i> Start
                      Now{" "}
                    </Link>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

export default BlockContainer;
