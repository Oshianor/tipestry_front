import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../src/reducers/index';
import { Lang } from '../lang';

const store = createStore(appReducer, applyMiddleware(thunk));

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>
            Tipestry | {Lang.c1}
            { /* Home // 家 */ }
          </title>
          <meta charSet="UTF-8" />
          <meta name="description" content={Lang.b} />
          <meta name="keywords" content="Tipestry, Cryptocurrency" />
          <meta name="author" content="Abundance" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="application-name" content="Tipestry." />
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500" />
        </Head>
        {/* Wrap every page in Jss and Theme providers */}
        <Provider store={store}>
        
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            {/* MuiThemeProvider makes the theme available down the React
                tree thanks to React context. */}
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                  to render collected styles on server side. */}
              <Component pageContext={this.pageContext} {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;

store.subscribe(() => {
  console.log("Store Changed, ", store.getState());
});