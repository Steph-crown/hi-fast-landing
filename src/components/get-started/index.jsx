import { GetStartedContainer } from "./style";
import AppleStore from "./../../assets/icons/applestore.svg";
import GooglePlay from "./../../assets/icons/googleplay.svg";

export const GetStarted = () => {
    return (
        <GetStartedContainer>
            <div>
                <h1>Get Started 🚀</h1>
                <h1 style={{ marginTop: "0.8em" }}>
                    Download Hifast app to start exploring
                </h1>
                <div className="downloads">
                    <a href="/">
                        <img src={GooglePlay} alt="" />
                    </a>{" "}
                    <a href="/">
                        <img src={AppleStore} alt="" />
                    </a>
                </div>
            </div>
        </GetStartedContainer>
    );
};
