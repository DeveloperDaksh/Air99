// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';

// Import Generic Components
import Section from "./section";
import Partners from '../../components/Shared/Partners';
import HowItWorks from './HowItWorks';
import Testi from './Testi';
import Pricing from './Pricing';
import Faq from './Faq';

class IndexMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.scrollNavigation = this.scrollNavigation.bind(this);
      
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

    render() {
        return (
            <React.Fragment>
              {/* Home Section */}
                <Section/>

                {/* Partner */}
                <section className="py-4 border-bottom border-top">
                    <Container>
                        <Partners />
                    </Container>
                </section>

                {/* HowItWorks */}
                <HowItWorks />

                {/* Testi */}
                <Testi />

                {/* Pricing */}
                <Pricing />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-light">
                        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                {/* Faq */}
                <Faq />

                <div className="position-relative">
                    <div className="shape overflow-hidden text-footer">
                        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default IndexMain;
