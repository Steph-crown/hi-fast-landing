import { SustainableContainer } from "./style";
import ImageDesktop from "./../../assets/images/radar.png";
import ImagePhone from "./../../assets/images/radar.png";
import LogoCircle from "./../../assets/icons/logo-circle.svg";

export const Sustainable = () => {
    return (
        <SustainableContainer>
            <img
                src={ImageDesktop}
                alt="Phone slant left"
                className="sm-hide"
            />
            <img src={ImagePhone} alt="Phone slant right" className="bg-hide" />
            <div className="right">
                <small className="caps">CRYPTO</small>
                <h2>
                    Building a{" "}
                    <span className="circled">Crypto Sustainable </span>
                    <span className="circled"> ecosystem </span> with Hifast
                </h2>
                <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis egestas aliquam turpis id. Ut mauris elit mauris
                    faucibus.
                </h6>
                <section>
                    <img src={LogoCircle} alt="Logo" />
                    <div>
                        <h4>Buy and sell crypto fast 💰</h4>
                        <p>
                            Buy and sell popular digital currencies such as BTC,
                            ETH, USDT and BFI
                        </p>
                    </div>
                </section>
                <section>
                    <img src={LogoCircle} alt="Logo" />
                    <div>
                        <h4>Send and Receive crypto</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Facilisis egestas aliquam turpis id. Ut mauris
                            elit mauris faucibus.
                        </p>
                    </div>
                </section>
                <section>
                    <img src={LogoCircle} alt="Logo" />
                    <div>
                        <h4>Live price updates</h4>
                        <p>
                            Get up to date crypto market prices and price chart
                            from different cryptocurrencies directly on the app
                        </p>
                    </div>
                </section>
            </div>
        </SustainableContainer>
    );
};
