/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import NProgress from 'nprogress';
import Router from 'next/router';
import { AppoloProvider } from '@apollo/client';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <AppoloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </AppoloProvider>
  );
}

export default withData(MyApp);
