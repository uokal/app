import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="../../../assets/img/logo/favicon-96x96.png"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="title"
          content="futuredoctor - Study medicine abroad"
        ></meta>
        <meta
          name="description"
          content="Study medicine abroad at internationally recognised universities throughout Europe: human medicine and dentistry in English."
        ></meta>
        <meta property="og:locale" content="en_GB"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:description"
          content="Study medicine abroad at internationally recognised universities throughout Europe: human medicine and dentistry in English."
        ></meta>
        <meta
          property="og:title"
          content="futuredoctor - Study medicine abroad"
        ></meta>
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta property="og:image:height" content="600"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta
          property="og:url"
          content="https://www.future-doctor.de/en/"
        ></meta>
        <meta
          property="article:modified_time"
          content="2024-02-21T11:34:21+00:00"
        ></meta>
        <meta
          property="article:publisher"
          content="https://www.facebook.com/futuredoctor.de"
        ></meta>
        <meta
          property="og:site_name"
          content="futuredoctor - Simply study medicine"
        ></meta>
        <meta
          property="og:image"
          content="https://www.future-doctor.de/wp-content/uploads/2022/10/facebook-share.jpg"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
