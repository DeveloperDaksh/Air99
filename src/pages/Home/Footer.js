// React basic and bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer footer-bar">
                    <Container className="text-center">
                        <Row className="justify-content-center">
                            <Col sm={8}>
                                <div className="text-sm-start">
                                    <p className="mb-0">© {new Date().getFullYear()} Landrick. Develop with <i className="mdi mdi-heart text-danger"></i> by <a href="https://themesbrand.com/" rel="noreferrer" target="_blank" className="text-reset">ThemesBrand</a>.</p>
                                </div>
                            </Col>

                            <Col sm={4} className="mt-4 mt-sm-0">
                                <ul className="list-unstyled social-icon text-sm-right social mb-0">
                                    <li className="list-inline-item me-1"><a href="https://dribbble.com/Themesbrand" rel="noreferrer" className="rounded"><i className="uil uil-dribbble"></i></a></li>
                                    <li className="list-inline-item me-1"><a href="https://www.facebook.com/themesbrand/" rel="noreferrer" target="_blank" className="rounded"><i className="mdi mdi-facebook" title="facebook"></i></a></li>
                                    <li className="list-inline-item me-1"><a href="https://www.instagram.com/themesbrand/" rel="noreferrer" target="_blank" className="rounded"><i className="mdi mdi-instagram" title="instagram"></i></a></li>
                                    <li className="list-inline-item me-1"><a href="https://twitter.com/ThemesBrand" rel="noreferrer" target="_blank" className="rounded"><i className="mdi mdi-twitter" title="twitter"></i></a></li>
                                    <li className="list-inline-item me-1"><a href="mailto:support@themesbrand.com" rel="noreferrer" className="rounded"><i className="mdi mdi-email-outline" title="email"></i></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </React.Fragment>
        );
    }
}
export default Footer;
