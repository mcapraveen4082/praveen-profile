import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

import '../styles/globals.scss';
import '../src/index.css';
import '../src/App.css';

import store from '../src/store/index';
import Header from '../src/Component/snippets/Header';
import Footer from '../src/Component/snippets/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

