import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { padding } from "../../utils/spacing";

export const BannerImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    /* margin-top: 4em; */

    padding: 2.6em ${padding.mainPadding.lg};
    @media (max-width: ${breakpoints.sm}) {
        padding: 2.4em ${padding.mainPadding.small};

        .sm-hide {
            display: none;
        }
    }
    img {
        object-fit: cover;
    }

    img.banner1 {
        width: 40%;
        /* height: 400px; */
    }
    div.right {
        width: 58%;
    }
    img.banner2 {
        width: 58%;
        /* height: 160px; */
        margin-bottom: 2em;
    }
    img.banner3 {
        width: 40%;
        margin-bottom: 2em;

        /* height: 186px; */
    }
    img.banner4 {
        width: 30%;
        /* height: 242px; */
    }
    img.banner5 {
        width: 40%;
        /* height: 200px; */
    }
    img.banner6 {
        width: 25%;
        /* height: 210px; */
    }

    div.right > div {
        display: flex;
        justify-content: space-between;
        flex: 1;
        flex-wrap: wrap;

        &.right__top {
            margin-bottom: 1em;
        }
    }
    @media (max-width: ${breakpoints.sm}) {
        img.banner1 {
            width: 100%;
            /* height: 400px; */
        }
        div.right {
            width: 100%;
        }
        img.banner2 {
            width: 100%;
            margin-top: 1em;
            /* height: 160px; */
        }
        img.banner3 {
            width: 48%;
            /* height: 186px; */
        }
        img.banner4 {
            width: 48%;
            /* height: 242px; */
        }
        img.banner5 {
            width: 48%;
            /* height: 200px; */
        }
        img.banner6 {
            width: 48%;
            /* height: 210px; */
        }
    }
`;
