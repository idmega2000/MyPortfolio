import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const fontUrlJosefinSans = 'https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap';
const fontUrlLilitaOne = 'https://fonts.googleapis.com/css?family=Lilita+One&display=swap';
const fontUrlLuckiestGuy = 'https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap';


const theme = {
  colors: {
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
    gray_moderate: '#f7f7f7',
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


 const darkThem = {
  colors: {
    gray_moderate: '#1b2938',
  }
}
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


  body.light-mode {
    background-color: #fff;
    color: #333;
    transition: background-color 0.3s ease;
  }
  
  body.dark-mode {
    background-color: #10171d;
    color: #dfdfdf;
  
    .navbar {
      background-color: #1b2938;
    }
  
    .dark-mode-toggle > button {
      color: #999;
      &:last-child {
        color: lightblue;
      }
    }
  }
  
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    padding: 20px;
    
  }

  body.dark-mode .content code {
    background-color: #1b2938;
  }
  
  body.dark-mode .content a {
    color: #ee09;
  }
  
  body.dark-mode .content button {
    color: #ee09;
  }
  
  .dark-mode-toggle {
    display: flex;
    margin: 0 auto;
    & > button {
      font-size: 1.2em;
      background: none;
      border: none;
      color: #ffe600;
      cursor: pointer;
      transition: color 0.3s ease;
      &:last-child {
        color: #666;
      }
  
      &:focus {
        outline: none;
      }
    }
  }
  
  .toggle-control {
    position: relative;
    padding: 0 4px;
    display: flex;
    align-items: center;
  }
  input[type='checkbox'].dmcheck {
    width: 40px;
    height: 10px;
    background: #555;
    position: relative;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    vertical-align: 2px;
    outline: none;
  
    &:checked + label {
      left: 30px;
    }
  
    &:focus-visible {
      outline: solid 2px white;
    }
  
    & + label {
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      transition: all 0.3s ease;
      cursor: pointer;
      position: absolute;
      left: 2px;
      background: #fff;
      opacity: 0.9;
      background-color: #f6f6f6;
    }
  }
`;


export const socialMediaLinks = {
  twitter: 'https://twitter.com/idmega2000',
  github: 'https://github.com/idmega2000',
  instagram: 'https://www.instagram.com/idmega2000/',
  linkedin: 'www.linkedin.com/in/idris-kelani'

}

export { fontUrlJosefinSans, fontUrlLilitaOne, fontUrlLuckiestGuy, GlobalStyle, theme, darkThem };
