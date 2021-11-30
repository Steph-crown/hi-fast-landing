import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { padding } from "../../utils/spacing";

export const FAQContainer = styled.div`
    width: 100%;

    h2 {
        font-size: 2.4em;
        font-weight: 400;
        text-align: center;
        color: #14171a;
    }
    h4 {
        font-size: 1.5em;
        text-align: center;
        font-weight: 400;
        margin-top: 1.2em;
        color: #4a5056;
        margin-bottom: 40px;
    }
    @media (max-width: ${breakpoints.sm}) {
        h2 {
            font-size: 2em;
        }
        h4 {
            font-size: 1.2em;
        }
    }

    padding: 2.6em ${padding.mainPadding.lg};
    @media (max-width: ${breakpoints.sm}) {
        padding: 2.4em ${padding.mainPadding.small};

        .sm-hide {
            display: none;
        }
    }
    p {
        font-size: 1em;
        display: block;
        line-height: 2em;
        color: #4a4a4a;
        transition: 0.4s;
    }

    h3 {
        font-size: 23px;
        display: block;
        margin-top: 1em;
        line-height: 2em;
        color: #4a4a4a;
        transition: 0.4s;
        font-weight: 400;
    }
`;
