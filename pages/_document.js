import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          {/* Define the dataLayer variable */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
              `
            }}
          />

          {/* Add the Google Tag Manager script */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          />

          {/* Define the gtag function */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-688L3MZZYC');
              `
            }}
          />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
