import { useEffect, useRef } from "react";
import { BannerImages } from "../../components/banner-images";
import Faq from "../../components/FAQ";
import { Footer } from "../../components/footer";
import { GetStarted } from "../../components/get-started";
import { Mission } from "../../components/mission";
import { NavBar } from "../../components/nav";
import { OurTeam } from "../../components/our-team";
import { ValueOffering } from "../../components/value-offering";
import { AboutPageContainer } from "./style";

export const AboutPage = () => {
    const yourRef = useRef(null);
    const topRef = useRef(null);
    useEffect(() => {
        topRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

        return () => {};
    }, []);

    const executeScroll = () =>
        yourRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

    return (
        <AboutPageContainer>
            <section className="banner" ref={topRef}>
                <NavBar executeScroll={executeScroll} />
                <div className="banner-text">
                    <h3 data-aos="fade-up">
                        Hifast is building the crypto economy <br />– a more
                        fair, accessible, efficient and transparent financial
                        system enabled by crypto.
                    </h3>
                    <h5 data-aos="fade-up">
                        Digital currency is a powerful technology — but its
                        benefits are limited by how easy it is for people to
                        use. We excel at making great products that bring the
                        benefits of digital currency to everyone in Africa
                    </h5>
                </div>
            </section>
            <BannerImages />
            <Mission />
            <OurTeam />
            <ValueOffering />
            <GetStarted />
            <div ref={yourRef}>
                <Faq />
            </div>
            <Footer />
        </AboutPageContainer>
    );
};
