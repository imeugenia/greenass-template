import Document, { Html, Head, Main, NextScript } from "next/document";
import { renderToNodeList } from "react-fela";
import { createRenderer } from "fela";

class MyDocument extends Document {
  static async getInitialProps(context) {
    const renderer = createRenderer();
    const originalRenderPage = context.renderPage;

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) =>
          function EnhancedApp(props) {
            return <App {...props} renderer={renderer} />;
          },
      });

    const initialProps = await Document.getInitialProps(context);
    const styles = [...initialProps.styles, ...renderToNodeList(renderer)];

    return { ...initialProps, styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          ></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Oswald:wght@600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
