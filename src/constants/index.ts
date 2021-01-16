import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const fontUrlJosefinSans = 'https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap';
const fontUrlLilitaOne = 'https://fonts.googleapis.com/css?family=Lilita+One&display=swap';
const fontUrlLuckiestGuy = 'https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap';


const theme = {
  colors: {
    text_color: 'white',
    green_main: '#00e8bb',
    green_dark: '#01c39e',
    green: '#05e5b3',
    froly_red: '#f28b7f',
    red_flamingo: '#ec5642',
    red_dark: '#d44939',
    orange: '#e8a200',
    white: '#fff',
    gray_gallery: '#f0f0f0',
    gray_light: '#f9f9f9',
    gray_silver: '#c0c0c0',
    gray_silver_chalice: '#a19f9f',
    gray_dove_gray: '#707070',
    gray_mine_shaft: '#303030',
    gray_overlay: '#333333',
    black_woodsmoke: '#131415',
    eletric_violet: '#5d00e8',
    light_gray: '#f9f9f9',
    black_bg_modal: 'rgba(48, 48, 48, 0.4)',
    disabled: '#dfdfdf',
  },
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
   height: 100%;
  }

  body {
    min-height: 100%;
    height: 100%;
  }

  #__next{
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  html, body, div, input, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video{
    font-family: 'Josefin Sans', sans-serif;
  }

  input { 
    outline: none;
  }

  button {
    border: none;
    text-decoration: none;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: 'Josefin Sans', sans-serif;
  }

`;


export const socialMediaLinks = {
  twitter: 'https://twitter.com/idmega2000',
  github: 'https://github.com/idmega2000',
  instagram: 'https://www.instagram.com/idmega2000/',
  linkedin: 'www.linkedin.com/in/idris-kelani'

}

export { fontUrlJosefinSans, fontUrlLilitaOne, fontUrlLuckiestGuy, GlobalStyle, theme };
