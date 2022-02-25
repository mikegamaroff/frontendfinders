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
          <meta
            name="keywords"
            content={
              "Slave Princess, Britney Spears, Britney, Awakened Pictures, Free Britney, #FreeBritney, Lou Taylor, Team Con"
            }
          />
          <meta
            name="description"
            content={
              "Slave Princess - a story about freedom, unity and organized crime."
            }
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={"Slave Princess - The Film"} />
          <meta
            property="og:description"
            content={
              "Slave Princess is a story about freedom, unity and organized crime."
            }
          />
          <meta
            property="twitter:description"
            content={
              "Slave Princess is a story about freedom, unity and organized crime."
            }
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
