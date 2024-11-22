import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://tuk-cdn.s3.amazonaws.com/can-uploader/COOLEST%20logo2_0.png"
        />
        {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/COOLEST%20logo2_0.png"/> */}
        <title>Todo App</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
