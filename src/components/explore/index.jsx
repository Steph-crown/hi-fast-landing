import { ExploreContainer, TableContainer } from "./style";
import dogecoin from "./../../assets/icons/dogecoin.svg";
import binance from "./../../assets/icons/binance.svg";
import bitcoin from "./../../assets/icons/bitcoin.svg";
import ethereum from "./../../assets/icons/ethereum.svg";
import tether from "./../../assets/icons/tether.svg";
import xrp from "./../../assets/icons/xrp.svg";
import chart1 from "./../../assets/charts/chart1.svg";
import chart2 from "./../../assets/charts/chart2.svg";
import chart3 from "./../../assets/charts/chart3.svg";
import chart4 from "./../../assets/charts/chart4.svg";
import chart5 from "./../../assets/charts/chart5.svg";
import chart6 from "./../../assets/charts/chart6.svg";

export const Explore = () => {
    return (
        <ExploreContainer data-aos="fade-up">
            <h2>Explore market Live price updates</h2>
            <TableContainer>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <small>Name</small>
                            </th>
                            <th className="right">
                                <small>Price</small>
                            </th>
                            <th className="right">
                                <small>Change</small>
                            </th>
                            <th>
                                <small>Price chart</small>
                            </th>
                            <th className="right">
                                <small>Volume (24h)</small>
                            </th>
                            <th className="right">
                                <small>Market cap</small>
                            </th>
                            <th className="right">
                                <small>Supply</small>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex">
                                    <img src={bitcoin} alt="Bitcoin" />
                                    <p>Bitcoin</p>
                                    <p className="cap">BTC</p>
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 375,552.63</p>
                            </td>
                            <td className="right">
                                <p className="green">+0.85%</p>
                            </td>
                            <td>
                                <div className="center">
                                    <img src={chart1} alt="" />
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 80.8B</p>
                            </td>
                            <td className="right">
                                <p>TRY 7.1T</p>
                            </td>
                            <td className="right">
                                <p>18.7M</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="flex">
                                    <img src={ethereum} alt="ethereum" />
                                    <p>Ethereum</p>
                                    <p className="cap">ETH</p>
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 29,134.20</p>
                            </td>
                            <td className="right">
                                <p className="green">+1.03%</p>
                            </td>
                            <td>
                                <div className="center">
                                    <img src={chart2} alt="" />
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 3.4T</p>
                            </td>
                            <td className="right">
                                <p>TRY 7.1T</p>
                            </td>
                            <td className="right">
                                <p>115.9M</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="flex">
                                    <img src={binance} alt="Bitcoin" />
                                    <p>Binance Coin</p>
                                    <p className="cap">BNB</p>
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 4,470.29</p>
                            </td>
                            <td className="right">
                                <p className="red">-10.45%</p>
                            </td>
                            <td>
                                <div className="center">
                                    <img src={chart3} alt="" />
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 5.6B</p>
                            </td>
                            <td className="right">
                                <p>TRY 685.1B</p>
                            </td>
                            <td className="right">
                                <p>153.7M</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="flex">
                                    <img src={dogecoin} alt="Bitcoin" />
                                    <p>Dogecoin</p>
                                    <p className="cap">DOGE</p>
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 4.22</p>
                            </td>
                            <td className="right">
                                <p className="red">-8.87%</p>
                            </td>
                            <td>
                                <div className="center">
                                    <img src={chart4} alt="" />
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 10.8B</p>
                            </td>
                            <td className="right">
                                <p>TRY 545.9B</p>
                            </td>
                            <td className="right">
                                <p>129.6B</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="flex">
                                    <img src={tether} alt="Bitcoin" />
                                    <p>Tether</p>
                                    <p className="cap">USDT</p>
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 8.36</p>
                            </td>
                            <td className="right">
                                <p className="green">+0.34%</p>
                            </td>
                            <td>
                                <div className="center">
                                    <img src={chart5} alt="" />
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 195.0B</p>
                            </td>
                            <td className="right">
                                <p>TRY 486.3B</p>
                            </td>
                            <td className="right">
                                <p>58.2B</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="flex">
                                    <img src={xrp} alt="Bitcoin" />
                                    <p>XRP</p>
                                    <p className="cap">XRP</p>
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 375,552.63</p>
                            </td>
                            <td className="right">
                                <p className="green">+0.85%</p>
                            </td>
                            <td>
                                <div className="center">
                                    <img src={chart6} alt="" />
                                </div>
                            </td>
                            <td className="right">
                                <p>TRY 80.8B</p>
                            </td>
                            <td className="right">
                                <p>TRY 7.1T</p>
                            </td>
                            <td className="right">
                                <p>18.7M</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </TableContainer>
        </ExploreContainer>
    );
};
