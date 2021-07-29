import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Table } from "reactstrap";

//Import Images
import litecoin from "../../assets/images/crypto/litecoin.png";
import bitcoin from "../../assets/images/crypto/bitcoin.png";
import auroracoin from "../../assets/images/crypto/auroracoin.png";
import coinye from "../../assets/images/crypto/coinye.png";
import ethereum from "../../assets/images/crypto/ethereum.png";
import potcoin from "../../assets/images/crypto/potcoin.png";
import zcash from "../../assets/images/crypto/zcash.png";

class ListTable extends Component {
  state = {
    currencies: [
      {
        id: 1,
        name: "Litecoin",
        subname: "LTC",
        image: litecoin,
        price: "234754.68",
        change: "+.264",
        link: "#",
      },
      {
        id: 2,
        name: "Bitcoin",
        subname: "BTC",
        image: bitcoin,
        price: "234754.68",
        change: "-2.5",
        link: "#",
      },
      {
        id: 3,
        name: "Auroracoin",
        subname: "ARC",
        image: auroracoin,
        price: "234754.68",
        change: "-1.9",
        link: "#",
      },
      {
        id: 4,
        name: "Coinye",
        subname: "CNY",
        image: coinye,
        price: "234754.68",
        change: "+1.05",
        link: "#",
      },
      {
        id: 5,
        name: "Ethereum Coin",
        subname: "ETH",
        image: ethereum,
        price: "234754.68",
        change: "+1.705",
        link: "#",
      },
      {
        id: 6,
        name: "Potcoin",
        subname: "PTC",
        image: potcoin,
        price: "234754.68",
        change: "-3.2",
        link: "#",
      },
      {
        id: 7,
        name: "Zcash Coin",
        subname: "ZCC",
        image: zcash,
        price: "234754.68",
        change: "+1.465",
        link: "#",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col xs="12" lg="10">
              <div className="table-responsive features-absolute crypto-table bg-white shadow rounded">
                <Table className="mb-0 table-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col" style={{ minWidth: "250px" }}>
                        Name
                      </th>
                      <th scope="col" style={{ width: "150px" }}>
                        Price
                      </th>
                      <th scope="col" style={{ width: "100px" }}>
                        Change
                      </th>
                      <th scope="col" style={{ width: "100px" }}>
                        Trade
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.currencies.map((currency, key) => (
                      <tr key={key}>
                        <td>{currency.id}</td>
                        <th>
                          <div className="d-flex align-items-center">
                            <img
                              src={currency.image}
                              className="float-start me-3"
                              height="50"
                              alt=""
                            />
                            <p className="mb-0 font-weight-normal h5">
                              {currency.name}{" "}
                              <span className="text-muted h6">
                                {currency.subname}
                              </span>{" "}
                            </p>
                          </div>
                        </th>
                        <td>₹ {currency.price}</td>
                        <td
                          className={
                            currency.change.charAt(0) === "+"
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {currency.change}
                        </td>
                        <td>
                          <Link to={currency.link} className="btn btn-primary">
                            Buy
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ListTable;
