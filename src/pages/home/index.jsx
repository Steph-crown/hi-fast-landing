import Faq from "../../components/FAQ";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/nav";
import { HomepageContainer } from "./style";

export const HomePage = () => {
    return (
        <HomepageContainer>
            <NavBar />
            <Faq />
            <Footer />
        </HomepageContainer>
    );
};
