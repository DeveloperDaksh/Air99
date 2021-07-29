import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";
import AccordianCommon from "../../../components/Shared/AccordianCommon";

import ScrollspyNav from "./ScrollspyNav";

class HelpCenterFaqs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Help Center", link: "#" },
        { id: 3, name: "Faqs" },
      ],
    };
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
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };
  render() {
    const ids = ["tech", "general", "payment", "support"];
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb
          title="Frequently Asked Questions"
          pathItems={this.state.pathItems}
        />

        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={4} md={5} xs={12} className="d-none d-md-block">
                <div className="rounded shadow p-4 sticky-bar">
                  <ScrollspyNav
                    scrollTargetIds={ids}
                    activeNavclassName="active"
                    scrollDuration="800"
                    headerBackground="true"
                    className="sticky-bar"
                  >
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#tech" className="mouse-down h6 text-dark">
                          Buying Questions
                        </a>
                      </li>
                      <li className="mt-4">
                        <a href="#general" className="mouse-down h6 text-dark">
                          General Questions
                        </a>
                      </li>
                      <li className="mt-4">
                        <a href="#payment" className="mouse-down h6 text-dark">
                          Payments Questions
                        </a>
                      </li>
                      <li className="mt-4">
                        <a href="#support" className="mouse-down h6 text-dark">
                          Support Questions
                        </a>
                      </li>
                    </ul>
                  </ScrollspyNav>
                </div>
              </Col>

              <Col lg={8} md={7} xs={12}>
                <div className="section-title" id="tech">
                  <h4>Buying Product</h4>
                </div>
                <div className="faq-content mt-4 pt-2">
                  <div className="accordion" id="accordionExampleone">
                    {/* accoridan */}
                    <AccordianCommon
                      question1="What is Lorem Ipsum ?"
                      answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                      question2="Why do we use it ?"
                      answer2="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                      question3="Where does it come from ?"
                      answer3="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                      question4="Where can I get some ?"
                      answer4="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                      question5="How Landrick Work ?"
                      answer5="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                    />
                  </div>
                </div>

                <div className="section-title mt-5" id="general">
                  <h4>General Questions</h4>
                </div>

                <div className="faq-content mt-4 pt-3">
                  <div className="accordion" id="accordionExampletwo">
                    <AccordianCommon
                      question1="What is Lorem Ipsum ?"
                      answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                      question2="Why do we use it ?"
                      answer2="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                      question3="Where does it come from ?"
                      answer3="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                      question4="Where can I get some ?"
                      answer4="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                      question5="How Landrick Work ?"
                      answer5="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                    />
                  </div>
                </div>

                <div className="section-title mt-5" id="payment">
                  <h4>Payments Questions</h4>
                </div>

                <div className="faq-content mt-4 pt-3">
                  <div className="accordion" id="accordionExamplethree">
                    <AccordianCommon
                      question1="What is Lorem Ipsum ?"
                      answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                      question2="Why do we use it ?"
                      answer2="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                      question3="Where does it come from ?"
                      answer3="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                      question4="Where can I get some ?"
                      answer4="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                      question5="How Landrick Work ?"
                      answer5="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                    />
                  </div>
                </div>

                <div className="section-title mt-5" id="support">
                  <h4>Support Questions</h4>
                </div>

                <div className="faq-content mt-4 pt-3">
                  <div className="accordion" id="accordionExamplefour">
                    <AccordianCommon
                      question1="What is Lorem Ipsum ?"
                      answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                      question2="Why do we use it ?"
                      answer2="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                      question3="Where does it come from ?"
                      answer3="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                      question4="Where can I get some ?"
                      answer4="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                      question5="How Landrick Work ?"
                      answer5="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-envelope-check d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Get in Touch !
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Submit a Request
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-webcam d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Start a Meeting
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Start Video Chat
                      </Link>
                    </div>
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

export default HelpCenterFaqs;
