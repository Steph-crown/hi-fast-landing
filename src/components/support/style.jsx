import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { padding } from "../../utils/spacing";

export const SupportContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 8em;

    padding: 9em ${padding.mainPadding.lg};
    @media (max-width: ${breakpoints.sm}) {
        padding: 2.4em ${padding.mainPadding.small};

        .sm-hide {
            display: none;
        }
    }

    img.abs {
        width: 34%;

        @media (max-width: 1200px) {
            width: 50%;
        }
        @media (max-width: 900px) {
            width: 70%;
        }
        @media (max-width: 700px) {
            width: 80%;
        }
        @media (max-width: 500px) {
            width: 90%;
        }
    }

    h1 {
        color: #dedede;
        font-size: 16em;
        padding-left: 0px;

        @media (max-width: 1200px) {
            font-size: 13em;
        }
        @media (max-width: 900px) {
            font-size: 11em;
        }
        /* @media (max-width: 700px) {
            width: 80%;
        }
        @media (max-width: 500px) {
            width: 90%;
        } */
        font-weight: 800;

        span {
            font-size: 60px;
        }
    }
    div.center {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 9393;
        padding-top: 5em;
        padding-left: 2em;
        h2 {
            font-size: 56px;
        }

        p {
            color: #454545;
            margin-top: 32px;
            line-height: 24px;
        }

        & > * {
            width: 33%;
            text-align: center;

            @media (max-width: 1200px) {
                width: 50%;
            }
            @media (max-width: 900px) {
                width: 70%;
            }
            @media (max-width: 700px) {
                width: 80%;
            }
            @media (max-width: 500px) {
                width: 100%;
            }
        }
    }

    .abs {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;
