import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Button,
  FormGroup,
} from "reactstrap";

//Import Images
import imgbg from "../../assets/images/app/classic05.png";

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMsg: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-primary bg-gradient">
          <div className="bg-overlay bg-overlay-white"></div>
          <Container className="position-relative">
            <Row>
              <Col lg="5" md="6">
                <div className="app-subscribe text-center text-md-start">
                  <img src={imgbg} className="img-fluid" alt="" />
                </div>
              </Col>

              <Col lg="7" md="6" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title text-center text-md-start">
                  <h1 className="title text-white title-dark mb-2">
                    Subscribe to our weekly news
                  </h1>
                  <p className="text-light para-dark">
                    Sign up and receive the latest tips via email.
                  </p>
                </div>
                <div className="subcribe-form mt-4 pt-2">
                  <Alert
                    color="primary"
                    isOpen={this.state.successMsg}
                    toggle={() => {
                      this.setState({ successMsg: !this.state.successMsg });
                    }}
                  >
                    Data sended successfully.
                  </Alert>
                  <Form onSubmit={this.handleSubmit} className="ms-0">
                    <FormGroup className="mb-0">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="rounded-pill"
                        placeholder="E-mail :"
                        required
                      />
                      <Button
                        type="submit"
                        color="primary"
                        className="btn-pills"
                      >
                        Subscribe
                      </Button>
                    </FormGroup>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Subscribe;
