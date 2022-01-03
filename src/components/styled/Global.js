import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
// Reset : Start
            html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
            display: block;
        }
        body {
            line-height: 1;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }

// Reset : End

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Poppins:wght@600&display=swap');

    * {
        box-sizing: border-box;
    }    

    html{
    background-color: rgb(103, 75, 175); 
    font-weight:600;
       
    }

    h1{
        font-family: 'Poppins', sans-serif;
    }

    body{
        font-family: 'Open Sans', sans-serif;
    }

    p{
        font-family: 'Open Sans', sans-serif;
    }

    a{
        text-decoration: none;
        font-family: "Poppins", sans-serif;

        @media (max-width: 480px) {
            display:flex;
            justify-content: center;
        }

    }



`;

export default Global;
