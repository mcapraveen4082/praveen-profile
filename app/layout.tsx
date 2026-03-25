import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

import '../styles/globals.scss';
import '../src/index.css';
import '../src/App.css';

import Providers from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

