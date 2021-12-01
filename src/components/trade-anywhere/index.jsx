import { TradeAnywhereContainer } from "./style";
import ImageDesktop from "./../../assets/images/phone-slant-left.png";
import ImagePhone from "./../../assets/images/phone-slant-right.png";
import LogoCircle from "./../../assets/icons/logo-circle.svg";

export const TradeAnywhere = () => {
    return (
        <TradeAnywhereContainer>
            <img
                src={ImageDesktop}
                alt="Phone slant left"
                className="sm-hide"
            />
            <img src={ImagePhone} alt="Phone slant right" className="bg-hide" />
            <div className="right">
                <small className="caps">CRYPTO</small>
                <h2>
                    Trade <span className="circled">anywhere</span>{" "}
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
                            Hifast enables you to buy and sell Bitcoin, BNB and
                            Ethereum. After adding Naira to your Hifast account
                            using the 'ADD CASH' feature, you can proceed to Buy
                            any crypto featured in the hifast App.
                        </p>
                    </div>
                </section>
                <section>
                    <img src={LogoCircle} alt="Logo" />
                    <div>
                        <h4>Send and Receive cash or crypto instantly 💸</h4>
                        <p>
                            Want to pay someone not on hifast? Send, request and
                            receive cash or crypto through their phone number
                            for FREE with a few taps. You can pay back your
                            friend for LUNCH or send them the biscuit money you
                            owe them. You can send a cool message with an emoji
                            too 😎.
                        </p>
                    </div>
                </section>
                <section>
                    <img src={LogoCircle} alt="Logo" />
                    <div>
                        <h4>Withdraw and deposit crypto</h4>
                        <p>
                            Want to move crypto out of Hifast to another wallet?
                            Tap withdraw to start. You can also deposit Bitcoin,
                            Ethereum and BNB or other crypto asset for storage
                            in our smart wallet for free.
                        </p>
                    </div>
                </section>
            </div>
        </TradeAnywhereContainer>
    );
};
