import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colors";
import { padding } from "../../utils/spacing";

export const OurTeamContainer = styled.div`
    padding: 2.6em ${padding.mainPadding.lg};
    width: 100%;
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

    p {
        color: #65676f;
        font-size: 1.2em;
        text-align: center;
        margin-top: 8px;

        @media (max-width: ${breakpoints.sm}) {
            font-size: 1em;
        }
    }

    div.team-images {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;

        img {
            height: 200px;
        }
        h5 {
            font-size: 16px;
            color: #3b3b3b;
        }
        small {
            color: #3b3b3b;
            font-size: 13px;
        }
        div.member {
            margin: 2em 1.5em;
            @media (max-width: ${breakpoints.sm}) {
                img {
                    height: 10em;
                }
            }
            @media (max-width: 450px) {
                img {
                    height: 8em;
                }
            }
            @media (max-width: 385px) {
                margin: 1.5em 1em;

                img {
                    height: 7em;
                }
            }
            @media (max-width: 315px) {
                margin: 1em 0em;
                width: 100%;

                img {
                    width: 100%;
                    height: 20em;
                    object-fit: cover;
                }
            }
        }
    }
`;
