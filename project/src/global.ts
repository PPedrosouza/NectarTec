import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    botton {
        backgroud-color: none;
        border: none;
        outilne: none;
    }

    a {
        text-decoration: none;
        outline: none;
    }

    ul {
        list-style: none;
    }

`; 

export default GlobalStyle;