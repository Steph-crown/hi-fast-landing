import styled from "styled-components";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import plus from "./../../assets/icons/plus.svg";
import minus from "./../../assets/icons/minus.svg";
import { colors } from "../../utils/colors";

// Demo styles, see 'Styles' section below for some notes on use.
// import "react-accessible-accordion/dist/fancy-example.css";
export const AccordionComponent = ({ items }) => {
    return (
        <AccordionContainer>
            <Accordion allowZeroExpanded>
                {items?.map((item) => (
                    <AccordionItem key={item?.uuid}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {item?.heading}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>{item?.content}</AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </AccordionContainer>
    );
};

const AccordionContainer = styled.div`
    /**
* ----------------------------------------------
* Demo styles
* ----------------------------------------------
**/
    .accordion {
        /* The entire container */
    }

    .accordion__item + .accordion__item {
        /* Each item */
    }

    .accordion__button {
        /* background-color: var(--primary-main-100); */
        /* color: var(--info); */
        cursor: pointer;
        padding: 8px 18px;
        width: 100%;
        text-align: left;
        border: none;

        display: flex;
        min-height: 2px;
        position: relative;

        align-items: center;

        h3 {
            font-size: 1.1em;
        }
    }

    .accordion__button:hover {
        background-color: ${colors.active};
    }

    .accordion__button:before {
        display: inline-block;
        content: "";
        /* height: 10px;
        width: 10px; */
        /* border-bottom: 2px solid currentColor;
        border-right: 2px solid currentColor; */
        /* transform: rotate(-45deg); */
        position: absolute;
        right: 0;

        background-image: url(${plus});
        background-size: 1em 1em;
        height: 1em;
        width: 1em;
    }

    .accordion__button[aria-expanded="true"]::before,
    .accordion__button[aria-selected="true"]::before {
        position: absolute;
        right: 0;

        background-image: url(${minus});
        background-size: 1em 1em;
        height: 1em;
        width: 1em;
    }

    [hidden] {
        display: none;
    }

    .accordion__panel {
        padding: 20px;
        animation: fadein 0.35s ease-in;

        div.section {
            margin: 1em 0;
        }

        div.list p {
            padding-left: 1.2em;
        }
    }

    /* -------------------------------------------------- */
    /* ---------------- Animation part ------------------ */
    /* -------------------------------------------------- */

    @keyframes fadein {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;
