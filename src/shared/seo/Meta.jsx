import Head from "next/head";
import React from "react";

const Meta = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/svg/logo.svg" />

      {description ? (
        <>
          <meta name="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
        </>
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Head>
    {children}
  </>
);
export default Meta;
