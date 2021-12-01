import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colors";
import { padding } from "../../utils/spacing";
import Ellipse from "./../../assets/icons/ellipse.svg";

export const HowItWorksContainer = styled.div`
    padding-top: 3em;
    text-align: center;
    position: relative;
    width: 100%;
    padding-bottom: 3em;
    background-color: #f6f9ff;
    h2 {
        font-size: 2.2em;
        color: ${colors.mainBlue};
        line-height: 72px;

        span.circled {
            background-image: url(${Ellipse});
            background-size: cover;
            background-position: center;
            padding: 0 1px;
            display: inline-block;
            background-repeat: no-repeat;
        }
    }

    img.abs {
        position: absolute;
        width: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
    }

    div.flex {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;

        width: 100%;

        padding: 2.6em ${padding.mainPadding.lg};
        section {
            width: 29%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 2em;
            margin-top: 1em;

            h2 {
                border-radius: 20px;
                background-color: white;
                box-shadow: 0px 25px 50px rgba(100, 44, 0, 0.07);
                width: 72px;
                height: 72px;
                justify-content: center;
                align-items: center;
                justify-self: center;
                display: flex;
                margin-bottom: 1.2em;
            }
        }
        h3 {
            font-size: 26px;
            color: #232323;
        }
        p {
            font-size: 1em;
            margin-top: 1.5em;
            color: #454545;
            line-height: 1.5em;
        }
        @media (max-width: ${breakpoints.sm}) {
            padding: 2.4em ${padding.mainPadding.small};
            section {
                width: 100%;
            }

            .sm-hide {
                display: none;
            }
        }
    }

    div.downloads {
        /* display: flex; */
        /* justify-content: flex-start; */
        /* margin-bottom: 3em; */

        & > a:first-child {
            margin-right: 1em;
        }

        @media (max-width: ${breakpoints.sm}) {
            margin-top: 14px;

            a img {
                height: 40px;
            }
        }
    }

    a img {
        height: 50px;
    }
`;
