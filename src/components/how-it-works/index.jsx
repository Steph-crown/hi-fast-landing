import { HowItWorksContainer } from "./style";
import curveLine from "./../../assets/icons/curve-line.svg";

import AppleStore from "./../../assets/icons/applestore.svg";
import GooglePlay from "./../../assets/icons/googleplay.svg";

export const HowItWorks = () => {
    return (
        <HowItWorksContainer>
            <h2 data-aos="fade-up">
                How it <span className="circled">works</span>{" "}
            </h2>
            <div className="flex">
                <section data-aos="fade-up">
                    <h2>01</h2>
                    <h3>Sign up</h3>
                    <p>
                        Sign up to use Klasha and we'll approve your account
                        within 48 hours.
                    </p>
                </section>

                <section data-aos="fade-up">
                    <h2>02</h2>
                    <h3>Fund wallets</h3>
                    <p>
                        Using your KlashaDash dashboard, generate your Klasha
                        checkout API keys.
                    </p>
                </section>

                <section data-aos="fade-up">
                    <h2>03</h2>
                    <h3>Get Crypto assets</h3>
                    <p>
                        Deploy Klasha straight into your checkout and start
                        accepting payments online in
                    </p>
                </section>
            </div>
            <div className="downloads" data-aos="fade-up">
                <a href="/">
                    <img src={GooglePlay} alt="" />
                </a>{" "}
                <a href="/">
                    <img src={AppleStore} alt="" />
                </a>
            </div>

            <img src={curveLine} alt="" className="abs" />
        </HowItWorksContainer>
    );
};
