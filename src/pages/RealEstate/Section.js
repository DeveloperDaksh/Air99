import React, { Component } from "react";

import BackgroundSlider from "react-background-slider";

// Import images
import bg01 from "../../assets/images/hotel/bg01.jpg";
import bg02 from "../../assets/images/hotel/bg02.jpg";
import bg03 from "../../assets/images/hotel/bg03.jpg";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [bg01, bg02, bg03],
    };
  }
  render() {
    return (
      <React.Fragment>
          <section className="bg-half-260 d-table w-100" >
            <BackgroundSlider
              images={this.state.items}
              duration={10}
              transition={2}
            />
            <div className="bg-overlay"></div>
            <div className="container">
              <div className="row mt-5 justify-content-center">
                <div className="col-12">
                  <div className="title-heading text-center">
                    <h4 className="display-4 fw-bold text-white title-dark mb-3">
                      Find your perfect property
                    </h4>
                    <p className="para-desc text-white-50 mb-0 mx-auto">
                      Launch your campaign and benefit from our expertise on
                      designing and managing conversion centered bootstrap v5 html
                      page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </React.Fragment>
    );
  }
}
