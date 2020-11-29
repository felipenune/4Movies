import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
    }
    html {
        font-size: 62.5%;
    }
    body, html {
        background: #001c34;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }
    @media(max-width: 1440px){
        html{
            font-size: 55%;
        }
    }
    @media(max-width: 1366px){
        html{
            font-size: 50%;
        }
    }
    @media(max-width: 1152px){
        html{
            font-size: 40%;
        }
    }
`;

export default Global;
