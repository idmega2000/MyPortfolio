import React, { ReactNode } from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Meta from 'components/Meta';
import { fontUrlJosefinSans, fontUrlLilitaOne, 
  fontUrlLuckiestGuy, theme, GlobalStyle } from 'constants/index';
import LanguageProvider from 'components/Language';

class Page extends App<{
  pageProps: Object;
  Component: ReactNode;
}> {
  
  ThemeContext = React.createContext('light');

  render() {
    const { Component, pageProps } = this.props;
    return (
        <ThemeProvider theme={theme}>
          <LanguageProvider>
            <>
              <GlobalStyle />
              <link href={fontUrlJosefinSans} rel="stylesheet"></link>
              <link href={fontUrlLilitaOne} rel="stylesheet"></link>
              <link href={fontUrlLuckiestGuy} rel="stylesheet"></link>
              <Meta />
              <Component {...pageProps} />
            </>
          </LanguageProvider>
        </ThemeProvider>
    );
  }
}

export default Page;
