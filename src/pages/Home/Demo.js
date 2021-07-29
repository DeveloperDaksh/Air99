// React basic and bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// Import images
//Landings
import index from "../../assets/images/demo/index.jpg";
import saas from "../../assets/images/demo/saas.jpg";
import agency from "../../assets/images/demo/agency.jpg";
import apps from "../../assets/images/demo/apps.jpg";
import studio from "../../assets/images/demo/studio.jpg";
import business from "../../assets/images/demo/business.jpg";
import modernBusiness from "../../assets/images/demo/modern-business.jpg";
import hotel from "../../assets/images/demo/hotel.jpg";
import marketing from "../../assets/images/demo/marketing.jpg";
import enterprise from "../../assets/images/demo/enterprise.jpg";
import coworking from "../../assets/images/demo/coworking.jpg";
import classicapp from "../../assets/images/demo/classic-app.jpg";
import classicsaas from "../../assets/images/demo/classic-saas.jpg";
import carride from "../../assets/images/demo/car-ride.jpg";
import hosting from "../../assets/images/demo/hosting.jpg";
import event from "../../assets/images/demo/event.jpg";
import course from "../../assets/images/demo/course.jpg";
import personal from "../../assets/images/demo/personal.jpg";
import product from "../../assets/images/demo/product.jpg";
import portfolio from "../../assets/images/demo/portfolio.jpg";
import servicesIndex from "../../assets/images/demo/services.jpg";
import payments from "../../assets/images/demo/payments.jpg";
import cryptocurrency from "../../assets/images/demo/cryptocurrency.jpg";
import software from "../../assets/images/demo/software.jpg";
import job from "../../assets/images/demo/job.jpg";
import customer from "../../assets/images/demo/customer.jpg";
import onepage from "../../assets/images/demo/onepage.jpg";
import developer from "../../assets/images/demo/developer.jpg";
import seo from "../../assets/images/demo/seo.jpg";
import construction from "../../assets/images/demo/construction.jpg";
import real from "../../assets/images/demo/real.jpg";
import hospital from "../../assets/images/demo/hospital.jpg";
import integration from "../../assets/images/demo/integration.jpg";
import lfour from "../../assets/images/demo/lfour.jpg";
import socialMarketing from "../../assets/images/home/demo/social-marketing.jpg";
import digitalAgency from "../../assets/images/home/demo/digital-agency.jpg";
import onlineLearning from "../../assets/images/home/demo/online-learning.jpg";
import itsolution from "../../assets/images/demo/it.jpg";
import corporate from "../../assets/images/demo/corporate.jpg";
import ebook from "../../assets/images/demo/ebook.jpg";
import forums from "../../assets/images/demo/forums.jpg";
import lone from "../../assets/images/demo/lone.jpg";
import ltwo from "../../assets/images/demo/ltwo.jpg";
import lthree from "../../assets/images/demo/lthree.jpg";
import task from "../../assets/images/demo/task.jpg";
import email from "../../assets/images/demo/email.jpg";
import travel from "../../assets/images/demo/travel.jpg";
import blog from "../../assets/images/demo/blog.jpg";
import insurance from "../../assets/images/demo/insurance.jpg";
import shop from "../../assets/images/demo/shop.jpg";
import finance from '../../assets/images/demo/finance.jpg';
import ItSolution from '../../assets/images/demo/it-2.jpg';
import video from '../../assets/images/demo/video.jpg';
import freelancer from '../../assets/images/demo/freelancer.jpg';
import blockchain from '../../assets/images/demo/blockchain.jpg';
import crypto2 from '../../assets/images/demo/crypto-2.jpg';
import about2 from '../../assets/images/inner/about2.jpg';
import history from '../../assets/images/inner/history.jpg';

//Pages - Profile
import profile from '../../assets/images/inner/profile.jpg';
import members from '../../assets/images/inner/ac-members.jpg';
import work from '../../assets/images/inner/ac-works.jpg';
import messages from '../../assets/images/inner/ac-messages.jpg';
import payment from '../../assets/images/inner/ac-payments.jpg';
import setting from '../../assets/images/inner/ac-setting.jpg';
import invoice from '../../assets/images/inner/ac-invoice.jpg';

//Pages - Company
import about from "../../assets/images/home/inner/about.jpg";
import services from "../../assets/images/home/inner/services.jpg";
import pricing from "../../assets/images/home/inner/pricing.jpg";
import team from "../../assets/images/home/inner/team.jpg";

