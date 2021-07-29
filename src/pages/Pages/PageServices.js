// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import Feature from "../../components/Shared/Feature";

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";


import work1 from "../../assets/images/work/1.jpg";
import work2 from "../../assets/images/work/2.jpg";
import work3 from "../../assets/images/work/3.jpg";
import work4 from "../../assets/images/work/4.jpg";


class PageServices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Landrick", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "Services" },
            ],
            reviews : [
                { id : 1, img : img1, name : "Thomas Israel", post : "C.E.O", desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", rating : 5 },
                { id : 2, img : img2, name : "Barbara McIntosh", post : "M.D", desc : "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.", rating : 4 },
                { id : 3, img : img3, name : "Carl Oliver", post : "P.A", desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.", rating : 3 },
                { id : 4, img : img4, name : "Christa Smith", post : "Manager", desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.", rating : 5 },
                { id : 5, img : img5, name : "Dean Tolle", post : "Developer", desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required.", rating : 5 },
                { id : 6, img : img6, name : "ill Webb", post : "Designer", desc : "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.", rating : 4 },
            ],
            features : [
                { id : 1, icon : 'uil uil-edit-alt h1 text-primary', title : "Design & Development", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
                { id : 2, icon : 'uil uil-vector-square h1 text-primary', title : "Management & Marketing", description : "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word." },
                { id : 3, icon : 'uil uil-file-search-alt h1 text-primary', title : "Stratagy & Research", description : "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today." },
                { id : 4, icon : 'uil uil-airplay h1 text-primary', title : "Easy To Use", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
                { id : 5, icon : 'uil uil-calendar-alt h1 text-primary', title : "Daily Reports", description : "Allegedly, a Latin scholar established the origin of the text by compiling unusual established word." },
                { id : 6, icon : 'uil uil-clock h1 text-primary', title : "Real Time Zone", description : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today." },
            ],
            works : [
                { imgUrl : work1, title : "Shifting Perspective", subtitle : "Studio", author : "Calvin Carlo", date : "13th August, 2019" },
                { imgUrl : work2, title : "Colors Magazine", subtitle : "Web Design", author : "Calvin Carlo", date : "13th August, 2019" },
                { imgUrl : work3, title : "Spa Cosmetics", subtitle : "Developing", author : "Calvin Carlo", date : "13th August, 2019" },
                { imgUrl : work4, title : "Riser Coffee", subtitle : "Branding", author : "Calvin Carlo", date : "13th August, 2019" },
            ]
        }
    }

      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }


    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
     }

    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb
                    title="Services"
                    pathItems = {this.state.pathItems}
                />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <Container>
                        {/* feature box */}
                        <Feature featureArray={this.state.features}/>
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* Render Section Title */}
                        <SectionTitle title="Client Reviews" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                        {/* clients slider */}
                        <ReviewsSlider reviews={this.state.reviews} colClass="mt-4"/>
                    </Container>
                </section>

                <section className="section bg-light">
                    <Container>
                    {/* Render Section Title */}
                    <SectionTitle title="Our Latest Projects" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {
                                this.state.works.map((work, key) =>
                                    <Col key={key} md={6} xs={12} className="mt-4 pt-2">
                                        <Card className="work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                                            <CardBody className=" p-0">
                                                <img src={work.imgUrl} className="img-fluid rounded" alt="work"/>
                                                <div className="overlay-work bg-dark"></div>
                                                <div className="content">
                                                    <Link to="page-work-detail" className="title text-white d-block fw-bold">{work.title}</Link>
                                                    <small className="text-light">{work.subtitle}</small>
                                                </div>
                                                <div className="client">
                                                    <small className="text-light user d-block"><i className="mdi mdi-account"></i> {work.author}</small>
                                                    <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {work.date}</small>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">See everything about your employee at one place.</h4>
                                    <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary mt-2 me-2">Get Started Now</Link>{" "}
                                        <Link to="#" className="btn btn-outline-primary mt-2">Free Trial</Link>
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
export default PageServices;
