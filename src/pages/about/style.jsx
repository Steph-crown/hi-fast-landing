import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colors";
import { padding } from "../../utils/spacing";

export const AboutPageContainer = styled.div`
    section.banner {
        background-color: #e9f2ff;
        div.banner-text {
            width: 100%;

            padding: 1.5em ${padding.mainPadding.lg};
            padding-bottom: 80px;
            @media (max-width: ${breakpoints.sm}) {
                padding: 1.8em ${padding.mainPadding.small};
                padding-bottom: 60px;

                .sm-hide {
                    display: none;
                }
            }
            h3 {
                margin-top: 0em;
                font-size: 3em;
                font-weight: 300;
                color: ${colors.mainBlue};
                width: 792px;
            }
            h5 {
                font-size: 1.5em;
                font-weight: 400;
                width: 584px;
                color: #454545;
                margin-left: 500px;
            }
            @media (max-width: 1300px) {
                h5 {
                    margin-left: 350px;
                }
            }

            @media (max-width: 1100px) {
                h5 {
                    margin-left: 200px;
                }
            }
            @media (max-width: ${breakpoints.md}) {
                h3 {
                    width: 100%;
                    font-size: 2.6em;
                }
                h5 {
                    margin-left: 0;
                    font-size: 1.5em;
                    width: 90%;
                    text-align: center;
                    margin-top: 3em;
                }
            }

            @media (max-width: ${breakpoints.sm}) {
                h3 {
                    width: 100%;
                    font-size: 2em;
                }
                h5 {
                    /* margin-left: 0; */
                    font-size: 1.4em;
                    width: 90%;
                    text-align: left;
                    display: block;
                    margin: 1em auto;
                }
            }
        }
    }
`;
