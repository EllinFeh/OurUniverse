import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Exo 2', sans-serif;
  background-color: ${(props) => props.backgroundColor};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dab2ff; 
  animation: backgroundAnim 5s ease infinite;
  user-select: none;
}
`;

export default GlobalStyle;

