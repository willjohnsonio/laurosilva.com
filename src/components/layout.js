import React from 'react'
import {Global, css} from '@emotion/core'
import Header from './header'
import Footer from './footer'
import reset from '../libs/reset'
import theme from '../config/theme'

const custom = css`
  body {
    background: ${theme.background};
    color: ${theme.accents2};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-size: 19px;
    font-weight: 600;
  }

  button:focus {
    outline: 0;
  }
  input[type='text'],
  input[type='password'],
  textarea,
  select {
    outline: none;
  }

  a {
    color: ${theme.success};
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  p {
    color: ${theme.accents2};
    line-height: 1.6;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${theme.accents1};
  }

  .highlight-line {
    background-color: rgba(201, 167, 255, 0.2);
    margin: 0 -10px;
    padding: 0 5px;
    border-left: 5px solid #c9a7ff;
  }
  .anchor {
    padding-right: 10px;
    margin-left: -30px;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  }
  @media (max-width: 620px) {
    .anchor {
      padding-right: 2px;
      margin-left: -15px;
    }
  }
  h1:hover .anchor {
    opacity: 1;
  }
  h2:hover .anchor {
    opacity: 1;
  }
  h3:hover .anchor {
    opacity: 1;
  }
  h4:hover .anchor {
    opacity: 1;
  }
  h5:hover .anchor {
    opacity: 1;
  }
  h6:hover .anchor {
    opacity: 1;
  }
  .anchor svg path {
  }
`

export const globalStyles = css`
  ${custom}
  ${reset},
`

function Layout({children}) {
  return (
    <div>
      <Global styles={globalStyles} />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
