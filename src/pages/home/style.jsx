import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { padding } from "../../utils/spacing";

import Ellipse from "./../../assets/icons/ellipse.svg";

export const HomepageContainer = styled.div`
    section.banner {
        position: relative;
        img.gradient {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }
        div.bg-hide {
            display: none;
        }

        @media (max-width: ${breakpoints.sm}) {
            img.gradient {
                position: absolute;
                top: -30px;
                left: -80px;
                width: 100%;
            }

            div.bg-hide {
                display: block;

                img {
                    width: 100%;
                }
            }
        }
        div.banner {
            width: 100%;
            position: relative;
            display: flex;
            justify-content: space-between;

            div.right {
                /* width: 50%; */
                right: 0;
                top: 0;

                img {
                    height: 640px;

                    @media (max-width: 1200px) {
                        height: 560px;
                    }
                }
            }

            h1 {
                font-size: 3.6em;
                color: black;
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

            p {
                font-size: 18px;
                margin-top: 1.5em;
                line-height: 30px;
            }

            div.left {
                width: 55%;
                padding: 2em 0 2em ${padding.mainPadding.lg};
                @media (max-width: ${breakpoints.sm}) {
                    padding: 2.2em ${padding.mainPadding.small};
                    display: block;
                    .sm-hide {
                        display: none;
                    }
                }
            }

            @media (max-width: 1024px) {
                padding: 1.5em ${padding.mainPadding.small};
                display: block;
                div.left {
                    width: 100%;
                }
                h1 {
                    font-size: 2em;
                    line-height: 40px;
                }
                .sm-hide {
                    display: none;
                }
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
        }
    }
`;
