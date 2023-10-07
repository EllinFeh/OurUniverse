import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Exo 2', sans-serif;
  background: linear-gradient(45deg,#000e29, #483078);
  background-size: 300% 300%;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dab2ff; 
  animation: backgroundAnim 5s ease infinite;
  user-select: none;
}

@keyframes backgroundAnim {
    0%{
      background-position: 0% 50%;
    }
    50%{
      background-position: 100% 50%;
    }
    100%{
      background-position: 0% 50%;
    }
  }
`;

export default GlobalStyle;

