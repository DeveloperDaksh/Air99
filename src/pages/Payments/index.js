import React, { Component } from 'react';

//Render Components
import Section from "./Section";
import Process from "./Process";
import Review from "./Review";
import PricingAndPayment from "./PricingAndPayment";
import CTA from "./Cta";

class Payments extends Component {
    componentDidMount() {
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
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
                
            {/* Render Section */}
            <Section/>
        
            {/* Render Process */}
            <Process/>

            <div className="position-relative">
                <div className="shape overflow-hidden text-light">
                    <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        
            <section className="section bg-light">
                {/* Render Review */}
                <Review />

                {/* Pricing and Payment */}
                <PricingAndPayment/>
            </section>

            {/* CTA */}
            <CTA/>
            </React.Fragment>
        );
    }
}

export default Payments;