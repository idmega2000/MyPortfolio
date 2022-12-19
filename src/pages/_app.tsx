import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import Meta from 'components/Meta';
import {
  fontUrlJosefinSans, fontUrlLilitaOne,
  fontUrlLuckiestGuy, theme, darkThem, GlobalStyle
} from 'constants/index';
import LanguageProvider from 'components/Language';
import DarkModeToggle from 'components/ThemeChanger/DarkModeToggle';
import { HeaderAnchor } from 'components/Utilities/styled';


function MainApp({ Component, pageProps }: { Component: React.ComponentClass<any>, pageProps: Object }) {
  const [themeMode, setThemeMode] = useState(true);

  return <div>
    <ThemeProvider theme={themeMode ? darkThem : theme}>
      <LanguageProvider>
        <>
          <GlobalStyle />
          <link href={fontUrlJosefinSans} rel="stylesheet"></link>
          <link href={fontUrlLilitaOne} rel="stylesheet"></link>
          <link href={fontUrlLuckiestGuy} rel="stylesheet"></link>
          <Meta />
          <div className="navbar">
            <HeaderAnchor href={'#Experience'}>Experience</HeaderAnchor>
            <HeaderAnchor href={'#Education'}>Education</HeaderAnchor>
            <DarkModeToggle updateThemeMode={setThemeMode} />
          </div>
          <Component {...pageProps} />
        </>
      </LanguageProvider>
    </ThemeProvider>
  </div>
}


MainApp.getInitialProps = async ({
  Component,
  ctx,
}) => {
  let pageProps = {};
  try {
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, pageUrl: ctx.req ? ctx.req.url : null };
  } catch (error) {
    // Capture errors that happen during a page's getInitialProps.
    // This will work on both client and server sides.
    // const errorEventId = captureException(error, ctx);
    return {
      hasError: true,
      pageProps,
      // errorEventId,
    };
  }
};

export default MainApp;
