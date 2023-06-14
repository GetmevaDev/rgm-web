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
      <link rel="canonical" href={twitterUrl} />
      <meta property="og:type" content="website" />
      {title && <meta name="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      {image && <meta name="description" content={description} />}

      {twitterUrl && <meta property="og:url" content={twitterUrl} />}
      {twitterUrl && <meta property="twitter:url" content={twitterUrl} />}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {twitterDomain && (
        <meta property="twitter:domain" content={twitterDomain} />
      )}
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {twitterDescription && (
        <meta name="twitter:description" content={twitterDescription} />
      )}
    </Head>
    {children}
  </>
);
export default Meta;
