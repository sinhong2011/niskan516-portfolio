/* eslint-disable @next/next/no-img-element */

import Document, {
  Html,
  Head,
  NextScript,
  DocumentContext,
  Main,
} from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from 'components/layouts/theme'

const Loader = () => (
  <div id="document_loader" className="loader">
    <table>
      <tbody>
        <tr>
          <td>
            <div
              className="loader_logo"
              style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/computer-cat-icon.png"
                alt=""
                width="200"
                height="200"
              />
            </div>
            <div className="bar">
              <span className="loader-pc wait" />
            </div>
            <div className="info">　</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <style>{`
  @keyframes loader-pc-wait {
    0%   { transform: translateX(0px); width: 0px; margin-left: 0%; }
    50%  { transform: translateX(50px); width: 50px; margin-left: -20%; }
    100% { transform: translateX(100px); width: 0px; margin-left: 0%; }
  }
  .loader .bar {
    position: relative; display: inline-block; width: 100px; height: 1px; margin: 0; padding: 0; text-align: left; box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.25);
    background: #ccc; margin-top: 35px; margin-bottom: 15px;
  }
  .loader .bar span { display: inline-block; position: absolute; left: 0; top: 0; height: 100%; width: 0%; background: #fff; margin: 0; padding: 0; box-shadow: 0 0 6px 0.5px rgb(255, 255, 255); }
  .loader .info{ color: #fff; font-size: 14px; font-family: monospace; }
  .loader-pc.wait { animation: loader-pc-wait .7s linear infinite; }
  .loader { 
    position: fixed; z-index: 999999; width: 100vw; height: 100vh; margin: 0; padding: 0; left: 0; top: 0; -webkit-font-smoothing: antialiased;
    background: #eee; text-align: center; box-shadow: inset 0 0 15vw rgba(0,0,0,0.7); will-change: opacity;
    opacity: 1; transition: opacity 250ms ease-in-out, transform 250ms ease-in-out; will-change: opacity;
  }
  .loader_logo img { width: 188px; height: auto; }
  .loader table, .loader td { margin: 0; padding: 0; width: 100%; height: 100%; }
  .loader table { transform: translateY(-40px); }
  .loader.out { opacity: 0; pointer-events: none; }
  body { display: block; }
  `}</style>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Loader />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
