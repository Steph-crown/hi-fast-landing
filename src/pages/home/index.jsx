import Faq from "../../components/FAQ";
import { Footer } from "../../components/footer";
import { GetStarted } from "../../components/get-started";
import { NavBar } from "../../components/nav";
import { HomepageContainer } from "./style";

export const HomePage = () => {
    return (
        <HomepageContainer>
            <NavBar />
            <GetStarted />
            <Faq />
            <Footer />
        </HomepageContainer>
    );
};
