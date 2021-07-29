// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Card, CardBody } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

import work1 from '../../../assets/images/work/1.jpg';
import work2 from '../../../assets/images/work/2.jpg';
import work3 from '../../../assets/images/work/3.jpg';
import work4 from '../../../assets/images/work/4.jpg';
import work5 from '../../../assets/images/work/5.jpg';
import work6 from '../../../assets/images/work/6.jpg';
import work7 from '../../../assets/images/work/7.jpg';
import work8 from '../../../assets/images/work/8.jpg';
import work9 from '../../../assets/images/work/9.jpg';
import work10 from '../../../assets/images/work/10.jpg';
import work11 from '../../../assets/images/work/11.jpg';
import work12 from '../../../assets/images/work/12.jpg';

class PageWork extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems: [
                //id must required
                { id: 1, name: "Landrick", link: "/index" },
                { id: 2, name: "Page", link: "#" },
                { id: 3, name: "Work", link: "#" },
                { id: 4, name: "Works" },
            ],
            works: [
                { image: work1, title: "Shifting Perspective", author: "Thomas Brewer", date: "13th August, 2019", category: "Designing" },
                { image: work2, title: "Colors Magazine", author: "Thomas Brewer", date: "13th August, 2019", category: "Photography" },
                { image: work3, title: "Spa Cosmetics", author: "Thomas Brewer", date: "13th August, 2019", category: "Designing" },
                { image: work4, title: "Riser Coffee", author: "Thomas Brewer", date: "13th August, 2019", category: "Designing" },
                { image: work5, title: "Dancing With My Self", author: "Thomas Brewer", date: "13th August, 2019", category: "Branding" },
                { image: work6, title: "New Trends in SEO", author: "Thomas Brewer", date: "13th August, 2019", category: "Development" },
                { image: work7, title: "Spa Cosmetics", author: "Thomas Brewer", date: "13th August, 2019", category: "Branding" },
                { image: work8, title: "Riser Coffee", author: "Thomas Brewer", date: "13th August, 2019", category: "Development" },
                { image: work9, title: "Riser Coffee", author: "Thomas Brewer", date: "13th August, 2019", category: "Development" },
                { image: work10, title: "Riser Coffee", author: "Thomas Brewer", date: "13th August, 2019", category: "Development" },
                { image: work11, title: "Riser Coffee", author: "Thomas Brewer", date: "13th August, 2019", category: "Development" },
                { image: work12, title: "Riser Coffee", author: "Thomas Brewer", date: "13th August, 2019", category: "Development" },
            ],
            displayCategory: "All",
        }
        this.setCategory.bind(this);
    }

    setCategory(category) {
        this.setState({
            displayCategory: category
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
        var topnav = document.getElementById('topnav');
        if (top > 80 && topnav) {
            topnav.classList.add('nav-sticky');
        }
        else if (topnav) {
            topnav.classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb title="Work Modern" pathItems={this.state.pathItems} />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <Container>
                        <div className="row justify-content-center">
                            <div className="col-12 filters-group-wrap">
                                <div className="filters-group">
                                    <ul className="container-filter list-inline mb-0 filter-options text-center" id="filter">
                                        <li onClick={() => this.setCategory("All")} className={this.state.displayCategory === "All" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"}>All</li>{' '}
                                        <li onClick={() => this.setCategory("Branding")} className={this.state.displayCategory === "Branding" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"} >Branding</li>{' '}
                                        <li onClick={() => this.setCategory("Designing")} className={this.state.displayCategory === "Designing" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"}>Designing</li>{' '}
                                        <li onClick={() => this.setCategory("Photography")} className={this.state.displayCategory === "Photography" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"} >Photography</li>{' '}
                                        <li onClick={() => this.setCategory("Development")} className={this.state.displayCategory === "Development" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"} >Development</li>{' '}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Row id="grid">
                            {this.state.works
                                .filter(
                                    ({ category }) =>
                                        this.state.displayCategory === category ||
                                        this.state.displayCategory === "All"
                                )
                                .map((work, key) => (
                                    <Col lg="4" md="6" xs="12" key={key} className="mt-4 pt-2 picture-item">
                                        <Card className="work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                                            <CardBody className="p-0">
                                                <img src={work.image} className="img-fluid rounded" alt="work" />
                                                <div className="overlay-work bg-dark"></div>
                                                <div className="content">
                                                    <Link to="page-work-detail" className="title text-white d-block fw-bold">{work.title}</Link>
                                                    <small className="text-light">{work.category}</small>
                                                </div>
                                                <div className="client">
                                                    <small className="text-light user d-block"><i className="uil uil-user"></i> {work.author}</small>
                                                    <small className="text-light date"><i className="uil uil-calendar-alt"></i> {work.date}</small>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}

                        </Row>
                        <Row>
                            <Col xs="12" className="mt-4 pt-2">
                                <Pagination listClassName="justify-content-center mb-0">
                                    <PaginationItem><PaginationLink to="#">Prev</PaginationLink></PaginationItem>
                                    <PaginationItem active><PaginationLink to="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#">Next</PaginationLink></PaginationItem>
                                </Pagination>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageWork;
