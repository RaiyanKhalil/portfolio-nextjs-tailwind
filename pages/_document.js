import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

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

          {/* Add the Google Tag Manager script with correct tracking ID */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-688L3MZZYC"
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


      </body>
    </Html>
  )
}
