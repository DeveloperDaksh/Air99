import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Progress,
  Card,
  CardBody,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalHeader,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import imgbg from "../../../assets/images/account/bg.png";
import profile from "../../../assets/images/client/05.jpg";
import client1 from "../../../assets/images/client/01.jpg";
import client2 from "../../../assets/images/client/02.jpg";
import client3 from "../../../assets/images/client/03.jpg";
import client4 from "../../../assets/images/client/04.jpg";
import client5 from "../../../assets/images/client/05.jpg";
import client6 from "../../../assets/images/client/06.jpg";
import client7 from "../../../assets/images/client/07.jpg";
import client8 from "../../../assets/images/client/08.jpg";

class PageMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [
        {
          id: 1,
          img: client1,
          title: "Calvin Carlo",
          desc:
            "This is required when, for example, the final text is not yet available. Dummy",
        },
        {
          id: 2,
          img: client2,
          title: "Miriam Walya",
          desc:
            "This is required when, for example, the final text is not yet available. Dummy",
        },
        {
          id: 3,
          img: client3,
          title: "Jenelia Parker",
          desc:
            "This is required when, for example, the final text is not yet available. Dummy",
        },
        {
          id: 4,
          img: client4,
          title: "Jack Deo",
          desc:
            "This is required when, for example, the final text is not yet available. Dummy",
        },
        {
          id: 5,
          img: client5,
          title: "Marya Joseph",
          desc:
            "This is required when, for example, the final text is not yet available. Dummy",
        },
        {
          id: 6,
          img: client6,
          title: "Maninder Khan",
          desc:
            "This is required when, for example, the final text is not yet available. Dummy",
        },
        {
          id: 7,
          img: client7,
          title: "Pitambar Das",
          desc:
            "This is required when, for example, the final text is not yet available. Dummy",
        },
        {
          id: 8,
          img: client8,
          title: "Cristino Murfy",
          desc:
            "This is required when, for example, the final text is not yet available. Dummy",
        },
      ],
      widgets: [
        {
          id: 1,
          icon: "uil uil-dashboard",
          className: "navbar-item account-menu px-0",
          title: "Profile",
          link: "/page-profile",
        },
        {
          id: 2,
          icon: "uil uil-users-alt",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Members",
          link: "/page-members",
        },
        {
          id: 3,
          icon: "uil uil-file",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Portfolio",
          link: "/page-works",
        },
        {
          id: 4,
          icon: "uil uil-envelope-star",
          className: "navbar-item account-menu px-0 mt-2 active",
          title: "Messages",
          link: "/page-messages",
        },
        {
          id: 5,
          icon: "uil uil-transaction",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Payments",
          link: "/page-payments",
        },
        {
          id: 6,
          icon: "uil uil-setting",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Settings",
          link: "/page-profile-edit",
        },
        {
          id: 7,
          icon: "uil uil-dashboard",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Logout",
          link: "/auth-login-three",
        },
      ],
      modal: false,
      dropdownOpen: false,
      selectedContacts: [],
    };
    this.togglemodal.bind(this);
    this.toggleDropdown.bind(this);
    this.onChangeCheckbox.bind(this);
  }
  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    document.getElementById("buyButton").className = "btn btn-light";
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
      document.getElementById("buyButton").className = "btn btn-primary";
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
    }
  };

  onChangeCheckbox = (selected, contact) => {
    let modifiedselectedContacts = [...this.state.selectedContacts];
    if (selected) {
      modifiedselectedContacts.push(contact);
      this.setState({
        selectedContacts: modifiedselectedContacts,
      });
    } else {
      let otherContacts = modifiedselectedContacts.filter(
        (r) => r.id !== contact.id
      );
      this.setState({
        selectedContacts: otherContacts,
      });
    }
  };

  onSelectAll = (checked) => {
    if (checked) {
      this.setState({
        selectedContacts: this.state.members,
      });
    } else {
      this.setState({
        selectedContacts: [],
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <section
          className="bg-profile d-table w-100 bg-primary"
          style={{ background: `url(${imgbg}) center center` }}
        >
          <Container>
            <Row>
              <Col lg="12">
                <Card
                  className="public-profile border-0 rounded shadow"
                  style={{ zIndex: "1" }}
                >
                  <CardBody>
                    <Row className="align-items-center">
                      <Col lg="2" md="3" className="text-md-start text-center">
                        <img
                          src={profile}
                          className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                          alt=""
                        />
                      </Col>

                      <Col lg="10" md="9">
                        <Row className="align-items-end">
                          <Col
                            md="7"
                            className="text-md-start text-center mt-4 mt-sm-0"
                          >
                            <h3 className="title mb-0">Krista Joseph</h3>
                            <small className="text-muted h6 me-2">
                              Web Developer
                            </small>
                            <ul className="list-inline mb-0 mt-3">
                              <li className="list-inline-item me-2">
                                <Link
                                  to="#"
                                  className="text-muted"
                                  title="Linkedin"
                                >
                                  <i>
                                    <FeatherIcon
                                      icon="instagram"
                                      className="fea icon-sm me-2"
                                    />
                                  </i>
                                  krista_joseph
                                </Link>
                              </li>
                              <li className="list-inline-item ms-1">
                                <Link
                                  to="#"
                                  className="text-muted"
                                  title="Skype"
                                >
                                  <i>
                                    <FeatherIcon
                                      icon="linkedin"
                                      className="fea icon-sm me-2"
                                    />
                                  </i>
                                  krista_joseph
                                </Link>
                              </li>
                            </ul>
                          </Col>
                          <Col md="5" className="text-md-end text-center">
                            <ul className="list-unstyled social-icon social mb-0 mt-4">
                              <li className="list-inline-item me-1">
                                <Link to="#" className="rounded">
                                  <i>
                                    <FeatherIcon
                                      icon="user-plus"
                                      className="fea icon-sm fea-social"
                                    />
                                  </i>
                                </Link>
                              </li>
                              <li className="list-inline-item me-1">
                                <Link to="#" className="rounded">
                                  <i>
                                    <FeatherIcon
                                      icon="message-circle"
                                      className="fea icon-sm fea-social"
                                    />
                                  </i>
                                </Link>
                              </li>
                              <li className="list-inline-item me-1">
                                <Link to="#" className="rounded">
                                  <i>
                                    <FeatherIcon
                                      icon="bell"
                                      className="fea icon-sm fea-social"
                                    />
                                  </i>
                                </Link>
                              </li>
                              <li className="list-inline-item me-1">
                                <Link
                                  to="/page-profile-edit"
                                  className="rounded"
                                >
                                  <i>
                                    <FeatherIcon
                                      icon="settings"
                                      className="fea icon-sm fea-social"
                                    />
                                  </i>
                                </Link>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section mt-60">
          <Container className="mt-lg-3">
            <Row>
              <Col lg="4" md="6" xs="12" className="d-lg-block d-none">
                <div className="sidebar sticky-bar p-4 rounded shadow">
                  <div className="widget">
                    <h5 className="widget-title">Followers :</h5>
                    <div className="row mt-4">
                      <div className="col-6 text-center">
                        <FeatherIcon
                          icon="user-plus"
                          className="fea icon-ex-md text-primary mb-1"
                        />
                        <h5 className="mb-0">2588</h5>
                        <p className="text-muted mb-0">Followers</p>
                      </div>

                      <div className="col-6 text-center">
                        <FeatherIcon
                          icon="users"
                          className="fea icon-ex-md text-primary mb-1"
                        />
                        <h5 className="mb-0">454</h5>
                        <p className="text-muted mb-0">Following</p>
                      </div>
                    </div>
                  </div>
                  <div className="widget mt-4 pt-2">
                    <h5 className="widget-title">Projects :</h5>
                    <div className="progress-box mt-4">
                      <h6 className="title text-muted">Progress</h6>
                      <Progress
                        value={50}
                        color="primary"
                        barClassName="position-relative"
                      >
                        <div className="progress-value d-block text-muted h6">
                          24 / 48
                        </div>
                      </Progress>
                    </div>
                  </div>

                  <div className="widget mt-4">
                    <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                      {this.state.widgets.map((widget, key) => (
                        <li className={widget.className} key={key}>
                          <Link to={widget.link} className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                            <span className="h4 mb-0">
                              <i className={widget.icon}></i>
                            </span>
                            <h6 className="mb-0 ms-2">{widget.title}</h6>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="widget mt-4 pt-2">
                    <h5 className="widget-title">Follow me :</h5>
                    <ul className="list-unstyled social-icon mb-0 mt-4">
                      <li className="list-inline-item me-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="facebook"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item me-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="instagram"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item me-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="twitter"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item me-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item me-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="github"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item me-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="youtube"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                      <li className="list-inline-item me-1">
                        <Link to="#" className="rounded">
                          <i>
                            <FeatherIcon
                              icon="gitlab"
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={8} xs={12}>
                <div className="rounded shadow p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">Messages:</h5>
                    <Link
                      to="#"
                      className="btn btn-primary"
                      onClick={this.togglemodal}
                    >
                      <i>
                        <FeatherIcon icon="plus" className="fea icon-sm" />
                      </i>{" "}
                      Compose
                    </Link>
                  </div>
                  <Modal
                    tabIndex="-1"
                    centered
                    isOpen={this.state.modal}
                    toggle={this.togglemodal}
                    contentClassName="rounded shadow border-0"
                  >
                    <ModalHeader toggle={this.togglemodal}>
                      New Message
                    </ModalHeader>
                    <ModalBody className="p-4">
                      <Form>
                        <Row>
                          <Col md={12}>
                            <FormGroup>
                              <Label className="form-label">
                                Your Name <span className="text-danger">*</span>
                              </Label>
                              <div className="position-relative">
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                                <Input
                                  name="name"
                                  id="name"
                                  type="text"
                                  className="form-control ps-5"
                                  placeholder="First Name :"
                                />
                              </div>
                            </FormGroup>
                          </Col>
                          <Col md={12}>
                            <FormGroup>
                              <Label className="form-label">Subject</Label>
                              <div className="position-relative">
                                <FeatherIcon
                                  icon="book"
                                  className="fea icon-sm icons"
                                />
                                <input
                                  name="subject"
                                  id="subject"
                                  className="form-control ps-5"
                                  placeholder="Your subject :"
                                />
                              </div>
                            </FormGroup>
                          </Col>
                          <Col md={12}>
                            <FormGroup className="mb-0">
                              <Label className="form-label">Comments</Label>
                              <div className="position-relative">
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                                <textarea
                                  name="comments"
                                  id="comments"
                                  rows="4"
                                  className="form-control ps-5"
                                  placeholder="Your Message :"
                                ></textarea>
                              </div>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </ModalBody>
                    <div className="border-top p-4">
                      <button type="button" className="btn btn-primary">
                        Send Now
                      </button>
                    </div>
                  </Modal>

                  <div className="d-flex border-bottom align-items-center justify-content-between bg-light mt-4 p-3">
                    <div className="form-check ps-0">
                      <div className="mb-0">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkAll"
                            onChange={(e) => {
                              this.onSelectAll(e.target.checked);
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkAll"
                          >
                            Select all
                          </label>
                        </div>
                      </div>
                    </div>

                    <Dropdown
                      color="primary"
                      className="btn-group me-2 mt-2"
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggleDropdown}
                    >
                      <DropdownToggle caret color="primary">
                        Action
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>
                          <FeatherIcon icon="eye-off" className="fea icon-sm" />
                          Mark Unread
                        </DropdownItem>
                        <DropdownItem>
                          <FeatherIcon
                            icon="corner-up-left"
                            className="fea icon-sm"
                          />
                          Reply
                        </DropdownItem>
                        <DropdownItem>
                          <FeatherIcon
                            icon="corner-up-right"
                            className="fea icon-sm"
                          />
                          Forward
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <Link to="#" className="dropdown-item text-danger">
                          <FeatherIcon icon="trash-2" className="fea icon-sm" />
                          Delete
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  {this.state.members.map((member, key) => (
                    <div className="d-flex border-bottom p-3" key={key}>
                      <div className="form-check ps-0">
                        <div className="mb-0">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id={"mail" + key}
                              checked={this.state.selectedContacts.includes(
                                member
                              )}
                              onChange={(e) => {
                                this.onChangeCheckbox(e.target.checked, member);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={"mail" + key}
                            ></label>
                          </div>
                        </div>
                      </div>
                      <Link to="#">
                        <div className="d-flex ms-2">
                          <img
                            src={member.img}
                            className="avatar avatar-md-sm rounded-pill shadow"
                            alt=""
                          />
                          <div className="flex-1 ms-3">
                            <h6 className="text-dark">{member.title}</h6>
                            <p className="text-muted mb-0">{member.desc}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <span className="text-muted h6 mb-0">Showing 8 out of 33</span>
                    <Link to="#" className="btn btn-primary">See more</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageMessages;
