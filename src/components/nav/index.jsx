import { NavBarContainer } from "./style";
import Logo from "./../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { OutlineButton } from "../button";

export const NavBar = () => {
    return (
        <NavBarContainer>
            <Link to="/">
                <img src={Logo} alt="Hifast logo" />
            </Link>
            <nav>
                <Link className="sm-hide" to="/about">
                    About Us
                    <div className="line"></div>
                </Link>
                <Link className="sm-hide" to="/#FAQ">
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
