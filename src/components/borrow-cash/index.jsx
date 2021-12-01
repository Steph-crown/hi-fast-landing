import { BorrowCashContainer } from "./style";
import ImageDesktop from "./../../assets/images/phone-slant-right.png";

import LogoCircle from "./../../assets/icons/logo-circle.svg";

import AppleStore from "./../../assets/icons/applestore.svg";
import GooglePlay from "./../../assets/icons/googleplay.svg";
export const BorrowCash = () => {
    return (
        <BorrowCashContainer>
            <img
                src={ImageDesktop}
                alt="Phone slant left"
                className="sm-hide"
            />
            {/* <img src={ImagePhone} alt="Phone slant right" className="bg-hide" /> */}
            <div className="right">
                <small className="caps">CRYPTO BANK</small>
                <h2>
                    <span className="circled">Borrow cash</span> with Stable
                    Coin
                </h2>
                <h6>
                    Collateralize your crypto and borrow instantly with Hifast's
                    crypto credit lines
                </h6>
                <section>
                    <img src={LogoCircle} alt="Logo" />
                    <div>
                        <h4>Request Loans faster</h4>
                        <p>
                            Get cash loans at amazing Intrest rates, Pay back
                            with cash or crypto
                        </p>
                    </div>
                </section>
                <section>
                    <img src={LogoCircle} alt="Logo" />
                    <div>
                        <h4>Use Crypto assets as Collateral</h4>
                        <p>
                            Collateralize your crypto and borrow instantly with
                            Nexo's crypto credit lines
                        </p>
                    </div>
                </section>
                <section>
                    <img src={LogoCircle} alt="Logo" />
                    <div>
                        <h4>Flexible repayment options</h4>
                        <p>
                            Collateralize your crypto and borrow instantly with
                            Nexo's crypto credit lines
                        </p>
                    </div>
                </section>
                <div className="downloads">
                    <a href="/">
                        <img src={GooglePlay} alt="" />
                    </a>{" "}
                    <a href="/">
                        <img src={AppleStore} alt="" />
                    </a>
                </div>
            </div>
        </BorrowCashContainer>
    );
};
