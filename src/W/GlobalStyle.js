import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`  
body{
  align-content:center;
}
@font-face {
    font-family: 'Amiko-Regular';
    src: url('./fonts/Amiko-Regular.ttf');
    font-family: 'Amiko-Bold';
    src: url('./fonts/Amiko-Bold.ttf');
    font-family: 'Amiko-SemiBold';
    src: url('./fonts/Amiko-SemiBold.ttf');
  }
    body {
    font-family: 'Amiko-Regular';
    font-size: 12px;
   

    h1 {
     
    font-family: 'Amiko-Bold';
      font-weight: 800;
      font-size: 44px;
      color:white;
     
      
    h2 {
        font-family: 'Amiko-Bold';
          font-weight: 800;
          font-size: 24px;

    p {
      font-size: 10px;
      color:'grey'
  }
  grey: #EBE8E8,
  oldpink: #F0DBD8,
  salmon: #FFCAB8,
  gold: #F9C153,
  purple: #241F5D,
  velvet: #5353A2,
  plum: #6767AD,
  emerald: #78C4D2,
  turquoise: #7ED0DF,
  asura: #94DAD5,
  orange: #FF8B66,
  brick: #EB5933,
  white: #FFFFFF,

`;


export default GlobalStyle;