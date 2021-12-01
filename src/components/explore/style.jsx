import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colors";
import { padding } from "../../utils/spacing";

export const ExploreContainer = styled.div`
    width: 100%;

    padding: 2.6em ${padding.mainPadding.lg};
    @media (max-width: ${breakpoints.sm}) {
        padding: 2.4em ${padding.mainPadding.small};

        .sm-hide {
            display: none;
        }
    }
    h2 {
        font-size: 2em;
        color: ${colors.mainBlue};
        line-height: 50px;
        text-align: center;
    }
`;

export const TableContainer = styled.div`
    width: 100%;
    overflow-x: scroll;

    /* width */
    ::-webkit-scrollbar {
        height: 0px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    table {
        margin: 24px 0;
        th {
            small {
                color: #113353;
                font-size: 14px;
                font-weight: 400;
            }
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    tr:first-child td {
        padding-top: 1.2em;
    }
    td,
    th {
        /* border: 1px solid #ccc; */

        padding: 1.5em 24px;
        text-align: left;
        /* width: 50px; */

        &.right {
            text-align: right;
        }

        p {
            font-weight: 500;
            font-size: 1em;
            color: #050f19;
            white-space: pre;

            &.green {
                color: #3acc8a;
            }

            &.red {
                color: #df5f67;
            }
        }

        div.flex {
            display: flex;
            min-height: 2px;
            align-items: center;
            img {
                height: 1.8em;
                margin-right: 0.8em;
            }
            p {
                font-weight: 500;
                font-size: 1em;
                margin-right: 0.8em;
                color: #050f19;
                white-space: pre;
            }

            p.cap {
                /* display: block; */
                color: rgba(17, 51, 83, 0.6);
                text-transform: uppercase;
            }
        }

        div.center {
            justify-content: center;
        }
    }
`;
