import React from "react";
import styled from "styled-components";
import { AccordionComponent } from "./accordion";
import { FAQContainer } from "./style";
// import { AccordionComponent } from "../../../components/accordion";

export const Faq = () => {
    const FAQ = styled.div`
        margin: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #212529;
        padding: 10px;
        p {
            font-size: 18px;
        }
    `;
    return (
        <FAQContainer>
            <h2>FAQ</h2>
            <h4>Get all your questions about HiFast answered.</h4>
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
        </FAQContainer>
    );
};

export default Faq;
