import { FooterContainer } from "./style";
import Logo from "./../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "./../../assets/icons/socials/facebook.svg";
import { ReactComponent as Medium } from "./../../assets/icons/socials/medium.svg";
import { ReactComponent as Send } from "./../../assets/icons/socials/send.svg";
import { ReactComponent as Tok } from "./../../assets/icons/socials/tok.svg";
import { ReactComponent as Twitter } from "./../../assets/icons/socials/twitter.svg";

export const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <section className="larger" data-aos="fade-up">
                    <img src={Logo} alt="Hifast Logo" className="logo" />
                    <p>
                        No 45A Jankande Lateff bla bla road for the sake of
                        address
                    </p>
                </section>
                <section className="normal" data-aos="fade-up">
                    <h4>Support</h4>
                    <a href="mailto:Info@HiFasttech.com">Info@HiFasttech.com</a>
                    <a href="twitter.com/HiFast">twitter.com/HiFast</a>
                    <a href="instagram.com/HiFast">Instagram</a>
                </section>
                <section className="normal" data-aos="fade-up">
                    <h4>Company</h4>
                    <Link to="/about">About Us</Link>
                    <Link to="/#FAQ">FAQ</Link>
                </section>
                <section className="normal" data-aos="fade-up">
                    <h4>Legal</h4>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms and Conditions</Link>
                </section>
            </div>
            <div className="socials" data-aos="fade-up">
                <a href="twitter.com/HiFast">
                    <Facebook />
                </a>
                <a href="twitter.com/HiFast">
                    <Twitter />
                </a>
                <a href="twitter.com/HiFast">
                    <Tok />
                </a>
                <a href="twitter.com/HiFast">
                    <Medium />
                </a>
                <a href="twitter.com/HiFast">
                    <Send />
                </a>
            </div>
            <p>© Copyright 2021 HiFast Technologies. All Rights Reserved.</p>
        </FooterContainer>
    );
};
