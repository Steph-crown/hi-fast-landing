import React from "react";
import { TabComponent } from "../tab";
import { AccordionComponent } from "./accordion";
import { FAQContainer } from "./style";

const tabs = [
    {
        title: `Assets`,
        content: (
            <div style={{ marginTop: "1em" }}>
                <AccordionComponent
                    items={[
                        {
                            uuid: "1",
                            heading: (
                                <h3>
                                    How to send and recieve crypto assets ?{" "}
                                </h3>
                            ),
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "2",
                            heading: (
                                <h3>
                                    How recieve blablabla on EUR, GBP and USD?
                                </h3>
                            ),
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "3",
                            heading: (
                                <h3>
                                    How do see i don tirefind content interest
                                    rate?
                                </h3>
                            ),
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "4",
                            heading: <h3>What are Hifast interest rates? </h3>,
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                    ]}
                />
            </div>
        ),
    },
    {
        title: `Loans`,
        content: (
            <div style={{ marginTop: "1em" }}>
                <AccordionComponent
                    items={[
                        {
                            uuid: "1",
                            heading: <h3>For Loans ? </h3>,
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "2",
                            heading: (
                                <h3>
                                    How recieve blablabla on EUR, GBP and USD?
                                </h3>
                            ),
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "3",
                            heading: (
                                <h3>
                                    How do see i don tirefind content interest
                                    rate?
                                </h3>
                            ),
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "4",
                            heading: <h3>What are Hifast interest rates? </h3>,
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                    ]}
                />
            </div>
        ),
    },
    {
        title: `Withdrawal`,
        content: (
            <div style={{ marginTop: "1em" }}>
                <AccordionComponent
                    items={[
                        {
                            uuid: "1",
                            heading: (
                                <h3>
                                    How to send and recieve crypto assets for
                                    withdrawal ?{" "}
                                </h3>
                            ),
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "2",
                            heading: (
                                <h3>
                                    How recieve blablabla on EUR, GBP and USD?
                                </h3>
                            ),
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "3",
                            heading: (
                                <h3>
                                    How do see i don tirefind content interest
                                    rate?
                                </h3>
                            ),
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "4",
                            heading: <h3>What are Hifast interest rates? </h3>,
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                    ]}
                />
            </div>
        ),
    },
    {
        title: `P2p Platform`,
        content: (
            <div style={{ marginTop: "1em" }}>
                <AccordionComponent
                    items={[
                        {
                            uuid: "1",
                            heading: (
                                <h3>
                                    How to send and recieve crypto assets for
                                    p2p platform?{" "}
                                </h3>
                            ),
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "2",
                            heading: (
                                <h3>
                                    How recieve blablabla on EUR, GBP and USD?
                                </h3>
                            ),
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "3",
                            heading: (
                                <h3>
                                    How do see i don tirefind content interest
                                    rate?
                                </h3>
                            ),
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                        {
                            uuid: "4",
                            heading: <h3>What are Hifast interest rates? </h3>,
                            content: (
                                <p>
                                    Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7. Got a problem? Just get
                                    in touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.Got a problem? Just get in
                                    touch. Our support team is available
                                    24/7.Got a problem? Just get in touch. Our
                                    support team is available 24/7.Got a
                                    problem? Just get in touch. Our support team
                                    is available 24/7.
                                </p>
                            ),
                        },
                    ]}
                />
            </div>
        ),
    },
];
export const Faq = () => {
    return (
        <FAQContainer>
            <h2 id="#FAQ">FAQ</h2>
            <h4>Get all your questions about HiFast answered.</h4>
            <TabComponent tabs={tabs} noLink={true} defaultIndex={0} />
        </FAQContainer>
    );
};

export default Faq;
