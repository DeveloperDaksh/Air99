import React, { Component } from 'react'
import { Col, NavItem, TabContent, TabPane, NavLink, Nav } from 'reactstrap'
import classnames from "classnames";

//import images
import proposals from '../../assets/images/freelancer/proposals.png';
import contract from '../../assets/images/freelancer/contract.png';
import crm from '../../assets/images/freelancer/crm.png';
import time from '../../assets/images/freelancer/time.png';
import invoice from '../../assets/images/freelancer/invoice.png';
import task from '../../assets/images/freelancer/task.png';
import { Link } from 'react-router-dom';


export default class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1",
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        this.setState({ activeTab: tab });
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-100 mt-60">
                    <div className="row">
                        <div className="col-md-4 mt-4 pt-2">
                            <Nav
                                pills
                                justified
                                id="pills-tab"
                                className="flex-column bg-white rounded shadow p-3 mb-0 sticky-bar">
                                <NavItem>
                                    <NavLink
                                        className={classnames(
                                            { active: this.state.activeTab === "1" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("1");
                                        }} >
                                        <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                            <h6 className="mb-0"><i className="uil uil-postcard me-2 h5"></i> Proposals</h6>
                                            <i className="uil uil-angle-right-b"></i>
                                        </div>
                                    </NavLink>
                                </NavItem>

                                <NavItem className="mt-2">
                                    <NavLink
                                        className={classnames(
                                            { active: this.state.activeTab === "2" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("2");
                                        }}
                                    >
                                        <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                            <h6 className="mb-0"><i className="uil uil-notes me-2 h5"></i> Contracts</h6>
                                            <i className="uil uil-angle-right-b"></i>
                                        </div>
                                    </NavLink>
                                </NavItem>

                                <NavItem className="mt-2">
                                    <NavLink
                                        className={classnames(
                                            { active: this.state.activeTab === "3" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("3");
                                        }}
                                    >
                                        <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                            <h6 className="mb-0"><i className="uil uil-folder-check me-2 h5"></i> Client CRM</h6>
                                            <i className="uil uil-angle-right-b"></i>
                                        </div>
                                    </NavLink>
                                </NavItem>

                                <NavItem className="mt-2">
                                    <NavLink
                                        className={classnames(
                                            { active: this.state.activeTab === "4" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("4");
                                        }}
                                    >
                                        <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                            <h6 className="mb-0"><i className="uil uil-clock me-2 h5"></i> Time Tracking</h6>
                                            <i className="uil uil-angle-right-b"></i>
                                        </div>
                                    </NavLink>
                                </NavItem>

                                <NavItem className="mt-2">
                                    <NavLink
                                        className={classnames(
                                            { active: this.state.activeTab === "5" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("5");
                                        }}
                                    >
                                        <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                            <h6 className="mb-0"><i className="uil uil-invoice me-2 h5"></i> Invoices</h6>
                                            <i className="uil uil-angle-right-b"></i>
                                        </div>
                                    </NavLink>
                                </NavItem>

                                <NavItem className="mt-2">
                                    <NavLink
                                        className={classnames(
                                            { active: this.state.activeTab === "6" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("6");
                                        }}
                                    >
                                        <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                            <h6 className="mb-0"><i className="uil uil-exchange-alt me-2 h5"></i> Task Tracking</h6>
                                            <i className="uil uil-angle-right-b"></i>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>

                        <Col md={8} xs={12} className="mt-4 pt-2">
                            <TabContent id="pills-tabContent" activeTab={this.state.activeTab}>
                                <TabPane tabId="1" className="p-4 rounded shadow" id="developing" role="tabpanel" aria-labelledby="proposal">
                                    <h4 className="mb-4">Win More Work</h4>
                                    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                                    <div className="mt-4">
                                        <Link to="#" className="text-primary h6">Explore Proposals <i className="uil uil-angle-right-b align-middle"></i></Link>
                                    </div>

                                    <div className="mt-4">
                                        <img src={proposals} className="img-fluid" alt="" />
                                    </div>
                                </TabPane>

                                <TabPane tabId="2" className="p-4 rounded shadow" id="data-analise" role="tabpanel" aria-labelledby="contract">
                                    <h4 className="mb-4">Protect Your Business</h4>
                                    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                                    <div className="mt-4">
                                        <Link to="#" className="text-primary h6">Explore Contracts <i className="uil uil-angle-right-b align-middle"></i></Link>
                                    </div>

                                    <div className="mt-4">
                                        <img src={contract} className="img-fluid" alt="" />
                                    </div>
                                </TabPane>

                                <TabPane tabId="3" className="p-4 rounded shadow" id="security" role="tabpanel" aria-labelledby="crm">
                                    <h4 className="mb-4">Stay Organized</h4>
                                    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                                    <div className="mt-4">
                                        <Link to="#" className="text-primary h6">Explore Projects <i className="uil uil-angle-right-b align-middle"></i></Link>
                                    </div>

                                    <div className="mt-4">
                                        <img src={crm} className="img-fluid" alt="" />
                                    </div>
                                </TabPane>

                                <TabPane tabId="4" className="p-4 rounded shadow" id="time-track" role="tabpanel" aria-labelledby="timetracking">
                                    <h4 className="mb-4">Keep It Simple</h4>
                                    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                                    <div className="mt-4">
                                        <Link to="#" className="text-primary h6">Explore Time Tracking <i className="uil uil-angle-right-b align-middle"></i></Link>
                                    </div>

                                    <div className="mt-4">
                                        <img src={time} className="img-fluid" alt="" />
                                    </div>
                                </TabPane>

                                <TabPane tabId="5" className="p-4 rounded shadow" id="invoices" role="tabpanel" aria-labelledby="invoice">
                                    <h4 className="mb-4">Get Paid Faster</h4>
                                    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                                    <div className="mt-4">
                                        <Link to="#" className="text-primary h6">Explore Invoice <i className="uil uil-angle-right-b align-middle"></i></Link>
                                    </div>

                                    <div className="mt-4">
                                        <img src={invoice} className="img-fluid" alt="" />
                                    </div>
                                </TabPane>

                                <TabPane tabId="6" className="p-4 rounded shadow" id="task-track" role="tabpanel" aria-labelledby="tasktracking">
                                    <h4 className="mb-4">Be More Effective</h4>
                                    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>

                                    <div className="mt-4">
                                        <Link to="#" className="text-primary h6">Explore Task Tracking <i className="uil uil-angle-right-b align-middle"></i></Link>
                                    </div>

                                    <div className="mt-4">
                                        <img src={task} className="img-fluid" alt="" />
                                    </div>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
