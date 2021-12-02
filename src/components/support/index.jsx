import { SupportContainer } from "./style";
import AvatarOnRing from "./../../assets/icons/avatar-on-ring.svg";

export const Support = () => {
    return (
        <SupportContainer>
            <img src={AvatarOnRing} alt="" className="abs" />
            <h1 className="abs">
                24<span>/7</span>
            </h1>
            <div className="center">
                <h2>Support</h2>
                <p>
                    Got a problem? Just get in touch. Our support team is
                    available 24/7.Got a problem? Just get in touch. Our support
                    team is available 24/7.
                </p>
            </div>
        </SupportContainer>
    );
};
