import { MissionContainer } from "./style";
import TargetImage from "./../../assets/icons/mission.svg";
import Brain from "./../../assets/icons/brain.svg";

export const Mission = () => {
    return (
        <MissionContainer>
            <section className="top">
                <div data-aos="fade-up">
                    <h3>Our Mission</h3>
                    <p>
                        Everyone deserves access to financial services that can
                        help empower them to create a better life for themselves
                        and their families. Our Mission is to give unlimited
                        benefits of how people use digital currency.
                    </p>
                    <img src={TargetImage} alt="Target" />
                </div>
                <div data-aos="fade-up">
                    <h3>Our Value</h3>
                    <p>
                        Hifast values are based on Professionalism, transparency
                        and inclusivity. This is reflected in our
                        fully-automated products, transparent processes and our
                        extensive efforts to develop a truly global service that
                        makes wealth creation opportunities available to
                        everyone.
                    </p>
                    <img src={Brain} alt="Target" />
                </div>
            </section>
            <section className="bottom">
                <div data-aos="fade-up">
                    <h3>The Problem</h3>
                    <p>
                        Think about how much each bank transfer you’ve had to
                        make costs and multiply that with the number of times
                        you’ve had to send money to your friend. Let’s be
                        honest, that is good money. Money you could have used to
                        see a movie or buy shawarma 😩 so sad
                    </p>
                </div>
                <div data-aos="fade-up">
                    <h3>The Value Offering</h3>
                    <p>
                        With Hifast, you can send money to anyone on your
                        contact list for FREE, as long as they have the Hifast
                        App. RIP to unnecessary Bank Charges ⚰️. hifast is a fun
                        social payments app for cash or crypto. Not only do we
                        make it easy to send cash like Naira (NGN), we also make
                        it easy to send crypto such as Bitcoin andother
                        cryptocurrencies. Also it is part of our plans to enter
                        into other industries eg logistics, food, Health care
                        services etc.
                    </p>
                </div>
            </section>
        </MissionContainer>
    );
};
