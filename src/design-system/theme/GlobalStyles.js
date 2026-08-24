import { createGlobalStyle } from "styled-components";

/**
 * Base global styles / reset.
 */
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    background-color: ${({ theme }) => theme.bg.app};
    color: ${({ theme }) => theme.text.primary};
    font-family: ${({ theme }) => theme.font.family.body};
    font-size: ${({ theme }) => theme.font.size.md};
    line-height: ${({ theme }) => theme.font.lineHeight.normal};
  }

  #root {
    overflow-x: hidden;
  }

  section[id] {
    scroll-margin-top: 88px;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.font.family.display};
    color: ${({ theme }) => theme.text.heading};
    text-wrap: balance;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.border.strong};
    border-radius: ${({ theme }) => theme.radius.pill};
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
