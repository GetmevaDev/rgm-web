import Head from "next/head";
import React from "react";

const Meta = ({
  title,
  description,
  children,
  twitterCard,
  twitterDomain,
  twitterUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  image,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/svg/logo.svg" />

      {description && (
        <>
          <meta name="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={twitterUrl} />

          <meta name="twitter:card" content={twitterCard} />
          <meta property="twitter:domain" content={twitterDomain} />
          <meta property="twitter:url" content={twitterUrl} />
          <meta name="twitter:title" content={twitterTitle} />
          <meta name="twitter:description" content={twitterDescription} />
          <meta name="twitter:image" content={twitterImage} />
        </>
      )}
    </Head>
    {children}
  </>
);
export default Meta;
