import Faq from "../../components/FAQ";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/nav";
import { AboutPageContainer } from "./style";

export const AboutPage = () => {
    return (
        <AboutPageContainer>
            <NavBar />
            <Faq />
            <Footer />
        </AboutPageContainer>
    );
};
