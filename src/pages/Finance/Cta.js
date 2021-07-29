import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from "feather-icons-react";

//import images
import cta from '../../assets/images/finance/cta.jpg';

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export default class Cta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }
    render() {
        return (
            <React.Fragment>

                <section className="section bg-cta" style={{ background: `url(${cta}) fixed center center` }} id="cta">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title">
                                    <h4 className="title title-dark text-white mb-4">Stop leaving money on the table.</h4>
                                    <p className="text-light para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <Link to="#" onClick={this.openModal} className="play-btn border border-light mt-4 lightbox">
                                        <FeatherIcon
                                            icon="play"
                                            className="fea icon-ex-md text-white title-dark"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalVideo
                        channel="vimeo"
                        isOpen={this.state.isOpen}
                        videoId="287684225"
                        onClose={() => this.setState({ isOpen: false })}
                    />
                </section>
            </React.Fragment>
        )
    }
}
