import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colors";
import { padding } from "../../utils/spacing";

export const FooterContainer = styled.footer`
    width: 100%;

    padding: 2.6em ${padding.mainPadding.lg};
    @media (max-width: ${breakpoints.sm}) {
        padding: 2.4em ${padding.mainPadding.small};

        .sm-hide {
            display: none;
        }
    }

    img.logo {
        height: 1.6em;
    }

    & > div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
        section {
            width: 12%;
            min-height: 40px;
            margin-top: 3em;
            &.larger {
                width: 24%;
            }

            @media (max-width: ${breakpoints.md}) {
                width: 40%;

                &.larger {
                    width: 40%;
                }
            }

            @media (max-width: ${breakpoints.sm}) {
                width: 100%;

                &.larger {
                    width: 100%;
                }
            }
            h4 {
                font-size: 18px;
                color: ${colors.mainBlue};
            }

            a,
            p {
                font-size: 14px;
                display: block;
                margin-top: 1em;
                line-height: 1.5em;
                color: #4a4a4a;
                transition: 0.4s;
            }

            a:hover {
                margin-left: 8px;
                color: #222222;
            }
        }
    }
    & > div.socials {
        justify-content: center;
        align-items: center;
        min-height: 2px;
        width: 100%;
        margin-top: 4em;

        a {
            margin: 0 1.2em;
            &:hover {
                opacity: 50%;
            }
            svg {
                height: 20px;
            }
        }

        @media (max-width: ${breakpoints.sm}) {
            justify-content: flex-start;
            margin-top: 2em;

            a {
                margin: 0 1.5em 0 0;
            }
        }
    }

    & > p {
        text-align: center;
        font-size: 14px;
        display: block;
        margin-top: 1em;
        line-height: 1.5em;
        color: #4a4a4a;
        transition: 0.4s;
        @media (max-width: ${breakpoints.sm}) {
            text-align: left;
        }
    }
`;
