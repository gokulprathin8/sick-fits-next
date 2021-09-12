import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    html {
        --red: #ff0000;
        --black: #393939;
        --grey: #3a3a3a;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(----lightGrey)
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0px 12px 24px rgba(0,0,0,0.09);
        box-sizing: border-box;
    }

    *, *:before, *, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'radnika_next',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        a {
            text-decoration: none;
            color: var(--black);
        }

        a:hover {
            text-decoration: underline;
        }
    }
`;

export default function Page({ children, cool }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <h2>I am the page component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
