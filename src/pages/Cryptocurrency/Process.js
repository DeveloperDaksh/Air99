import React, { Component } from "react";
import { Row, Container } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ProcessBox from "./ProcessBox";

//Import Images
import img1 from "../../assets/images/crypto/1.png";
import img2 from "../../assets/images/crypto/2.png";
import img3 from "../../assets/images/crypto/3.png";
import img4 from "../../assets/images/crypto/4.png";

class Process extends Component {
  state = {
    processArray: [
      { title: "Create Account", icon: img1, desc: "Earn upto 10%", link: "" },
      { title: "Buy Coin", icon: img2, desc: "Save upto $50/coin", link: "" },
      {
        title: "Loans",
        icon: img3,
        desc: "Use crypto as collateral",
        link: "",
      },
      {
        title: "Credit & Debit Cards",
        icon: img4,
        desc: "Payments with cards",
        link: "",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* Section title */}
          <SectionTitle
            title="How it works ?"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            {/* Process Box */}
            <ProcessBox data={this.state.processArray} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Process;
