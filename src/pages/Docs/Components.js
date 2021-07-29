// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Collapse,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  UncontrolledTooltip,
  Progress,
  Pagination,
  PaginationItem,
  PaginationLink,
  Badge,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Alert,
  UncontrolledAlert,
  Form,
  FormGroup,
  Input,
  Label,
  CustomInput,
  InputGroup,
  InputGroupAddon,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import classnames from "classnames";

import ScrollspyNav from "./scrollSpy";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";

// import images
import blog1 from "../../assets/images/blog/01.jpg";
import work14 from "../../assets/images/work/14.jpg";
import client05 from "../../assets/images/client/05.jpg";
import Email from "../../assets/images/icon/Email.svg";
import bitcoin from "../../assets/images/icon/bitcoin.svg";
import calendar from "../../assets/images/icon/calendar.svg";
import location from "../../assets/images/icon/location.svg";

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Docs", link: "#" },
        { id: 3, name: "Components" },
      ],
      col1: true,
      col2: false,
      col3: false,
      activeTab: "1",
      modal: false,
      primary: false,
      secondary: false,
      success: false,
      warning: false,
      info: false,
      danger: false,
      dark: false,
    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.toggle = this.toggle.bind(this);
    this.togglemodal.bind(this);
  }

  t_col1() {
    this.setState({ col1: !this.state.col1, col2: false, col3: false });
  }
  t_col2() {
    this.setState({ col2: !this.state.col2, col1: false, col3: false });
  }
  t_col3() {
    this.setState({ col3: !this.state.col3, col2: false, col1: false });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var topnav = document.getElementById("topnav");
    if (top > 80 && topnav) {
      topnav.classList.add("nav-sticky");
    } else if (topnav) {
      topnav.classList.remove("nav-sticky");
    }
  };

  render() {
    const targetId = [
      "typography",
      "display",
      "bg-colors",
      "text-colors",
      "buttons",
      "dropdowns",
      "badges",
      "alerts",
      "accordions",
      "cards",
      "forms",
      "checkboxes",
      "radio-buttons",
      "switches",
      "select-box",
      "subscribe-forms",
      "map",
      "breadcrumbs",
      "pagination",
      "avatar",
      "nav-tabs",
      "progressbar",
      "tooltips",
      "modals",
      "tables",
      "blockquotes",
      "icons",
    ];
    return (
      <React.Fragment>
        <PageBreadcrumb title="Components" pathItems={this.state.pathItems} />
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="section">
          <Container>
            <Row>
              <Col lg={3} md={4} xs={12} className="d-none d-md-block">
                <div className="sticky-bar component-wrapper bg-light rounded shadow p-4">
                  <ScrollspyNav
                    scrollTargetIds={targetId}
                    scrollDuration="800"
                    headerBackground={false}
                    activeNavClass="active"
                    className="sticky-bar"
                  >
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a
                          href="#typography"
                          className="mouse-down h6 text-dark"
                        >
                          Typography Heading
                        </a>
                      </li>
                      <li>
                        <a href="#display" className="mouse-down h6 text-dark">
                          Display Heading
                        </a>
                      </li>
                      <li>
                        <a
                          href="#bg-colors"
                          className="mouse-down h6 text-dark"
                        >
                          Background Colors
                        </a>
                      </li>
                      <li>
                        <a
                          href="#text-colors"
                          className="mouse-down h6 text-dark"
                        >
                          Text Colors
                        </a>
                      </li>
                      <li>
                        <a href="#buttons" className="mouse-down h6 text-dark">
                          Buttons
                        </a>
                      </li>
                      <li>
                        <a
                          href="#dropdowns"
                          className="mouse-down h6 text-dark"
                        >
                          Dropdowns
                        </a>
                      </li>
                      <li>
                        <a href="#badges" className="mouse-down h6 text-dark">
                          Badges
                        </a>
                      </li>
                      <li>
                        <a href="#alerts" className="mouse-down h6 text-dark">
                          Alerts
                        </a>
                      </li>
                      <li>
                        <a
                          href="#accordions"
                          className="mouse-down h6 text-dark"
                        >
                          Accordions
                        </a>
                      </li>
                      <li>
                        <a href="#cards" className="mouse-down h6 text-dark">
                          Cards
                        </a>
                      </li>
                      <li>
                        <a href="#forms" className="mouse-down h6 text-dark">
                          Forms
                        </a>
                      </li>
                      <li>
                        <a
                          href="#checkboxes"
                          className="mouse-down h6 text-dark"
                        >
                          Checkboxes
                        </a>
                      </li>
                      <li>
                        <a
                          href="#radio-buttons"
                          className="mouse-down h6 text-dark"
                        >
                          Radio Buttons
                        </a>
                      </li>
                      <li>
                        <a href="#switches" className="mouse-down h6 text-dark">
                          Switches Buttons
                        </a>
                      </li>
                      <li>
                        <a
                          href="#select-box"
                          className="mouse-down h6 text-dark"
                        >
                          Form Select Box
                        </a>
                      </li>
                      <li>
                        <a
                          href="#subscribe-forms"
                          className="mouse-down h6 text-dark"
                        >
                          Subscribe Forms
                        </a>
                      </li>
                      <li>
                        <a href="#map" className="mouse-down h6 text-dark">
                          Google Map
                        </a>
                      </li>
                      <li>
                        <a
                          href="#breadcrumbs"
                          className="mouse-down h6 text-dark"
                        >
                          Breadcrumbs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#pagination"
                          className="mouse-down h6 text-dark"
                        >
                          Pagination
                        </a>
                      </li>
                      <li>
                        <a href="#avatar" className="mouse-down h6 text-dark">
                          Avatar
                        </a>
                      </li>
                      <li>
                        <a href="#nav-tabs" className="mouse-down h6 text-dark">
                          Nav Tabs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#progressbar"
                          className="mouse-down h6 text-dark"
                        >
                          Progressbar
                        </a>
                      </li>
                      <li>
                        <a href="#tooltips" className="mouse-down h6 text-dark">
                          Tooltips
                        </a>
                      </li>
                      <li>
                        <a href="#modals" className="mouse-down h6 text-dark">
                          Modals
                        </a>
                      </li>
                      <li>
                        <a href="#tables" className="mouse-down h6 text-dark">
                          Tables
                        </a>
                      </li>
                      <li>
                        <a
                          href="#blockquotes"
                          className="mouse-down h6 text-dark"
                        >
                          Blockquotes
                        </a>
                      </li>
                      <li>
                        <a href="#icons" className="mouse-down h6 text-dark">
                          Icons
                        </a>
                      </li>
                    </ul>
                  </ScrollspyNav>
                </div>
              </Col>

              <Col lg={9} md={8} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <Row className="row-cols-1 ms-lg-2">
                  <Col id="typography">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Typography Heading </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;h1&gt; H1. Bootstrap heading &lt;/h1&gt;
                          </code>
                        </h6>

                        <h1>H1. Bootstrap heading</h1>
                        <h2>H2. Bootstrap heading</h2>
                        <h3>H3. Bootstrap heading</h3>
                        <h4>H4. Bootstrap heading</h4>
                        <h5>H5. Bootstrap heading</h5>
                        <h6 className="mb-0">H6. Bootstrap heading</h6>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="display">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Display Heading </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;p className="display-1"&gt; Display 1 &lt;/p&gt;
                          </code>
                        </h6>

                        <p className="display-1">Display 1</p>
                        <p className="display-2">Display 2</p>
                        <p className="display-3">Display 3</p>
                        <p className="display-4 mb-0">Display 4</p>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="bg-colors">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Background Color </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;div className="bg-primary"&gt; Landrick Saas &
                            Software Template &lt;/div&gt;
                          </code>
                        </h6>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgPrimary"
                        >
                          <p className="avatar avatar-small bg-primary rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip target="bgPrimary" placement="top">
                          .bg-primary
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgSecondary"
                        >
                          <p className="avatar avatar-small bg-secondary rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip
                          target="bgSecondary"
                          placement="top"
                        >
                          .bg-secondary
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgsuccess"
                        >
                          <p className="avatar avatar-small bg-success rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip target="bgsuccess" placement="top">
                          .bg-success
                        </UncontrolledTooltip>

                        <div className="d-inline-block me-1 mt-2" id="bgdanger">
                          <p className="avatar avatar-small bg-danger rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip target="bgdanger" placement="top">
                          .bg-danger
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgwarning"
                        >
                          <p className="avatar avatar-small bg-warning rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip target="bgwarning" placement="top">
                          .bg-warning
                        </UncontrolledTooltip>

                        <div className="d-inline-block me-1 mt-2" id="bginfo">
                          <p className="avatar avatar-small bg-info rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip target="bginfo" placement="top">
                          .bg-info
                        </UncontrolledTooltip>

                        <div className="d-inline-block me-1 mt-2" id="bglight">
                          <p className="avatar avatar-small bg-light rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip target="bglight" placement="top">
                          .bg-light
                        </UncontrolledTooltip>

                        <div className="d-inline-block me-1 mt-2" id="bgwhite">
                          <p className="avatar avatar-small bg-white border rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip target="bgwhite" placement="top">
                          .bg-white
                        </UncontrolledTooltip>

                        <div className="d-inline-block me-1 mt-2" id="bgdark">
                          <p className="avatar avatar-small bg-dark rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip target="bgdark" placement="top">
                          .bg-dark
                        </UncontrolledTooltip>

                        <div className="d-inline-block me-1 mt-2" id="bgmuted">
                          <p className="avatar avatar-small bg-muted rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip target="bgmuted" placement="top">
                          .bg-muted
                        </UncontrolledTooltip>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="bg-colors">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Soft Background Color </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;div className="bg-soft-primary"&gt; Landrick
                            Saas & Software Template &lt;/div&gt;
                          </code>
                        </h6>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgPrimary-soft"
                        >
                          <p className="avatar avatar-small bg-soft-primary rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip
                          target="bgPrimary-soft"
                          placement="top"
                        >
                          .bg-soft-primary
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgSecondary-soft"
                        >
                          <p className="avatar avatar-small bg-soft-secondary rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip
                          target="bgSecondary-soft"
                          placement="top"
                        >
                          .bg-soft-secondary
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgsuccess-soft"
                        >
                          <p className="avatar avatar-small bg-soft-success rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip
                          target="bgsuccess-soft"
                          placement="top"
                        >
                          .bg-soft-success
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgdanger-soft"
                        >
                          <p className="avatar avatar-small bg-soft-danger rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip
                          target="bgdanger-soft"
                          placement="top"
                        >
                          .bg-soft-danger
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgwarning-soft"
                        >
                          <p className="avatar avatar-small bg-soft-warning rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip
                          target="bgwarning-soft"
                          placement="top"
                        >
                          .bg-soft-warning
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bginfo-soft"
                        >
                          <p className="avatar avatar-small bg-soft-info rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip
                          target="bginfo-soft"
                          placement="top"
                        >
                          .bg-soft-info
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bglight-soft"
                        >
                          <p className="avatar avatar-small bg-soft-light rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip
                          target="bglight-soft"
                          placement="top"
                        >
                          .bg-soft-light
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgwhite-soft"
                        >
                          <p className="avatar avatar-small bg-soft-white border rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip
                          target="bgwhite-soft"
                          placement="top"
                        >
                          .bg-soft-white
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgdark-soft"
                        >
                          <p className="avatar avatar-small bg-soft-dark rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip
                          target="bgdark-soft"
                          placement="top"
                        >
                          .bg-soft-dark
                        </UncontrolledTooltip>

                        <div
                          className="d-inline-block me-1 mt-2"
                          id="bgmuted-soft"
                        >
                          <p className="avatar avatar-small bg-soft-muted rounded mb-0"></p>
                        </div>
                        <UncontrolledTooltip
                          target="bgmuted-soft"
                          placement="top"
                        >
                          .bg-soft-muted
                        </UncontrolledTooltip>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="text-colors">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Text Color </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;div className="text-primary"&gt; Landrick Saas &
                            Software Template &lt;/div&gt;
                          </code>
                        </h6>

                        <h6 className="text-primary">.text-primary</h6>
                        <h6 className="text-secondary">.text-secondary</h6>
                        <h6 className="text-success">.text-success</h6>
                        <h6 className="text-danger">.text-danger</h6>
                        <h6 className="text-warning">.text-warning</h6>
                        <h6 className="text-info">.text-info</h6>
                        <h6 className="text-light bg-dark">.text-light</h6>
                        <h6 className="text-white bg-dark">.text-white</h6>
                        <h6 className="text-white-50 bg-dark">
                          .text-white-50
                        </h6>
                        <h6 className="text-dark mb-0">.text-dark</h6>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="buttons">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">Buttons</h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn btn-primary"&gt;
                            Primary &lt;/Link&gt;
                          </code>
                        </h6>

                        <Link to="#" className="btn btn-primary mt-2 me-2">
                          Primary
                        </Link>
                        <Link to="#" className="btn btn-secondary mt-2 me-2">
                          Secondary
                        </Link>
                        <Link to="#" className="btn btn-success mt-2 me-2">
                          Success
                        </Link>
                        <Link to="#" className="btn btn-danger mt-2 me-2">
                          Danger
                        </Link>
                        <Link to="#" className="btn btn-info mt-2 me-2">
                          Info
                        </Link>
                        <Link to="#" className="btn btn-warning mt-2 me-2">
                          Warning
                        </Link>
                        <Link to="#" className="btn btn-light mt-2 me-2">
                          Light
                        </Link>
                        <Link to="#" className="btn btn-dark mt-2 me-2">
                          Dark
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">Buttons Pill</h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn btn-pills
                            btn-primary"&gt; Primary &lt;/Link&gt;
                          </code>
                        </h6>

                        <Link
                          to="#"
                          className="btn btn-pills btn-primary mt-2 me-2"
                        >
                          Primary
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-secondary mt-2 me-2"
                        >
                          Secondary
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-success mt-2 me-2"
                        >
                          Success
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-danger mt-2 me-2"
                        >
                          Danger
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-info mt-2 me-2"
                        >
                          Info
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-warning mt-2 me-2"
                        >
                          Warning
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-light mt-2 me-2"
                        >
                          Light
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-dark mt-2 me-2"
                        >
                          Dark
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="buttons">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">Buttons Soft</h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn btn-soft-primary"&gt;
                            Primary &lt;/Link&gt;
                          </code>
                        </h6>

                        <Link to="#" className="btn btn-soft-primary mt-2 me-2">
                          Primary
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-soft-secondary mt-2 me-2"
                        >
                          Secondary
                        </Link>
                        <Link to="#" className="btn btn-soft-success mt-2 me-2">
                          Success
                        </Link>
                        <Link to="#" className="btn btn-soft-danger mt-2 me-2">
                          Danger
                        </Link>
                        <Link to="#" className="btn btn-soft-info mt-2 me-2">
                          Info
                        </Link>
                        <Link to="#" className="btn btn-soft-warning mt-2 me-2">
                          Warning
                        </Link>
                        <Link to="#" className="btn btn-soft-light mt-2 me-2">
                          Light
                        </Link>
                        <Link to="#" className="btn btn-soft-dark mt-2 me-2">
                          Dark
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">Buttons Pill Soft</h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn btn-pills
                            btn-soft-primary"&gt; Primary &lt;/Link&gt;
                          </code>
                        </h6>

                        <Link
                          to="#"
                          className="btn btn-pills btn-soft-primary mt-2 me-2"
                        >
                          Primary
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-soft-secondary mt-2 me-2"
                        >
                          Secondary
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-soft-success mt-2 me-2"
                        >
                          Success
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-soft-danger mt-2 me-2"
                        >
                          Danger
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-soft-info mt-2 me-2"
                        >
                          Info
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-soft-warning mt-2 me-2"
                        >
                          Warning
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-soft-light mt-2 me-2"
                        >
                          Light
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-soft-dark mt-2 me-2"
                        >
                          Dark
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">Buttons Outline</h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn
                            btn-outline-primary"&gt; Primary &lt;/Link&gt;
                          </code>
                        </h6>

                        <Link
                          to="#"
                          className="btn btn-outline-primary mt-2 me-2"
                        >
                          Primary
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-secondary mt-2 me-2"
                        >
                          Secondary
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-success mt-2 me-2"
                        >
                          Success
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-danger mt-2 me-2"
                        >
                          Danger
                        </Link>
                        <Link to="#" className="btn btn-outline-info mt-2 me-2">
                          Info
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-warning mt-2 me-2"
                        >
                          Warning
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-light mt-2 me-2"
                        >
                          Light
                        </Link>
                        <Link to="#" className="btn btn-outline-dark mt-2 me-2">
                          Dark
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">Buttons Pill Outline</h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn
                            btn-outline-primary"&gt; Primary &lt;/Link&gt;
                          </code>
                        </h6>

                        <Link
                          to="#"
                          className="btn btn-pills btn-outline-primary mt-2 me-2"
                        >
                          Primary
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-outline-secondary mt-2 me-2"
                        >
                          Secondary
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-outline-success mt-2 me-2"
                        >
                          Success
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-outline-danger mt-2 me-2"
                        >
                          Danger
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-outline-info mt-2 me-2"
                        >
                          Info
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-outline-warning mt-2 me-2"
                        >
                          Warning
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-outline-light mt-2 me-2"
                        >
                          Light
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-pills btn-outline-dark mt-2 me-2"
                        >
                          Dark
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">Button Icons</h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn btn-icon
                            btn-primary"&gt;&lt;i data-feather="facebook"
                            className="fea icon-sm"&gt;&lt;/i&gt;&lt;/Link&gt;
                          </code>
                        </h6>

                        <Link
                          to="#"
                          className="btn btn-icon btn-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-info mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="twitter" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-danger mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="youtube" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-success mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="gitlab" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-secondary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="linkedin" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-warning mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="github" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-info mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="star" className="icons" />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">Outline Button Icons</h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn btn-icon
                            btn-outline-primary"&gt;&lt;i
                            data-feather="facebook" className="fea
                            icon-sm"&gt;&lt;/i&gt;&lt;/Link&gt;
                          </code>
                        </h6>

                        <Link
                          to="#"
                          className="btn btn-icon btn-outline-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-outline-info mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="twitter" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-outline-danger mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="youtube" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-outline-success mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="gitlab" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-outline-secondary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="linkedin" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-outline-warning mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="github" className="icons" />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">Button Pill Icons</h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn btn-icon btn-pills
                            btn-primary"&gt;&lt;i data-feather="facebook"
                            className="fea icon-sm"&gt;&lt;/i&gt;&lt;/Link&gt;
                          </code>
                        </h6>

                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-info mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="twitter" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-danger mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="youtube" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-success mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="gitlab" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-secondary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="linkedin" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-warning mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="github" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-danger mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="heart" className="icons" />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">
                          Outline Button Pill Icons
                        </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn btn-icon btn-pills
                            btn-outline-primary"&gt;&lt;i
                            data-feather="facebook" className="fea
                            icon-sm"&gt;&lt;/i&gt;&lt;/Link&gt;
                          </code>
                        </h6>

                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-outline-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-outline-info mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="twitter" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-outline-danger mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="youtube" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-outline-success mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="gitlab" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-outline-secondary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="linkedin" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-pills btn-outline-warning mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="github" className="icons" />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">Button Sizing</h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn btn-primary
                            btn-sm"&gt; Primary &lt;/Link&gt;
                          </code>
                        </h6>

                        <Link
                          to="#"
                          className="btn btn-sm btn-primary mt-2 me-2"
                        >
                          Small
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-pills btn-primary mt-2 me-2"
                        >
                          Small
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-outline-primary mt-2 me-2"
                        >
                          Small
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-pills btn-outline-primary mt-2 me-2"
                        >
                          Small
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-pills btn-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-outline-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm btn-pills btn-outline-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>

                        <h6 className="text-muted mb-2 mt-4 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="btn btn-primary
                            btn-lg"&gt; Primary &lt;/Link&gt;
                          </code>
                        </h6>

                        <Link
                          to="#"
                          className="btn btn-lg btn-primary mt-2 me-2"
                        >
                          Large
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-lg btn-pills btn-primary mt-2 me-2"
                        >
                          Large
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-lg btn-outline-primary mt-2 me-2"
                        >
                          Large
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-lg btn-pills btn-outline-primary mt-2 me-2"
                        >
                          Large
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-lg btn-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-lg btn-pills btn-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-lg btn-outline-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-lg btn-pills btn-outline-primary mt-2 me-1"
                        >
                          <i>
                            <FeatherIcon icon="facebook" className="icons" />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="dropdowns">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Dropdown </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex. <br />
                          <code className="text-danger">
                            <br />
                            &lt;UncontrolledDropdown&gt; primary
                            <br />
                            &lt;DropdownToggle color="primary" caret&gt;
                            <br />
                            Primary
                            <br />
                            &lt;/DropdownToggle&gt;
                            <br /> &lt;DropdownMenu&gt;
                            <br />
                            &lt;DropdownItem header&gt; Header
                            &lt;/DropdownItem&gt;
                            <br />
                            &lt;DropdownItem disabled&gt; Action
                            &lt;/DropdownItem&gt;
                            <br />
                            &lt;DropdownItem&gt; Another Action
                            &lt;/DropdownItem&gt;
                            <br />
                            &lt;DropdownItem divider /&gt;
                            <br />
                            &lt;DropdownItem&gt; Another Action
                            &lt;/DropdownItem&gt;
                            <br />
                            &lt;/DropdownMenu&gt;
                            <br />
                            &lt;/UncontrolledDropdown&gt;
                          </code>
                        </h6>

                        <ButtonGroup className="me-2 mt-2">
                          <Dropdown
                            isOpen={this.state.primary}
                            toggle={() =>
                              this.setState({ primary: !this.state.primary })
                            }
                          >
                            <DropdownToggle color="primary" caret>
                              Primary{" "}
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem>Some Action</DropdownItem>
                              <DropdownItem disabled>
                                Action (disabled)
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Home</DropdownItem>
                              <DropdownItem>Service</DropdownItem>
                              <DropdownItem>About Us</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>

                        <ButtonGroup className="me-2 mt-2">
                          <Dropdown
                            isOpen={this.state.secondary}
                            toggle={() =>
                              this.setState({
                                secondary: !this.state.secondary,
                              })
                            }
                          >
                            <DropdownToggle color="secondary" caret>
                              Secondary{" "}
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem>Some Action</DropdownItem>
                              <DropdownItem disabled>
                                Action (disabled)
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Home</DropdownItem>
                              <DropdownItem>Service</DropdownItem>
                              <DropdownItem>About Us</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>

                        <ButtonGroup className="me-2 mt-2">
                          <Dropdown
                            isOpen={this.state.success}
                            toggle={() =>
                              this.setState({ success: !this.state.success })
                            }
                          >
                            <DropdownToggle color="success" caret>
                              Success{" "}
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem>Some Action</DropdownItem>
                              <DropdownItem disabled>
                                Action (disabled)
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Home</DropdownItem>
                              <DropdownItem>Service</DropdownItem>
                              <DropdownItem>About Us</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>

                        <ButtonGroup className="me-2 mt-2">
                          <Dropdown
                            isOpen={this.state.warning}
                            toggle={() =>
                              this.setState({ warning: !this.state.warning })
                            }
                          >
                            <DropdownToggle color="warning" caret>
                              Warning{" "}
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem>Some Action</DropdownItem>
                              <DropdownItem disabled>
                                Action (disabled)
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Home</DropdownItem>
                              <DropdownItem>Service</DropdownItem>
                              <DropdownItem>About Us</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>

                        <ButtonGroup className="me-2 mt-2">
                          <Dropdown
                            isOpen={this.state.info}
                            toggle={() =>
                              this.setState({ info: !this.state.info })
                            }
                          >
                            <DropdownToggle color="info" caret>
                              Info{" "}
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem>Some Action</DropdownItem>
                              <DropdownItem disabled>
                                Action (disabled)
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Home</DropdownItem>
                              <DropdownItem>Service</DropdownItem>
                              <DropdownItem>About Us</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>

                        <ButtonGroup className="me-2 mt-2">
                          <Dropdown
                            isOpen={this.state.danger}
                            toggle={() =>
                              this.setState({ danger: !this.state.danger })
                            }
                          >
                            <DropdownToggle color="danger" caret>
                              Danger{" "}
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem>Some Action</DropdownItem>
                              <DropdownItem disabled>
                                Action (disabled)
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Home</DropdownItem>
                              <DropdownItem>Service</DropdownItem>
                              <DropdownItem>About Us</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>

                        <ButtonGroup className="me-2 mt-2">
                          <Dropdown
                            isOpen={this.state.dark}
                            toggle={() =>
                              this.setState({ dark: !this.state.dark })
                            }
                          >
                            <DropdownToggle color="dark" caret>
                              Dark{" "}
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem>Some Action</DropdownItem>
                              <DropdownItem disabled>
                                Action (disabled)
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Home</DropdownItem>
                              <DropdownItem>Service</DropdownItem>
                              <DropdownItem>About Us</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="badges">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Badges </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Badge color="primary"&gt; primary &lt;/Badge&gt;
                          </code>
                        </h6>

                        <Badge color="primary" className="me-2 mt-2">
                          Primary
                        </Badge>
                        <Badge color="secondary" className="me-2 mt-2">
                          Secondary
                        </Badge>
                        <Badge color="success" className="me-2 mt-2">
                          Success
                        </Badge>
                        <Badge color="danger" className="me-2 mt-2">
                          Danger
                        </Badge>
                        <Badge color="warning" className="me-2 mt-2">
                          Warning
                        </Badge>
                        <Badge color="info" className="me-2 mt-2">
                          Info
                        </Badge>
                        <Badge color="Light" className="me-2 mt-2">
                          light
                        </Badge>
                        <Badge color="dark" className="me-2 mt-2">
                          Dark
                        </Badge>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Pill Badges </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Badge color="primary" pill &gt; primary
                            &lt;/Badge&gt;
                          </code>
                        </h6>

                        <Badge color="primary" pill className="me-2 mt-2">
                          Primary
                        </Badge>
                        <Badge color="secondary" pill className="me-2 mt-2">
                          Secondary
                        </Badge>
                        <Badge color="success" pill className="me-2 mt-2">
                          Success
                        </Badge>
                        <Badge color="danger" pill className="me-2 mt-2">
                          Danger
                        </Badge>
                        <Badge color="warning" pill className="me-2 mt-2">
                          Warning
                        </Badge>
                        <Badge color="info" pill className="me-2 mt-2">
                          Info
                        </Badge>
                        <Badge color="Light" pill className="me-2 mt-2">
                          light
                        </Badge>
                        <Badge color="dark" pill className="me-2 mt-2">
                          Dark
                        </Badge>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Outline Badges </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Badge className="badge-outline-primary" pill&gt;
                            primary &lt;/Badge&gt;
                          </code>
                        </h6>

                        <Badge
                          color="none"
                          pill
                          className="badge-outline-primary me-2 mt-2"
                        >
                          Primary
                        </Badge>
                        <Badge
                          color="none"
                          pill
                          className="badge-outline-secondary me-2 mt-2"
                        >
                          Secondary
                        </Badge>
                        <Badge
                          color="none"
                          pill
                          className="badge-outline-danger me-2 mt-2"
                        >
                          Danger
                        </Badge>
                        <Badge
                          color="none"
                          pill
                          className="badge-outline-warning me-2 mt-2"
                        >
                          Warning
                        </Badge>
                        <Badge
                          color="none"
                          pill
                          className="badge-outline-info me-2 mt-2"
                        >
                          Info
                        </Badge>
                        <Badge
                          color="none"
                          pill
                          className="badge-outline-light me-2 mt-2"
                        >
                          Light
                        </Badge>
                        <Badge
                          color="none"
                          pill
                          className="badge-outline-dark me-2 mt-2"
                        >
                          Dark
                        </Badge>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Link Badges </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#" className="badge badge-primary"&gt;
                            primary &lt;/Link&gt;
                          </code>
                        </h6>

                        <Link to="#" className="badge badge-primary me-2 mt-2">
                          Primary
                        </Link>
                        <Link
                          to="#"
                          className="badge badge-secondary me-2 mt-2"
                        >
                          Secondary
                        </Link>
                        <Link to="#" className="badge badge-success me-2 mt-2">
                          Success
                        </Link>
                        <Link to="#" className="badge badge-danger me-2 mt-2">
                          Danger
                        </Link>
                        <Link to="#" className="badge badge-warning me-2 mt-2">
                          Warning
                        </Link>
                        <Link to="#" className="badge badge-info me-2 mt-2">
                          Info
                        </Link>
                        <Link to="#" className="badge badge-light me-2 mt-2">
                          Light
                        </Link>
                        <Link to="#" className="badge badge-dark me-2 mt-2">
                          Dark
                        </Link>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="alerts">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Alert </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Alert color="primary"&gt; A simple primary
                            alert—check it out! &lt;/Alert&gt;
                          </code>
                        </h6>

                        <Alert color="primary">
                          This is a primary alert — check it out!
                        </Alert>
                        <Alert color="secondary">
                          This is a secondary alert — check it out!
                        </Alert>
                        <Alert color="success">
                          This is a success alert — check it out!
                        </Alert>
                        <Alert color="danger">
                          This is a danger alert — check it out!
                        </Alert>
                        <Alert color="warning">
                          This is a warning alert — check it out!
                        </Alert>
                        <Alert color="info">
                          This is a info alert — check it out!
                        </Alert>
                        <Alert color="light">
                          This is a light alert — check it out!
                        </Alert>
                        <Alert color="dark" className="mb-0">
                          This is a dark alert — check it out!
                        </Alert>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Alert Links </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;div className="alert alert-primary"
                            role="alert"&gt; A simple primary alert with
                            &lt;Link to="#"
                            className="alert-link"&gt;&lt;/Link&gt;.
                            &lt;/div&gt;
                          </code>
                        </h6>

                        <Alert color="primary">
                          This is a primary alert with{" "}
                          <Link to="#" className="alert-link">
                            an example link
                          </Link>
                          . Give it a click if you like.
                        </Alert>
                        <Alert color="secondary">
                          This is a secondary alert with{" "}
                          <Link to="#" className="alert-link">
                            an example link
                          </Link>
                          . Give it a click if you like.
                        </Alert>
                        <Alert color="success">
                          This is a success alert with{" "}
                          <Link to="#" className="alert-link">
                            an example link
                          </Link>
                          . Give it a click if you like.
                        </Alert>
                        <Alert color="danger">
                          This is a danger alert with{" "}
                          <Link to="#" className="alert-link">
                            an example link
                          </Link>
                          . Give it a click if you like.
                        </Alert>
                        <Alert color="warning">
                          This is a warning alert with{" "}
                          <Link to="#" className="alert-link">
                            an example link
                          </Link>
                          . Give it a click if you like.
                        </Alert>
                        <Alert color="info">
                          This is a info alert with{" "}
                          <Link to="#" className="alert-link">
                            an example link
                          </Link>
                          . Give it a click if you like.
                        </Alert>
                        <Alert color="light">
                          This is a light alert with{" "}
                          <Link to="#" className="alert-link">
                            an example link
                          </Link>
                          . Give it a click if you like.
                        </Alert>
                        <Alert color="dark">
                          This is a dark alert with{" "}
                          <Link to="#" className="alert-link">
                            an example link
                          </Link>
                          . Give it a click if you like.
                        </Alert>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Additional Content </h4>
                      </div>

                      <div className="p-4">
                        <Alert color="success" className="mb-0" role="alert">
                          <h4 className="alert-heading">Well done!</h4>
                          <p>
                            Aww yeah, you successfully read this important alert
                            message. This example text is going to run a bit
                            longer so that you can see how spacing within an
                            alert works with this kind of content.
                          </p>
                          <p className="mb-0 border-top pt-3">
                            Whenever you need to, be sure to use margin
                            utilities to keep things nice and tidy.
                          </p>
                        </Alert>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Dismissing Alert </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex. <br />
                          <code className="text-danger">
                            &lt;UncontrolledAlert color="success"&gt;
                            &lt;strong&gt;Well done!&lt;/strong&gt; You
                            successfully read this important alert message. &lt;
                            &lt;/UncontrolledAlert&gt;
                          </code>
                        </h6>

                        <UncontrolledAlert color="success">
                          {" "}
                          <strong>Well done!</strong> You successfully read this
                          important alert message.{" "}
                        </UncontrolledAlert>
                        <UncontrolledAlert color="info">
                          {" "}
                          <strong>Heads up!</strong> This alert needs your
                          attention, but it's not super important.{" "}
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning">
                          {" "}
                          <strong>Warning!</strong> Better check yourself,
                          you're not looking too good.{" "}
                        </UncontrolledAlert>
                        <UncontrolledAlert color="danger">
                          {" "}
                          <strong>Oh snap! </strong> Change a few things up and
                          try submitting again.{" "}
                        </UncontrolledAlert>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Advanced Alert </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex. <br />
                          <code className="text-danger">
                            &lt;Alert color="primary"
                            className="alert-pills"&gt; <br />
                            &nbsp;&nbsp; &lt;Badge color="info" pill
                            className="me-1"&gt; New &lt;/Badge&gt; <br />
                            &nbsp;&nbsp; &lt;span className="content"&gt; A
                            Modern primary alert—check it out! &lt;/span&gt;{" "}
                            <br />
                            &lt;/Alert&gt;
                          </code>
                        </h6>

                        <div className="d-block">
                          <Alert color="primary" className="alert-pills">
                            <Badge color="info" pill className="me-1">
                              New
                            </Badge>
                            <span className="content">
                              {" "}
                              A Modern primary alert—check it out!{" "}
                              <i className="mdi mdi-chevron-right"></i>
                            </span>
                          </Alert>
                        </div>

                        <div className="d-block">
                          <Alert color="danger" className="alert-pills">
                            <Badge color="success" pill className="me-1">
                              New
                            </Badge>
                            <span className="content">
                              {" "}
                              A Modern danger alert—check it out!{" "}
                              <i className="mdi mdi-chevron-right"></i>
                            </span>
                          </Alert>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Advanced Outline Alert </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex. <br />
                          <code className="text-danger">
                            &lt;Alert color="none"
                            className="alert-outline-primary alert-pills""&gt;{" "}
                            <br />
                            &nbsp;&nbsp; &lt;Badge color="primary" pill
                            className="me-1"&gt; New &lt;/Badge&gt; <br />
                            &nbsp;&nbsp; &lt;span className="content"&gt; A
                            Modern primary alert—check it out! &lt;/span&gt;{" "}
                            <br />
                            &lt;/Alert&gt;
                          </code>
                        </h6>

                        <div className="d-block">
                          <Alert
                            color="none"
                            className="alert-outline-primary alert-pills"
                          >
                            <Badge color="primary" pill className="me-1">
                              New
                            </Badge>
                            <span className="content">
                              {" "}
                              A Modern primary alert—check it out!{" "}
                              <i className="mdi mdi-chevron-right"></i>
                            </span>
                          </Alert>
                        </div>

                        <div className="d-block">
                          <Alert
                            color="none"
                            className="alert-outline-danger alert-pills"
                          >
                            <Badge color="danger" pill className="me-1">
                              New
                            </Badge>
                            <span className="content">
                              {" "}
                              A Modern danger alert—check it out!{" "}
                              <i className="mdi mdi-chevron-right"></i>
                            </span>
                          </Alert>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="accordions">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0">Accordions</h4>
                      </div>

                      <div className="p-4">
                        <div className="faq-content">
                          <div className="accordion" id="accordionExample">
                            <Card className="border-0 rounded mb-2">
                              <Link
                                to="#"
                                onClick={this.t_col1}
                                className={
                                  this.state.col1
                                    ? "faq position-relative text-primary"
                                    : "faq position-relative text-dark"
                                }
                              >
                                <CardHeader
                                  className="border-0 shadow bg-light p-3"
                                  id="headingOne"
                                >
                                  <h6 className="title mb-0">
                                    {" "}
                                    Accordion #1
                                    <i
                                      className={
                                        this.state.col1
                                          ? "mdi mdi-chevron-up float-end"
                                          : "mdi mdi-chevron-down float-end"
                                      }
                                    ></i>
                                  </h6>
                                </CardHeader>
                              </Link>
                              <Collapse isOpen={this.state.col1}>
                                <CardBody>
                                  <p className="text-muted mb-0 faq-ans">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form.
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>

                            <Card className="border-0 rounded mb-2">
                              <Link
                                to="#"
                                onClick={this.t_col2}
                                className={
                                  this.state.col2
                                    ? "faq position-relative text-primary"
                                    : "faq position-relative text-dark"
                                }
                              >
                                <CardHeader
                                  className="border-0 shadow bg-light p-3"
                                  id="headingTwo"
                                >
                                  <h6 className="title mb-0">
                                    Accordion #2
                                    <i
                                      className={
                                        this.state.col2
                                          ? "mdi mdi-chevron-up float-end"
                                          : "mdi mdi-chevron-down float-end"
                                      }
                                    ></i>
                                  </h6>
                                </CardHeader>
                              </Link>
                              <Collapse isOpen={this.state.col2}>
                                <CardBody>
                                  <p className="text-muted mb-0 faq-ans">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form.
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>

                            <Card className="border-0 rounded mb-2">
                              <Link
                                to="#"
                                onClick={this.t_col3}
                                className={
                                  this.state.col3
                                    ? "faq position-relative text-primary"
                                    : "faq position-relative text-dark"
                                }
                              >
                                <CardHeader
                                  className="border-0 shadow bg-light p-3"
                                  id="headingfive"
                                >
                                  <h6 className="title mb-0">
                                    Accordion #3
                                    <i
                                      className={
                                        this.state.col3
                                          ? "mdi mdi-chevron-up float-end"
                                          : "mdi mdi-chevron-down float-end"
                                      }
                                    ></i>
                                  </h6>
                                </CardHeader>
                              </Link>
                              <Collapse isOpen={this.state.col3}>
                                <CardBody>
                                  <p className="text-muted mb-0 faq-ans">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form.
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="cards">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Cards </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted pb-2">
                          Vertical Card
                          <br />
                          <code className="text-danger">
                            &lt;Card className="shadow rounded border-0
                            overflow-hidden&gt; <br />
                            &nbsp;&nbsp; &lt;img src="images/blog/01.jpg"
                            className="img-fluid" alt="&gt; <br />
                            &nbsp;&nbsp; &lt;CardBody&gt; <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; &lt;h5
                            className="card-title"&gt;Saas & Software :
                            Landrick&lt;/h5&gt; <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; &lt;p className="text-muted
                            mb-0"&gt;Due to its widespread use as filler text
                            for layouts, non-readability is of great
                            importance&lt;/p&gt; <br />
                            &nbsp;&nbsp; &lt;/CardBody&gt; <br />
                            &lt;/Card&gt;
                          </code>
                        </h6>

                        <Row>
                          <Col lg={6} xs={12} className="mt-4 pt-2">
                            <Card className="shadow rounded border-0 overflow-hidden">
                              <img
                                src={blog1}
                                className="img-fluid"
                                alt="Landrick"
                              />
                              <CardBody>
                                <h5 className="card-title">
                                  Saas & Software : Landrick
                                </h5>
                                <p className="text-muted">
                                  Due to its widespread use as filler text for
                                  layouts, non-readability is of great
                                  importance
                                </p>
                                <Link to="#" className="text-primary">
                                  Read More{" "}
                                  <i>
                                    <FeatherIcon
                                      icon="chevron-right"
                                      className="fea icon-sm"
                                    />
                                  </i>
                                </Link>
                              </CardBody>
                            </Card>
                          </Col>

                          <Col lg={6} xs={12} className="mt-4 pt-2">
                            <Card className="shadow rounded border-0 overflow-hidden">
                              <CardBody>
                                <h5 className="card-title">
                                  Saas & Software : Landrick
                                </h5>
                                <p className="text-muted">
                                  Due to its widespread use as filler text for
                                  layouts, non-readability is of great
                                  importance
                                </p>
                                <Link to="#" className="text-primary">
                                  Read More{" "}
                                  <i>
                                    <FeatherIcon
                                      icon="chevron-right"
                                      className="fea icon-sm"
                                    />
                                  </i>
                                </Link>
                              </CardBody>
                              <img
                                src={blog1}
                                className="img-fluid"
                                alt="Landrick"
                              />
                            </Card>
                          </Col>
                        </Row>

                        <div className="mt-4 pt-4 border-top">
                          <h6 className="text-muted pb-2">
                            Horizontal Card
                            <br />
                            <code className="text-danger">
                              &lt;Card className="shadow rounded border-0
                              overflow-hidden&gt; <br />
                              &nbsp;&nbsp; &lt;img src="images/blog/01.jpg"
                              className="img-fluid" alt="&gt; <br />
                              &nbsp;&nbsp; &lt;CardBody&gt; <br />
                              &nbsp;&nbsp;&nbsp;&nbsp; &lt;h5
                              className="card-title"&gt;Saas & Software :
                              Landrick&lt;/h5&gt; <br />
                              &nbsp;&nbsp;&nbsp;&nbsp; &lt;p
                              className="text-muted mb-0"&gt;Due to its
                              widespread use as filler text for layouts,
                              non-readability is of great importance&lt;/p&gt;{" "}
                              <br />
                              &nbsp;&nbsp; &lt;/CardBody&gt; <br />
                              &lt;/Card&gt;
                            </code>
                          </h6>
                        </div>
                        <Row>
                          <Col lg={12} className="mt-4 pt-2">
                            <Card className="shadow rounded border-0 overflow-hidden">
                              <Row className="g-0">
                                <Col mg={5}>
                                  <img
                                    src={work14}
                                    className="img-fluid"
                                    alt="..."
                                  />
                                </Col>
                                <Col md={7}>
                                  <CardBody>
                                    <h5 className="card-title">
                                      Saas & Software : Landrick
                                    </h5>
                                    <CardText>
                                      This is a wider card with supporting text
                                      below as a natural lead-in to additional
                                      content. This content is a little bit
                                      longer.
                                    </CardText>
                                    <CardText>
                                      <small className="text-muted">
                                        Last updated 3 mins ago
                                      </small>
                                    </CardText>
                                  </CardBody>
                                </Col>
                              </Row>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="forms">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Forms </h4>
                      </div>

                      <div className="p-4">
                        <Form>
                          <Row>
                            <Col md={6}>
                              <FormGroup className="position-relative">
                                <Label className="form-label">
                                  Your Name{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <i>
                                  <FeatherIcon
                                    icon="user"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                                <Input
                                  name="name"
                                  id="name"
                                  type="text"
                                  className="form-control ps-5"
                                  placeholder="First Name :"
                                />
                              </FormGroup>
                            </Col>
                            <Col md={6}>
                              <FormGroup className="position-relative">
                                <Label className="form-label">
                                  Your Email{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <i>
                                  <FeatherIcon
                                    icon="mail"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                                <Input
                                  name="email"
                                  id="email"
                                  type="email"
                                  className="form-control ps-5"
                                  placeholder="Your email :"
                                />
                              </FormGroup>
                            </Col>
                            <Col md={12}>
                              <FormGroup className="position-relative">
                                <Label className="form-label">Subject</Label>
                                <i>
                                  <FeatherIcon
                                    icon="book"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                                <Input
                                  name="subject"
                                  id="subject"
                                  className="form-control ps-5"
                                  placeholder="Your subject :"
                                />
                              </FormGroup>
                            </Col>
                            <Col md={12}>
                              <FormGroup className="position-relative">
                                <Label className="form-label">Comments</Label>
                                <i>
                                  <FeatherIcon
                                    icon="message-circle"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                                <textarea
                                  name="comments"
                                  id="comments"
                                  rows="4"
                                  className="form-control ps-5"
                                  placeholder="Your Message :"
                                ></textarea>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={12}>
                              <Input
                                type="submit"
                                id="submit"
                                name="send"
                                className="btn btn-primary"
                                value="Send Message"
                              />
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="checkboxes">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Checkboxes </h4>
                      </div>

                      <div className="p-4">
                        <div className="form-check form-check-inline">
                          <FormGroup className="mb-0">
                            <div className="custom-control custom-checkbox">
                              <Input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <Label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                One
                              </Label>
                            </div>
                          </FormGroup>
                        </div>

                        <div className="form-check form-check-inline">
                          <FormGroup className="mb-0">
                            <div className="custom-control custom-checkbox">
                              <Input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck2"
                              />
                              <Label
                                className="custom-control-label"
                                htmlFor="customCheck2"
                              >
                                Two
                              </Label>
                            </div>
                          </FormGroup>
                        </div>

                        <div className="form-check form-check-inline">
                          <FormGroup className="mb-0">
                            <div className="custom-control custom-checkbox">
                              <Input
                                type="checkbox"
                                className="custom-control-input"
                                disabled
                                id="customCheck3"
                              />
                              <Label
                                className="custom-control-label"
                                htmlFor="customCheck3"
                              >
                                Disabled
                              </Label>
                            </div>
                          </FormGroup>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="radio-buttons">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Radio Buttons </h4>
                      </div>

                      <div className="p-4">
                        <div className="custom-control custom-radio custom-control-inline">
                          <FormGroup className="mb-0">
                            <Input
                              type="radio"
                              className="custom-control-input"
                              id="customRadio1"
                              name="customRadio"
                            />
                            <Label
                              className="custom-control-label"
                              htmlFor="customRadio1"
                            >
                              Yes
                            </Label>
                          </FormGroup>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <FormGroup className="mb-0">
                            <Input
                              type="radio"
                              className="custom-control-input"
                              id="customRadio2"
                              name="customRadio"
                            />
                            <Label
                              className="custom-control-label"
                              htmlFor="customRadio2"
                            >
                              No
                            </Label>
                          </FormGroup>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <FormGroup className="mb-0">
                            <Input
                              type="radio"
                              className="custom-control-input"
                              id="customRadio3"
                              name="customRadio"
                              disabled
                            />
                            <Label
                              className="custom-control-label"
                              htmlFor="customRadio3"
                            >
                              Disabled
                            </Label>
                          </FormGroup>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="switches">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Switches Button </h4>
                      </div>

                      <div className="p-4">
                        <div className="custom-control custom-switch">
                          <FormGroup className="mb-0">
                            <CustomInput
                              type="switch"
                              label="Toggle this switch element"
                              id="customSwitch1"
                            />
                          </FormGroup>
                        </div>
                        <div className="custom-control custom-switch">
                          <FormGroup className="mb-0">
                            <CustomInput
                              type="switch"
                              label="Disabled switch element"
                              disabled
                              id="customSwitch2"
                            />
                          </FormGroup>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="select-box">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Form Select Box </h4>
                      </div>

                      <div className="p-4">
                        <FormGroup className="mb-0">
                          <CustomInput
                            name="customSelect"
                            id="customSelect"
                            type="select"
                            className="form-control"
                          >
                            <option defaultValue>Location</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">&Aring;land Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                          </CustomInput>
                        </FormGroup>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="subscribe-forms">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Subscribe Form </h4>
                      </div>

                      <div className="p-4">
                        <Form>
                          <FormGroup className="mb-0 position-relative">
                            <InputGroup>
                              <Input
                                name="email"
                                id="email2"
                                type="email"
                                className="form-control"
                                placeholder="Your email :"
                                required
                                aria-describedby="newssubscribebtn"
                              />
                              <InputGroupAddon addonType="append">
                                <Button
                                  color="primary"
                                  className="submitBnt"
                                  type="submit"
                                  id="newssubscribebtn"
                                >
                                  Subscribe
                                </Button>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="map">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Google Map </h4>
                      </div>

                      <div className="p-4">
                        <div className="map">
                          <iframe
                            title="uniqueTitle"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            className="rounded"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="breadcrumbs">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Breadcrumb </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex. <br />
                          <code className="text-danger">
                            <br /> &nbsp; &lt;Breadcrumb aria-label="breadcrumb"
                            className="d-inline-block" listClassName="bg-white
                            rounded shadow mb-0"&gt;
                            <br /> &nbsp; &nbsp; &lt;BreadcrumbItem&gt;&lt;Link
                            to="#"&gt;Home&lt;/Link&gt;&lt;/BreadcrumbItem&gt;
                            <br /> &nbsp; &nbsp; &lt;BreadcrumbItem&gt;&lt;Link
                            to=="#"&gt;Pages&lt;/Link&gt;&lt;/BreadcrumbItem&gt;
                            <br /> &nbsp; &nbsp; &lt;BreadcrumbItem
                            active&gt;Components&lt;/BreadcrumbItem&gt;
                            <br /> &nbsp; &lt;/ul&gt;{" "}
                          </code>
                        </h6>

                        <Breadcrumb
                          aria-label="breadcrumb"
                          className="d-inline-block"
                          listClassName="bg-white rounded shadow mb-0"
                        >
                          <BreadcrumbItem>
                            <a href="index">Landrick</a>
                          </BreadcrumbItem>
                          <BreadcrumbItem>
                            <Link to="#">Docs</Link>
                          </BreadcrumbItem>
                          <BreadcrumbItem active>Components</BreadcrumbItem>
                        </Breadcrumb>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="pagination">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Pagination </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex. <br />
                          <code className="text-danger">
                            &lt;Pagination listClassName="mb-0"&gt;
                            <br />
                            &nbsp;&nbsp;
                            &lt;PaginationItem&gt;&lt;PaginationLink href="#"
                            previous&gt;Prev&lt;/PaginationLink&gt;&lt;/PaginationItem&gt;
                            <br />
                            &nbsp;&nbsp; &lt;PaginationItem
                            active&gt;&lt;PaginationLink
                            href="#"&gt;1&lt;/PaginationLink&gt;&lt;/PaginationItem&gt;
                            <br />
                            &nbsp;&nbsp;
                            &lt;PaginationItem&gt;&lt;PaginationLink
                            href="#"&gt;2&lt;/PaginationLink&gt;&lt;/PaginationItem&gt;
                            <br />
                            &nbsp;&nbsp;
                            &lt;PaginationItem&gt;&lt;PaginationLink
                            href="#"&gt;3&lt;/PaginationLink&gt;&lt;/PaginationItem&gt;
                            <br />
                            &nbsp;&nbsp;
                            &lt;PaginationItem&gt;&lt;PaginationLink href="#"
                            next&gt;Next&lt;/PaginationLink&gt;&lt;/PaginationItem&gt;
                            <br />
                            &lt;/Pagination&gt;
                            <br />
                          </code>
                        </h6>

                        <Pagination listClassName="mb-0">
                          <PaginationItem>
                            <PaginationLink href="#" previous>
                              Prev
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem active>
                            <PaginationLink href="#">1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#" next>
                              Next
                            </PaginationLink>
                          </PaginationItem>
                        </Pagination>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="avatar">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Default Avatars </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;img src="images/home/01.jpg"
                            className="img-fluid avatar avatar-ex-sm
                            rounded"&gt;
                          </code>
                        </h6>

                        <img
                          src={client05}
                          className="img-fluid avatar avatar-ex-sm me-2 rounded"
                          alt="Landrick"
                        />
                        <img
                          src={client05}
                          className="img-fluid avatar avatar-md-sm me-2 rounded"
                          alt="Landrick"
                        />
                        <img
                          src={client05}
                          className="img-fluid avatar avatar-small me-2 rounded"
                          alt="Landrick"
                        />
                        <img
                          src={client05}
                          className="img-fluid avatar avatar-medium me-2 rounded"
                          alt="Landrick"
                        />
                        <img
                          src={client05}
                          className="img-fluid avatar avatar-large mt-3 mt-sm-0 me-2 rounded"
                          alt="Landrick"
                        />
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Circle Avatars </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;img src="images/home/01.jpg"
                            className="img-fluid avatar avatar-ex-sm
                            rounded-circle"&gt;
                          </code>
                        </h6>

                        <img
                          src={client05}
                          className="img-fluid avatar avatar-ex-sm me-2 rounded-circle"
                          alt="Landrick"
                        />
                        <img
                          src={client05}
                          className="img-fluid avatar avatar-md-sm me-2 rounded-circle"
                          alt="Landrick"
                        />
                        <img
                          src={client05}
                          className="img-fluid avatar avatar-small me-2 rounded-circle"
                          alt="Landrick"
                        />
                        <img
                          src={client05}
                          className="img-fluid avatar avatar-medium me-2 rounded-circle"
                          alt="Landrick"
                        />
                        <img
                          src={client05}
                          className="img-fluid avatar avatar-large mt-3 mt-sm-0 me-2 rounded-circle"
                          alt="Landrick"
                        />
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="nav-tabs">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Nav Tabs </h4>
                      </div>

                      <div className="p-4">
                        <Row>
                          <Col lg={12}>
                            <Nav
                              pills
                              justified
                              className="flex-column flex-sm-row rounded"
                              id="pills-tab"
                              role="tablist"
                            >
                              <NavItem>
                                <NavLink
                                  className={
                                    classnames({
                                      active: this.state.activeTab === "1",
                                    }) + " rounded"
                                  }
                                  onClick={() => {
                                    this.toggle("1");
                                  }}
                                >
                                  <div className="text-center pt-1 pb-1">
                                    <h4 className="title font-weight-normal mb-0">
                                      Home
                                    </h4>
                                  </div>
                                </NavLink>
                              </NavItem>

                              <NavItem>
                                <NavLink
                                  className={
                                    classnames({
                                      active: this.state.activeTab === "2",
                                    }) + " rounded"
                                  }
                                  onClick={() => {
                                    this.toggle("2");
                                  }}
                                >
                                  <div className="text-center pt-1 pb-1">
                                    <h4 className="title font-weight-normal mb-0">
                                      About
                                    </h4>
                                  </div>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={
                                    classnames({
                                      active: this.state.activeTab === "3",
                                    }) + " rounded"
                                  }
                                  onClick={() => {
                                    this.toggle("3");
                                  }}
                                >
                                  <div className="text-center pt-1 pb-1">
                                    <h4 className="title font-weight-normal mb-0">
                                      Service
                                    </h4>
                                  </div>
                                </NavLink>
                              </NavItem>
                            </Nav>
                          </Col>
                        </Row>

                        <Row className="pt-2">
                          <Col xs="12">
                            <TabContent activeTab={this.state.activeTab}>
                              <TabPane tabId="1" className="p-3">
                                <p className="text-muted mb-0">
                                  You can combine all the Landrick templates
                                  into a single one, you can take a component
                                  from the Application theme and use it in the
                                  Website.
                                </p>
                              </TabPane>
                              <TabPane tabId="2" className="p-3">
                                <p className="text-muted mb-0">
                                  Can combine all the Landrick templates into a
                                  single one, you can take a component from the
                                  Application theme and use it in the Website.
                                </p>
                              </TabPane>
                              <TabPane tabId="3" className="p-3">
                                <p className="text-muted mb-0">
                                  You can combine all the Landrick templates
                                  into a single one, you can take a component
                                  from the Application theme and use it in the
                                  Website.
                                </p>
                              </TabPane>
                            </TabContent>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="progressbar">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Progressbar </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">
                          Ex. <br />
                          <code className="text-danger">
                            &lt;div className="progress-box"&gt;
                            <br />
                            &nbsp;&nbsp; &lt;h6 className="title text-muted"&gt;
                            Progress&lt;/h6&gt;
                            <br />
                            &nbsp;&nbsp; &lt;Progress value= &#123;84&#125;
                            color="primary" barClassName="position-relative"&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; &lt;div
                            className="progress-value d-block text-muted
                            h6"&gt;84%&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;
                            <br />
                            &nbsp;&nbsp; &lt;/Progress&gt;
                            <br />
                            &lt;/div&gt;
                          </code>
                        </h6>

                        <div className="progress-box">
                          <h6 className="title text-muted">WordPress</h6>
                          <Progress
                            value={84}
                            color="primary"
                            barClassName="position-relative"
                          >
                            <div className="progress-value d-block text-muted h6">
                              84%
                            </div>
                          </Progress>
                        </div>
                        <div className="progress-box mt-4">
                          <h6 className="title text-muted">PHP / MYSQL</h6>
                          <Progress
                            value={75}
                            color="primary"
                            barClassName="position-relative"
                          >
                            <div className="progress-value d-block text-muted h6">
                              75%
                            </div>
                          </Progress>
                        </div>
                        <div className="progress-box mt-4">
                          <h6 className="title text-muted">
                            Angular / JavaScript
                          </h6>
                          <Progress
                            value={79}
                            color="primary"
                            barClassName="position-relative"
                          >
                            <div className="progress-value d-block text-muted h6">
                              79%
                            </div>
                          </Progress>
                        </div>
                        <div className="progress-box mt-4">
                          <h6 className="title text-muted">HTML</h6>
                          <Progress
                            value={95}
                            color="primary"
                            barClassName="position-relative"
                          >
                            <div className="progress-value d-block text-muted h6">
                              95%
                            </div>
                          </Progress>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="tooltips">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Tooltip </h4>
                      </div>

                      <div className="p-4">
                        <h6 className="text-muted mb-2 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;Link to="#"className="btn btn-primary me-2 mb-2"
                            data-toggle="tooltip" data-placement="top"
                            title="Top Tooltip" alt=""&gt; Top Tooltip
                            &lt;/Link&gt;
                          </code>
                        </h6>

                        <Link
                          to="#"
                          className="btn btn-primary me-2 mb-2"
                          id="tooltipTop"
                        >
                          Top
                        </Link>
                        <UncontrolledTooltip
                          placement="top"
                          target="tooltipTop"
                        >
                          Top
                        </UncontrolledTooltip>

                        <Link
                          to="#"
                          className="btn btn-primary me-2 mb-2"
                          id="tooltipLeft"
                        >
                          Left
                        </Link>
                        <UncontrolledTooltip
                          placement="left"
                          target="tooltipLeft"
                        >
                          Left
                        </UncontrolledTooltip>

                        <Link
                          to="#"
                          className="btn btn-primary me-2 mb-2"
                          id="tooltipBottom"
                        >
                          Bottom
                        </Link>
                        <UncontrolledTooltip
                          placement="bottom"
                          target="tooltipBottom"
                        >
                          Bottom
                        </UncontrolledTooltip>

                        <Link
                          to="#"
                          className="btn btn-primary me-2 mb-2"
                          id="tooltipRight"
                        >
                          Right
                        </Link>
                        <UncontrolledTooltip
                          placement="right"
                          target="tooltipRight"
                        >
                          Right
                        </UncontrolledTooltip>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="modals">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Modal </h4>
                      </div>

                      <div className="p-4">
                        <Link
                          to="#"
                          onClick={this.togglemodal}
                          className="btn btn-primary"
                        >
                          {" "}
                          Click Here
                        </Link>
                      </div>

                      <Modal
                        isOpen={this.state.modal}
                        role="dialog"
                        autoFocus={true}
                        centered={true}
                      >
                        <ModalHeader toggle={this.togglemodal}>
                          Modal title
                        </ModalHeader>
                        <ModalBody>
                          <div className="bg-white p-3 rounded box-shadow">
                            <p className="text-muted mb-0">
                              Dummy text is also used to demonstrate the
                              appearance of different typefaces and layouts, and
                              in general the content of dummy text is
                              nonsensical. Due to its widespread use as filler
                              text for layouts, non-readability is of great
                              importance: human perception is tuned to recognize
                              certain patterns and repetitions in texts. If the
                              distribution of letters and 'words' is random, the
                              reader will not be distracted from making a
                              neutral judgement on the visual impact and
                              readability of the typefaces (typography), or the
                              distribution of text on the page (layout or type
                              area). For this reason, dummy text usually
                              consists of a more or less random series of words
                              or syllables. This prevents repetitive patterns
                              from impairing the overall visual impression and
                              facilitates the comparison of different typefaces.
                              Furthermore, it is advantageous when the dummy
                              text is relatively realistic so that the layout
                              impression of the final publication is not
                              compromised.
                            </p>
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="secondary" onClick={this.togglemodal}>
                            Close
                          </Button>
                          <Button color="primary">Save Changes</Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="tables">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Table </h4>
                      </div>

                      <div className="p-4">
                        <div className="table-responsive bg-white shadow rounded">
                          <Table className="mb-0 table-center">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Harry</td>
                                <td>Potter</td>
                                <td>@hpt</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="blockquotes">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Blockquotes </h4>
                      </div>

                      <div className="p-4">
                        <blockquote className="blockquote p-3 mb-0">
                          <p className="text-muted mb-0 fst-italic">
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or
                            randomised words which don't look even slightly
                            believable. "
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </Col>

                  <Col className="mt-4 pt-2" id="icons">
                    <div className="component-wrapper rounded shadow">
                      <div className="p-4 border-bottom">
                        <h4 className="title mb-0"> Icons </h4>
                      </div>

                      <div className="p-4">
                        <h6>Feather Icons</h6>
                        <p className="text-muted">
                          There are 280+ feather icons and you can get all icons
                          info from here:{" "}
                          <a
                            href="https://feathericons.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <code className="text-primary">
                              https://feathericons.com/
                            </code>
                          </a>
                        </p>
                        <h6 className="text-muted mb-4 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;i&gt;&lt;FeatherIcon icon="user" className="fea
                            icon-sm" /&gt; &lt;/i&gt;
                          </code>
                        </h6>

                        <i>
                          <FeatherIcon
                            icon="user"
                            className="fea icon-ex-md me-2"
                          />
                        </i>
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-ex-md me-2"
                          />
                        </i>
                        <i>
                          <FeatherIcon
                            icon="map-pin"
                            className="fea icon-ex-md me-2"
                          />
                        </i>
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-ex-md me-2"
                          />
                        </i>
                        <i>
                          <FeatherIcon
                            icon="camera"
                            className="fea icon-ex-md me-2"
                          />
                        </i>
                        <i>
                          <FeatherIcon
                            icon="mail"
                            className="fea icon-ex-md me-2"
                          />
                        </i>

                        <h6 className="mt-4">Material Design Icons</h6>
                        <p className="text-muted">
                          There are 4400+ Material Design icons and you can get
                          all icons info from here:{" "}
                          <a
                            href="https://materialdesignicons.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <code className="text-primary">
                              https://materialdesignicons.com/
                            </code>
                          </a>
                        </p>
                        <h6 className="text-muted mb-4 pb-2">
                          Ex.{" "}
                          <code className="text-danger">
                            &lt;i className="mdi mdi-home"&gt; &lt;/i&gt;
                          </code>
                        </h6>

                        <i className="mdi mdi-home h4 me-2"></i>
                        <i className="mdi mdi-facebook h4 me-2"></i>
                        <i className="mdi mdi-chevron-tight h4 me-2"></i>
                        <i className="mdi mdi-camera-image h4 me-2"></i>
                        <i className="mdi mdi-car-light-high h4 me-2"></i>
                        <i className="mdi mdi-silverware-fork-knife h4 me-2"></i>

                        <h6 className="mt-4">Flaticon Icons</h6>
                        <p className="text-muted">
                          There are Flaticon icons and you can get all icons
                          info from here:{" "}
                          <a
                            href="https://www.flaticon.com/packs/basic-icon"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <code className="text-primary">
                              https://www.flaticon.com/packs/basic-icon
                            </code>
                          </a>
                        </p>

                        <img
                          src={Email}
                          height="50"
                          className="me-3"
                          alt="Landrick"
                        />
                        <img
                          src={bitcoin}
                          height="50"
                          className="me-3"
                          alt="Landrick"
                        />
                        <img
                          src={calendar}
                          height="50"
                          className="me-3"
                          alt="Landrick"
                        />
                        <img
                          src={location}
                          height="50"
                          className="me-3"
                          alt="Landrick"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Components;
