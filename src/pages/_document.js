
import Document, { Head, Main, NextScript, Html } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <title>My page</title> */}
          {this.props.styleTags}
          <style>
            {`input:focus::placeholder {
  color: transparent;
}`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </ Html>
    );
  }
}
