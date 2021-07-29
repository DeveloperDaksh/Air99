import React, { Component } from "react";
import { Container, Row, Col, Table, Input } from "reactstrap";
import { Link } from "react-router-dom";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

//Import Images
import product1 from "../../../assets/images/shop/product/s1.jpg";
import product3 from "../../../assets/images/shop/product/s3.jpg";
import product6 from "../../../assets/images/shop/product/s6.jpg";
import product10 from "../../../assets/images/shop/product/s10.jpg";

class ShopCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Shop", link: "#" },
        { id: 3, name: "Cart" },
      ],
      items: [
        { id: 1, image: product1, name: "T-Shirt", price: 255.00, qty: 2 },
        { id: 2, image: product3, name: "Branded Watch", price: 520.00, qty: 1 },
        { id: 3, image: product6, name: "T-Shirt", price: 160.00, qty: 4 },
        { id: 4, image: product10, name: "Sunglasses", price: 260.00, qty: 2 },
      ],
    };
    this.addItem.bind(this);
    this.removeItem.bind(this);
    this.removeCartItem.bind(this);
  }

  removeCartItem = (itemId) => {
    let items = this.state.items;

    var filtered = items.filter(function (item) {
      return item.id !== itemId;
    });

    this.setState({ items: filtered });
  };

  addItem = (itemId) => {
    var newItems = this.state.items;
    newItems.map((item, key) =>
      item.id === itemId ? (item.qty = item.qty + 1) : false
    );
    this.setState({ items: newItems });
  };

  removeItem = (itemId) => {
    var newItems = this.state.items;
    newItems.map(
      (item, key) => {
        if (item.id === itemId && item.qty > 0) {
          return (item.qty = item.qty - 1);
        } else {
          return false;
        }
      }
      // item.id === itemId ? (item.qty = item.qty - 1) : false
    );
    this.setState({ items: newItems });
  };

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
        <PageBreadcrumb
          title="Shopping Cart"
          pathItems={this.state.pathItems}
        />
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
              <Col xs={12}>
                <div className="table-responsive bg-white shadow">
                  <Table className="table-center table-padding mb-0">
                    <thead>
                      <tr>
                        <th className="py-3 border-bottom" style={{ minWidth: "20px" }}></th>
                        <th className="py-3 border-bottom" style={{ minWidth: "300px" }}>
                          Product
                        </th>
                        <th
                          className="text-center py-3 border-bottom"
                          style={{ minWidth: "160px" }}
                        >
                          Price
                        </th>
                        <th
                          className="text-center py-3 border-bottom"
                          style={{ minWidth: "160px" }}
                        >
                          Qty
                        </th>
                        <th
                          className="text-center py-3 border-bottom"
                          style={{ minWidth: "160px" }}
                        >
                          Total
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.state.items.map((item, key) => (
                        <tr key={key} className="shop-list">
                          <td className="h6">
                            <Link
                              to="#"
                              onClick={() => this.removeCartItem(item.id)}
                              className="text-danger"
                            >
                              X
                            </Link>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={item.image}
                                className="img-fluid avatar avatar-small rounded shadow"
                                style={{ height: "auto" }}
                                alt=""
                              />
                              <h6 className="mb-0 ms-3">{item.name}</h6>
                            </div>
                          </td>
                          <td className="text-center">$ {item.price}.00</td>
                          <td className="text-center qty-icons">
                            <Input
                              type="button"
                              value="-"
                              onClick={() => this.removeItem(item.id)}
                              className="minus btn btn-icon btn-soft-primary"
                              readOnly
                            />{" "}
                            <Input
                              type="text"
                              step="1"
                              min="1"
                              name="quantity"
                              value={item.qty}
                              title="Qty"
                              readOnly
                              className="btn btn-icon btn-soft-primary qty-btn quantity"
                            />{" "}
                            <Input
                              type="button"
                              value="+"
                              onClick={() => this.addItem(item.id)}
                              readOnly
                              className="plus btn btn-icon btn-soft-primary"
                            />
                          </td>
                          <td className="text-center fw-bold">
                            ${item.qty * item.price}.00
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={8} md={6} className="mt-4 pt-2">
                <Link to="#" className="btn btn-primary">
                  Shop More
                </Link>{" "}
                <Link to="#" className="btn btn-soft-primary ms-2">
                  Update Cart
                </Link>
              </Col>
              <Col lg={4} md={6} className="ms-auto mt-4 pt-2">
                <div className="table-responsive bg-white rounded shadow">
                  <Table className="table-center table-padding mb-0">
                    <tbody>
                      <tr>
                        <td className="h6">Subtotal</td>
                        <td className="text-center fw-bold">$ 2190</td>
                      </tr>
                      <tr>
                        <td className="h6">Taxes</td>
                        <td className="text-center fw-bold">$ 219</td>
                      </tr>
                      <tr className="bg-light">
                        <td className="h6">Total</td>
                        <td className="text-center fw-bold">$ 2409</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="mt-4 pt-2 text-end">
                  <Link to="shop-checkouts" className="btn btn-primary">
                    Proceed to checkout
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default ShopCart;
