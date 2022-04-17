import { ServerStyleSheets } from '@material-ui/styles'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })

    // const initialProps = await Document.getInitialProps(ctx);
    // return { ...initialProps };
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-156934776-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'UA-156934776-1');`,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
