const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    body{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    main{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`;

export default GlobalStyle;
