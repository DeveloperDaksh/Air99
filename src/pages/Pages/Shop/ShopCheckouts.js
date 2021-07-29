import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Input,
  Form,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

class ShopCheckouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Shop", link: "#" },
        { id: 3, name: "Checkouts" },
      ],
    };
  }

  componentDidMount() {
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
        {/* breadcrumb */}
        <PageBreadcrumb title="Checkouts" pathItems={this.state.pathItems} />
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
              <Col lg={7} md={6}>
                <div className="rounded shadow-lg p-4">
                  <h5 className="mb-0">Billing Details :</h5>

                  <Form className="mt-4">
                    <Row>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Your Name <span className="text-danger">*</span>
                          </Label>
                          <Input
                            name="name"
                            id="firstname"
                            type="text"
                            className="form-control"
                            placeholder="First Name :"
                          />
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Last Name <span className="text-danger">*</span>
                          </Label>
                          <Input
                            name="name"
                            id="lastname"
                            type="text"
                            className="form-control"
                            placeholder="Last Name :"
                          />
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Company Name{" "}
                            <span className="text-muted">(Optional)</span>
                          </Label>
                          <Input
                            name="name"
                            id="companyname"
                            type="text"
                            className="form-control"
                            placeholder="Company Name :"
                          />
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Street address{" "}
                            <span className="text-danger">*</span>
                          </Label>
                          <Input
                            type="text"
                            name="address1"
                            id="address1"
                            className="form-control"
                            placeholder="House number and street name :"
                          />
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Apartment, suite, unit etc.{" "}
                            <span className="text-muted">(Optional)</span>
                          </Label>
                          <Input
                            type="text"
                            name="address2"
                            id="address2"
                            className="form-control"
                            placeholder="Apartment, suite, unit etc. :"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Town / City <span className="text-danger">*</span>
                          </Label>
                          <Input
                            type="text"
                            name="city"
                            id="city"
                            className="form-control"
                            placeholder="City Name :"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Postal Code <span className="text-danger">*</span>
                          </Label>
                          <Input
                            type="text"
                            name="postcode"
                            id="postcode"
                            className="form-control"
                            placeholder="Zip :"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label className="form-label">
                            State <span className="text-danger">*</span>
                          </Label>
                          <Input
                            type="text"
                            name="state"
                            id="state"
                            className="form-control"
                            placeholder="State Name :"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Country <span className="text-danger">*</span>
                          </Label>
                          <select className="form-control custom-select">
                            <option defaultValue="">India</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">&Aring;land Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                          </select>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Phone <span className="text-danger">*</span>
                          </Label>
                          <Input
                            type="text"
                            name="phone"
                            id="phone"
                            className="form-control"
                            placeholder="State Name :"
                          />
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </Label>
                          <Input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email :"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </div>

                <div className="form-check form-check-inline my-4">
                  <div className="mb-0">
                    <div className="form-check">
                      <Input className="form-check-input" type="checkbox" value="" id="creataccount" />
                      <Label className="form-check-label" for="creataccount">Create an account ?</Label>
                    </div>
                  </div>
                </div>

                <div className="rounded shadow-lg p-4">
                  <div className="mb-3">
                    <div className="form-check">
                      <Input className="form-check-input" type="checkbox" value="" id="addresscheck" />
                      <Label className="form-check-label" for="addresscheck">Ship to a different address ?</Label>
                    </div>
                  </div>

                  <div>
                    <Label className="form-label">Comments</Label>
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      className="form-control"
                      placeholder="Notes about your order :"
                    ></textarea>
                  </div>
                </div>
              </Col>

              <Col lg={5} md={6} className=" mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="rounded shadow-lg p-4 sticky-bar">
                  <div className="d-flex mb-4 justify-content-between">
                    <h5>4 Items</h5>
                    <Link to="shop-cart" className="text-muted h6">
                      Show Details
                    </Link>
                  </div>
                  <div className="table-responsive">
                    <Table className="table-end table-padding mb-0">
                      <tbody>
                        <tr>
                          <td className="h6 border-0">Subtotal</td>
                          <td className="text-end fw-bold border-0">
                            $ 2409
                          </td>
                        </tr>
                        <tr>
                          <td className="h6">Shipping Charge</td>
                          <td className="text-end fw-bold">
                            $ 0.00
                          </td>
                        </tr>
                        <tr className="bg-light">
                          <td className="h5 fw-bold">Total</td>
                          <td className="text-end text-primary h4 fw-bold">
                            $ 2409
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <ul className="list-unstyled mt-4 mb-0">
                      <li>
                        <div className="custom-control custom-radio custom-control-inline">
                          <div className="form-check mb-0">
                            <Input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="banktransfer" />
                            <Label className="form-check-label" htmlFor="banktransfer">Bank Transfer</Label>
                          </div>
                        </div>
                      </li>

                      <li className="mt-3">
                        <div className="form-check mb-0">
                          <Input className="form-check-input" type="radio" name="flexRadioDefault" id="chequepay" />
                          <Label className="form-check-label" htmlFor="chequepay">Cheque Payment</Label>
                        </div>
                      </li>

                      <li className="mt-3">
                        <div className="form-check mb-0">
                          <Input className="form-check-input" type="radio" name="flexRadioDefault" id="cashdelivery" />
                          <Label className="form-check-label" htmlFor="cashdelivery">Cash on Delivery</Label>
                        </div>
                      </li>

                      <li className="mt-3">
                        <div className="form-check mb-0">
                          <Input className="form-check-input" type="radio" name="flexRadioDefault" id="paypalpay" />
                          <Label className="form-check-label">Paypal{" "}
                            <Link
                              to="https://www.paypal.com/uk/webapps/mpp/paypal-popup"
                              target="_blank"
                              className="ms-2 text-primary"
                            >
                              What is paypal?
                            </Link>
                          </Label>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-4 pt-2">
                      <div className="d-grid">
                        <Link
                          to="shop-checkouts"
                          className="btn btn-primary"
                        >
                          Place Order
                      </Link>
                      </div>
                    </div>
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

export default ShopCheckouts;
