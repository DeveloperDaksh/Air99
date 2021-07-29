import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import CategoryBox from "./CategoryBox";

//Immport Images
import work1 from "../../assets/images/work/1.jpg";
import work2 from "../../assets/images/work/2.jpg";
import work3 from "../../assets/images/work/3.jpg";
import work4 from "../../assets/images/work/4.jpg";
import work5 from "../../assets/images/work/5.jpg";
import work6 from "../../assets/images/work/6.jpg";
import work7 from "../../assets/images/work/7.jpg";
import work8 from "../../assets/images/work/8.jpg";

class Categories extends Component {
  state = {
    jobCategories: [
      { id: 1, image: work1, title: "Communications", jobs: 125, link: "" },
      { id: 2, image: work2, title: "Accounting", jobs: 125, link: "" },
      { id: 3, image: work3, title: "Restaurant", jobs: 125, link: "" },
      { id: 4, image: work4, title: "Health", jobs: 125, link: "" },
      { id: 5, image: work5, title: "Finance", jobs: 125, link: "" },
      { id: 6, image: work6, title: "Facilities", jobs: 125, link: "" },
      { id: 7, image: work7, title: "HR", jobs: 125, link: "" },
      { id: 8, image: work8, title: "Construction", jobs: 125, link: "" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          {/* Section title */}
          <SectionTitle
            title="Popular Catagories"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect"
          />

          <Row>
            {/* render category box */}
            <CategoryBox jobCategories={this.state.jobCategories} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Categories;
