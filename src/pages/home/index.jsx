import Faq from "../../components/FAQ";
import { Footer } from "../../components/footer";
import { GetStarted } from "../../components/get-started";
import { NavBar } from "../../components/nav";
import { HomepageContainer } from "./style";
import AppleStore from "./../../assets/icons/applestore.svg";
import GooglePlay from "./../../assets/icons/googleplay.svg";
import gradient from "./../../assets/images/gradient-bg.svg";
import phoneAlone from "./../../assets/images/phone-alone.png";
import phoneAndCode from "./../../assets/images/phone-and-code.png";

export const HomePage = () => {
    return (
        <HomepageContainer>
            <section className="banner">
                <img src={gradient} alt="" className="gradient" />
                <NavBar />
                <div className="banner">
                    <div className="left">
                        <h1>
                            Deposit and withdraw Cash and{" "}
                            <span className="circled">Crypto</span> assets with
                            Hifast
                        </h1>
                        <p>
                            Explore a world of boundless opportunities with
                            Hifast and get unlimited access to a better
                            financial experience designed to get you to where
                            you need to be.
                        </p>
                        <div className="downloads">
                            <a href="/">
                                <img src={GooglePlay} alt="" />
                            </a>{" "}
                            <a href="/">
                                <img src={AppleStore} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="sm-hide right">
                        <img src={phoneAndCode} alt="" />
                    </div>
                    <div className="bg-hide">
                        <img src={phoneAlone} alt="Phone" />
                    </div>
                </div>
            </section>
            <GetStarted />
            <Faq />
            <Footer />
        </HomepageContainer>
    );
};
