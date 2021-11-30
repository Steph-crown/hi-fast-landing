import Faq from "../../components/FAQ";
import { Footer } from "../../components/footer";
import { GetStarted } from "../../components/get-started";
import { NavBar } from "../../components/nav";
import { AboutPageContainer } from "./style";

export const AboutPage = () => {
    return (
        <AboutPageContainer>
            <section className="banner">
                <NavBar />
                <div className="banner-text">
                    <h3>
                        Hifast is building the crypto economy <br />– a more
                        fair, accessible, efficient and transparent financial
                        system enabled by crypto.
                    </h3>
                    <h5>
                        Digital currency is a powerful technology — but its
                        benefits are limited by how easy it is for people to
                        use. We excel at making great products that bring the
                        benefits of digital currency to everyone in Africa
                    </h5>
                </div>
            </section>
            <GetStarted />
            <Faq />
            <Footer />
        </AboutPageContainer>
    );
};
