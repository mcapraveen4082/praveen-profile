'use client';

import React from 'react';
import { Provider } from 'react-redux';

import store from '../src/store/index';
import Header from '../src/Component/snippets/Header';
import Footer from '../src/Component/snippets/Footer';
import LiveBackground from '../src/Component/snippets/LiveBackground';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <LiveBackground />
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </Provider>
  );
}

