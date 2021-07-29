// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import BlogBox from "../../components/Shared/BlogBox";

// Blog Images
import blog1 from "../../assets/images/hotel/bg01.jpg";
import blog2 from "../../assets/images/hotel/bg02.jpg";
import blog3 from "../../assets/images/hotel/bg03.jpg";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          image: blog1,
          title: "Design your apps in your own way",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 2,
          image: blog2,
          title: "How apps is changing the IT world",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 3,
          image: blog3,
          title: "Smartest Applications for Business",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-5 pt-sm-0 pt-md-4 bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Latest News"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row>
              {/* blog box */}
              <BlogBox blogs={this.state.blogs} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default News;
