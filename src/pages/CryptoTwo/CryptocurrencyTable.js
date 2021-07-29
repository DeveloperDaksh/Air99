import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import SectionTitle from '../../components/Shared/SectionTitle'

//import images
import litecoin from '../../assets/images/crypto/litecoin.png';
import bitcoin from '../../assets/images/crypto/bitcoin.png';
import auroracoin from '../../assets/images/crypto/auroracoin.png';
import coinye from '../../assets/images/crypto/coinye.png';
import ethereum from '../../assets/images/crypto/ethereum.png';
import potcoin from '../../assets/images/crypto/potcoin.png';
import zcash from '../../assets/images/crypto/zcash.png';
import { Link } from 'react-router-dom';

export default class CryptocurrencyTable extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <SectionTitle
                        title='Latest Cryptocurrency Table'
                        desc="that can provide everything you need to generate awareness, drive traffic, connect."
                    />
                    <Row className="justify-content-center">
                        <div className="col-12 mt-4 pt-2">
                            <div className="table-responsive bg-white shadow-md rounded-md">
                                <table className="table mb-0 table-center">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="border-bottom">#</th>
                                            <th scope="col" className="border-bottom" style={{minWidth : '250px'}}>Name</th>
                                            <th scope="col" className="border-bottom" style={{ width : '150px'}}>Price</th>
                                            <th scope="col" className="border-bottom" style={{ width : '100px'}}>Change</th>
                                            <th scope="col" className="border-bottom" style={{ width : '100px'}}>Trade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <th>
                                                <div className="align-items-center">
                                                    <img src={litecoin} className="me-3" height="50" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h5">Litecoin <span className="text-muted h6">LTC</span></p>
                                                </div>
                                            </th>
                                            <td>₹ 234754.68</td>
                                            <td className="text-success">+.264</td>
                                            <td><Link to="#" className="btn btn-primary">Buy</Link></td>
                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <th>
                                                <div className="align-items-center">
                                                    <img src={bitcoin} className="me-3" height="50" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h5">Bitcoin <span className="text-muted h6">BTC</span> </p>
                                                </div>
                                            </th>
                                            <td>₹ 234754.68</td>
                                            <td className="text-danger">-2.5</td>
                                            <td><Link to="#" className="btn btn-primary">Buy</Link></td>
                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <th>
                                                <div className="align-items-center">
                                                    <img src={auroracoin} className="me-3" height="50" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h5">Auroracoin <span className="text-muted h6">ARC</span> </p>
                                                </div>
                                            </th>
                                            <td>₹ 234754.68</td>
                                            <td className="text-danger">-1.9</td>
                                            <td><Link to="#" className="btn btn-primary">Buy</Link></td>
                                        </tr>

                                        <tr>
                                            <td>4</td>
                                            <th>
                                                <div className="align-items-center">
                                                    <img src={coinye} className="me-3" height="50" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h5">Coinye <span className="text-muted h6">CNY</span> </p>
                                                </div>
                                            </th>
                                            <td>₹ 234754.68</td>
                                            <td className="text-success">+1.05</td>
                                            <td><Link to="#" className="btn btn-primary">Buy</Link></td>
                                        </tr>

                                        <tr>
                                            <td>5</td>
                                            <th>
                                                <div className="align-items-center">
                                                    <img src={ethereum} className="me-3" height="50" alt="" />
                                                    <p className="mt-2 d-inline fw-normal h5">Ethereum Coin <span className="text-muted h6">ETH</span> </p>
                                                </div>
                                            </th>
                                            <td>₹ 234754.68</td>
                                            <td className="text-success">+1.705</td>
                                            <td><Link to="#" className="btn btn-primary">Buy</Link></td>
                                        </tr>

                                        <tr>
                                            <td>6</td>
                                            <th>
                                                <div className="align-items-center">
                                                    <img src={potcoin} className="me-3" height="50" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h5">Potcoin <span className="text-muted h6">PTC</span> </p>
                                                </div>
                                            </th>
                                            <td>₹ 234754.68</td>
                                            <td className="text-danger">-3.2</td>
                                            <td><Link to="#" className="btn btn-primary">Buy</Link></td>
                                        </tr>

                                        <tr>
                                            <td>7</td>
                                            <th>
                                                <div className="align-items-center">
                                                    <img src={zcash} className="me-3" height="50" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h5">Zcash Coin <span className="text-muted h6">ZCC</span> </p>
                                                </div>
                                            </th>
                                            <td>₹ 234754.68</td>
                                            <td className="text-success">+1.465</td>
                                            <td><Link to="#" className="btn btn-primary">Buy</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-4 pt-2 text-center">
                                <Link to="#" className="text-primary h6">See More <i className="uil uil-angle-right-b align-middle"></i></Link>
                            </div>
                        </div>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