//Pages - Help Center
import helpcenter from "../../assets/images/home/inner/helpcenter.jpg";
import faqs from "../../assets/images/home/inner/faqs.jpg";
import guides from "../../assets/images/home/inner/guides.jpg";
import supportForm from "../../assets/images/home/inner/support-form.jpg";

//Pages- Shop
import products from "../../assets/images/demo/shop.jpg";
import productgrid from "../../assets/images/inner/products.jpg";
import productlist from "../../assets/images/inner/product-list.jpg";
import singleProduct from "../../assets/images/inner/single-product.jpg";
import cart from "../../assets/images/home/inner/cart.jpg";
import checkouts from "../../assets/images/home/inner/checkouts.jpg";
import buyerProfile from "../../assets/images/home/inner/buyer-profile.jpg";

//Pages - Email
import emailConfirmation from "../../assets/images/home/inner/email-confirmation.jpg";
import emailAlert from "../../assets/images/home/inner/email-alert.jpg";
import emailInvoice from "../../assets/images/home/inner/email-invoice.jpg";

//Pages - Job
import jobs from "../../assets/images/home/inner/jobs.jpg";
import jobDetails from "../../assets/images/home/inner/job-details.jpg";
import jobApply from "../../assets/images/home/inner/job-apply.jpg";
import companyProfile from "../../assets/images/home/inner/company-profile.jpg";
import candidateProfile from "../../assets/images/home/inner/candidate-profile.jpg";

//Pages - Blog
import blogGrid from "../../assets/images/home/inner/blog-grid.jpg";
import blogList from "../../assets/images/home/inner/blog-list.jpg";
import blogDetails from "../../assets/images/home/inner/blog-details.jpg";

//Pages - Portfolio
import classic from "../../assets/images/home/inner/classic.jpg";
import modern from "../../assets/images/home/inner/modern.jpg";
import grid from "../../assets/images/home/inner/grid.jpg";
import masonry from "../../assets/images/home/inner/masonry.jpg";
import workDetail from "../../assets/images/home/inner/work-detail.jpg";

//Pages - Contact
import contactOne from "../../assets/images/home/inner/contact-one.jpg";
import contactTwo from "../../assets/images/home/inner/contact-two.jpg";
import contactThree from "../../assets/images/home/inner/contact-three.jpg";
import contactDetails from "../../assets/images/home/inner/contact-details.jpg";

//Pages - Authentication
import login from "../../assets/images/home/inner/login.jpg";
import signup from "../../assets/images/home/inner/signup.jpg";
import recoverAc from "../../assets/images/home/inner/recover-ac.jpg";

//Pages - Special
import comingsoon from "../../assets/images/home/inner/comingsoon.jpg";
import maintenance from "../../assets/images/home/inner/maintenance.jpg";
import error from "../../assets/images/home/inner/error.jpg";

//Pages - Docs
import components from "../../assets/images/home/inner/components.jpg";
import documentation from "../../assets/images/home/inner/documentation.jpg";
import changelog from "../../assets/images/home/inner/changelog.jpg";

