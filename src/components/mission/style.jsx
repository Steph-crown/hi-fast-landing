import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { padding } from "../../utils/spacing";

export const MissionContainer = styled.div`
    width: 100%;

    padding: 2.6em ${padding.mainPadding.lg};
    @media (max-width: ${breakpoints.sm}) {
        padding: 2.4em ${padding.mainPadding.small};

        .sm-hide {
            display: none;
        }
    }
    & > section {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 2em;
        & > div {
            width: 48%;
            min-height: 10px;
            background-color: #faf0e6;
            padding: 2em 1.5em;

            h3 {
                font-size: 2em;
                font-weight: 400;
            }

            p {
                font-size: 18px;
                margin-top: 1em;
                color: #454545;
                line-height: 1.6em;
            }

            img {
                height: 340px;
                margin: auto;
            }
        }

        &.top {
            div:last-child {
                background: #e7e5ff;
            }
        }

        @media (max-width: ${breakpoints.md}) {
            margin-bottom: 0;
            & > div {
                width: 100%;
                margin: 1em 0;

                img {
                    height: 300px;
                }
            }
        }

        @media (max-width: ${breakpoints.sm}) {
            & > div {
                width: 100%;

                h3 {
                    font-size: 1.5em;
                }
                p {
                    font-size: 14px;
                }

                img {
                    width: 80%;
                }
            }
        }
    }
`;
