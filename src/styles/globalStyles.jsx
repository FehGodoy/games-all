import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html, 
body, #root {
    height: 100%;
    overflow-x:hidden;
}

body{
    font-family: var(--font);
    background-color: var(--background);    
}


@keyframes blinker {  
  50% { opacity: 0; }
}

img{
    width:100%;
}

a{
    text-decoration:none ;
}

:root{
    --font: 'Poppins', sans-serif;
    --blueButton: #3B74F2;
    --black:#000;
    --white: #fff;    
    --background:#0A0F13;
    --menu: #1A2127;
    --activeColor: #00EF00;
    --playstation: #3B74F2;
    --xbox: #00ef00;
}

`;