class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section mt-md-5 mt-lg-4" id="demos">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title mb-4 mb-md-5 text-center">
                  <h5 className="title text-uppercase fw-bold">
                    New Demos
                  </h5>
                </div>
              </Col>
            </Row>
            <div className="bg-light shadow rounded px-4 py-5 p-md-5">
              <Row>
                <Col md={6} xs={12}>
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <div className="ribbon ribbon-right ribbon-danger overflow-hidden"><span className="text-center d-block shadow small h6">New</span></div>
                      <Link to="/index-finance" target="_blank">
                        <img src={finance} className="img-fluid rounded" alt="demo-img" />
                      </Link>
                    </div>
                    <div className="mt-4">
                      <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Finance</h6>
                    </div>
                  </div>
                </Col>

                <div className="col-md-6 col-12 mt-5 mt-sm-0">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <div className="ribbon ribbon-right ribbon-danger overflow-hidden"><span className="text-center d-block shadow small h6">New</span></div>
                      <Link to="/index-it-solution-two" target="_blank">
                        <img src={ItSolution} className="img-fluid rounded" alt="demo-img" />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">IT Solutions Two</h6>
                  </div>
                </div>

                <div className="col-md-6 col-12 mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <div className="ribbon ribbon-right ribbon-danger overflow-hidden"><span className="text-center d-block shadow small h6">New</span></div>
                      <Link to="/index-videocall" target="_blank">
                        <img src={video} className="img-fluid rounded" alt="demo-img" />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Video Conference</h6>
                  </div>
                </div>

                <div className="col-md-6 col-12 mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <div className="ribbon ribbon-right ribbon-danger overflow-hidden"><span className="text-center d-block shadow small h6">New</span></div>
                      <Link to="/index-freelancer" target="_blank">
                        <img src={freelancer} className="img-fluid rounded" alt="demo-img" />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Freelancer</h6>
                  </div>
                </div>

                <div className="col-md-6 col-12 mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <div className="ribbon ribbon-right ribbon-danger overflow-hidden"><span className="text-center d-block shadow small h6">New</span></div>
                      <Link to="/index-blockchain" target="_blank">
                        <img src={blockchain} className="img-fluid rounded" alt="demo-img" />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Blockchain</h6>
                  </div>
                </div>

                <div className="col-md-6 col-12 mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <div className="ribbon ribbon-right ribbon-danger overflow-hidden"><span className="text-center d-block shadow small h6">New</span></div>
                      <Link to="/index-crypto-two" target="_blank">
                        <img src={crypto2} className="img-fluid rounded" alt="demo-img" />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Cryptocurrency Two</h6>
                  </div>
                </div>
              </Row>
            </div>
          </Container>
          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title mb-4 mb-md-5 text-center">
                  <h4 className="title text-uppercase fw-bold">Template Demos</h4>
                </div>
              </Col>
            </Row>
            <div className="bg-light shadow rounded px-4 py-5 p-md-5">
              <Row>
                <Col md={6} xs={12}>
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index" target="_blank">
                        <img
                          src={index}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Index</h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5 mt-sm-0">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-saas" target="_blank">
                        <img
                          src={saas}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Saas</h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-classic-saas" target="_blank">
                        <img
                          src={classicsaas}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Classic Saas
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-agency" target="_blank">
                        <img
                          src={agency}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Agency</h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-apps" target="_blank">
                        <img
                          src={apps}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Application
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-classic-app" target="_blank">
                        <img
                          src={classicapp}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Classic App
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-studio" target="_blank">
                        <img
                          src={studio}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Studio</h6>
                  </div>
                </Col>
                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <Link to="index-marketing" target="_blank">
                      <img
                        src={marketing}
                        className="img-fluid rounded"
                        alt="demo-img"
                      />
                    </Link>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Marketing
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <Link to="index-enterprise" target="_blank">
                      <img
                        src={enterprise}
                        className="img-fluid rounded"
                        alt="demo-img"
                      />
                    </Link>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Enterprise
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <Link to="index-services" target="_blank">
                      <img
                        src={servicesIndex}
                        className="img-fluid rounded"
                        alt="demo-img"
                      />
                    </Link>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Service</h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <Link to="index-payments" target="_blank">
                      <img
                        src={payments}
                        className="img-fluid rounded"
                        alt="demo-img"
                      />
                    </Link>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Payment</h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <Link to="index-crypto" target="_blank">
                      <img
                        src={cryptocurrency}
                        className="img-fluid rounded"
                        alt="demo-img"
                      />
                    </Link>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Cryptocurrency
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <Link to="index-hosting" target="_blank">
                      <img
                        src={hosting}
                        className="img-fluid rounded"
                        alt="demo-img"
                      />
                    </Link>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Hosting & Domain
                    </h6>
                  </div>
                </Col>
                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-it-solution" target="_blank">
                        <img
                          src={itsolution}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      IT Solution
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <Link to="index-business" target="_blank">
                      <img
                        src={business}
                        className="img-fluid rounded"
                        alt="demo-img"
                      />
                    </Link>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Business</h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <Link to="index-modern-business" target="_blank">
                      <img
                        src={modernBusiness}
                        className="img-fluid rounded"
                        alt="demo-img"
                      />
                    </Link>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Modern Business
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-corporate" target="_blank">
                        <img
                          src={corporate}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Corporate Business
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <Link to="index-hotel" target="_blank">
                      <img
                        src={hotel}
                        className="img-fluid rounded"
                        alt="demo-img"
                      />
                    </Link>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Hotel</h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-insurance" target="_blank">
                        <img
                          src={insurance}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Insurance
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-shop" target="_blank">
                        <img
                          src={shop}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Shop
                    </h6>
                  </div>
                </Col>
                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-coworking" target="_blank">
                        <img
                          src={coworking}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Co-working Space
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-personal" target="_blank">
                        <img
                          src={personal}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      CV / Resume
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-course" target="_blank">
                        <img
                          src={course}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Educational Course
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-online-learning" target="_blank">
                        <img
                          src={onlineLearning}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Online Learning
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-task-management" target="_blank">
                        <img
                          src={task}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Task Management
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-email-inbox" target="_blank">
                        <img
                          src={email}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Email Inbox
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-travel" target="_blank">
                        <img
                          src={travel}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Travel Landing
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-blog" target="_blank">
                        <img
                          src={blog}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Blog Landing
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-developer" target="_blank">
                        <img
                          src={developer}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Developer
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-seo-agency" target="_blank">
                        <img
                          src={seo}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      SEO Agency
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-construction" target="_blank">
                        <img
                          src={construction}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Construction
                    </h6>
                  </div>
                </Col>
                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-real-estate" target="_blank">
                        <img
                          src={real}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Real Estate
                    </h6>
                  </div>
                </Col>
                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-hospital" target="_blank">
                        <img
                          src={hospital}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Health Care
                    </h6>
                  </div>
                </Col>
                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-integration" target="_blank">
                        <img
                          src={integration}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Integration
                    </h6>
                  </div>
                </Col>


                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-event" target="_blank">
                        <img
                          src={event}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Event Management
                    </h6>
                  </div>
                </Col>



                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-single" target="_blank">
                        <img
                          src={product}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Product Marketing
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-portfolio" target="_blank">
                        <img
                          src={portfolio}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Minimal Portfolio
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-job" target="_blank">
                        <img
                          src={job}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Job</h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-social-marketing" target="_blank">
                        <img
                          src={socialMarketing}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Social Marketing
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-digital-agency" target="_blank">
                        <img
                          src={digitalAgency}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Digital Agency
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-car-riding" target="_blank">
                        <img
                          src={carride}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Car Ride</h6>
                  </div>
                </Col>



                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-customer" target="_blank">
                        <img
                          src={customer}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Customer</h6>
                  </div>
                </Col>


                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-software" target="_blank">
                        <img
                          src={software}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">Software</h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box rounded shadow text-center border-0">
                      <Link to="index-ebook" target="_blank">
                        <img
                          src={ebook}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      E-book Landing
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-landing-one" target="_blank">
                        <img
                          src={lone}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Landing one
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-landing-two" target="_blank">
                        <img
                          src={ltwo}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Landing two
                    </h6>
                  </div>
                </Col>

                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-landing-three" target="_blank">
                        <img
                          src={lthree}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Landing three
                    </h6>
                  </div>
                </Col>


                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="index-landing-four" target="_blank">
                        <img
                          src={lfour}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Landing Four
                    </h6>
                  </div>
                </Col>
                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <div className="demos-box new-demo rounded shadow text-center border-0">
                      <Link to="forums" target="_blank">
                        <img
                          src={forums}
                          className="img-fluid rounded"
                          alt="demo-img"
                        />
                      </Link>
                    </div>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Forums
                    </h6>
                  </div>
                </Col>
                <Col md={6} xs={12} className="mt-5">
                  <div className="text-center">
                    <Link to="index-onepage" target="_blank">
                      <img
                        src={onepage}
                        className="img-fluid rounded"
                        alt="demo-img"
                      />
                    </Link>
                    <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                      Saas <span className="text-warning">One Page Demo</span>
                    </h6>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="container mt-100 mt-60">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase fw-bold">
                      Company Pages
                  </h4>
                  </div>
                </Col>
              </Row>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <Row>
                  <Col md={6} xs={12}>
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-aboutus" target="_blank">
                          <img
                            src={about}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">About us</h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box new-demo rounded shadow text-center border-0">
                        <Link to="page-aboutus-two" target="_blank">
                          <img
                            src={about2}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">About us Two</h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-services" target="_blank">
                          <img
                            src={services}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Services / Features
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box new-demo rounded shadow text-center border-0">
                        <Link to="page-history" target="_blank">
                          <img
                            src={history}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Company History
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-pricing" target="_blank">
                          <img
                            src={pricing}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Pricing Plans
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-team" target="_blank">
                          <img
                            src={team}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">Team</h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="container mt-100 mt-60">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase font-weight-bold">Profile Pages</h4>
                  </div>
                </div>
              </div>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="/page-profile" target="_blank">
                          <img src={profile} className="img-fluid rounded" alt="demo-img" />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Profile</h6>
                    </div>
                  </div>

                  <div className="col-md-6 col-12 mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box new-demo rounded shadow text-center border-0">
                        <Link to="/page-members" target="_blank">
                          <img src={members} className="img-fluid rounded" alt="demo-img" />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Members</h6>
                    </div>
                  </div>

                  <div className="col-md-6 col-12 mt-5">
                    <div className="text-center">
                      <div className="demos-box new-demo rounded shadow text-center border-0">
                        <Link to="/page-works" target="_blank">
                          <img src={work} className="img-fluid rounded" alt="demo-img" />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Works</h6>
                    </div>
                  </div>

                  <div className="col-md-6 col-12 mt-5">
                    <div className="text-center">
                      <div className="demos-box new-demo rounded shadow text-center border-0">
                        <Link to="/page-messages" target="_blank">
                          <img src={messages} className="img-fluid rounded" alt="demo-img" />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Messages</h6>
                    </div>
                  </div>

                  <div className="col-md-6 col-12 mt-5">
                    <div className="text-center">
                      <div className="demos-box new-demo rounded shadow text-center border-0">
                        <Link to="/page-payments" target="_blank">
                          <img src={payment} className="img-fluid rounded" alt="demo-img" />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Payments</h6>
                    </div>
                  </div>

                  <div className="col-md-6 col-12 mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="/page-profile-edit" target="_blank">
                          <img src={setting} className="img-fluid rounded" alt="demo-img" />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Setting</h6>
                    </div>
                  </div>

                  <div className="col-md-6 col-12 mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="/page-invoice" target="_blank">
                          <img src={invoice} className="img-fluid rounded" alt="demo-img" />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase font-weight-bold mt-4 mb-0">Invoice</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="container mt-100 mt-60">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase fw-bold">
                      Help Center Pages{" "}
                    </h4>
                  </div>
                </Col>
              </Row>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <Row>
                  <Col md={6} xs={12}>
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="helpcenter-overview" target="_blank">
                          <img
                            src={helpcenter}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Help Center
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="helpcenter-faqs" target="_blank">
                          <img
                            src={faqs}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">FAQs</h6>
                    </div>
                  </Col>
                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="helpcenter-guides" target="_blank">
                          <img
                            src={guides}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">Guides</h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="helpcenter-support-request" target="_blank">
                          <img
                            src={supportForm}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Support Request / Form
                    </h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="container mt-100 mt-60">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase fw-bold">
                      Shop Pages{" "}
                      <span className="py-1 px-2 rounded-pill bg-danger text-white h6">
                        NEW
                    </span>
                    </h4>
                  </div>
                </Col>
              </Row>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <Row>
                  <Col md={6} xs={12}>
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="index-shop" target="_blank">
                          <img
                            src={products}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        SHOP HOME
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="shop-grids" target="_blank">
                          <img
                            src={productgrid}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Products Grid
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <div className="ribbon ribbon-right ribbon-danger overflow-hidden">
                          <span className="text-center d-block shadow small h6">
                            New
                        </span>
                        </div>
                        <Link to="shop-lists" target="_blank">
                          <img
                            src={productlist}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Products List
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="shop-product-detail" target="_blank">
                          <img
                            src={singleProduct}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Single Product
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="shop-cart" target="_blank">
                          <img
                            src={cart}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Shopping Cart
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="shop-checkouts" target="_blank">
                          <img
                            src={checkouts}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Checkouts
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="shop-myaccount" target="_blank">
                          <img
                            src={buyerProfile}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Buyer Profile
                    </h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="container mt-100 mt-60">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase fw-bold">
                      E-mail Template
                  </h4>
                  </div>
                </Col>
              </Row>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <Row>
                  <Col md={6} xs={12}>
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="email-confirmation" target="_blank">
                          <img
                            src={emailConfirmation}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        E-mail Confirmation
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="email-alert" target="_blank">
                          <img
                            src={emailAlert}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        E-mail Alert
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="email-invoice" target="_blank">
                          <img
                            src={emailInvoice}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        E-mail Billing
                    </h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="container mt-100 mt-60">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase fw-bold">
                      Career / Job Pages
                  </h4>
                  </div>
                </Col>
              </Row>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <Row>
                  <Col md={6} xs={12}>
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-jobs" target="_blank">
                          <img
                            src={jobs}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">Jobs</h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-job-detail" target="_blank">
                          <img
                            src={jobDetails}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Job Details
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-job-apply" target="_blank">
                          <img
                            src={jobApply}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Job Apply
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-job-company" target="_blank">
                          <img
                            src={companyProfile}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Company Profile
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-job-candidate" target="_blank">
                          <img
                            src={candidateProfile}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Candidate Profile
                    </h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="container mt-100 mt-60">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase fw-bold">
                      Blog Pages
                  </h4>
                  </div>
                </Col>
              </Row>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <Row>
                  <Col md={6} xs={12}>
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-blog-grid" target="_blank">
                          <img
                            src={blogGrid}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Blog Grids
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-blog-list" target="_blank">
                          <img
                            src={blogList}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Blog List
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-blog-detail" target="_blank">
                          <img
                            src={blogDetails}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Blog Detail
                    </h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="container mt-100 mt-60">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase fw-bold">
                      Portfolio Pages
                  </h4>
                  </div>
                </Col>
              </Row>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <Row>
                  <Col md={6} xs={12}>
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-work-classic" target="_blank">
                          <img
                            src={classic}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Work Classic
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-work-modern" target="_blank">
                          <img
                            src={modern}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Work Modern
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-work-grid" target="_blank">
                          <img
                            src={grid}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Work Grids
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-work-masonry" target="_blank">
                          <img
                            src={masonry}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Work Mesonry
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-work-detail" target="_blank">
                          <img
                            src={workDetail}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Work Details
                    </h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="container mt-100 mt-60">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase fw-bold">
                      Contact Pages
                  </h4>
                  </div>
                </Col>
              </Row>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <Row>
                  <Col md={6} xs={12}>
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-contact-one" target="_blank">
                          <img
                            src={contactOne}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Contact One
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-contact-two" target="_blank">
                          <img
                            src={contactTwo}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Contact Two
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-contact-three" target="_blank">
                          <img
                            src={contactThree}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Contact Three
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-contact-detail" target="_blank">
                          <img
                            src={contactDetails}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Contact Detail
                    </h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="container mt-100 mt-60">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase fw-bold">
                      Authentication Pages
                  </h4>
                  </div>
                </Col>
              </Row>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <Row>
                  <Col md={6} xs={12}>
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="auth-cover-login" target="_blank">
                          <img
                            src={login}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Login Page
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="auth-cover-signup" target="_blank">
                          <img
                            src={signup}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Signup Page
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="auth-cover-re-password" target="_blank">
                          <img
                            src={recoverAc}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Forgot Password
                    </h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="container mt-100 mt-60">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase fw-bold">
                      Special Pages
                  </h4>
                  </div>
                </Col>
              </Row>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <Row>
                  <Col md={6} xs={12}>
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-comingsoon" target="_blank">
                          <img
                            src={comingsoon}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Comingsoon
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-maintenance" target="_blank">
                          <img
                            src={maintenance}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Maintenance
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="page-error" target="_blank">
                          <img
                            src={error}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">Error</h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="container mt-100 mt-60">
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="section-title mb-4 mb-md-5 text-center">
                    <h4 className="title text-uppercase fw-bold">
                      Docs Pages
                  </h4>
                  </div>
                </Col>
              </Row>

              <div className="bg-light shadow rounded px-4 py-5 p-md-5">
                <Row>
                  <Col md={6} xs={12}>
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="components" target="_blank">
                          <img
                            src={components}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Components
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5 mt-sm-0">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="documentation" target="_blank">
                          <img
                            src={documentation}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Documentation
                    </h6>
                    </div>
                  </Col>

                  <Col md={6} xs={12} className="mt-5">
                    <div className="text-center">
                      <div className="demos-box rounded shadow text-center border-0">
                        <Link to="changelog" target="_blank">
                          <img
                            src={changelog}
                            className="img-fluid rounded"
                            alt="demo-img"
                          />
                        </Link>
                      </div>
                      <h6 className="title text-uppercase fw-bold mt-4 mb-0">
                        Changelog
                    </h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default Demo;
