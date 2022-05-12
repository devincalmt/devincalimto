import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" href="/asset/font/PrahoPro/stylesheet.css"/>
            <link rel="stylesheet" href="/asset/font/Poppins/stylesheet.css"/>
            <link rel="stylesheet" href="/asset/font/CarmenSans/stylesheet.css"/>
            <link rel="stylesheet" href="/asset/fontawesome/css/fontawesome.min.css"/>
            {/* <script src="https://use.fontawesome.com/46daf35aa3.js"></script>
            <script src="/js/jquery.js"></script>
            <script src="/js/scripts.js"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument