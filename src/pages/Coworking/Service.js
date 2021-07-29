// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import ServiceBox from "./service-box";
import SectionTitle from "../../components/Shared/SectionTitle";


class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        { icon : 'uil uil-wifi h1 text-primary', title: "Fast Internet" },
        { icon : 'uil uil-print h1 text-primary', title: "Printer & Fax" },
        { icon : 'uil uil-restaurant h1 text-primary', title: "Modern Kitchen" },
        { icon : 'uil uil-clock h1 text-primary', title: "24 Hr Access" },
        { icon : 'uil uil-envelope-alt h1 text-primary', title: "Mail Service" },
        { icon : 'uil uil-calendar-alt h1 text-primary', title: "Events Space" },
        { icon : 'uil uil-user-arrows h1 text-primary', title: "Conference Rooms" },
        { icon : 'uil uil-coffee h1 text-primary', title: "Organic Tea & Coffee" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Your Comfort is Our Priority"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row>
              {/* services box */}
              <ServiceBox services={this.state.services} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Service;
