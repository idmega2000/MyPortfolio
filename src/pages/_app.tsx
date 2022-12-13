import React, { ErrorInfo, ReactNode } from 'react';


import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Meta from 'components/Meta';
import { fontUrlJosefinSans, fontUrlLilitaOne, 
  fontUrlLuckiestGuy, theme, darkThem, GlobalStyle } from 'constants/index';
import LanguageProvider from 'components/Language';
import DarkModeToggle from 'components/ThemeChanger/DarkModeToggle';
import { HeaderAnchor } from 'components/Utilities/styled';



class MainApp extends App<{
  pageProps: Object;
  Component: ReactNode;
}> {
  state = {
    hasError: false,
    themeMode: false,
    // errorEventId: undefined,
  };

  static getInitialProps: typeof App.getInitialProps = async ({
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

  static getDerivedStateFromProps(
    props: { hasError: any; errorEventId: any },
    state: { hasError: any; errorEventId: any }
  ) {
    // If there was an error generated within getInitialProps, and we haven't
    // yet seen an error, we add it to this.state here
    return {
      hasError: props.hasError || state.hasError || false,
      // errorEventId: props.errorEventId || state.errorEventId || undefined,
    };
  }

  static getDerivedStateFromError() {
    // React Error Boundary here allows us to set state flagging the error (and
    // later render a fallback UI).
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // const errorEventId = captureException(error, { errorInfo });

    // Store the event id at this point as we don't have access to it within
    // `getDerivedStateFromError`.
    // this.setState({ errorEventId });
  }
  updateThemeMode = (theState) => {
    this.setState({
      themeMode: theState,
    })
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
            {this.state.hasError ? (
              <section>
                <h1>There was an error!</h1>
                <p>
                  <a
                    href="#"
                    // onClick={() =>
                    //   // send error message to me using sentry or some other tools
                    // }
                  >
                    📣 Report this error
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    onClick={() => {
                      window.location.reload(true);
                    }}
                  >
                    Or, try reloading the page
                  </a>
                </p>
              </section>
            ) : (
              <ThemeProvider theme={this.state.themeMode? darkThem : theme}>
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
                    <DarkModeToggle updateThemeMode={this.updateThemeMode} />
                  </div>
                  <Component {...pageProps} />
                </>
              </LanguageProvider>
            </ThemeProvider>
            )}
      </div>
    );
  }
}

export default MainApp;
