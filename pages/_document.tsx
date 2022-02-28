import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Pangolin&display=swap"
            rel="stylesheet"
          />
          <meta name="keywords" content={"Frontend, react"} />
          <meta
            name="description"
            content={
              "Frontend Finders - Find a quality React UX/UI web app developer at your fingertips"
            }
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={
              "Frontend Finders - Quality Engineers for your web applications."
            }
          />
          <meta
            property="og:description"
            content={"Frontend Finders - Quality developer at your fingertips"}
          />
          <meta
            property="twitter:description"
            content={"Frontend Finders - Quality developer at your fingertips"}
          />
          <meta
            property="og:image"
            content={"https://www.slaveprincess.com/images/og2.jpg"}
          />
          <meta
            property="twitter:image"
            content={"https://www.slaveprincess.com/images/og2.jpg"}
          />
          <meta
            property="twitter:image:alt"
            content={"www.slaveprincess.com"}
          />

          <meta property="og:url" content={"http://slaveprincess.com"} />
          <meta name="twitter:card" content={"summary_large_image"}></meta>
          <meta name="twitter:site" content="http://slaveprincess.com"></meta>
          <meta name="twitter:site:id" content="@slaveprincess_"></meta>
          <meta name="twitter:creator" content="Awakened Pictures"></meta>
        </Head>
        <body className="antialiased">
          <Main />

          <NextScript />
          <script></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
