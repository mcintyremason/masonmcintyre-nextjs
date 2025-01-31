import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const sheets = new ServerStyleSheets()
  //   const originalRenderPage = ctx.renderPage

  //   ctx.renderPage = () =>
  //     originalRenderPage({
  //       enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  //     })

  //   const initialProps = await Document.getInitialProps(ctx)

  //   return {
  //     ...initialProps,
  //     // Styles fragment is rendered after the app and page rendering finish.
  //     styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  //   }
  // }

  render() {
    return (
      <Html lang="en">
        <Head />
        <AppRouterCacheProvider>
          <body>
            <Main />
            <NextScript />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-NHMNLRGX9Z"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NHMNLRGX9Z');`,
              }}
            />
          </body>
        </AppRouterCacheProvider>
      </Html>
    )
  }
}

export default MyDocument
