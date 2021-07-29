import React, { Component } from 'react'

import Section from './Section';
import Features from './Features';
import Aboutus from './Aboutus';
import Business from './Business';
import Cta from './Cta';
export default class ITSolutionTwo extends Component {
    componentDidMount() {
        document.body.classList = "";
        document.getElementById("top-menu").classList.add("nav-light");
        window.addEventListener("scroll", this.scrollNavigation, true);
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
                {/* import section */}
                <Section />
                {/* import Features */}
                <Features />
                <section className="section">
                    <Aboutus />
                    <Business />
                </section>
                <Cta />
            </React.Fragment>
        )
    }
}
