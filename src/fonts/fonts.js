import { createGlobalStyle } from "styled-components";
import LINESeedKRBd from "./LINESeedKR-Bd.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'LINESeedKR-Bd';
        src: local("LINESeedKRBd"),
        url(${LINESeedKRBd}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`;
