// React basic and bootstrap
import React, { Component, Suspense } from 'react';

// Scroll up button
import ScrollUpButton from "react-scroll-up-button";

//Import Icons
import FeatherIcon from 'feather-icons-react';

// Import css
import "./css/demo.css";

// Import sub components
const Topbar = React.lazy(() => import('./Topbar'));
const Home = React.lazy(() => import('./Home'));
const Demo = React.lazy(() => import('./Demo'));
const Feature = React.lazy(() => import('./Feature'));
const Reviews = React.lazy(() => import('./Reviews'));
const Footer = React.lazy(() => import('./Footer'));

const CustomDot = () => {
    return (
      <i><FeatherIcon icon="arrow-up" className="icons" /></i>
    );
};

class IndexRoot extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
    
    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
    }
  
    scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
    }

    Loader = () => {
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
    }
    
    render() {
        return (
            <React.Fragment>
                <Suspense fallback = {this.Loader()} >
                    <Topbar/>
                    <Home />
                    <Demo />
                    <Feature />
                    <Reviews/>
                    <Footer />

                    {/* scrollup button */}
          <ScrollUpButton ContainerClassName="classForContainer" style={{height:36, width:36}} TransitionClassName="classForTransition">
          <CustomDot/>
          </ScrollUpButton>
                </Suspense>
            </React.Fragment>
        );
    }
}

export default IndexRoot;




