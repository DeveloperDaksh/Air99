import React, { Component, Suspense } from "react";
import { withRouter } from "react-router-dom";

import Tagline from "./Tagline";

// Scroll up button
import ScrollUpButton from "react-scroll-up-button";

//Import Switcher
import ThemeSwitcher from "./ThemeSwitcher";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Layout Components
const Topbar = React.lazy(() => import("./Topbar"));
const NavbarPage = React.lazy(() =>
  import("../../pages/Saas Onepage/NavbarPage")
);
const Footer = React.lazy(() => import("./Footer"));
const FooterWithoutMenuLightSocialOnly = React.lazy(() =>
  import("./FooterWithoutMenuLightSocialOnly")
);

const CustomDot = () => {
  return (
    <React.Fragment>
      <FeatherIcon icon="arrow-up" className="icons" />
    </React.Fragment>
  );
};

const CryptoTagline = () => {
  return <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="text-slider">
          <ul className="list-inline mb-0 move-text">
            <li className="list-inline-item px-2 mb-0"><b>EOG</b> $ 55.88 <span className="text-success">+$ 4.62 ( +9.01% )</span></li>
            <li className="list-inline-item px-2 mb-0"><b>CHKP</b> $ 120.03 <span className="text-danger">-$ 14.07 ( -10.49% )</span></li>
            <li className="list-inline-item px-2 mb-0"><b>FANG</b> $ 63.58 <span className="text-success">+$ 5.17 ( +8.84% )</span></li>
            <li className="list-inline-item px-2 mb-0"><b>M</b> $ 14.75 <span className="text-success">+$ 1.05 ( +7.66% )</span></li>
            <li className="list-inline-item px-2 mb-0"><b>PKI</b> $ 139.72 <span className="text-danger">-$ 11.41 ( -7.55% )</span></li>
            <li className="list-inline-item px-2 mb-0"><b>ABMD</b> $ 326.23 <span className="text-danger">-$ 21.61 ( -6.21% )</span></li>
            <li className="list-inline-item px-2 mb-0"><b>BITCOIN</b> $ 37,471.47 <span className="text-danger">+$ 492.60 ( +1.33% )</span></li>
            <li className="list-inline-item px-2 mb-0"><b>XRP</b> <span> $ 0.39</span><span className="text-muted"> UNCH</span></li>
            <li className="list-inline-item px-2 mb-0"><b>LITECOIN</b> <span> $ 148.67</span><span className="text-danger">-$ 5.58 ( -3.62% )</span></li>
            <li className="list-inline-item px-2 mb-0"><b>BITCOIN CASH</b> <span> $ 427.37</span><span className="text-danger">-$ 15.98 ( -3.60% )</span></li>
            <li className="list-inline-item px-2 mb-0"><b>ETHEREUM</b> $ 1,647.87 <span className="text-danger">+$ 14.51 ( +0.89% )</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

}

const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
};
class Layout extends Component {

  render() {
    const tagLineContent = this.props.location.pathname === "/index-crypto-two" ? <Tagline><CryptoTagline /></Tagline> : null;
    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>
          {this.props.location.pathname === "/index-onepage" ? (
            <NavbarPage />
          ) : (
            <Topbar tagline={tagLineContent} hasDarkTopBar={this.props.hasDarkTopBar} />
          )}

          {this.props.children}
          {(() => {
            if (
              this.props.location.pathname === "/index-marketing" ||
              this.props.location.pathname === "/index-digital-agency" ||
              this.props.location.pathname === "/index-modern-business" ||
              this.props.location.pathname === "/index-services" ||
              this.props.location.pathname === "/index-job" ||
              this.props.location.pathname === "index-freelancer"
            ) {
              return <Footer isLight={true} />;
            } else if (
              this.props.location.pathname === "/index-portfolio"
            ) {
              return (
                <FooterWithoutMenuLightSocialOnly className="border-0 bg-light text-dark" />
              );
            } else if (
              this.props.location.pathname === "/index-personal" ||
              this.props.location.pathname === "/helpcenter-overview" ||
              this.props.location.pathname === '/helpcenter-guides' ||
              this.props.location.pathname === '/helpcenter-support-request' ||
              this.props.location.pathname === "/page-invoice"
            ) {
              return <FooterWithoutMenuLightSocialOnly className="" />;
            } else {
              return <Footer />;
            }
          })()}

          {/* <div className="btn btn-icon btn-soft-primary back-to-top"> */}
          {/* scrollup button */}
          <ScrollUpButton
            ContainerClassName="classForContainer"
            style={{ height: 36, width: 36 }}
            TransitionClassName="classForTransition"
          >
            <CustomDot />
          </ScrollUpButton>
          {/* </div> */}

          {/* theme switcher */}
          {/* <ThemeSwitcher /> */}
        </Suspense>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
