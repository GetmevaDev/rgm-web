import { Head, Html, Main, NextScript } from "next/document";

import { ThemeProvider } from "@/providers";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
