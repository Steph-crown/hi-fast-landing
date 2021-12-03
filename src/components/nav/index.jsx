import { NavBarContainer } from "./style";
import Logo from "./../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { OutlineButton } from "../button";
import { useState } from "react";
import styled from "styled-components";
import { padding } from "../../utils/spacing";
import { colors } from "../../utils/colors";

export const NavBar = ({ executeScroll }) => {
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <GeneralContainer>
            <NavBarContainer>
                <Link to="/">
                    <img src={Logo} alt="Hifast logo" />
                </Link>
                <nav>
                    <Link className="sm-hide" to="/about">
                        About Us
                        <div className="line"></div>
                    </Link>
                    <Link
                        className="sm-hide"
                        to=""
                        onClick={(e) => {
                            e.preventDefault();
                            executeScroll();
                        }}
                    >
                        FAQ
                        <div className="line"></div>
                    </Link>
                    <div className="sm-hide">
                        <OutlineButton style={{ marginLeft: "4em" }}>
                            Download
                        </OutlineButton>
                    </div>

                    <div className="menu lg-hide">
                        <div onClick={() => setMenuOpened(!menuOpened)}>
                            {menuOpened ? (
                                <i className="fas fa-times"></i>
                            ) : (
                                <i className="fas fa-bars"></i>
                            )}
                        </div>
                    </div>
                </nav>
            </NavBarContainer>
            {menuOpened && (
                <div className="menu-content lg-hide">
                    <Link to="/about">
                        <h4>ABOUT US</h4>
                        <i className="fas fa-angle-right"></i>
                    </Link>
                    <Link
                        to=""
                        onClick={(e) => {
                            e.preventDefault();
                            executeScroll();
                        }}
                    >
                        <h4>FAQ </h4>
                        <i className="fas fa-angle-right"></i>
                    </Link>
                    <div>
                        <OutlineButton style={{ width: "100%" }}>
                            Download
                        </OutlineButton>
                    </div>
                </div>
            )}
        </GeneralContainer>
    );
};

const GeneralContainer = styled.div`
    div.menu-content {
        width: 100%;
        padding: 0 ${padding.mainPadding.small};
        margin-bottom: -2em;
        position: relative;
        z-index: 77474646466;
        margin-top: -1em;
        /* transform: translateY(-80px); */
        animation-name: godown;
        animation-duration: 1s;
        animation-iteration-count: 1;

        & > * {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin: 0.4em 0;

            h4 {
                color: ${colors.mainBlue};
            }
        }

        i.fa-angle-right {
            color: ${colors.mainBlue};
        }

        @keyframes godown {
            from {
                transform: translateY(-80px);
                opacity: 0;
            }
            to {
                transform: translateY(0px);
                opacity: 1;
            }
        }

        a {
            padding: 0.6em 0;
        }
    }
`;
