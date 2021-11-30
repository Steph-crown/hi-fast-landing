import { NavBarContainer } from "./style";
import { ReactComponent as Logo } from "./../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { OutlineButton } from "../button";

export const NavBar = () => {
    return (
        <NavBarContainer>
            <Logo />
            <nav>
                <Link className="sm-hide" to="/about">
                    About Us
                    <div className="line"></div>
                </Link>
                <Link className="sm-hide" to="/">
                    FAQ
                    <div className="line"></div>
                </Link>
                <OutlineButton style={{ marginLeft: "4em" }}>
                    Download
                </OutlineButton>
            </nav>
        </NavBarContainer>
    );
};
