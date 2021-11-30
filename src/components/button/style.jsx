import styled from "styled-components";
import { colors } from "../../utils/colors";

export const OutlineButtonContainer = styled.button`
    & {
        color: ${(props) => props.fg || colors.mainBlue};
        position: relative;
        /* margin: 0.8em 0; */
        display: inline-block;
        background-color: transparent;
        /* margin-bottom: 1.8em; */
        text-transform: uppercase;
        /* background-color: rgb(238, 239, 245); */
        width: 8em;
        height: 2.9em;
        font-weight: 600;
        /* padding: 0.8em 1.2em; */
        font-size: 0.8em;
        /* border-radius: 5px; */
        border: 1px solid ${(props) => props.fg || colors.mainBlue};
        text-transform: uppercase;
        /* height: 20em; */
    }

    &:hover {
        /* color: var(--primary-main-300); */
        cursor: pointer;
        border: none;
    }

    &:hover div.button-text {
        color: white;
    }
    &:hover div.button-hover {
        width: 100%;
        background-color: ${(props) => props.fg || colors.mainBlue};
    }
    & div.button-text {
        position: absolute;
        z-index: 9339399;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & div.button-hover {
        background-color: ${(props) => props.fg || colors.mainBlue};
        position: absolute;
        width: 0;
        height: 100%;
        left: 0;
        top: 0;
        /* border-radius: 5px; */
        z-index: 939;
        transition: width 0.1s;
        height: 100%;
    }
`;
