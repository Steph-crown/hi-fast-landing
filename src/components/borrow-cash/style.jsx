import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colors";
import { padding } from "../../utils/spacing";
import Ellipse from "./../../assets/icons/ellipse.svg";

export const BorrowCashContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    min-height: 2px;
    align-items: center;
    flex-direction: row-reverse;
    background-color: ${colors.mainBlue};

    padding: 2.6em ${padding.mainPadding.lg};
    .bg-hide {
        display: none;
    }
    img.sm-hide {
        width: 45%;
    }
    div.downloads {
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;

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
    @media (max-width: 700px) {
        padding: 2.4em ${padding.mainPadding.small};
        flex-direction: column;

        img.sm-hide {
            display: none;
        }
        .bg-hide {
            display: block;
            width: 100%;
            margin: auto;
            margin-bottom: 2em;
        }
    }

    h2 {
        font-size: 2.2em;
        color: white;
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
    div.right {
        width: 48%;
        section {
            justify-content: flex-start;
            display: flex;
        }

        @media (max-width: 1024px) {
            width: 100%;
        }
    }

    section {
        margin: 1.6em 0;
        img {
            height: 2.5em;
            margin-right: 2em;
        }
    }

    small.caps {
        font-size: 14px;
        font-weight: 700;
        color: white;
    }
    h6 {
        font-size: 18px;
        line-height: 30px;
        color: #e2e2e2;
        font-weight: 400;
        margin-bottom: 2em;
    }
    h4 {
        font-size: 1.5em;
        color: white;
    }
    p {
        font-size: 14px;
        color: #e2e2e2;
        line-height: 22px;
        margin-top: 0.7em;
    }

    @media (max-width: 700px) {
        small.caps {
            font-size: 12px;
        }
        h2 {
            font-size: 1.5em;
            line-height: 2em;
        }
        h6 {
            font-size: 1em;
        }
        section {
            img {
                margin-right: 1em;
            }
        }
        h4 {
            font-size: 20px;
        }
    }
`;
