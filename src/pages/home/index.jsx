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
import { TradeAnywhere } from "../../components/trade-anywhere";
import { Sustainable } from "../../components/sustainable";
import { BorrowCash } from "../../components/borrow-cash";
import { HowItWorks } from "../../components/how-it-works";
import { Support } from "../../components/support";
import { Explore } from "../../components/explore";
import { useEffect, useRef } from "react";

export const HomePage = () => {
    const myRef = useRef(null);
    const topRef = useRef(null);
    useEffect(() => {
        topRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

        return () => {};
    }, []);

    const executeScroll = () =>
        myRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    return (
        <HomepageContainer>
            <section className="banner" ref={topRef}>
                <img src={gradient} alt="" className="gradient" />
                <NavBar executeScroll={executeScroll} />
                <div className="banner">
                    <div className="left">
                        <h1 data-aos="fade-up">
                            Deposit and withdraw Cash and{" "}
                            <span className="circled">Crypto</span> assets with
                            Hifast
                        </h1>
                        <p data-aos="fade-up">
                            Explore a world of boundless opportunities with
                            Hifast and get unlimited access to a better
                            financial experience designed to get you to where
                            you need to be.
                        </p>
                        <div className="downloads" data-aos="fade-up">
                            <a href="/">
                                <img src={GooglePlay} alt="" />
                            </a>{" "}
                            <a href="/">
                                <img src={AppleStore} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="sm-hide right">
                        <img
                            src={phoneAndCode}
                            alt=""
                            data-aos="fade-up"
                            data-aos-duration="4000"
                            // data-aos-delay="500"
                        />
                    </div>
                    <div className="bg-hide">
                        <img
                            src={phoneAlone}
                            alt="Phone"
                            data-aos="fade-up"
                            data-aos-duration="4000"
                        />
                    </div>
                </div>
            </section>
            <TradeAnywhere />
            <BorrowCash />
            <Sustainable />
            <HowItWorks />
            <Support />
            <Explore />
            <GetStarted />
            <div ref={myRef}>
                <Faq />
            </div>
            <Footer />
        </HomepageContainer>
    );
};
