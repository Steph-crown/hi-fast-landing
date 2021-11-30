import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colors";
import { padding } from "../../utils/spacing";

export const NavBarContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2.6em ${padding.mainPadding.lg};

    img {
        height: 2em;
    }

    @media (max-width: ${breakpoints.sm}) {
        padding: 2.4em ${padding.mainPadding.small};

        .sm-hide {
            display: none;
        }
    }

    svg {
        height: 30px;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 2px;
        a {
            text-transform: uppercase;
            color: ${colors.mainBlue};
            font-size: 1em;
            font-weight: 600;
            margin-left: 4em;
            position: relative;
            min-width: 2px;
            display: inline-block;

            div.line {
                position: absolute;
                width: 0;
                height: 2px;
                background-color: ${colors.mainBlue};
                transition: width 0.4s;
            }

            &:hover div.line {
                width: 100%;
            }
        }
    }
`;
