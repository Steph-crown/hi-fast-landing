import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colors";
import { padding } from "../../utils/spacing";

export const ValueOfferingContainer = styled.div`
    width: 100%;
    div.bg-hide,
    div.sm-hide {
        display: flex;
        width: 100%;
        justify-content: center;
        display: flex;
        margin-top: 2.5em;
    }

    div.bg-hide {
        display: none;
    }
    padding: 2.6em ${padding.mainPadding.lg};
    @media (max-width: ${breakpoints.sm}) {
        padding: 2.4em ${padding.mainPadding.small};

        div.sm-hide {
            display: none;
        }
        div.bg-hide {
            display: block;
        }
    }
    h3 {
        font-size: 2em;
        text-align: center;
        font-weight: 400;
        color: ${colors.mainBlue};

        @media (max-width: ${breakpoints.sm}) {
            font-size: 1.5em;
        }
    }
`;
