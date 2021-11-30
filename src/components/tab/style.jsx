import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colors";

export const TabContainer = styled.div`
    ul.tab-links {
        padding: 0;
        margin: 0 auto 20px;
        list-style: none;
        max-width: 400px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        li a {
            padding: 0 0 0em 0;
            display: flex;
            justify-content: center;
            text-decoration: none;
            color: #6d6e71;
            text-transform: uppercase;
            font-weight: 700;

            @media (max-width: ${breakpoints.sm}) {
                font-size: 14px;
            }
            @media (max-width: 330) {
                font-size: 12px;
            }
        }

        li a:hover {
            color: #383838;
        }
    }

    /* Selected tab title */
    ul.tab-links li.tab {
        position: relative;
        width: auto;
        a {
            text-decoration: none;
            color: ${colors.mainBlue};
            border-bottom: 3px solid var(--primary-color);
            font-weight: 800;
        }
    }

    /* .tab::before {
        content: "";
        width: 100%;
        height: 100%;
        opacity: 0.2;
        position: absolute;
        border-radius: var(--border-radius);
        background: none;
        transition: background 0.5s ease;
    }

    .tab.active::before {
        background: red;
    } */

    .tab span {
        /* margin-left: 10px; */
        transition: color 0.5s ease;
    }

    div.tab-content {
        display: none;
    }

    div.tab-content.active {
        display: block;
    }

    /* .tab.active span {
        color: var(--active-color);
    }

    .tab.active svg {
        fill: var(--active-color);
    }

    .tab a {
        padding: 16px;
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
    } */
`;

// Variants

export const tabVariant = {
    active: {
        // width: "55%",
        transition: {
            type: "tween",
            duration: 0.4,
        },
    },
    inactive: {
        // width: "48%",
        transition: {
            type: "tween",
            duration: 0.4,
        },
    },
};

export const tabContentVariant = {
    active: {
        display: "block",
        transition: {
            staggerChildren: 0.2,
        },
    },
    inactive: {
        display: "none",
    },
};
