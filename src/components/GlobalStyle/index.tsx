import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body
  {
    font-family: YuGothic, "Yu Gothic", 游ゴシック体, 游ゴシック, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "MS ゴシック", "MS Gothic", sans-serif;
    font-size: 16px;
    color: #333;
    box-sizing: border-box;
    letter-spacing: 1px;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.8;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  h2 {
    font-size: 24px;
    margin: 16px 0;
  }

  h3 {
    font-size: 20px;
    margin: 16px 0;
  }

  p {
    margin-bottom: 20px;
    line-height: 2.0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul,
  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  pre[class*="language-"] {
    margin: 16px 0 !important;
  }
`
