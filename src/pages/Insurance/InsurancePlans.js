import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Shared Components
import SectionTitle from "../../components/Shared/SectionTitle";
import KeyFeaturesBox from "../../components/Shared/KeyFeaturesBox";

class InsurancePlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyFeatures: [
        { icon: "uil uil-home-alt", title: "Home Insurance", link: "#" },
        { icon: "uil uil-user-arrows", title: "Group Mediclaim", link: "#" },
        { icon: "uil uil-user-circle", title: "Retirement Plans", link: "#" },
        { icon: "uil uil-car", title: "Travel Insurance", link: "#" },
        { icon: "uil uil-truck", title: "Taxi Insurance", link: "#" },
        {
          icon: "uil uil-chart-pie-alt",
          title: "Corporate Insurance",
          link: "#",
        },
        { icon: "uil uil-heartbeat", title: "Cancer Insurance", link: "#" },
        {
          icon: "uil uil-chart-line",
          title: "Tax Saving Investment",
          link: "#",
        },
        { icon: "uil uil-book-reader", title: "Child Saving Plans", link: "#" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* render Section title */}
          <SectionTitle
            title="Other Insurance Plans"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            {/* render key features */}
            <KeyFeaturesBox keyFeatures={this.state.keyFeatures} />

            <Col xs={12} className="mt-4 pt-2 text-center">
              <Link to="#" className="btn btn-primary">
                See More <i className="uil uil-angle-right-b align-middle"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default InsurancePlans;
