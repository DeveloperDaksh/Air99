import React, { Component } from "react";

//import partner images
import amazon from "../../assets/images/client/amazon.svg";
import google from "../../assets/images/client/google.svg";
import lenovo from "../../assets/images/client/lenovo.svg";
import paypal from "../../assets/images/client/paypal.svg";
import shopify from "../../assets/images/client/shopify.svg";
import spotify from "../../assets/images/client/spotify.svg";

export default class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [
        {
          id: 1,
          img: amazon,
        },
        {
          id: 2,
          img: google,
        },
        {
          id: 3,
          img: lenovo,
        },
        {
          id: 4,
          img: paypal,
        },
        {
          id: 5,
          img: shopify,
        },
        {
          id: 6,
          img: spotify,
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="py-4 border-top bg-light">
          <div className="container">
            <div className="row justify-content-center">
              {this.state.partners.map((partners, key) => (
                <div
                  className="col-lg-2 col-md-2 col-6 text-center py-4"
                  key={key}
                >
                  <img
                    src={partners.img}
                    className="avatar avatar-ex-sm"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
