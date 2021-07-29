import React, { Component } from "react";
import { Link } from "react-router-dom";

//Import Switcher CSS

class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchToggle: false,
    };
    this.toggleSwitcher = this.toggleSwitcher.bind(this);
  }

  toggleSwitcher = () => {
    this.setState({ isSwitchToggle: !this.state.isSwitchToggle });
  };

  render() {
    return (
      <React.Fragment>
        <div
          id="style-switcher"
          style={{ left: this.state.isSwitchToggle ? "0px" : "-189px" }}
          className="bg-light border p-3 pt-2 pb-2"
        >
          <h3 className="title text-center pt-3 mb-0">Theme Option</h3>
          <div className="text-center">
            <a
              href="http://landrick.react.themesbrand.com"
              className="btn btn-sm w-100 btn-light mt-2"
            >
              Light
            </a>
            <a
              href="http://landrick.react-dark.themesbrand.com"
              className="btn btn-sm w-100 btn-primary mt-2"
            >
              Dark
            </a>
            <a
              href="http://landrick.react-rtl.themesbrand.com"
              className="btn btn-sm w-100 btn-light mt-2"
            >
              RTL
            </a>
            <a
              href="http://landrick.react-rtl-dark.themesbrand.com"
              className="btn btn-sm w-100 btn-primary mt-2"
            >
              Dark-RTL
            </a>
          </div>
          <div className="bottom">
            <Link
              to="#"
              onClick={this.toggleSwitcher}
              className="settings bg-white shadow d-block"
            >
              <i className="mdi mdi-cog ms-1 mdi-24px position-absolute mdi-spin text-primary"></i>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ThemeSwitcher;
