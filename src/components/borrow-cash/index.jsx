import { BorrowCashContainer } from "./style";
import ImageDesktop from "./../../assets/images/phone-slant-right.png";

import LogoCircle from "./../../assets/icons/logo-circle.svg";

import AppleStore from "./../../assets/icons/applestore.svg";
import GooglePlay from "./../../assets/icons/googleplay.svg";
export const BorrowCash = () => {
    return (
        <BorrowCashContainer>
            <img
                data-aos="fade-up"
                src={ImageDesktop}
                alt="Phone slant left"
                className="sm-hide"
            />
            {/* <img src={ImagePhone} alt="Phone slant right" className="bg-hide" /> */}
            <div className="right">
                <small className="caps" data-aos="fade-up">
                    CRYPTO BANK
                </small>
                <h2 data-aos="fade-up">
                    <span className="circled">Borrow cash</span> with Stable
                    Coin
                </h2>
                <h6 data-aos="fade-up">
                    Collateralize your crypto and borrow instantly with Hifast's
                    crypto credit lines
                </h6>
                <section>
                    <img src={LogoCircle} alt="Logo" data-aos="fade-up" />
                    <div data-aos="fade-up">
                        <h4>Request Loans faster</h4>
                        <p>
                            Get cash loans at amazing Intrest rates, Pay back
                            with cash or crypto
                        </p>
                    </div>
                </section>
                <section>
                    <img data-aos="fade-up" src={LogoCircle} alt="Logo" />
                    <div data-aos="fade-up">
                        <h4>Use Crypto assets as Collateral</h4>
                        <p>
                            Collateralize your crypto and borrow instantly with
                            Nexo's crypto credit lines
                        </p>
                    </div>
                </section>
                <section>
                    <img data-aos="fade-up" src={LogoCircle} alt="Logo" />
                    <div data-aos="fade-up">
                        <h4>Flexible repayment options</h4>
                        <p>
                            Collateralize your crypto and borrow instantly with
                            Nexo's crypto credit lines
                        </p>
                    </div>
                </section>
                <div className="downloads" data-aos="fade-up">
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
