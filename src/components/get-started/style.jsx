import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colors";
import { padding } from "../../utils/spacing";

export const GetStartedContainer = styled.div`
    width: 100%;
    padding: 0 ${padding.mainPadding.lg};
    margin: 4em 0;

    & > div {
        background-color: ${colors.mainBlue};
        width: 100%;
        color: white;
        text-align: center;
        border-radius: 1.5em;
        padding: 4em 2em;
    }

    h1 {
        font-size: 2.8em;
    }

    div.downloads {
        display: flex;
        justify-content: center;
        margin-top: 60px;

        & > a:first-child {
            margin-right: 1em;
        }
        & > a:last-child {
            margin-left: 1em;
        }
    }

    a img {
        height: 50px;
    }

    @media (max-width: ${breakpoints.sm}) {
        div.downloads {
            margin-top: 45px;
        }
        padding: 0;
        h1 {
            font-size: 1.5em;
        }
        & > div {
            border-radius: 0;
            padding: 3.5em ${padding.mainPadding.small};
        }
        .sm-hide {
            display: none;
        }

        a img {
            height: 2em;
        }
    }
`;
