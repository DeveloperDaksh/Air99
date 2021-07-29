import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Form, FormGroup, Input, Alert } from "reactstrap";

//React Typist
import Typist from 'react-typist';

//Import Images
import home from "../../assets/images/job/home.png";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 pb-0 bg-light d-table w-100">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10">
                                <div className="title-heading text-center mt-4 mt-md-5 pt-md-5">
                                    <Alert color="light" className="alert-pills">
                                        <Badge pill className="rounded-pill bg-success me-1">Start</Badge>
                                        <span className="content"> Fill job <Link to="page-job-apply" className="text-primary">application</Link> now !</span>
                                    </Alert>
                                    <h1 className="heading mb-3">Job Vacancies for{" "}
                                        <Typist>
                                            <span className="element text-primary">Freelancer</span>
                                            <Typist.Backspace count={15} delay={400} />
                                            <span className="element text-primary">Developer</span>
                                            <Typist.Backspace count={20} delay={400} />
                                            <span className="element text-primary">Designer</span>
                                            <Typist.Backspace count={17} delay={400} />
                                            <span className="element text-primary">UX Developer</span>
                                            <Typist.Backspace count={15} delay={500} />
                                            <span className="element text-primary">ios Developer</span>
                                            <Typist.Backspace count={20} delay={500} />
                                        </Typist>
                                    </h1>
                                    <p className="para-desc mx-auto text-muted">Huge community of designers and developers ready for your project.</p>
                                    <Form className="rounded p-4 mt-4 bg-white">
                                        <Row className="text-start">
                                            <Col lg="5" md="4">
                                                <FormGroup className="mb-0">
                                                    <Input type="text" className="form-control" required placeholder="Keywords" />
                                                </FormGroup>
                                            </Col>

                                            <Col lg="7" md="8">
                                                <Row className="align-items-center">
                                                    <Col md="4" className="mt-4 mt-sm-0">
                                                        <div className="mb-0">
                                                            <select className="form-control custom-select">
                                                                <option defaultValue="">Location</option>
                                                                <option value="AF">Afghanistan</option>
                                                                <option value="AX">&Aring;land Islands</option>
                                                                <option value="AL">Albania</option>
                                                                <option value="DZ">Algeria</option>
                                                                <option value="AS">American Samoa</option>
                                                                <option value="AD">Andorra</option>
                                                                <option value="AO">Angola</option>
                                                                <option value="AI">Anguilla</option>
                                                                <option value="AQ">Antarctica</option>
                                                            </select>
                                                        </div>
                                                    </Col>

                                                    <Col md="4" className="mt-4 mt-sm-0">
                                                        <FormGroup className="mb-0">
                                                            <select className="form-control custom-select">
                                                                <option defaultValue="">Job Types</option>
                                                                <option value="4">Accounting</option>
                                                                <option value="1">IT & Software</option>
                                                                <option value="3">Marketing</option>
                                                                <option value="5">Banking</option>
                                                            </select>
                                                        </FormGroup>
                                                    </Col>

                                                    <Col md="4" className="mt-4 mt-sm-0">
                                                        <div className="d-grid">
                                                            <input type="submit" id="search" name="search" className="searchbtn btn btn-primary" value="Search" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <p className="text-muted mb-0 mt-4"><span className="text-dark">Keywords :</span> Web Developer, Web Designer, Php Developer, IOS Developer, etc...</p>
                                </div>
                            </Col>

                            <Col xs="12" className="mt-4 pt-3">
                                <img src={home} className="img-fluid" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;