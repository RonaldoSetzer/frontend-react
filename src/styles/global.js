import { createGlobalStyle } from 'styled-components';
import { palette, displays } from '../utils/colors';

const GlobalStyles = createGlobalStyle`
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
  time, mark, audio, video, main {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  body {
    --background: ${displays.background};
    --foreground: ${displays.foreground};
    --boundary: ${displays.boundary};
    --boundary-soft: ${displays.boundarysoft}
    --boundary-light: ${displays.boundarylight}
    --primary: ${palette.primary}
    --secondary: ${palette.secondary}
    --danger: ${palette.danger}
    --warning: ${palette.warning}
    --info: ${palette.info}
  }
  
  body {
    line-height: 1;
    font-family:  'Baloo 2', Helvetica, Arial, sans-serif;
    color: var(--foreground);
    background: var(--background);
  }

  button {
    cursor: pointer;
    color: var(--foreground)
    font-weight: 700;

    padding: 0.5rem;

    background: var(--boundarysoft);
    border: 1px solid var(--foreground);
    border-radius: 15px;
  }

  ul {
    list-style: none;
  }

  hr {
    height: 2px;
    border: none;
    background: var(--foreground);
  }

  input {
    flex: 1;
    color: var(--foreground);
    font-weight: 700;

    margin-right: 0.5rem;
    padding: 0.5rem;

    background: var(--boundarysoft);
    border: none;
    border-bottom: 1px solid var(--foreground);
    border-right: 1px solid var(--foreground);
    border-radius: 5px;
  }

  strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;

export default GlobalStyles;
