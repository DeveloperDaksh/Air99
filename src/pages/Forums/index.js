import React, { Component } from 'react'
import Forums from './Forums';
import Section from './Section';

export default class index extends Component {
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    
        var featurebox = document.getElementsByName("featurebox");
        for (var i = 0; i < featurebox.length; i++) {
          if (i !== 0) {
            featurebox[i].classList.add("mt-5");
            featurebox[i].classList.add("mt-sm-0");
          }
        }
      }
    
      // Make sure to remove the DOM listener when the component is unmounted.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
      }
    
      scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
          document.getElementById("topnav").classList.add("nav-sticky");
        } else {
          document.getElementById("topnav").classList.remove("nav-sticky");
        }
      };
    render() {
        return (
            <React.Fragment>
                <Section />
                <Forums />
            </React.Fragment>
        )
    }
}
